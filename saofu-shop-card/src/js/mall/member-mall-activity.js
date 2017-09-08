/**
 * Created by liuxinxin on 2017/8/22.
 */
var Vue = require('vue'),
    VueResource = require('vue-resource'),
    page = require('../../page-vues/mall/member-mall-activity');

Vue.use(VueResource);
var t = new Vue({
    el: '#app',
    components: {
        app: page
    }
});