/**
 * Created by liuxinxin on 2017/7/10.
 */
var sprite = require('../../css/customer/sprite.css'),
    Vue = require('vue'),
    VueResource = require('vue-resource'),
    page = require('../../page-vues/ali-member-config');

Vue.use(VueResource);
/* 可以设置为系统的ctx的值 */
//Vue.http.options.root = ctx;
Vue.http.options.responseType = 'json';
/*Vue.http.options.headers = {
    'Content-Type': 'text/plain;charset=utf-8'
};*/
var t = new Vue({
    el: '#app',
    components: {
        app: page
    }
});