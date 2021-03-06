#!/bin/bash
scanner_root=""
changes_dir_name="changes"
scanner_dir=""
changes_dir=""
previous_dir=""
rs_filename="changed_files"

function init {
    read -p "输入要进行增量更新的项目根目录路径:" dir;
    scanner_root=$dir;
    if [ ! -d $scanner_root ];then
        echo "$scanner_root is not directory!"
        exit 1;
    fi
    scanner_dir="${scanner_root}/src/dist"
    changes_dir="${scanner_root}/src/${changes_dir_name}"
    previous_dir="${scanner_root}/dist"
}

function generate_changed_file {
    init;
    local previous_file="previous"
	local dir_name
	local sign="-"
	local p_index
	local p_name
	local c_index
	local c_name
	local modifier_index
    local modifier
	local flag=0
    local extension_name
    local is_previous_file_empty
    local previous_file_arr
    local j
	
    >$rs_filename
    echo "$previous_dir";
    #generate previous file
    if [ ! -e $previous_dir ];then
        mkdir $previous_dir
    fi
    find $previous_dir -fprint $previous_file
    previous_file_arr=($(cat $previous_file))
    echo "length:${#previous_file_arr[@]}"

	if [ -s "$previous_file" ];then
        for file in $(find $scanner_dir);do
            if [ -d $file ];then
                continue
            fi
            
            extension_name=$(basename $file)
            extension_name=${extension_name##*.}
            if [[ "$extension_name" == "html" || "$extension_name" == "json" ]];then
                echo "modify:"$file >>$rs_filename
                continue
            fi
            
            echo "正在处理文件====>"$file

            j=0
            while read line;do
                j=$((j+1))

                if [ -d $line ];then
                    continue
                fi
                p_index=$(expr index $line $sign)
                p_name=${line:p_index}
                
                c_index=$(expr index $file $sign)
                c_name=${file:c_index}

                if [ "$p_name" == "$c_name" ];then
                    flag=1

                    #删除数组中的元素
                    unset previous_file_arr[$((j-1))]

                    #此处文件路径的比较需要注意下!!
                    if [ ${file/$scanner_dir/} == ${line/$previous_dir/} ];then
                        break
                    else
                        echo "modify:"$file >>$rs_filename
                    fi
                    break
                fi
            done <$previous_file
            
            if [ $flag -eq 0 ];then
                echo "add:"$file >>$rs_filename
            else
                flag=0
            fi
        done
        
        #判断数组的长度是否大于0
        if [ ${#previous_file_arr[@]} -gt 0 ];then
            for i in ${previous_file_arr[@]};do
                if [ ! -d $i ];then
                    extension_name=$(basename $i)
                    extension_name=${extension_name##*.}
                    if [[ "$extension_name" != "html" && "$extension_name" != "json" ]];then
                        echo "delete:"$i >>$rs_filename
                    fi
                fi
            done
        fi
    fi
    
    is_previous_file_empty=$?
    #清除previous文件内容
    rm $previous_file
    
    if [ $is_previous_file_empty -ne 0 ];then
        for file in $(find $scanner_dir);do
            if [ -d $file ];then
                continue
            else
                echo "add:"$file >>$rs_filename
            fi
        done
    fi
    
    if [ -s $rs_filename ];then
        #清理目录内容
        rm -r "$changes_dir"

        echo "生成change files list成功!修改的文件在$changes_dir目录下"
        echo "change files list如下:"
        cat -n $rs_filename
        for cfile in $(cat $rs_filename);do
            modifier_index=$(expr index $cfile ":")
            modifier=${cfile:0:(modifier_index-1)}
            if [ $modifier == "delete" ];then
                continue
            fi
            dir_name=$(dirname $cfile)
            #将changed file输出到对应的change目录下
            dir_name=${dir_name/dist/$changes_dir_name}
            #除去路径前面的modifier(修饰符)
            dir_name=${dir_name:modifier_index}

            if [ ! -d $dir_name ];then
                mkdir -p $dir_name
            fi
            cp ${cfile:modifier_index} $dir_name
        done
        if [ $? -eq 0 ];then
            read -p "需要把发生改变的文件增量更新到$previous_dir目录下吗？(如果需要请输入y)" select
            if [ "$select" == "y" ];then
                increment_update 
            else
                exit
            fi
        fi
    else
        test -d $changes_dir && rm -r $changes_dir
        echo "与前一个版本相比没有文件被修改过!"
    fi
}

function increment_update {
    local modifier_index
    local index
    local modifier
    local dir_name
    local base_name
    local del_file

    #backup 需要增量更新的目标目录
    cp -r $previous_dir "${previous_dir}_backup"
    cp -r $changes_dir/** $previous_dir
   
    #删除目标目录中发生修改的文件的上一个版本文件
    for cfile in $(cat $rs_filename);do
        modifier_index=$(expr index $cfile ":")
        
        modifier=${cfile:0:(modifier_index-1)}
        if [ $modifier == "add" ];then
            continue
        elif [ $modifier == "delete" ];then
            del_file=${cfile:modifier_index}
            rm $del_file
            continue
        elif [ $modifier == "modify" ];then
            base_name=$(basename $cfile)
            index=$(expr index $base_name "-")
            base_name=${base_name:index}
            dir_name=$(dirname $cfile)
            dir_name=${dir_name/src/}

            #删除目录路径前面的modifier
            dir_name=${dir_name:modifier_index}
            
            file=$(find $dir_name -regex .*$base_name$)
            if [ $? -eq 0 ];then
                for f in $file;do
                    if [ $(basename $f) != $(basename $cfile) ];then
                        rm $f
                    fi
                done
            fi
        
        fi
    done

    if [[ $? == 0 ]];then
        echo "增量更新改变的文件成功!"
        rm -r "${previous_dir}_backup"
        exit
    fi

}

generate_changed_file
