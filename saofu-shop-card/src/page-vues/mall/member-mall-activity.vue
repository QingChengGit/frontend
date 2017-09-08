<template>
    <div class="page-mall-activity">
        <div class="query-area">
            <div class="query-item">
                <span class="query-text">活动名称：</span>
                <input type="text" class="yunnex-input activity-name" v-model="activityName"/>
            </div>
            <div class="query-item">
                <span class="query-text">活动类型：</span>
                <yunnex-select v-model="activityType" :source-data="activityTypeData" :select-title="selectTitle">
                </yunnex-select>
            </div>
            <div class="query-item">
                <span class="query-text">活动状态：</span>
                <yunnex-select v-model="activityStatus" :source-data="activityStatusData" :select-title="selectTitle">
                </yunnex-select>
            </div>
            <div class="activity-btn query-btn green-btn" @click="queryActivityByCondition">查询</div>
        </div>
        <div class="add-activity-area">
            <div class="activity-btn green-btn" @click="createActivity">新建兑换</div>
            <div class="desc-message">下架及过期的内容将不会在微信积分商城展示</div>
        </div>
        <yunnex-table :table-titles="tableTitles" :table-data="tableList">
        </yunnex-table>
        <yunnex-pagination :data-count="dataCount" :page-size="pageSize" :now-page="curPage"
                           @change="handlePageChange">
        </yunnex-pagination>
        <yunnex-dialog :dialog-conf="conf"></yunnex-dialog>
        <yunnex-pop :dialog-config="popConfig">
            <div slot="pop-content" class="pop-content-wrap">
                <p class="tip-text">该活动兑换余量为0，无法恢复兑换</p>
                <span>请添加兑换数量：</span>
                <input type="text" class="yunnex-input" v-model="activityAmount"/>
                <div class="error-msg" v-show="errorInfo.activityAmount">{{errorInfo.activityAmount}}</div>
                <div class="operate-btn-area">
                    <div class="yunnex-btn green-btn" @click="doRecoveryActivity">保存并恢复</div>
                    <div class="yunnex-btn" @click="closePop">取消</div>
                </div>
            </div>
        </yunnex-pop>
    </div>
</template>

