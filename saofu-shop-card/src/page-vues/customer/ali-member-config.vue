<template>
    <div class="page-ali-member-config">
        <div class="page-title">制作会员卡</div>
        <div class="page-content">
            <div class="progress-info">
                <div class="progress-info-item">
                    <i class="icon-completed"></i>
                    <p class="progress-info-text">会员卡信息配置</p>
                </div>
                <span class="progress-split-line"></span>
                <div class="progress-info-item">
                    <div class="circle-num">2</div>
                    <p class="progress-info-text">会员卡同步配置</p>
                </div>
            </div>
            <div class="sync-option-area">
                <span class="desc-text">会员卡同步:</span>
                <yunnex-cr-box :config="cardSyncConfig" v-model="checkedCardSyncOption"
                               @checked-change="handleCardSyncOptionChange">
                </yunnex-cr-box>
            </div>
            <div class="config-content-wrap" v-show="isSyncAliConfig">
                <div class="title-tabs">
                    <div class="title-item preview-title-item">支付宝卡包效果预览</div>
                    <div class="title-item config-title-item">内容配置</div>
                </div>
                <div class="ali-card-preview">
                    <div class="card-preview-wrap">
                        <div class="preview-head">
                            <img :src="memberConfig.logoPath" class="card-logo-preview" />
                            <span class="card-name">{{memberConfig.cardName}}</span>
                        </div>
                        <img :src="memberConfig.cardBgImagePath" class="cover-img" />
                        <i class="icon-qr-code qr-img" />
                        <div class="qr-code"></div>
                        <div class="card-infos">
                            <div class="card-info-item">
                                <div class="card-info-text">积分</div>
                                <div class="card-info-value">999积分</div>
                            </div>
                            <div class="card-info-item">
                                <div class="card-info-text">余额</div>
                                <div class="card-info-value">124元</div>
                            </div>
                        </div>
                        <div class="card-other-infos">
                            <div class="other-info-item" v-for="info in otherInfos">
                                <span class="card-info-text">{{info.name}}</span>
                                <i class="icon-gray-right-arrow layer-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-config">
                    <div class="config-item-title">基本信息</div>
                    <div class="baseinfo-config-item">
                    <span class="config-item-left">
                        <span class="require-symbol">*</span>
                        <span class="config-text">商户LOGO：</span>
                    </span>
                        <div :class="!validateInfo.isSelectLogo ? 'invalid-btn' : 'uploader-btn-wrap'">
                            <uploader :upload-config="logoFileUploaderConfig" @upload-complete="handleLogoUploadResult"
                                      @file-input="validateLogoFile"></uploader>
                            <span class="upload-file-name" v-show="memberConfig.uploadLogoName">
                                {{'已上传：' + memberConfig.uploadLogoName}}
                            </span>
                        </div>
                        <div class="tip-message">图片尺寸为大于500*500px的正方形，且小于1M，支持格式：jpg、jpeg、png、bmp</div>
                    </div>
                    <div class="baseinfo-config-item">
                    <span class="config-item-left">
                        <span class="require-symbol">*</span>
                        <span class="config-text">封面图：</span>
                    </span>
                        <div :class="!validateInfo.isSelectCover ? 'invalid-btn' : 'uploader-btn-wrap'">
                            <uploader :upload-config="coverFileUploaderConfig" @upload-complete="handleCoverUploadResult"
                                      @file-input="validateCoverFile"></uploader>
                            <span class="upload-file-name" v-show="memberConfig.uploadCoverName">
                                {{'已上传：' + memberConfig.uploadCoverName}}
                            </span>
                        </div>
                        <div class="tip-message">
                            图片尺寸为大于1020*643px，不得有圆角，不得拉伸变形，且小于2M，支持格式：jpg、jpeg、png、bmp
                        </div>
                    </div>
                    <div class="baseinfo-config-item">
                    <span class="config-item-left">
                        <span class="require-symbol">*</span>
                        <span class="config-text">投放门店：</span>
                    </span>
                        <div class="upload-btn" @click="showStoreListPop" :class="!validateInfo.isSelectStore ? 'invalid-btn' : ''">
                            <span class="upload-btn-text">选择门店</span>
                        </div>
                        <span class="green-link" @click="showPreview">效果预览</span>
                    </div>
                    <div class="config-item-title">权益信息</div>
                    <div class="right-config-item">
                    <span class="config-item-left">
                        <span class="require-symbol">*</span>
                        <span class="config-text">权益描述：</span>
                    </span>
                        <input type="text" class="yunnex-input right-info-input" placeholder="请输入16字以内的权益描述"
                               v-model="memberConfig.rightDesc"/>
                        <div v-show="!validateInfo.isRightDescValid" class="error-message">最多可输入16个字符，不可为空</div>
                    </div>
                    <div class="right-config-item">
                    <span class="config-item-left">
                        <span class="require-symbol">*</span>
                        <span class="config-text">权益时间：</span>
                    </span>
                        <span class="date-wrap">
                        <input id="start-date" type="text" class="com-time com-time-start" v-model="memberConfig.rightStartDate"
                               readonly="readonly">
                        <span class="com-time-unit">至</span>
                        <input id="end-date" type="text" class="com-time com-time-end" v-model="memberConfig.rightEndDate"
                               readonly="readonly">
                    </span>
                        <div>
                            <span v-show="!validateInfo.isSelectStartDate" class="error-message">请选择开始时间</span>
                            <span v-show="!validateInfo.isSelectEndDate" class="error-message">请选择结束时间</span>
                            <span v-show="!validateInfo.isEndDateVaild" class="error-message">结束时间不能小于开始时间</span>
                            <span v-show="!validateInfo.isEndDateLengthVaild" class="error-message">权益时间跨度不能超过一年!</span>
                        </div>
                    </div>
                    <p class="tip-message config-tip-message">
                        注：以上所有配置内容为支付宝所需的补充信息，其他会员卡内容以当前设置的主卡为准。
                    </p>
                </div>
            </div>
            <div class="operate-btn-area">
                <div class="page-btn config-operate-btn green-btn" @click="saveConfig(true)">保存并上架</div>
                <div class="page-btn config-operate-btn green-btn" v-if="!isSwitchMasterCard" @click="saveConfig">保存配置</div>
                <div class="page-btn config-operate-btn" @click="goPrevious">上一步</div>
                <div class="page-btn config-operate-btn" @click="cancelConfig">取消</div>
            </div>
            <pop :config="popConfig">
                <div slot="pop-content" class="store-list-pop">
                    <div class="store-pop-left">
                        <select class="province-select" @change="changeProvince" v-model="selectedProvince">
                            <option value="">省份</option>
                            <option v-for="p in provinceList" :value="p.code">{{p.name}}</option>
                        </select>
                        <select class="province-select" @change="changeCity" v-model="selectedCity">
                            <option value="">城市</option>
                            <option v-for="p in cityList" :value="p.code">{{p.name}}</option>
                        </select>
                        <select class="province-select" v-model="selectedArea">
                            <option value="">区</option>
                            <option v-for="p in areaList" :value="p.code">{{p.name}}</option>
                        </select>
                        <input type="text" class="yunnex-input search-store-input" v-model="searchContent" placeholder="请输入门店关键字"/>
                        <div class="page-btn green-btn query-btn" @click="queryStoreList">查询</div>
                        <div class="store-list-wrap">
                            <div class="store-list">
                                <div class="custom-input-widget">
                                    <input type="checkbox" class="custom-input" id="custom-widget-all" v-model="isSelectAll" @click="selectAllStore">
                                    <label class="custom-widget-label" for="custom-widget-all"></label>
                                </div>
                                <span class="custom-input-widget-text">全选</span>
                            </div>
                            <div class="store-list" v-for="(item, index) in storeList">
                                <div class="custom-input-widget">
                                    <input type="checkbox" class="custom-input" :id="'custom-widget-' + index" :value="item" v-model="selectedStores">
                                    <label class="custom-widget-label" :for="'custom-widget-' + index">
                                    </label>
                                </div>
                                <span class="custom-input-widget-text">{{item.branchName}}</span>
                            </div>
                        </div>
                        <p class="tip-message">注：此处仅显示已绑定或注册支付宝门店的门店</p>
                    </div>
                    <div class="store-pop-right">
                        <div class="selected-store-item">
                            已选门店：{{selectedStores.length}}
                        </div>
                        <div class="selected-store-wrap">
                            <div class="selected-store-item" v-for="store in selectedStores" @click="removeStore">
                                {{store.branchName}}
                                <i class="icon-popup-close-white delete-icon" :id="store.branchId">×</i>
                            </div>
                        </div>
                        <div class="pop-operate-btn-area">
                            <div class="pop-operate-btn" @click="cancelSelectStore">取消</div>
                            <div class="pop-operate-btn green-btn" :class="{'disabled-btn': selectedStores.length === 0}"
                                 @click="saveSelectedStore">确定</div>
                        </div>
                    </div>
                </div>
            </pop>
            <pop :config="effectViewConfig">
                <div slot="pop-content" class="effect-view-wrap">
                    <p class="tip-message">
                        注：会员卡领取入口将在此处勾选的投放门店口碑详情页展示，
                        用户点击后即可进行领卡注册。
                    </p>
                    <img src="../images/customer/channelView.png" class="channel-effect-img"/>
                </div>
            </pop>
                <yunnex-dialog :dialog-type="dconfig.type" :dialog-message="dconfig.message"
                               @close="closeDialogCallback" :cancel-btn-text="dconfig.cancelBtnText"
                           :dialog-icon="dconfig.icon" :is-show="dconfig.isShow"></yunnex-dialog>
        </div>
    </div>
