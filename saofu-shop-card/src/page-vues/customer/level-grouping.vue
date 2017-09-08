<template>
    <div class="page-level-grouping">
        <div class="title-page">会员分组/会员等级</div>
        <div class="tip-message">
            会员分组与会员等级功能不能同时开启，请根据自身需要选择，在会员分组和会员等级功能之间切换或修改配置信息时，
            必须点击保存配置才能生效。
        </div>
        <div class="functional-select">
            <span class="desc-text">启用功能:</span>
            <multiple-select :multiple-object="functionEnableObject" :is-single="isFunctionEnableSingle"
                             @selectedItems="getSelectedFunction"></multiple-select>
        </div>
        <div class="editing-area">
            <!-- 会员分组 -->
            <table class="member-table" v-show="enabledFunctionType === '0'">
                <thead>
                <tr class="table-header">
                    <th class="w280 first-th">会员组别名称</th>
                    <th class="w220">消费折扣</th>
                    <th class="w120">成员数量</th>
                    <th class="w80">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-tr" v-for="(group, index) in memberGroups" @blur.capture="checkData($event, index)">
                    <td>
                        <div class="group-name disabled" v-if="index === 0">{{group.name}}</div>
                        <input class="group-name" v-else v-model="group.name" name="name"
                               :class="{'error-input': group.errorMsg && group.errorMsg.name}" placeholder="请输入会员组别名称"/>
                        <div class="valid-error-info" v-show="group.errorMsg && group.errorMsg.name">
                            {{group.errorMsg ? group.errorMsg.name : ''}}
                        </div>
                    </td>
                    <td>
                        <input class="group-discount" v-model="group.discount" name="discount"
                               :class="{'error-input': group.errorMsg && group.errorMsg.discount}" placeholder="0.1～9.9"/>
                        <span class="discount-unit">折</span>
                        <div class="valid-error-info discount-error-info"  v-show="group.errorMsg && group.errorMsg.discount">
                            {{group.errorMsg ? group.errorMsg.discount : ''}}
                        </div>
                    </td>
                    <td>
                        <span class="group-amount">{{group.amount}}</span>
                    </td>
                    <td>
                        <a class="member-operate" v-if="index!==0" @click="deleteItem(group)">删除</a>
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- 会员等级 -->
            <div v-show="enabledFunctionType === '1'">
                <p class="functional-title">自动升级规则设置</p>
                <div class="functional-desc">
                    <p class="functional-desc-item">
                        1、保存设置后，会员将依照你选择的更新频率根据获取积分或充值金额升级到对应的等级，会员等级将随统计周期的重置或修改而重置；
                    </p>
                    <p class="functional-desc-item">
                        2、会员定级规则：X≤消费数据＜Y，在设置会员等级区间时，必须为连续区间；
                    </p>
                    <p class="functional-desc-item">
                        3、修改会员等级配置时，生效时间则将根据所选等级更新频率来确定。
                    </p>
                </div>
                <div class="upgrade-rule">
                    <span class="desc-text">分级规则</span>
                    <multiple-select :multiple-object="gradeRuleObject" @selectedItems="getSelectedGradeRule"
                                     :is-single="isFunctionEnableSingle">
                    </multiple-select>
                </div>
                <div class="upgrade-rule">
                    <span class="desc-text">统计时间</span>
                    <multiple-select :multiple-object="staticTimeObject" @selectedItems="getSelectedStaticTime"
                                     :is-single="isFunctionEnableSingle">
                    </multiple-select>
                </div>
                <div class="upgrade-rule">
                    <span class="desc-text">等级更新频率</span>
                    <multiple-select :multiple-object="gradeUpdateObject" @selectedItems="getSelectedGradeUpdate"
                                     :is-single="isFunctionEnableSingle">
                    </multiple-select>
                </div>
                <p class="functional-title">会员等级设置</p>
                <table class="member-table">
                    <thead>
                    <tr class="table-header">
                        <th class="w240 first-th">等级名称</th>
                        <th class="w380">等级区间({{gradeRule == '0' ? '分' : '元'}})</th>
                        <th class="w160">折扣</th>
                        <th class="w80">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="table-tr" v-for="(item, index) in memberGrades" @blur.capture="checkData($event, index)">
                        <td>
                            <input type="text" class="member-name" v-model="item.name" name="name"
                                   :class="{'error-input': item.errorMsg && item.errorMsg.name}"
                                   placeholder="请输入会员等级名称"/>
                            <div class="valid-error-info" v-show="item.errorMsg && item.errorMsg.name">
                                {{item.errorMsg ? item.errorMsg.name : ''}}
                            </div>
                        </td>
                        <td>
                            <div class="member-grade-start disabled">{{item.gradeStart}}</div>
                            -
                            <div class="member-grade-end disabled" v-if="index === (memberGrades.length - 1)">{{item.gradeEnd}}</div>
                            <input type="text" class="member-grade-end" v-else v-model="item.gradeEnd" name="gradeEnd"
                                   :class="{'error-input': item.errorMsg && item.errorMsg.gradeEnd}" maxlength="8"
                                   placeholder="请输入正整数"/>
                            <div class="valid-error-info gradeEnd-error-info" v-show="item.errorMsg && item.errorMsg.gradeEnd">
                                {{item.errorMsg ? item.errorMsg.gradeEnd : ''}}
                            </div>
                        </td>
                        <td>
                            <input type="text" class="member-discount" v-model="item.discount" name="discount"
                                   :class="{'error-input': item.errorMsg && item.errorMsg.discount}"
                                   placeholder="0.1～9.9"/>
                            <div class="valid-error-info discount-error-info" v-show="item.errorMsg && item.errorMsg.discount">
                                {{item.errorMsg ? item.errorMsg.discount : ''}}
                            </div>
                        </td>
                        <td>
                            <a class="member-operate" v-if="index!==0" @click="deleteItem(item)">删除</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn add-btn" v-text="addBtnText" @click="addItem" v-if="isShowAddBtn"></div>
        </div>
        <div class="discount-range-apply">
            <span class="desc-text">折扣适用范围：</span>
            <multiple-select :multiple-object="discountRangeObject" @selectedItems="getSelectedDiscountRange">
            </multiple-select>
            <i class="icon-question question-online-pay" v-tip="{text: tipMsg}"></i>
        </div>
        <div class="operate-btns">
            <div class="btn green-btn" @click="saveConfig" :class="{'disabled-btn': !isValid()}">保存配置</div>
            <div class="btn" @click="cancelConfig">取消</div>
        </div>
        <platform-dialog :dialog-type="dconfig.type" :dialog-message="dconfig.message"
                         :dialog-icon="dconfig.icon" :is-show="dconfig.isShow" @close="closeDialogCallback"
                         v-if="dconfig.isShow" :ok-btn-text="dconfig.okBtnText"></platform-dialog>
    </div>