<style lang="less">
    .page-mall-activity {
        position: relative;
        padding: 26px;
        background-color: #fff;
        .query-item {
            display: inline-block;
            margin-right: 40px;
            margin-bottom: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
        .query-text {
            margin-right: 10px;
            font-size: 12px;
            color: #676a6c;
            vertical-align: middle;
        }
        .activity-name {
            width: 228px;
        }
        .activity-btn {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 20px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            color: white;
            cursor: pointer;
        }
        .add-activity-area {
            position: relative;
            margin: 20px 0;
        }
        .desc-message {
            position: absolute;
            right: 0;
            top: 50%;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            transform: translate(0, -50%);
            font-size: 12px;
            color: #d3d3d3;
        }
        .activity-img {
            width: 56px;
            height: 56px;
            vertical-align: middle;
        }
        .activity-name-text {
            display: inline-block;
            width: 100px;
            margin-left: 8px;
            -ms-word-wrap: break-word;
            word-wrap: break-word;
            vertical-align: middle;
        }
        .activity-status-text {
            padding-left: 20px;
        }
        .yunnex-cell-wrap {
            .yunnex-select-component {
                width: 100px;
                .selected-text {
                    border: none;
                }
            }
        }
        .edit-link {
            color: #1ab394;
            vertical-align: middle;
        }
        .move-gray-icon, .move-green-icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            margin-left: 8px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
        }
        .move-gray-icon {
            background-color: #C9C9C9;
        }
        .move-green-icon {
            background-color: #1ab394;
        }
        .yunnex-table-component {
            margin-bottom: 60px;
        }
        .pagination-component {
            position: absolute;
            bottom: 20px;
            right: 0;
        }
        .pop-content-wrap {
            padding: 20px;
        }
        .tip-text {
            margin-bottom: 10px;
            font-size: 12px;
            color: #676a6c;
        }
        .error-msg {
            margin-top: 8px;
            color: red;
        }
        .operate-btn-area {
            margin: 20px 0;
        }
        .yunnex-btn {
            display: inline-block;
            margin-right: 16px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>

<script>
    var yunnexSelect = require('common/components/yunnex-select/index'),
        yunnexTable = require('common/components/yunnex-table/index'),
        yunnexPagination = require('common/components/yunnex-page/index'),
        yunnexDialog = require('common/components/dialog/index'),
        yunnexPop = require('common/components/pop/index'),
        util = require('common/js/util'),
        commCss = require('common/styles/common.less'),
        sprite = require('../../styles/mall/sprite.css'),
        sortQueue,
        activityTypeMap = {};

    function openDialog(context, config) {
        context.conf = util.clone(config);
        context.conf.isShow = true;
    }

    function moveData(arr, index, gap) {
        var tmp,
            tarIndex = index + gap;

        if(tarIndex < 0 || tarIndex > arr.length -1) {
            return;
        }
        tmp = arr[index];
        arr[index] = arr[tarIndex];
        arr[tarIndex] = tmp;

        return arr;
    }

    function degreeNumber(t) {
        return t > 9 ? t : '0' + t;
    }
    function formatDate(date) {
        var t,
            rs;

        t = date.getMonth() + 1;
        t = degreeNumber(t);
        rs = date.getFullYear() + '-' + t;
        t = degreeNumber(date.getDate());
        rs += ('-' + t + ' ');
        t = date.getHours();
        t = degreeNumber(t);
        rs += (t + ':');
        t = degreeNumber(date.getMinutes());
        rs += t;

        return rs;
    }

    function SortQueue(cb) {
        this.activityQueue = [];
        this.cb = cb;
        this.timer = null;
    }
    SortQueue.prototype.flushSortQueue = function flushSortQueue(name, id, offset, mark) {
        var self = this,
            flag = false;

        if(isNaN(offset) || mark === 'immediate') {
            //置顶、置底操作、mark为immediate的请求立即发送
            self.cb(name, id, offset);
            return;
        }
        //mark为second表明为被动添加到队列中，不发送请求
        if(!self.timer) {
            if(self.cb && typeof this.cb === 'function'){
                self.timer = setTimeout(function() {
                    self.activityQueue.forEach(function(item) {
                        if(item.offset !== 0) {
                            if(!item.mark || (item.mark && item.mark === 'first')) {
                                self.cb(item.name, item.id, item.offset);
                            }
                        }
                    });
                    self.timer = null;
                    self.activityQueue = [];
                }, 3000);
            }
        }
        self.activityQueue.some(function(item, index) {
            if(item.id === id) {
                self.activityQueue[index].offset += offset;
                self.activityQueue[index].mark = mark;
                flag = true;
                return true;
            }
        });
        if(!flag) {
            self.activityQueue.push({name: name, id: id, offset: offset, mark: mark});
        }
    };
    module.exports = {
        data: function() {
            var self = this;

            return {
                activityName: '',
                activityType: '',
                activityStatus: '',
                curActivity: null,
                activityTypeData: [{key: '', value: '全部'}],
                activityStatusData: [{key: '', value: '全部'}],
                selectTitle: {
                    name: 'key',
                    text: 'value'
                },
                tableTitles: [
                    {name: 'name', text: '兑换活动', width: '17%', render: function(h, params) {
                        return h('div', [
                            h('img', {attrs: {src: params.rowData.frontImgUrl, }, 'class': 'activity-img'}),
                            h('span', {'class': 'activity-name-text', domProps: {innerHTML: params.data}})
                        ]);
                    }},
                    {name: 'contentType', text: '类型', width: '6%', render: function(h, params) {
                        return h('span', activityTypeMap[params.data]);
                    }},
                    {name: 'exchangeBonus', text: '兑换价值', width: '7%'},
                    {name: 'exchangeNum', text: '已兑换量', width: '7%'},
                    {name: 'quantity', text: '余量', width: '6%'},
                    {name: 'beginTime', text: '开始时间', width: '14%', render: function(h, params) {
                        return h('span', formatDate(new Date(params.data)))
                    }},
                    {name: 'endTime', text: '结束时间', width: '14%', render: function(h, params) {
                        return h('span', formatDate(new Date(params.data)))
                    }},
                    {name: 'status', text: '状态', width: '10%', render: function(h, params) {
                        var statusArr = [
                                {id: 0, text: '可兑换'},
                                {id: 2, text: '售罄'},
                                {id: 3, text: '下架'}
                            ],
                            otherStatusMap = {
                                1: '未开始',
                                4: '过期'
                            },
                            status = params.data;

                        if(status === 0 || status === 3) {
                            statusArr.splice(1, 1);
                        }else if(status !== 2) {
                            return h('span', {'class': 'activity-status-text', domProps: {
                                innerHTML: otherStatusMap[status]
                            }});
                        }
                        statusArr.some(function(item, index) {
                            if(item.id === status) {
                                statusArr[index].selected = true;
                            }
                        });
                        return h(yunnexSelect, {
                            props: {
                                selectTitle: {
                                    name: 'id',
                                    text: 'text'
                                },
                                sourceData: statusArr
                            },
                            on: {
                                'select-change': function(item) {
                                    self.changeActivityStatus(item.id, params.rowData);
                                }
                            }
                        });
                    }},
                    {name: 'operate', text: '操作', width: '20%', render: function(h, params) {
                        var upClass = 'move-green-icon',
                            downClass = upClass,
                            idx;

                        if(params.rowData.status !== 4) {
                            //状态为未过期
                            idx = self.pageSize * (self.curPage - 1) + params.index;
                            if(idx + 1 === self.orderMaxNo) {
                                downClass = 'move-gray-icon';
                            }else if(idx + params.index === 0) {
                                upClass = 'move-gray-icon';
                            }
                            return h('div', [
                                h('a', {
                                    attrs: {
                                        'href': '/saofu-shop-card/member/mall/activity/edit?id=' + params.rowData.id,
                                        'class': 'edit-link'
                                    },
                                    domProps: {
                                        innerHTML: '编辑'
                                    }
                                }),
                                h('div', {'class': upClass, on: {click: function() {
                                    self.movePosition(params.rowData, 'up', params.index);
                                }}}, [h('i', {'class': 'icon-up'})]),
                                h('div', {'class': upClass, on: {click: function() {
                                    self.movePosition(params.rowData, 'top', params.index);
                                }}}, [h('i', {'class': 'icon-move-top'})]),
                                h('div', {'class': downClass, on: {click: function() {
                                    self.movePosition(params.rowData, 'down', params.index);
                                }}}, [h('i', {'class': 'icon-down'})]),
                                h('div', {'class': downClass, on: {click: function() {
                                    self.movePosition(params.rowData, 'bottom', params.index);
                                }}}, [h('i', {'class': 'icon-move-bottom'})])
                            ]);
                        }
                        return h('span', '');
                    }}
                ],
                tableForKey: 'id',
                tableList: [],
                dataCount: 0,
                pageSize: 10,
                curPage: 1,
                activityAmount: '',
                popConfig: {
                    title: '提示',
                    isShow: false
                },
                conf: {
                    dialogType: '',
                    dialogMessage: '',
                    dialogIcon: '',
                    okBtnText: '',
                    isShow: false
                },
                errorInfo: {},
                orderMaxNo: 0,
                orderMinNo: 0
            };
        },
        methods: {
            queryActivity: function(param, cb) {
                var self = this,
                    response;

                self.$http.post('/saofu-shop-card/member/mall/activity/list', param).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        self.orderMaxNo = response.entry.orderMaxNo;
                        self.orderMinNo = response.entry.orderMinNo;
                        self.tableList = response.entry.activeList;
                        self.dataCount = response.entry.pageInfo.totalRows;
                        cb && cb(self.tableList);
                    }else {
                        openDialog(self, {
                            dialogType: 'autoClose',
                            dialogMessage: '查询活动列表失败:' + response.message,
                            dialogIcon: 'icon-error'
                        });
                    }
                });
            },
            queryActivityByCondition: function() {
                var self = this;

                self.queryActivity({
                    name: self.activityName,
                    contentType: self.activityType,
                    status: self.activityStatus,
                    currentPage: 1,
                    pageSize: self.pageSize
                });
            },
            createActivity: function() {
                window.location.href = '/saofu-shop-card/member/mall/activity/add';
            },
            changeActivityStatus: function(status, activity) {
                var originStatus = activity.status,
                    amount = activity.quantity,
                    self = this;

                if(status == 3){
                    //下架
                    openDialog(self, {
                        dialogType: 'tipConfirm',
                        dialogMessage: '确定要下架该兑换活动吗?下架的内容将不会在微信积分商城展示!',
                        dialogIcon: 'icon-warn',
                        dialogCloseCb: function(flag) {
                            if(flag) {
                                self.offActivity(activity.id, originStatus);
                            }else {
                                self.tableList.some(function(item, index) {
                                    if(item.id === activity.id) {
                                        self.tableList[index].status = originStatus + 1;
                                        self.tableList[index].status = originStatus;
                                        return true;
                                    }
                                });
                            }
                        }
                    });
                }else if(status == 0) {
                    //重新上架
                    if(originStatus == 2) {
                        //活动本身为售罄状态
                        self.curActivity = activity;
                        self.popConfig.isShow = true;
                    }else if(originStatus == 3) {
                        if(amount > 0) {
                            openDialog(self, {
                                dialogType: 'tipConfirm',
                                dialogMessage: '确定要恢复该兑换活动吗?',
                                dialogIcon: 'icon-warn',
                                dialogCloseCb:  function(flag) {
                                    if(flag) {
                                        self.recoveryActivity(activity.id);
                                    }else {
                                        self.tableList.some(function(item, index) {
                                            if(item.id === activity.id) {
                                                self.tableList[index].status = originStatus + 1;
                                                self.tableList[index].status = originStatus;
                                                return true;
                                            }
                                        });
                                    }
                                }
                            });
                        }else {
                            //活动奖品对换余量为0
                            self.curActivity = activity;
                            self.popConfig.isShow = true;
                        }
                    }
                }
            },
            offActivity: function(id, originStatus) {
                var response,
                    self = this;

                self.$http.post('/saofu-shop-card/member/mall/activity/offshelf', {
                    id: id
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        openDialog(self, {
                            dialogType: 'autoClose',
                            dialogMessage: '下架成功!',
                            dialogIcon: 'icon-success'
                        });
                    }else {
                        self.tableList.some(function(item, index) {
                            if(item.id === id) {
                                self.tableList[index].status = originStatus + 1;
                                self.tableList[index].status = originStatus;
                                return true;
                            }
                        });
                        openDialog(self, {
                            dialogType: 'autoClose',
                            dialogMessage: '下架失败:' + response.message,
                            dialogIcon: 'icon-error'
                        });
                    }
                });
            },
            recoveryActivity: function(id, activityAmount) {
                var response,
                    self = this;

                self.$http.post('/saofu-shop-card/member/mall/activity/recovery', {
                    id: id,
                    quantity: activityAmount
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        openDialog(self, {
                            dialogType: 'autoClose',
                            dialogMessage: '恢复成功!',
                            dialogIcon: 'icon-success'
                        });
                    }else {
                        self.tableList.some(function(item, index) {
                            if(item.id === id) {
                                self.tableList[index].status = 5;
                                self.tableList[index].status = 3;
                                return true;
                            }
                        });
                        openDialog(self, {
                            dialogType: 'autoClose',
                            dialogMessage: '恢复失败:' + response.message,
                            dialogIcon: 'icon-error'
                        });
                    }
                });
            },
            doRecoveryActivity: function() {
                if(!this.curActivity) {
                    return;
                }
                if(!this.activityAmount || !/\d+/.test(this.activityAmount)) {
                    this.$set(this.errorInfo, 'activityAmount', '请输入合法的数字!');
                    return;
                }
                this.$set(this.errorInfo, 'activityAmount', '');
                this.recoveryActivity(this.curActivity.id, this.activityAmount);
                this.popConfig.isShow = false;
            },
            closePop: function() {
                var originStatus = this.curActivity.status,
                    self = this;

                this.activityAmount = '';
                this.$set(this.errorInfo, 'activityAmount', '');
                this.tableList.some(function(item, index) {
                    if(item.id === self.curActivity.id) {
                        self.tableList[index].status = originStatus + 1;
                        self.tableList[index].status = originStatus;
                        return true;
                    }
                });
                this.popConfig.isShow = false;
            },
            handlePageChange: function(page) {
                var self = this;

                self.curPage = page;
                self.queryActivity({
                    name: self.activityName,
                    contentType: self.activityType,
                    status: self.activityStatus,
                    currentPage: self.curPage,
                    pageSize: self.pageSize
                });
            },
            movePosition: function(item, type, index) {
                var typeMap = {
                        up: '-1',
                        down: '1',
                        top: 'head',
                        bottom: 'end'
                    },
                    direction,
                    p,
                    moveGap,
                    gap = typeMap[type],
                    nextItem,
                    nextItemGap,
                    preIndex = this.pageSize * (this.curPage - 1),
                    self = this;

                if(gap === '-1' || gap === 'head') {
                    direction = 'up';
                }else {
                    direction = 'down';
                }
                if((preIndex + index + 1 >= this.orderMaxNo && direction === 'down') ||
                    (preIndex + index <= 0 && direction === 'up')) {
                    //活动位于排序中的顶部或者底部
                    return;
                }

                if(gap === 'head') {
                    p = 1;
                }else if(gap === 'end'){
                    p = Math.ceil(this.orderMaxNo / this.pageSize);
                }

                if((p && this.curPage !== p) || (index === 0  && direction === 'up') ||
                    (index === this.pageSize - 1 && direction === 'down')) {
                    moveGap = parseInt(gap, 10);
                    if(isNaN(moveGap)) {
                        moveGap = gap;
                    }
                    sortQueue.flushSortQueue(item.name, item.id, moveGap, 'immediate');
                    if(!p) {
                        p = self.curPage + parseInt(gap, 10);
                    }
                    //需要进行跳页处理
                    this.queryActivity({
                        name: self.activityName,
                        contentType: self.activityType,
                        status: self.activityStatus,
                        currentPage: p,
                        pageSize: self.pageSize
                    }, function(arr) {
                        self.curPage = p;
                        if(gap === '-1') {
                            arr.pop();
                            arr.push(item);
                        }else if(gap === '1') {
                            arr.shift();
                            arr.unshift(item);
                        }else if(gap === 'head') {
                            if(arr[0] && arr[0].id !== item.id){
                                arr.unshift(item);
                                arr.pop();
                            }
                        }else {
                            if(arr[self.orderMaxNo % self.pageSize - 1] && arr[self.orderMaxNo % self.pageSize - 1].id !== item.id){
                                arr.shift();
                                arr.splice(self.orderMaxNo % self.pageSize - 1, 0, item);
                            }
                        }
                        self.tableList = arr;
                    });
                    return;
                }
                if(!p) {
                    gap = parseInt(gap, 10);
                    moveGap = gap;
                    if(direction === 'up') {
                        nextItem = this.tableList[index - 1];
                        //相对于当前记录的前一条记录的gap应该为-1
                        nextItemGap = 1;
                    }else {
                        nextItem = this.tableList[index + 1];
                        nextItemGap = -1;
                    }
                    sortQueue.flushSortQueue(item.name, item.id, gap, 'first');
                    sortQueue.flushSortQueue(nextItem.name, nextItem.id, nextItemGap, 'second');
                    this.tableList = moveData(this.tableList.concat(), index, moveGap);
                }else {
                    sortQueue.flushSortQueue(item.name, item.id, gap);
                    //对活动进行置顶或者置底操作
                    if(p === 1 && direction === 'up') {
                        self.tableList.unshift(item);
                        self.tableList.splice(index + 1, 1);
                    }else {
                        self.tableList.splice(index, 1);
                        self.tableList.splice(self.orderMaxNo % self.pageSize - 1, 0, item);
                    }
                }
            },
            orderActivity: function(name, id, offset) {
                var self = this,
                    response;

                self.$http.post('/saofu-shop-card/member/mall/activity/order', {
                    activeId: id,
                    offSet: offset
                }).then(function(res) {
                    response = res.body;
                    if(!response.success) {
                        openDialog(self, {
                            dialogType: 'tipAlert',
                            dialogMessage: name + ',活动排序失败:' + response.message,
                            dialogIcon: 'icon-error'
                        });
                    }
                });
            }
        },
        created: function() {
            var self = this,
                response;

            self.$http.post('/saofu-shop-card/member/mall/activity/enum_list').then(function(res) {
                response = res.body;
                if(response.success) {
                    self.activityTypeData = self.activityTypeData.concat(response.entry.contentTypes);
                    self.activityStatusData = self.activityStatusData.concat(response.entry.activityStatus);
                    self.activityTypeData.forEach(function(item) {
                        activityTypeMap[item.key] = item.value;
                    });
                }else {
                    openDialog(self, {
                        dialogType: 'tipAlert',
                        dialogMessage: '查询活动类型、状态接口失败:' + response.message,
                        dialogIcon: 'icon-error'
                    });
                }
            }).then(function() {
                self.queryActivity({
                    currentPage: self.curPage,
                    pageSize: self.pageSize
                });
            });
            sortQueue = new SortQueue(self.orderActivity);
        },
        components: {
            'yunnex-select': yunnexSelect,
            'yunnex-table': yunnexTable,
            'yunnex-pagination': yunnexPagination,
            'yunnex-dialog': yunnexDialog,
            'yunnex-pop': yunnexPop
        }
    };
</script>