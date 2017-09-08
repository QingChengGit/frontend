<template>
    <div class="page-my-marketing-campaign">
        <div class="page-title-tabs">
            <a href="/saofu-shop-card/promotion/page/campaign-index" class="page-title-item">营销工具</a>
            <div class="page-title-item tab-item-active">我的活动</div>
        </div>
        <div class="page-content">
            <div class="query-area">
                <span class="query-text">活动名称：</span>
                <!--<input type="text" class="yunnex-input campaign-name" v-model="campaignId"/>-->
                <yunnex-select v-model="campaignId" :source-data="campaignNameList"
                               :select-title="campaignNameSelectTitle" class="campaign-name">
                </yunnex-select>
                <span class="query-text">活动类型：</span>
                <yunnex-select v-model="campaignType" :source-data="selectData" :select-title="selectTitle">
                </yunnex-select>
                <div class="campaign-btn query-btn green-btn" @click="queryCampaignByCondition">查询</div>
            </div>
            <div class="category-tabs" @click="queryCampaignByStatus">
                <div class="tab-item" :class="{'tab-item-active': '' === campaignStatus}" data-type="">
                    全部
                </div>
                <div class="tab-item" :class="{'tab-item-active': key === campaignStatus}"
                     :data-type="key" v-for="(val, key) in statusMap">
                    {{val}}
                </div>
            </div>
            <div class="campaign-list">
                <div class="campaign-item" v-for="campaign in campaignList">
                    <div class="campaign-status" :class="campaign.statusColor">
                        <div class="vertical-text">
                            {{campaign.statusText}}
                        </div>
                    </div>
                    <div class="campaign-info">
                        <div class="campaign-title">{{campaign.title}}</div>
                        <div class="campaign-other-info">
                            <span class="campaign-text">时间：</span>
                            <span class="campaign-text">{{campaign.startDate}}~{{campaign.endDate}}</span>
                        </div>
                        <div class="campaign-other-info">
                            <span class="campaign-text">类型：</span>
                            <span class="campaign-text">{{campaign.typeText}}</span>
                        </div>
                    </div>
                    <div class="campaign-static">
                        <div class="static-data">{{campaign.participated}}/{{campaign.rest}}</div>
                        <div class="static-data-desc">已参与次数/剩余次数</div>
                    </div>
                    <div class="campaign-operate-area">
                        <a class="campaign-btn operate-btn" v-if="campaign.status === 0"
                           :href="'/saofu-shop-card/promotion/page/campaign-add?toolType='
                           + campaign.type + '&isEdit=1&id=' + campaign.id">查看活动</a>
                        <a class="campaign-btn operate-btn" v-else
                           :href="activityDetailPageMap[campaign.type] + '?id=' + campaign.id">查看活动</a>
                        <a class="campaign-btn operate-btn green-btn" :href="'/saofu-shop-card/promotion/page/' +
                         'campaign-myActivies-consumption-minus?id=' + campaign.id + '&type=' + campaign.type">活动统计</a>
                        <div v-if="campaign.status !== 0 && campaign.status !== 3">
                            <div class="campaign-link-btn" @click="changeCampaignStatus(campaign, campaign.status)">
                                {{campaign.status === 2 ? '重新开始' : '暂停活动'}}
                            </div>
                            <div class="campaign-link-btn" @click="endCampaign(campaign, 3)">
                                结束活动
                            </div>
                        </div>
                    </div>
                </div>
                <div class="campaign-list-none" v-show="isQueryCompleted && campaignList.length === 0">
                    <div class="none-record-wrap" v-if="'' === campaignStatus">
                        <i class="icon-empty-record-img empty-record-icon"></i>
                        <p class="none-record-message">暂无活动！</p>
                        <p class="none-record-message">
                            已有商户83649家创建活动，每日收益超1000W元 你也赶紧加入进来吧！
                            <a class="green-link" href="/saofu-shop-card/promotion/page/campaign-index">
                                创建营销活动
                            </a>
                        </p>
                    </div>
                    <div class="none-record-wrap" v-else>
                        <p class="none-record-message bold-message">当前条件下无活动</p>
                        <i class="icon-empty-record-img empty-record-icon"></i>
                        <p class="none-record-message">当前条件下无营销活动！</p>
                    </div>
                </div>
            </div>
            <yunnex-pagination :data-count="campaignCount" :page-size="10" :now-page="curPage"
                               @change="jumpPage" v-if="campaignCount > 0">
            </yunnex-pagination>
        </div>
        <yunnex-dialog :dialog-conf="conf"></yunnex-dialog>
    </div>