</template>

<style lang="less">
    .page-level-grouping {
        padding: 0 10px 40px 10px;
        background-color: #fff;
        text-align: initial;
        .title-page {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #e7eaec;
            font-size: 16px;
            font-weight: bold;
            color: #676a6c;
        }
        .tip-message {
            height: 40px;
            line-height: 40px;
            padding-left: 10px;
            margin: 20px 0;
            border: 1px solid #FFCC66;
            color: #666;
            background-color: #FDF9E5;
        }
        .functional-select {
            margin-bottom: 20px;
        }
        .desc-text {
            margin-right: 10px;
            font-size: 14px;
            vertical-align: middle;
        }
        .editing-area {
            padding: 16px;
            background-color: #F4FBFA;
        }
        .table-header {
            height: 40px;
            line-height: 40px;
            background-color: #F2F2F2;
        }
        .table-tr {
            height: 60px;
            border-bottom: 1px solid #e5e6e7;;
            background-color: #fff;
        }
        .member-table {
            table-layout: fixed;
            border-collapse: collapse;
            td, th {
                text-align: left;
            }
            tr td{
                &:first-child {
                    padding-left: 12px;
                }
            }
            input {
                width: 180px;
                height: 30px;
                padding-left: 8px;
                border: 1px solid #e5e6e7;
                color: #333;
                outline: none;
                &:focus {
                    border-color: #1ab394;
                }
                &::-webkit-input-placeholder {
                    color: #D7D7D7;
                }
                &::-moz-placeholder {
                    color: #D7D7D7;
                }
                &:-ms-input-placeholder {
                    color: #D7D7D7;
                }
                & ::placeholder {
                    color: #D7D7D7;
                }
            }
            .first-th {
                padding-left: 12px;
            }
            .member-discount {
                width: 140px;
            }
            .error-input {
                border: 1px solid red;
            }
            .group-name {
                width: 240px;
            }
            .group-discount {
                width: 140px;
            }
            .group-amount {
                width: 80px;
            }
            .discount-unit {
                margin-left: 8px;
            }
            .member-grade-end {
                display: inline-block;
                width: 180px;
                vertical-align: middle;
            }
        }
        .disabled {
            height: 30px;
            line-height: 30px;
            padding-left: 8px;
            border: 1px solid #e7eaec;
            background-color: #F2F2F2;
            text-align: left;
        }
        .member-grade-start {
            width: 160px;
            display: inline-block;
            vertical-align: middle;
        }
        .member-operate {
            width: 60px;
            color: #1ab394;
            text-decoration: none;
            cursor: pointer;
        }
        .w380 {
            width: 380px;
        }
        .w240 {
            width: 240px;
        }
        .w280 {
            width: 280px;
        }
        .w220 {
            width: 220px;
        }
        .w120 {
            width: 120px;
        }
        .w160 {
            width: 160px;
        }
        .w80 {
            width: 80px;
        }
        .valid-error-info {
            line-height: 1;
            margin-top: 2px;
            font-size: 12px;
            color: red;
        }
        .discount-error-info {
            width: 152px;
        }
        .gradeEnd-error-info {
            margin-left: 172px;
        }
        .btn {
            display: inline-block;
            width: 82px;
            height: 38px;
            line-height: 36px;
            padding: 0;
            border: 1px solid #e5e6e7;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            color: #666;
            background-color: #fff;
            text-align: center;
            cursor: pointer;
        }
        .add-btn {
            margin: 8px 0;
            border-color: #1ab394;
            color: #1ab394;
        }
        .green-btn {
            margin-right: 20px;
            color: #fff;
            background-color: #1ab394;
        }
        .disabled-btn {
            background-color: gray;
        }
        .discount-range-apply {
            margin: 20px 0;
        }
        .grade-rule-select-icon {
            width: 22px;
            height: 22px;
            line-height: 22px;
            border: 2px solid #1ab394;
            -webkit-border-radius: 11px;
            -moz-border-radius: 11px;
            border-radius: 11px;
            text-align: center;
            &:after {
                content: '';
                display: inline-block;
                width: 12px;
                height: 12px;
                margin: 3px auto;
                -webkit-border-radius: 6px;
                -moz-border-radius: 6px;
                border-radius: 6px;
                background-color: #1ab394;
            }
        }
        .functional-title {
            margin-bottom: 16px;
            padding-left: 12px;
            border-left: 6px solid #1ab394;
            font-size: 16px;
            font-weight: bolder;
        }
        .upgrade-rule {
            line-height: 42px;
            .desc-text {
                display: inline-block;
                width: 90px;
            }
            .multiple-select {
                display: inline-block;
                margin-left: 10px;
                vertical-align: middle;
            }
        }
        .functional-desc {
            font-size: 14px;
            color: #FF9900;
        }
        .question-online-pay {
            display: inline-block;
            margin-left: 10px;
            vertical-align: middle;
            cursor: pointer;
        }
        .icon-discount-range, .icon-discount-range-selected {
            width: 22px;
            height: 22px;
            background: url(../images/green.png) no-repeat;
        }
        .icon-discount-range {
            background-position: 0 0;
        }
        .icon-discount-range-selected {
            background-position: -48px 0;
        }
    }