</template>

<style lang="less">
    @border-color: #e1e1e1;
    .input-effect (@color: #494949, @placeholderColor: #bcbcbc) {
        color: @color;
        &::-webkit-input-placeholder {
            color: @placeholderColor;
        }
        &:-moz-placeholder {
            color: @placeholderColor;
        }
        &::-moz-placeholder {
            color: @placeholderColor;
        }
        &:-ms-input-placeholder {
            color: @placeholderColor;
        }
        &::placeholder {
            color: @placeholderColor;
        }
    }
    .border-radius {
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .page-ali-member-config {
        background-color: #fff;
        [class^=icon-] {
            display: inline-block;
        }
        .page-title {
            height: 70px;
            line-height: 70px;
            padding-left: 20px;
            border-bottom: 1px solid @border-color;
            font-size: 20px;
            color: #333;
        }
        .page-content {
            padding: 0 20px;
        }
        .progress-info {
            margin: 20px 0;
            margin-bottom: 10px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e1e1e1;
            text-align: center;
        }
        .progress-split-line {
            display: inline-block;
            width: 240px;
            height: 0;
            margin: 0 -20px;
            margin-top: -40px;
            border-bottom: 2px dashed #e1e1e1 ;
            vertical-align: middle;
        }
        .progress-info-item {
            display: inline-block;
            font-size: 0;
            vertical-align: middle;
        }
        .circle-num {
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: 0 auto;
            -webkit-border-radius: 32px;
            -moz-border-radius: 32px;
            border-radius: 32px;
            font-size: 16px;
            color: #fff;
            background-color: #1ab394;
            text-align: center;
        }
        .progress-info-text {
            margin-top: 20px;
            margin-bottom: 0;
            font-size: 16px;
            font-weight: bold;
            color: #1ab394;
        }
        .sync-option-area {
            margin: 20px 0;
        }
        .desc-text {
            margin-right: 16px;
        }
        .config-content-wrap {
            padding-bottom: 16px;
            border-bottom: 1px solid #e1e1e1;
        }
        .title-tabs {
            margin: 25px 0 12px 0;
        }
        .title-item {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding-left: 10px;
            border-left: 6px solid #1ab394;
            font-size: 14px;
            color: #1ab394;
        }
        .preview-title-item {
            width: 450px;
        }
        .config-title-item {
            width: 626px;
        }
        .ali-card-preview, .card-config {
            display: inline-block;
            vertical-align: top;
        }
        .card-preview-wrap {
            position: relative;
            padding: 12px;
            background-color: #fff;
        }
        .ali-card-preview {
            width: 436px;
            padding: 18px;
            margin-right: 14px;
            background-color: #efefef;
        }
        .card-config {
            width: 626px;
            border: 1px solid @border-color;
            .border-radius;
        }
        .preview-head {
            position: absolute;
            top: 30px;
            left: 36px;
        }
        .card-logo-preview {
            width: 56px;
            height: 56px;
            border: 1px dashed #1AB394;
            -webkit-border-radius: 28px;
            -moz-border-radius: 28px;
            border-radius: 28px;
            vertical-align: middle;
        }
        .card-name {
            margin-left: 14px;
            font-size: 18px;
            color: #2C2C2C;
        }
        .cover-img {
            width: 100%;
            height: 234px;
            background-color: #F2F2F2;
        }
        .qr-img {
            position: relative;
            display: block;
            margin: 0 auto;
            margin-top: -12px;
        }
        .card-infos {
            padding: 6px 0 46px 0;
            border-bottom: 1px solid @border-color;
            text-align: center;
        }
        .card-info-item {
            display: inline-block;
            margin-right: 142px;
            &:last-child {
                margin-right: 0;
            }
        }
        .card-info-text {
            font-size: 16px;
            color: #949494;
        }
        .layer-icon {
            position: absolute;
            right: 0;
            top: 50%;
            z-index: 2;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            transform: translate(0, -50%);
        }
        .card-info-value {
            margin-top: 10px;
            font-size: 18px;
            color: #FF8302;
        }
        .card-other-infos {
            padding-bottom: 38px;
        }
        .other-info-item {
            position: relative;
            height: 52px;
            line-height: 52px;
            border-bottom: 1px solid @border-color;
            .card-info-text {
                font-size: 14px;
                color: #1b1b1b;
            }
        }
        .config-item-title {
            margin: 0 10px 30px 10px;
            height: 54px;
            line-height: 54px;
            padding-left: 14px;
            border-bottom: 1px dashed @border-color;
            font-size: 12px;
            color: #1AB394;
        }
        .baseinfo-config-item {
            margin-bottom: 42px;
            &:last-child {
                margin-bottom: 20px;
            }
        }
        .baseinfo-config-item, .right-config-item {
            margin-left: 24px;
            font-size: 12px;
        }
        .right-config-item {
            margin-bottom: 36px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .config-item-left {
            display: inline-block;
            width: 96px;
        }
        .require-symbol {
            color: #ff5959;
        }
        .config-text {
            color: #494949;
        }
        .upload-btn {
            position: relative;
            display: inline-block;
            padding: 8px 26px;
            border: 1px solid @border-color;
            .border-radius;
            color: #848484;
            text-align: center;
            cursor: pointer;
        }
        .uploader-btn-wrap, .invalid-btn {
            display: inline-block;
        }
        .uploader-btn-wrap {
            font-size: 0;
        }
        .upload-file-name {
            margin-left: 8px;
            font-size: 12px;
            color: #adadad;
        }
        .invalid-btn {
            border: 1px solid red;
        }
        .error-message {
            display: inline-block;
            margin-top: 6px;
            color: red;
        }
        .tip-message {
            line-height: 1;
            margin: 16px 0 22px 0;
            font-size: 12px;
            color: #adadad;
        }
        .config-tip-message {
            margin: -18px 0 112px 24px;
        }
        .upload-input {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        .green-link {
            margin-left: 14px;
            color: #1AB394;
            cursor: pointer;
        }
        .yunnex-input {
            padding-left: 10px;
            border: 1px solid @border-color;
            .border-radius;
            outline: none;
            &:focus {
                border-color: #1ab394;
            }
        }
        .right-info-input {
            width: 270px;
            height: 30px;
            color: #bcbcbc;
            .input-effect(#494949, #bcbcbc);
        }
        .date-wrap {
            font-size: 0;
        }
        .com-time, .com-time-unit {
            display: inline-block;
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
            float: none;
            font-size: 12px;
        }
        .operate-btn-area {
            padding: 66px 0 108px 0;
            margin: 0 auto;
            font-size: 0;
            text-align: center;
        }
        .config-operate-btn {
            width: 120px;
            height: 46px;
            line-height: 46px;
            margin-right: 24px;
            &:last-child {
                margin-right: 0;
            }
        }
        .page-btn {
            display: inline-block;
            border: 1px solid @border-color;
           .border-radius;
            font-size: 16px;
            color: #848484;
            text-align: center;
            cursor: pointer;
        }

        .store-list-pop {
            font-size: 0;
        }
        .store-pop-left, .store-pop-right {
            position: relative;
            display: inline-block;
            width: 50%;
            padding: 10px 20px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            text-align: left;
            vertical-align: top;
        }
        .store-pop-left {
            background-color: #f3f3f4;
        }
        .store-pop-right {
            height: 560px;
        }
        .province-select {
            width: 110px;
            height: 30px;
            margin-right: 16px;
            font-size: 12px;
            color: #c2c2c2;
        }
        .search-store-input {
            width: 236px;
            height: 30px;
            margin-top: 16px;
            border: 1px solid #D6D6D6;
            .border-radius;
            font-size: 12px;
            .input-effect(#494949 , #c2cc2);
        }
        .query-btn {
            width: 110px;
            height: 32px;
            line-height: 30px;
            margin-left: 15px;
        }
        .store-list-wrap, .selected-store-wrap {
            height: 400px;
            overflow-y: auto;
        }
        .store-list-wrap {
            margin-top: 16px;
        }
        .store-list {
            height: 40px;
            line-height: 40px;
        }
        .custom-input-widget {
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 1px solid #d3d3d3;
            cursor: pointer;
            vertical-align: middle;
        }
        .custom-input-widget:hover {
            border:2px solid green;
        }
        .custom-input-widget .custom-input {
            display: none;
        }
        .custom-input-widget .custom-input:checked + .custom-widget-label {
            border: none;
            background: url(../images/green.png) no-repeat;
            background-position: -48px 0;
        }
        .custom-input-widget .custom-widget-label {
            display: block;
            height: 100%;
            margin: 0;
            cursor: pointer;
        }
        .custom-input-widget-text {
            margin-left: 16px;
            line-height: 1;
            font-size: 14px;
            color: #494949;
            vertical-align: middle;
        }
        .selected-store-item {
            position: relative;
            height: 46px;
            line-height: 46px;
            border-bottom: 1px solid #e5e5e5;
            color: #494949;
            font-size: 14px;
        }
        .delete-icon {
            position: absolute;
            top: 50%;
            right: 0;
            width: 20px;
            height: 16px;
            line-height: 16px;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            transform: translate(0, -50%);
            font-size: 25px;
            color: darkgray;
            font-style: normal;
            text-align: center;
            cursor: pointer;
        }
        .pop-operate-btn-area {
            position: absolute;
            bottom: 20px;
            right: 0;
        }
        .pop-operate-btn {
            display: inline-block;
            width: 86px;
            height: 32px;
            line-height: 30px;
            border: 1px solid #D6D6D6;
            .border-radius;
            font-size: 12px;
            color: #c2c2c2;
            text-align: center;
            cursor: pointer;
            &:last-child {
                margin: 0 24px 0 12px;
            }
        }
        .green-btn {
            color: #fff;
            background-color: #1ab394;
        }
        .disabled-btn {
            background-color: #D6D6D6;
        }
        .effect-view-wrap {
            padding: 20px;
        }
        .channel-effect-img {
            width: 375px;
            height: 667px;
        }
    }
</style>

<script>
    var pop = require('components/pop/index'),
        uploader = require('components/uploader/index'),
        pickerCss = require('../tmp/datepicker.css'),
        datePicker = require('../tmp/datepicker'),
        extendPicker = require('../tmp/extend-datepicker'),
        yunnexCRBox = require('components/yunnex-cr-box/index'),
        yunnexDialog = require('../components/dialog/index');

    function transformMemberConfig(obj) {
        var rs = Object.create(null);

        rs.shopId = obj.shopId;
        rs.cardStyleId = obj.baseInfoId;
        rs.cardTemplateId = obj.cardTemplateId;
        rs.cardBgImageId = obj.backgroundId;
        rs.cardBgImagePath = obj.backgroundUrl;
        rs.uploadCoverName = obj.backgroudName;
        rs.logoId = obj.logoId;
        rs.logoPath = obj.logoUrl;
        rs.uploadLogoName = obj.logoName;
        rs.cardName = result.title;
        //权益名称
        rs.rightName = obj.title;
        rs.rightStartDate = obj.startDateStr ? formatDate(new Date(obj.startDateStr)) : '';
        rs.rightEndDate = obj.endDateStr ? formatDate(new Date(obj.endDateStr)) : '';
        rs.rightDesc = obj.benefitDesc;
        //投放门店列表id，门店id之间以#分隔
        rs.releaseStoreList = obj.branchIds || [];

        return rs;
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
    function formatDate(date) {
        var year = date.getFullYear(),
            month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
            nowdate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        return year + '-' + month + '-' + nowdate
    }
    function openDialog(context, config) {
        extend(context.dconfig, config);
        context.dconfig.okBtnText = config.okBtnText;
        context.dconfig.cancelBtnText = config.cancelBtnText;
        context.closeDialogCallback = config.cb;
    }

    module.exports = {
        data: function() {
            var uploadBackendUrl = '/saofu-shop-card/customer/config/sendImageToAlipay';
            return {
                checkedCardSyncOption: '',
                isSyncWXConfig: true,
                isSyncAliConfig: false,
                cardSyncConfig: {
                    propertyMap: {
                        key: 'id',
                        val: 'text'
                    },
                    list: [
                        {id: '01', text: '同步到微信卡包', checked: true},
                        {id: '02', text: '同步到支付宝卡包'}
                    ],
                    isSingle: false
                },
                otherInfos: [
                    {name: '会员权益'},
                    {name: '会员主页'},
                    {name: '会员折扣'},
                    {name: '会员卡详情'}
                ],
                memberConfig: transformMemberConfig({}),
                popConfig: {
                    title: '请选择会员卡投放门店',
                    isShow: false
                },
                effectViewConfig: {
                    title: '投放渠道效果预览',
                    isShow: false
                },
                selectedStores: [],
                provinceList: [],
                cityList: [],
                areaList: [],
                storeList: [],
                selectedProvince: '',
                selectedCity: '',
                selectedArea: '',
                searchContent: '',
                logoFileUploaderConfig: {
                    maxSize: 1024 * 1024,
                    backendUrl: uploadBackendUrl,
                    data: {
                        type: 1
                    },
                    btnText: ''
                },
                coverFileUploaderConfig: {
                    maxSize: 2 * 1024 * 1024,
                    backendUrl: uploadBackendUrl,
                    data: {
                        type: 2
                    },
                    btnText: ''
                },
                dconfig: {
                    type: '',
                    icon: '',
                    message: '',
                    isShow: false
                },
                validateInfo: {
                    isSelectLogo: true,
                    isSelectCover: true,
                    isRightDescValid: true,
                    isSelectStore: true,
                    isSelectStartDate: true,
                    isSelectEndDate: true,
                    isEndDateVaild: true,
                    isEndDateLengthVaild: true
                },
                isSwitchMasterCard: iscc === 'Y'
            };
        },
        computed: {
            isSelectAll: function() {
                return this.storeList.length > 0 && (this.selectedStores.length === this.storeList.length);
            }
        },
        methods: {
            handleCardSyncOptionChange: function(data) {
                var self = this,
                    response,
                    flag = false;

                self.isSyncWXConfig = false;
                data.some(function(item) {
                    if(item.id === '01') {
                        self.isSyncWXConfig = true;
                    }
                    if(item.id === '02') {
                        self.$http.post('/saofu-shop-card/customer/isBindAliStore').then(function(res) {
                            response = res.body;
                            if(!response.success) {
                                self.cardSyncConfig.list[1].checked = false;
                                self.isSyncAliConfig = false;
                                openDialog(self, {
                                    type: 'warnConfirm',
                                    icon: 'icon-warn',
                                    message: '无绑定支付宝店铺，请先完成配置',
                                    cancelBtnText: '去配置',
                                    isShow: true,
                                    cb: self.handleNoShop
                                });
                            }else {
                                self.isSyncAliConfig = true;
                            }
                        });
                        flag = true;
                        return true;
                    }
                });
                if(!flag) {
                    self.isSyncAliConfig = false;
                }
            },
            handleNoShop: function(flag) {
                if(flag) {
                    this.dconfig.isShow = false;
                }else {
                    window.open('/saofu-web/syscfg/alipay_store');
                }
            },
            validateLogoFile: function(file) {
                var self = this;

                if(file.error === 'extension' || file.error === 'size') {
                    openDialog(self, {
                        type: 'autoClose',
                        icon: 'icon-err',
                        message: '请上传合适的图片格式，支持格式：jpg、jpeg、png、bmp，且小于1M',
                        isShow: true
                    });
                    setTimeout(function() {
                        self.dconfig.isShow = false;
                    }, 2000)
                }
            },
            handleLogoUploadResult: function(res, file) {
                var self = this;

                if(res.success) {
                    this.memberConfig.logoPath = res.attach.imageUrl;
                    this.memberConfig.logoId = res.attach.imageId;
                    this.validateInfo.isSelectLogo = true;
                    this.memberConfig.uploadLogoName = file.name;
                    this.logoFileUploaderConfig.btnText = '修改';
                }else {
                    openDialog(self, {
                        type: 'autoClose',
                        icon: 'icon-err',
                        message: '上传logo失败:' + res.message,
                        isShow: true
                    });
                    setTimeout(function() {
                        self.dconfig.isShow = false;
                    }, 2000)
                }
            },
            validateCoverFile: function(file) {
                var self = this;

                if(file.error === 'extension' || file.size > 2 * 1024 * 1024) {
                    openDialog(self, {
                        type: 'autoClose',
                        icon: 'icon-err',
                        message: '请上传合适的图片格式，支持格式：jpg、jpeg、png、bmp，且小于2M',
                        isShow: true
                    });
                    setTimeout(function() {
                        self.dconfig.isShow = false;
                    }, 2000)
                }
            },
            handleCoverUploadResult: function(res, file) {
                var self = this;

                if(res.success) {
                    this.memberConfig.cardBgImagePath = res.attach.imageUrl;
                    this.memberConfig.cardBgImageId = res.attach.imageId;
                    this.validateInfo.isSelectCover = true;
                    this.memberConfig.uploadCoverName = file.name;
                    this.coverFileUploaderConfig.btnText = '修改';
                }else {
                    openDialog(self, {
                        type: 'autoClose',
                        icon: 'icon-err',
                        message: '上传封面图失败:' + res.message,
                        isShow: true
                    });
                    setTimeout(function() {
                        self.dconfig.isShow = false;
                    }, 2000)
                }
            },
            showStoreListPop: function() {
                var self = this;

                self.popConfig.isShow = true;
                if(self.storeList.length) {
                    return;
                }
                self.queryStoreList();
            },
            showPreview: function() {
                this.effectViewConfig.isShow = true;
            },
            queryStoreList: function() {
                var self = this,
                    response;

                self.$http.post('/saofu-shop-card/customer/config/queryAlipayBranchs', {
                    province: self.selectedProvince,
                    city: self.selectedCity,
                    area: self.selectedArea,
                    branchName: self.searchContent
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        self.storeList = response.attach;
                        //初始化当前配置所选择的门店列表
                        if(self.memberConfig.releaseStoreList === 'all') {
                            self.storeList.some(function(store) {
                                self.selectedStores.push(store);
                            });
                            return;
                        }
                        if(!self.selectedStores.length) {
                            self.memberConfig.releaseStoreList.forEach(function(item) {
                                self.storeList.some(function(store) {
                                    if(store.branchId === item) {
                                        self.selectedStores.push(store);
                                        return true;
                                    }
                                });
                            });
                        }
                    }else {
                        console.log('获取门店列表失败:' + response.message);
                    }
                });
            },
            selectAllStore: function() {
                if(!this.isSelectAll){
                    this.selectedStores = this.storeList;
                }else{
                    this.selectedStores = [];
                }
            },
            saveConfig: function(isOn) {
                var self = this,
                    shopIds = [];

                self.selectedStores.forEach(function(item) {
                    item = item.branchId || item;
                    shopIds.push(item);
                });
                if(!self.selectedStores.length) {
                    //解决用户没有点击“选择门店”按钮直接保存的情况
                    shopIds = self.memberConfig.releaseStoreList;
                }
                self.memberConfig.rightStartDate = formatDate($('#start-date').datepicker("getDate"));
                self.memberConfig.rightEndDate = formatDate($('#end-date').datepicker("getDate"));

                if(self.isSyncAliConfig && !self.validate()) {
                    return;
                }

                self.isOn = isOn ? 1 : 0;
                if(result && result.showCustomerBalance) {
                    //制作会员卡页面勾选了余额选项
                    if((!result.id && self.isSyncWXConfig) ||
                        (typeof result.id === 'number' && !result.isSyncCardPack)) {
                        if(self.isSyncWXConfig) {
                            //同步到微信卡包
                            result.isSyncCardPack = true;
                            openDialog(self, {
                                type: 'tipConfirm',
                                icon: 'icon-warn',
                                message: '由于微信政策调整，会员卡余额暂时无法同步到微信卡包，是否继续保存？',
                                isShow: true,
                                cb: function(flag) {
                                    self.dconfig.isShow = false;
                                    if(flag) {
                                        setTimeout(function() {
                                            self.submitConfig(shopIds);
                                        }, 0);
                                    }
                                }
                            });
                            return;
                        }
                    }
                }
                self.submitConfig(shopIds);
            },
            submitConfig: function(shopIds) {
                var self = this,
                    ids;

                openDialog(self, {
                    type: 'autoClose',
                    icon: 'icon-warn',
                    message: '会员卡配置中，请勿关闭页面',
                    isShow: true
                });
                if(!self.selectedProvince || !self.selectedCity || !self.selectedArea || !self.searchContent) {
                    ids = shopIds.join('#');
                }else {
                    ids = self.isSelectAll ? 'all' : shopIds.join('#');
                }
                if(self.isOn === 1) {
                    //是否上架标识
                    result.listing = 1;
                }
                self.$http.post('/saofu-shop-card/kq/kasavecard', {
                    voCardWeixin: result,
                    cardAlipayTemplateVo: {
                        backgroundId: self.memberConfig.cardBgImageId,
                        backgroundUrl: self.memberConfig.cardBgImagePath,
                        logoName: self.memberConfig.uploadLogoName,
                        logoId: self.memberConfig.logoId,
                        logoUrl: self.memberConfig.logoPath,
                        backgroudName: self.memberConfig.uploadCoverName,
                        cardShowName: self.memberConfig.cardName,
                        title: self.memberConfig.rightName,
                        startDate: self.memberConfig.rightStartDate,
                        endDate: self.memberConfig.rightEndDate,
                        benefitDesc: self.memberConfig.rightDesc,
                        //门店id之间以#分隔
                        shopIds: ids,
                        cardTemplateId: self.memberConfig.cardTemplateId
                    },
                    iscc: iscc === 'Y',
                    isSyncAlipayCard: self.isSyncAliConfig
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        //弹出保存成功对话框，然后自动跳转到会员设置页面
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-success',
                            message: iscc === 'Y' ? '切换主卡成功' : '配置成功',
                            isShow: true
                        });
                        setTimeout(function() {
                            self.dconfig.isShow = false;
                            window.location.href = '/saofu-shop-card/customer/set';
                        }, 2000);
                    }else {
                        //显示错误信息
                        openDialog(self, {
                            type: 'warnAlert',
                            icon: 'icon-err',
                            message: response.message,
                            isShow: true,
                            cb: self.handleErrorBtnClick
                        });
                        if(response.attach.voCardWeixin) {
                            result.id = response.attach.voCardWeixin.id;
                        }
                        if(response.attach.cardAlipayTemplate) {
                            self.memberConfig.cardTemplateId = response.attach.cardAlipayTemplate.cardTemplateId;
                        }
                    }
                });
            },
            validate: function() {
                //校验数据合法性
                var self = this,
                    validateHandle = {
                        logoPath: function(val) {
                            self.validateInfo.isSelectLogo = !!val;
                            return !!val;
                        },
                        cardBgImagePath: function(val) {
                            self.validateInfo.isSelectCover = !!val;
                            return !!val;
                        },
                        rightDesc: function(val) {
                            if(!!val === false || val.length > 16) {
                                self.validateInfo.isRightDescValid = false;
                                return false;
                            }
                            self.validateInfo.isRightDescValid = true;
                            return true;
                        },
                        releaseStoreList: function(val) {
                            self.validateInfo.isSelectStore = (val.length > 0);
                            return !!val;
                        },
                        rightStartDate: function(val) {
                            self.validateInfo.isSelectStartDate = !!val;
                            return !!val;
                        },
                        rightEndDate: function(val) {
                            var flag;

                            flag = self.validateInfo.isSelectEndDate = !!val;
                            if(new Date(self.memberConfig.rightStartDate).getTime() >= new Date(val)) {
                                flag = self.validateInfo.isEndDateVaild = false;
                            }else if(new Date(self.memberConfig.rightStartDate).setFullYear(
                                new Date(self.memberConfig.rightStartDate).getFullYear() + 1) < (new Date(val)).getTime()) {
                                //开始日期和结束日期之间的时间跨度超过1年
                                flag = self.validateInfo.isEndDateLengthVaild = false;
                                self.validateInfo.isEndDateVaild = true;
                            }else {
                                self.validateInfo.isEndDateVaild = true;
                                self.validateInfo.isEndDateLengthVaild = true;
                            }
                            return flag;
                        }
                    },
                    p,
                    flag = true;

                for(p in self.memberConfig) {
                    if(validateHandle[p]) {
                        if(p === 'releaseStoreList') {
                            if(!validateHandle[p].call(null, self.selectedStores.concat(self.memberConfig[p]))) {
                                flag = false;
                            }
                            continue;
                        }
                        if(!validateHandle[p].call(null, self.memberConfig[p])) {
                            flag = false;
                        }
                    }
                }

                return flag;
            },
            handleErrorBtnClick: function() {
                this.dconfig.isShow = false;
            },
            goPrevious: function() {
                window.history.go(-1);
            },
            cancelConfig: function() {
                var self = this;

                openDialog(self, {
                    type: 'tipConfirm',
                    icon: 'icon-warn',
                    message: '是否放弃本次编辑内容？',
                    isShow: true,
                    cb: self.handleCancelConfig
                });
            },
            handleCancelConfig: function(flag) {
                if(flag) {
                    window.location.href = '/saofu-shop-card/customer/set';
                }else {
                    this.dconfig.isShow = false;
                }
            },
            removeStore: function(evt) {
                var target = evt.target,
                    id,
                    self = this;

                if((' ' + target.className + ' ').indexOf(' delete-icon ') === -1) {
                    return;
                }
                id = target.getAttribute('id');
                self.selectedStores.some(function(item, index) {
                    if(item.branchId == id) {
                        self.selectedStores.splice(index, 1);
                        return true;
                    }
                });
            },
            cancelSelectStore: function() {
                var self = this;

                self.popConfig.isShow = false;
                self.selectedStores = [];
                self.memberConfig.releaseStoreList.forEach(function(item) {
                    self.storeList.some(function(store) {
                        if(store.branchId === item) {
                            self.selectedStores.push(store);
                            return true;
                        }
                    });
                });
            },
            saveSelectedStore: function() {
                if(this.selectedStores.length) {
                    this.popConfig.isShow = false;
                }
                this.validateInfo.isSelectStore = true;
            },
            changeProvince: function() {
                var self = this,
                    response;

                if(!self.selectedProvince) {
                    self.cityList = [];
                    self.selectedCity = '';
                    self.areaList = [];
                    self.selectedArea = '';
                    return;
                }
                self.$http.get('/saofu-shop-card/area/city/list', {
                    params: {
                        provinceCode: self.selectedProvince
                    }
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        self.cityList = [];
                        self.cityList = response.attach;
                    }else {
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-err',
                            message: '请求城市列表接口失败:' + response.message,
                            isShow: true
                        });
                        setTimeout(function() {
                            self.dconfig.isShow = false;
                        }, 2000);
                    }
                });
            },
            changeCity: function() {
                var self = this,
                    response;

                if(!self.selectedCity) {
                    self.areaList = [];
                    self.selectedArea = '';
                    return;
                }
                self.$http.get('/saofu-shop-card/area/district/list', {
                    params: {
                        cityCode: self.selectedCity
                    }
                }).then(function(res) {
                    response = res.body;
                    if(response.success) {
                        self.areaList = [];
                        self.areaList = response.attach;
                    }else {
                        openDialog(self, {
                            type: 'autoClose',
                            icon: 'icon-err',
                            message: '请求区县列表接口失败:' + response.message,
                            isShow: true
                        });
                        setTimeout(function() {
                            self.dconfig.isShow = false;
                        }, 2000);
                    }
                });
            },
            uploadFile: function() {
                this.logoFileUploaderConfig.isStartUpload = true;
            }
        },
        created: function() {
            var self = this,
                response,
                p,
                rs;

            if(typeof result.id === 'number') {
                self.$set(self.cardSyncConfig.list[0], 'checked', result.isSyncCardPack);
            }
            self.$http.post('/saofu-shop-card/customer/isBindAliStore').then(function(res) {
                response = res.body;
                if(!response.success) {
                    self.isSyncAliConfig = false;
                }else {
                    self.$set(self.cardSyncConfig.list[1], 'checked', true);
                    self.isSyncAliConfig = true;
                }
            });
            self.$http.post('/saofu-shop-card/customer/config/queryCardAlipay').then(function(res) {
                response = res.body;
                if(response.success) {
                    if(!response.attach.cardAlipayDto) {
                        response.attach.cardAlipayDto = {};
                    }else {
                        response.attach.cardAlipayDto.branchIds = response.attach.branchIds;
                    }
                    rs = transformMemberConfig(response.attach.cardAlipayDto);
                    for( p in rs) {
                        self.memberConfig[p] = rs[p];
                    }
                    typeof result.id === 'number' && self.$set(self.cardSyncConfig.list[0], 'disabled', true);
                    if(self.memberConfig.shopId) {
                        //如果已经保存过支付宝会员配置信息则同步到支付宝卡包选项不能修改
                        self.$set(self.cardSyncConfig.list[1], 'checked', true);
                        typeof result.id === 'number' && self.$set(self.cardSyncConfig.list[1], 'disabled', true);
                    }
                    if(self.memberConfig.rightStartDate) {
                        self.coverFileUploaderConfig.btnText = '修改';
                        self.logoFileUploaderConfig.btnText = '修改';
                        $('#start-date').datepicker("update", new Date(self.memberConfig.rightStartDate));
                        $('#end-date').datepicker("update", new Date(self.memberConfig.rightEndDate));
                    }
                }
            });
            self.$http.get('/saofu-shop-card/area/province/list').then(function(res) {
                response = res.body;
                if(response.success) {
                    self.provinceList = response.attach;
                }else {
                    openDialog(self, {
                        type: 'autoClose',
                        icon: 'icon-err',
                        message: '获取省份列表接口请求失败:' + response.message,
                        isShow: true
                    });
                    setTimeout(function() {
                        self.dconfig.isShow = false;
                    }, 2000)
                }
            });
        },
        mounted: function() {
            extendPicker.limitPastRUTimes($('#start-date'), $('#end-date'), 100);
        },
        components: {
            pop: pop,
            uploader: uploader,
            'yunnex-dialog': yunnexDialog,
            'yunnex-cr-box': yunnexCRBox
        }
    };
</script>