</template>

<style lang="less">
    .page-my-marketing-campaign {
        @color-green: #1AB394;
        @border: solid #E5E5E5;
        background-color: #fff;
        .page-title-tabs {
            height: 50px;
            line-height: 50px;
            padding-left: 42px;
            border: 1px @border;
            font-size: 0;
        }
        .page-title-item {
            display: inline-block;
            width: 110px;
            margin-right: 20px;
            font-size: 16px;
            color: #676a6c;
            text-align: center;
            &:last-child {
                margin-right: 0;
            }
        }
        .page-content {
            padding: 42px;
        }
        .query-area {
            padding-bottom: 42px;
        }
        .query-text {
            margin-right: 12px;
            font-size: 15px;
            color: #999;
            vertical-align: middle;
        }
        .campaign-name {
            width: 260px;
            margin-right: 86px;
        }
        .campaign-btn {
            display: inline-block;
            height: 40px;
            line-height: 38px;
            border: 1px solid #e1e1e1;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            font-size: 15px;
            color: #666;
            text-align: center;
            cursor: pointer;
        }
        .green-btn {
            color: #fff;
            background-color: @color-green;
        }
        .query-btn {
            width: 120px;
            margin-left: 67px;
        }
        .category-tabs {
            margin-bottom: 40px;
            border-bottom: 1px @border;
            text-align: center;
        }
        .tab-item {
            display: inline-block;
            width: 80px;
            padding: 18px 0 14px 0;
            margin-right: 6px;
            font-size: 16px;
            color: #333;
            text-align: center;
            cursor: pointer;
            &:last-child {
                margin-right: 0;
            }
        }
        .tab-item-active {
            position: relative;
            color: @color-green;
            &:after {
                position: absolute;
                left: 0;
                bottom: 0;
                content: '';
                width: 100%;
                height: 3px;
                font-size: 0;
                background-color: @color-green;
            }
        }
        .campaign-list {
            margin-bottom: 60px;
        }
        .campaign-item {
            position: relative;
            padding: 24px 0;
            margin-bottom: 20px;
            border: 1px @border;
            background-color: #F4FBFA;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .campaign-status {
            position: absolute;
            left: 0;
            top: 0;
            width: 40px;
            height: 100%;
            line-height: 132px;
            text-align: center;
            &:after {
                content: '';
                display: inline-block;
                width: 0;
                height: 100%;
                font-size: 0;
                vertical-align: middle;
                visibility: hidden;
            }
        }
        .vertical-text {
            display: inline-block;
            width: 22px;
            line-height: 1.1;
            font-size: 22px;
            color: #fff;
            vertical-align: middle;
        }
        .begin-status-color {
            background-color: @color-green;
        }
        .pause-status-color {
            background-color: #ED5565;
        }
        .not-begin-status-color {
            background-color: #1C83C6;
        }
        .end-status-color {
            background-color: #ccc;
        }
        .campaign-info {
            width: 364px;
            margin-left: 64px;
        }
        .campaign-title {
            line-height: 1;
            margin-top: 3px;
            margin-bottom: 24px;
            font-size: 18px;
            color: #333;
        }
        .campaign-other-info {
            margin-bottom: 11px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .campaign-text {
            line-height: 1;
            font-size: 14px;
            color: #999;
        }
        .campaign-type {
            margin-top: 11px;
        }
        .campaign-static, .campaign-operate-area {
            position: relative;
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 1px;
                height: 80px;
                background-color: #E5E5E5;
            }
        }
        .campaign-static {
            margin: 0 40px;
        }
        .static-data, .static-data-desc {
            line-height: 1;
            margin-left: 30px;
        }
        .static-data {
            font-size: 26px;
            color: @color-green;
        }
        .static-data-desc {
            margin-top: 14px;
            font-size: 16px;
            color: #999;
        }
        .campaign-operate-area {
            padding-left: 34px;
        }
        .operate-btn {
            width: 90px;
            margin: 0 20px 20px 0;
            font-size: 16px;
            &:last-child {
                margin-right: 0;
            }
        }
        .campaign-link-btn {
            display: inline-block;
            position: relative;
            width: 100px;
            padding-right: 10px;
            border-right: 1px @border;
            font-size: 16px;
            color: #666;
            text-align: center;
            cursor: pointer;
            &:last-child {
                padding-left: 10px;
                padding-right: 0;
                border-right: none;
            }
        }
        .campaign-info, .campaign-static, .campaign-operate-area {
            display: inline-block;
            vertical-align: top;
            font-size: 0;
        }
        .campaign-list-none {
            height: 400px;
            line-height: 400px;
            text-align: center;
            &:after {
                content: '';
                display: inline-block;
                width: 0;
                height: 100%;
                font-size: 0;
                vertical-align: middle;
            }
        }
        .none-record-wrap {
            display: inline-block;
            line-height: normal;
            vertical-align: middle;
        }
        .empty-record-icon {
            margin: 40px 0 10px 0;
        }
        .none-record-message {
            line-height: 1.2;
            font-size: 14px;
            color: #999;
        }
        .bold-message {
            line-height: 1;
            font-weight: 400;
            font-size: 32px;
            color: #333;
        }
        .green-link {
            margin-left: 8px;
            color: #06b08d;
        }
        .pagination-component {
            float: right;
        }
    }
