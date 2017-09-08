/**
 * Created by liuxinxin on 2017/8/14.
 */
var Vue = require('vue'),
    VueResource = require('vue-resource'),
    page = require('../../page-vues/promotion/my-marketing-campaign');

Vue.use(VueResource);
var t = new Vue({
    el: '#app',
    components: {
        app: page
    }
});