</style>

<script>
    var multiple = require('../components/multiple-select'),
        dialog = require('../components/dialog/index'),
        tip = require('../directives/tip'),
        errArray = [],
        interfaceErrCount = 0;

    ctx = '/saofu-shop-card';
    function openDialog(context, config) {
        extend(context.dconfig, config);
        context.dconfig.okBtnText = config.okBtnText;
        context.dconfig.cancelBtnText = config.cancelBtnText;
        context.closeDialogCallback = config.cb;
    }
    function extend(target, source) {
        var p;

        for(p in source){
            if(source.hasOwnProperty(p)){
                target[p] = source[p];
            }
        }
        return target;
    }
    function checkAllData(context) {
        var tabs = document.querySelectorAll('.member-table'),
            trs = [],
            evt = document.createEvent('HTMLEvents');

        Array.prototype.slice.apply(tabs).some(function(item) {
            if(getComputedStyle(item).display !== 'none'){
                trs = item.querySelectorAll('tr');
                return true;
            }
        });
        evt.initEvent( 'blur', true, false );
        Array.prototype.slice.apply(trs).forEach(function(item) {
            //手动触发事件
            item.dispatchEvent(evt);
        });
    }
    function transformMemberGroup(obj) {
        return {
            id: obj.id,
            name: obj.groupName.trim(),
            discount: obj.discount,
            amount: obj.memberCount
        };
    }
    function restoreMemberGroup(obj) {
        var o = {};
        if("id" in obj){
            o.id = obj.id;
        }
        o.groupName = obj.name.trim();
        o.memberCount = parseInt(obj.amount, 10);
        o.discount = parseFloat(obj.discount, 10);

        return o;
    }
    function transformMemberGrade(obj) {
        return {
            id: obj.id,
            name: obj.levelName.trim(),
            gradeStart: obj.minValue,
            gradeEnd: obj.maxValue,
            discount: obj.discount
        };
    }
    function restoreMemberGrade(obj) {
        var o = {};
        if("id" in obj){
            o.id = obj.id;
        }
        o.levelName = obj.name.trim();
        o.minValue = parseInt(obj.gradeStart, 10);
        o.maxValue = parseFloat(obj.gradeEnd, 10);
        o.discount = parseFloat(obj.discount, 10);

        return o;
    }
    function isEmpty(val) {
        if(val === void 0 || val === null){
            return true;
        }
        if(typeof val === 'string' && val.trim() === ''){
            return true;
        }
        return false;
    }
    function init(context) {
        var self = context,
            data,
            tmp;

        self.$http.get(ctx + '/member/query/group_level')
            .then(function(res) {
                if(res.body.success){
                    data = res.body.attach;

                    self.originMemberGroups = [];
                    self.originMemberGrades = [];


                    data.memberGroups.length && self.memberGroups.pop();
                    data.memberGroups.forEach(function(item, index, arr) {
                        tmp = transformMemberGroup(item);
                        tmp.groupId = index;
                        self.originMemberGroups.push(tmp);
                        self.memberGroups.push(tmp);
                    });

                    data.memberLevel.datas.length && self.memberGrades.pop();
                    data.memberLevel.datas.forEach(function(item, index){
                        tmp = transformMemberGrade(item);
                        tmp.gradeId = index;
                        self.originMemberGrades.push(tmp);
                        self.memberGrades.push(tmp);
                    });

                    if(data.allowedScope === 'ONLINE'){
                        self.$set(self.discountRangeObject.list[1], 'selected', true)
                    }
                    self.enabledFunctionType = data.enableFunction.toString();
                    self.originEnabledFunctionType = data.enableFunction.toString();
                    self.functionEnableObject.list.forEach(function(item, index, arr) {
                        if(item.id == self.enabledFunctionType){
                            self.$set(self.functionEnableObject.list[index], 'selected', true);
                        }
                    });
                    return {
                        gradeRule: data.memberLevel.levelRule,
                        staticTime: data.memberLevel.statTime,
                        gradeUpdateFrequence: data.memberLevel.levelUpdateFrequency
                    };
                }else{
                    if(interfaceErrCount <= 3){
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-warn',
                            message: '系统繁忙，稍后为您重试!',
                            isShow: true
                        });
                        setTimeout(function() {
                            self.dconfig.isShow = false;
                            init(context);
                        }, 1500);
                    }else{
                        openDialog(self, {
                            type: 'tipAlert',
                            icon: 'icon-warn',
                            message: '系统累了，请稍后刷新页面试试~',
                            isShow: true,
                            cb: sysErrHandle
                        });
                    }
                    interfaceErrCount++;
                }
            }).then(function(rs) {
            self.$http.get(ctx + '/member/show/level_option')
                .then(function(res) {
                    var level = [],
                        statTime = [],
                        levelUpdate = [];

                    if(res.body.success){
                        data = res.body.attach;
                        data.levelRule.forEach(function(item, index, arr) {
                            tmp = {
                                id: item.key,
                                text: item.value
                            };
                            if(item.key == rs.gradeRule){
                                tmp.selected = true;
                            }
                            level.push(tmp);
                        });
                        self.gradeRuleObject.list = level;
                        data.statTime.forEach(function(item, index, arr) {
                            tmp = {
                                id: item.key,
                                text: item.value
                            };
                            if(item.key == rs.staticTime){
                                tmp.selected = true;
                            }
                            statTime.push(tmp);
                        });
                        self.staticTimeObject.list = statTime;
                        data.levelUpdateFrequency.forEach(function(item, index, arr) {
                            tmp = {
                                id: item.key,
                                text: item.value
                            };
                            if(item.key == rs.gradeUpdateFrequence){
                                tmp.selected = true;
                            }
                            levelUpdate.push(tmp);
                        });
                        self.gradeUpdateObject.list = levelUpdate;
                    }
                });
        });
        function sysErrHandle() {
            context.dconfig.isShow = false;
        }
    }
    module.exports = {
        data: function() {
            return {
                //启用功能设置为单选
                isFunctionEnableSingle: true,
                //存储启用的功能类型
                enabledFunctionType: '',
                //存储折扣适用范围
                discountRangesApply: '',
                memberGroups: [
                    //获取当前用户的会员分组信息时需要给分组数据每条记录加上groupId:index字段
                    {groupId: 0, name: '默认分组', discount: '', amount: ''}
                ],
                memberGrades: [
                    {gradeId: 0, name: '', gradeStart: 0, gradeEnd: '', discount: ''}
                ],
                deleteIds: [],
                discountRangeObject: {
                    iconClass: 'icon-discount-range',
                    iconActiveClass: 'icon-discount-range-selected',
                    list: [
                        {id: '0', text: '设备端核销适用', selected: true},
                        {id: '1', text: '在线支付直接适用'}
                    ]
                },
                functionEnableObject: {
                    list: [
                        {id: '0', text: '会员分组'},
                        {id: '1', text: '会员等级'}
                    ]
                },
                gradeRuleObject: {
                    iconClass: '',
                    iconActiveClass: 'grade-rule-select-icon',
                    list: [
                        /*{id: '0', text: '获取积分', selected: true},
                         {id: '1', text: '充值金额'}*/
                    ]
                },
                staticTimeObject: {
                    iconClass: '',
                    iconActiveClass: 'grade-rule-select-icon',
                    list: [
                        /*{id: '0', text: '历史累计', selected: true},
                         {id: '1', text: '本年度'},
                         {id: '2', text: '近一年'}*/
                    ]
                },
                gradeUpdateObject: {
                    iconClass: '',
                    iconActiveClass: 'grade-rule-select-icon',
                    list: [
                        /*{id: '0', text: '实时', selected: true},
                         {id: '1', text: '每天'},
                         {id: '2', text: '每周末'},
                         {id: '3', text: '每月末'}*/
                    ]
                },
                dconfig: {
                    type: '',
                    icon: '',
                    message: '',
                    isShow: false
                },
                closeDialogCallback: null,
                curDeleteItem: null,
                isShowAddBtn: true,
                gradeRule: '',
                staticTime: '',
                gradeUpdateFrequence: '',
                tipMsg: '勾选"在线支付直接使用"项后，会员可直接在支付时自主选择使用会员折扣抵扣部分支付金额。',
                isFirstLoad: true
            };
        },
        methods: {
            isValid: function() {
                var flag = true;
                errArray.some(function(item) {
                    if(item !== void 0){
                        flag = false;
                        return true;
                    }
                });
                return flag;
            },
            saveConfig: function() {
                var self = this,
                    effectDateMap = {
                        0: '开启会员等级功能后，新配置将实时生效，且会员分组功能将自动关闭，会员数量较多时，可能' +
                        '会有部分会员数据有延迟。是否开启？',
                        1: '开启会员等级功能后，新配置将于明天生效，且会员分组功能将同时自动关闭，是否开启？',
                        2: '开启会员等级功能后，新配置将于本周末生效，且会员分组功能将同时自动关闭，是否开启？',
                        3: '开启会员等级功能后，新配置将于本月末生效，且会员分组功能将同时自动关闭，是否开启？'
                    },
                    message;

                self.isValid() && checkAllData();
                if(!self.isValid()){
                    return;
                }
                if(this.enabledFunctionType !== this.originEnabledFunctionType) {
                    message = this.enabledFunctionType === '0' ?
                        '开启会员分组功能后会员等级功能将自动关闭，是否开启？' : effectDateMap[self.gradeUpdateFrequence];
                    openDialog(self, {
                        type: 'tipConfirm',
                        icon: 'icon-warn',
                        message: message,
                        isShow: true,
                        okBtnText: '确认开启',
                        cb: function (flag) {
                            self.dconfig.isShow = false;
                            if(flag) {
                                setTimeout(function(){
                                    self.saveMember();
                                }, 0);
                            }
                        }
                    });
                }else {
                    self.saveMember();
                }
            },
            cancelConfig: function() {
                var self = this;

                openDialog(self, {
                    type: 'tipConfirm',
                    icon: 'icon-warn',
                    message: '确定放弃已编辑的内容？',
                    isShow: true,
                    cb: self.cancelOperate
                });
            },
            saveMember: function() {
                var self = this,
                    memberData = {
                        enableFunction: parseInt(self.enabledFunctionType, 10),
                        //deleteIds: self.deleteIds,
                        //获取所选的折扣适用范围
                        allowedScope: self.discountRangesApply.indexOf('1') > -1 ? 'ONLINE' : 'OFFLINE',
                        datas: []
                    },
                    url = ctx;

                if(this.enabledFunctionType === '0') {
                    url += '/member/save/group_config';
                    self.memberGroups.forEach(function(item, index, arr) {
                        memberData['datas'].push(restoreMemberGroup(item));
                    });
                }else{
                    url += '/member/save/level_config';
                    self.memberGrades.forEach(function(item, index, arr){
                        memberData['datas'].push(restoreMemberGrade(item));
                    });
                    memberData.levelRule = parseInt(self.gradeRule, 10);
                    memberData.statTime = parseInt(self.staticTime, 10);
                    memberData.levelUpdateFrequency = parseInt(self.gradeUpdateFrequence, 10);
                }
                self.$http.post(url, JSON.stringify(memberData)).then(function(res) {
                    if(res.body.success){
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-success',
                            message: '保存成功',
                            isShow: true
                        });
                        //保存成功之后清空要删除的会员分组/等级id
                        self.deleteIds = [];
                    }else{
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-err',
                            message: res.body.message,
                            isShow: true
                        });
                    }
                    setTimeout(function() {
                        self.dconfig.isShow = false;
                        window.location.reload();
                    }, 2000);
                });
            },
            cancelOperate: function(flag) {
                this.dconfig.isShow = false;
                if(!flag){
                    return;
                }
                if(this.enabledFunctionType === '0') {
                    this.memberGroups = this.originMemberGroups;
                }else{
                    this.memberGrades = this.originMemberGrades;
                }
            },
            getSelectedFunction: function(items) {
                this.enabledFunctionType = items.id;
                if((items.id === '0' && this.memberGroups.length < 50) ||
                    (items.id === '1' && this.memberGrades.length < 20)){
                    this.isShowAddBtn = true;
                }
                errArray = [];
                !this.isFirstLoad && this.$nextTick(function() {
                    checkAllData();
                });
                this.isFirstLoad = false;
            },
            getSelectedDiscountRange: function(items) {
                this.discountRangesApply = items.reduce(function(prev, cur, index, arr) {
                    return prev.toString().trim() === '' ? cur.id.toString() : prev + ',' + cur.id;
                }, '');
                if(this.discountRangesApply.indexOf('0') === -1){
                    this.$set(this.discountRangeObject.list[0], 'selected', true);
                }
            },
            addItem: function() {
                var obj = {};

                if(this.enabledFunctionType === '0'){
                    if(this.memberGroups.length >= 50){
                        //会员分组最多能设置50个分组
                        this.isShowAddBtn = false;
                        return;
                    }
                    //会员分组
                    obj.groupId = this.memberGroups.length;
                    obj.name = '';
                    obj.discount = '';
                    obj.amount = '';
                    this.memberGroups.push(obj);
                }else{
                    if(this.memberGrades.length >= 20){
                        //会员等级最多设置20个
                        this.isShowAddBtn = false;
                        return;
                    }
                    obj.gradeId = this.memberGrades.length;
                    obj.name = '';
                    obj.gradeStart = this.memberGrades[this.memberGrades.length - 1].gradeEnd;
                    obj.gradeEnd = '';
                    obj.discount = '';
                    this.memberGrades.push(obj);
                }
            },
            deleteItem: function(item) {
                var amount = item.amount,
                    self = this,
                    response;

                this.curDeleteItem = item;

                if(this.enabledFunctionType === '0'){
                    if(!("id" in item)){
                        self.deleteMember(true);
                        return;
                    }
                    self.$http.post(ctx + '/member/check/group_delete', JSON.stringify({groupId: item.id}))
                        .then(function(res) {
                            response = res.body;
                            if(response.success){
                                if(response.code == 1001){
                                    openDialog(self, {
                                        type: 'tipAlert',
                                        icon: 'icon-warn',
                                        message: '该会员分组内有' + response.attach.num + '个未绑定会员请先完成绑定或删' +
                                        '除此部分会员后再删除分组',
                                        isShow: true,
                                        okBtnText: '前往绑定',
                                        cb: self.bindMember
                                    });
                                }else if(response.code == 1002){
                                    openDialog(self, {
                                        type: 'warnConfirm',
                                        icon: 'icon-err',
                                        message: '当前分组已存在会员，删除后组内会员将会移动' +
                                        '到默认分组，您确定要继续操作吗？',
                                        isShow: true,
                                        cb: self.deleteMember
                                    });
                                }else if(response.code == 1003){
                                    openDialog(self, {
                                        type: 'warnConfirm',
                                        icon: 'icon-err',
                                        message: '当前分组不存在会员，您确定要继续操作吗？',
                                        isShow: true,
                                        cb: self.deleteMember
                                    });
                                }
                            }else{
                                openDialog(self, {
                                    type: 'autoClose',
                                    icon: 'icon-err',
                                    message: response.message,
                                    isShow: true
                                });
                                setTimeout(function () {
                                    self.dconfig.isShow = false;
                                }, 2000);
                            }
                        });
                }else{
                    if(!("id" in item)){
                        self.deleteMember(true);
                        return;
                    }
                    openDialog(self, {
                        type: 'warnConfirm',
                        icon: 'icon-err',
                        message: '会员等级删除后将无法恢复，您确定要继续操作吗？',
                        isShow: true,
                        cb: self.deleteMember
                    });
                }
            },
            deleteMember: function(flag){
                //删除会员分组/等级
                var id = this.curDeleteItem.groupId || this.curDeleteItem.gradeId,
                    l;
                if(flag){
                    if(this.enabledFunctionType === '0'){
                        //删除会员分组
                        l = this.memberGroups.length;
                        while(l--){
                            if(this.memberGroups[l].groupId == id){
                                this.memberGroups.splice(l, 1);
                                break;
                            }
                        }
                    }else{
                        l = this.memberGrades.length;
                        //删除会员等级时需要保持会员等级区间连续
                        while(l--){
                            if(this.memberGrades[l].gradeId == id){
                                this.memberGrades.splice(l, 1);
                                break;
                            }
                        }
                        if((this.memberGrades.length - 1) >= id){
                            this.memberGrades[id].gradeStart = this.memberGrades[id-1].gradeEnd;
                        }
                    }
                    if(this.curDeleteItem.id){
                        //删除已经存在的数据
                        this.deleteIds.push(this.curDeleteItem.id);
                    }
                }
                this.dconfig.isShow = false;
            },
            bindMember: function(flag){
                //关闭对话框
                this.dconfig.isShow = false;
                //删除会员分组时，如果此分组下有未绑定的会员则让先绑定
                if(flag){
                    location.href = ctx + '/customer/customer-import';
                }
            },
            getSelectedGradeRule: function(items) {
                this.gradeRule = items.id;
            },
            getSelectedStaticTime: function(items) {
                this.staticTime = items.id;
            },
            getSelectedGradeUpdate: function(items) {
                this.gradeUpdateFrequence = items.id;
            },
            checkData: function(evt, index){
                var item,
                    validMap,
                    tmp = {},
                    self = this;

                item = self.enabledFunctionType === '0' ? self.memberGroups[index] : self.memberGrades[index];
                validMap = {
                    name: function() {
                        var keys;

                        if(self.enabledFunctionType === '0'){
                            if(isEmpty(item.name)){
                                tmp.name = '会员组别名称不能为空!'
                            }else if(item.name.trim().length > 9){
                                tmp.name = '最多可输入9个字符!';
                            }else{
                                self.memberGroups.some(function(element, idx) {
                                    if(element.groupId === item.groupId){
                                        return false;
                                    }
                                    if(element.name.trim() === item.name){
                                        tmp.name = '会员组别名称不可重复!';
                                    }else{
                                        if(self.memberGroups[idx].errorMsg){
                                            self.$delete(self.memberGroups[idx].errorMsg, 'name');
                                            keys = Object.keys(self.memberGroups[idx].errorMsg);
                                            if(keys.length === 0){
                                                delete errArray[idx];
                                            }
                                        }
                                    }
                                });
                            }
                        }else{
                            if(isEmpty(item.name)){
                                tmp.name = '等级名称不能为空!'
                            }else if(item.name.trim().length > 10){
                                tmp.name = '最多可输入10个字符!';
                            }else{
                                self.memberGrades.some(function(element, idx) {
                                    if(element.gradeId === item.gradeId){
                                        return false;
                                    }
                                    if(element.name.trim() === item.name){
                                        tmp.name = '等级名称不可重复!';
                                    }else{
                                        if(self.memberGrades[idx].errorMsg){
                                            self.$delete(self.memberGrades[idx].errorMsg, 'name');
                                            keys = Object.keys(self.memberGrades[idx].errorMsg);
                                            if(keys.length === 0){
                                                delete errArray[idx];
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    },
                    discount: function() {
                        if(!isEmpty(item.discount) && !/^(0\.[1-9]|[1-9]\.\d|[1-9])$/.test(item.discount.toString().trim())){
                            tmp.discount = '折扣范围为0.1～9.9，为空不打折，小数点后保留一位!';
                        }
                    },
                    gradeEnd: function() {
                        if(self.enabledFunctionType === '0' || index === (self.memberGrades.length - 1)){
                            return;
                        }
                        if(isEmpty(item.gradeEnd)){
                            tmp.gradeEnd = '等级右区间不能为空!';
                        }else if(!/^[1-9]\d*$/.test(item.gradeEnd.toString().trim()) ||
                            parseInt(item.gradeEnd, 10) < parseInt(item.gradeStart, 10)){
                            tmp.gradeEnd = '请输入大于左边的正整数';
                        }else{
                            if(self.memberGrades[index + 1]){
                                self.memberGrades[index + 1].gradeStart = self.memberGrades[index].gradeEnd;
                            }
                        }
                    }
                };
                Object.keys(validMap).forEach(function(p) {
                    validMap[p]();
                });
                if(self.enabledFunctionType === '1') {
                    if (isEmpty(self.gradeRule) || isEmpty(self.staticTime) || isEmpty(self.gradeUpdateFrequence)) {
                        errArray["gradeRule"] = "gradeRule";
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-warn',
                            message: '请设置自动升级的各种规则!',
                            isShow: true
                        });
                        setTimeout(function () {
                            self.dconfig.isShow = false;
                        }, 2000);
                    }else{
                        delete errArray["gradeRule"];
                    }
                }
                if(Object.keys(tmp).length){
                    errArray[index] = index;
                    this.$set(item, 'errorMsg', tmp);
                    return;
                }else{
                    delete errArray[index];
                    this.$delete(item, 'errorMsg');
                }
            }
        },
        computed: {
            addBtnText: function() {
                return this.enabledFunctionType === '0' ? '添加分组' : '添加等级';
            }
        },
        components: {
            'multipleSelect': multiple,
            'platformDialog': dialog
        },
        created: function() {
            var self = this;
            init(self);
        }
    };
</script>