</style>

<script>
    var select = require('common/components/yunnex-select/index'),
        pagination = require('common/components/yunnex-page/index'),
        dialog = require('common/components/dialog/index'),
        util = require('common/js/util'),
        sprite = require('../../styles/promotion/sprite.css'),
        statusMap = {
            0: '未开始',
            1: '进行中',
            2: '暂停',
            3: '结束'
        };

    function openDialog(context, config) {
        context.conf = util.clone(config);
        context.conf.isShow = true;
    }

    function transformCampaign(obj) {
        var rs = Object.create(null),
            statusColorMap = {
                0: 'not-begin-status-color',
                1: 'begin-status-color',
                2: 'pause-status-color',
                3: 'end-status-color'
            },
            typeMap = {
                1: '消费满减/满折',
                2: '消费赠菜品',
                3: '限时单品特价'
            };

        rs.id = obj.id;
        rs.title = obj.name;
        rs.status = obj.status;
        rs.statusText = statusMap[obj.status];
        rs.startDate = obj.startTime;
        rs.endDate = obj.endTime;
        rs.type = obj.type;
        rs.typeText = typeMap[obj.type];
        rs.participated = obj.budget - obj.remain;
        rs.rest = obj.remain;
        rs.statusColor = statusColorMap[obj.status];

        return rs;
    }
    module.exports = {
        data: function() {
            return {
                campaignId: '',
                campaignType: '',
                campaignStatus: '',
                activityDetailPageMap: {
                    1: '/saofu-shop-card/promotion/page/campaign-config-discount',
                    3: '/saofu-shop-card/promotion/page/campaign-config-special',
                    2: '/saofu-shop-card/promotion/page/campaign-config-giving'
                },
                statusMap: statusMap,
                selectTitle: {
                    name: 'id',
                    text: 'text'
                },
                selectData: [
                    {id: '', text: '所有', selected: true},
                    {id: 1, text: '消费满减/满折'},
                    {id: 3, text: '限时单品特价'},
                    {id: 2, text: '消费赠菜品'}
                ],
                campaignNameSelectTitle: {
                    name: 'id',
                    text: 'campName'
                },
                campaignNameList: [],
                campaignList: [],
                conf: {
                    dialogType: '',
                    dialogMessage: '',
                    dialogIcon: '',
                    okBtnText: '',
                    isShow: false
                },
                campaignCount: 0,
                curPage: 1,
                isQueryCompleted: false
            };
        },
        methods: {
            queryCampaignNameList: function() {
                var self = this,
                    response;

                self.$http.get('/saofu-shop-card/promotion/campaign/name/list', {
                    params: {campName: ''}
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        self.campaignNameList = response.attach;
                        self.campaignNameList.unshift({id: '', campName: '全部', selected: true});
                    }else {
                        openDialog(self, {
                            dialogType: 'tipAlert',
                            dialogMessage: '查询活动列表失败:' + response.message,
                            dialogIcon: 'icon-error'
                        });
                    }
                });
            },
            queryCampaignByCondition: function() {
                var self = this;

                self.campaignStatus = '';
                self.queryCampaign({
                    id: self.campaignId,
                    type: self.campaignType,
                    pageNum: 1
                });
                self.curPage = 1;
            },
            queryCampaignByStatus: function(evt) {
                var target = evt.target,
                    status,
                    tmp,
                    self = this;

                if(!target.hasAttribute('data-type')) {
                    return;
                }
                status = target.getAttribute('data-type');
                self.campaignId = '';
                tmp = self.campaignNameList.shift();
                self.campaignNameList.unshift(tmp);
                self.campaignStatus = status;
                self.queryCampaign({
                    id: self.campaignId,
                    type: self.campaignType,
                    status: self.campaignStatus,
                    pageNum: 1
                });
                self.curPage = 1;
            },
            queryCampaign: function(param) {
                var self = this,
                    response;

                self.isQueryCompleted = false;
                self.$http.get('/saofu-shop-card/promotion/campaign/list', {params: param}).then(function(res) {
                    response = res.body;
                    self.isQueryCompleted = true;
                    if(response.success) {
                        self.campaignList = response.attach.data.map(function(item) {
                            return transformCampaign((item));
                        });
                        self.campaignCount = response.attach.page.totalRows;
                    }else {
                        console.log('查询我的营销活动列表失败:' + response.message + '。请求参数为:'
                            + JSON.stringify(param));
                    }
                });
            },
            changeCampaignStatus: function(campaign, curStatus) {
                var status,
                    self = this;

                status = curStatus === 1 ? 2 : 1;
                if(status === 2) {
                    openDialog(this, {
                        dialogType: 'tipConfirm',
                        dialogMessage: '暂停后用户将暂时不可享受活动，确定吗？',
                        dialogIcon: 'icon-warn',
                        dialogCloseCb: function(flag) {
                            flag && self.updateCampaignStatus(campaign, status);
                        }
                    });
                }else {
                    self.updateCampaignStatus(campaign, status);
                }
            },
            endCampaign: function(campaign, status) {
                var self = this;

                openDialog(self, {
                    dialogType: 'tipConfirm',
                    dialogMessage: '活动结束后用户将不再享受活动，确定吗？',
                    dialogIcon: 'icon-warn',
                    dialogCloseCb: function(flag) {
                        flag && self.updateCampaignStatus(campaign, status);
                    }
                });
            },
            updateCampaignStatus: function(campaign, status) {
                var self = this,
                    statusTextMap = {
                        1: '开始',
                        2: '暂停',
                        3: '结束'
                    },
                    statusUrlMap = {
                        1: '/promotion/campaign/restart',
                        2: '/promotion/campaign/pause',
                        3: '/promotion/campaign/close'
                    },
                    dialogMessage = campaign.title + '活动已设置' + statusTextMap[status],
                    url = '/saofu-shop-card' + statusUrlMap[status],
                    response,
                    tmp;

                self.$http.get(url, {
                    params: {
                        id: campaign.id
                    }
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        openDialog(self, {
                            dialogType: 'autoClose',
                            dialogMessage: dialogMessage,
                            dialogIcon: 'icon-success'
                        });
                        self.campaignList.some(function(item, index) {
                            if(item.id === campaign.id) {
                                if(self.campaignStatus === '') {
                                    tmp = transformCampaign({status: status});
                                    self.campaignList[index].status = status;
                                    self.campaignList[index].statusText = tmp.statusText;
                                    self.campaignList[index].statusColor = tmp.statusColor;
                                }else {
                                    self.campaignList.splice(index, 1);
                                }
                                return true;
                            }
                        });
                    }else {
                        openDialog(self, {
                            dialogType: 'tipAlert',
                            dialogMessage: response.message,
                            dialogIcon: 'icon-warn'
                        });
                    }
                });
            },
            jumpPage: function(page) {
                var self = this;

                self.queryCampaign({
                    id: self.campaignId,
                    type: self.campaignType,
                    status: self.campaignStatus,
                    pageNum: page
                });
            }
        },
        created: function() {
            this.queryCampaignNameList();
            this.queryCampaign({
                pageNum: 1
            });
        },
        components: {
            'yunnex-select': select,
            'yunnex-pagination': pagination,
            'yunnex-dialog': dialog
        }
    };

</script>