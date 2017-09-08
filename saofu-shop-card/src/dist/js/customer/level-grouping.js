webpackJsonp([5],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/5/22.
 */
var sprite = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../css/customer/sprite.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    Vue = __webpack_require__(2),

//tipDirective = require('../directives/tip.js'),
VueResource = __webpack_require__(1),
    page = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../page-vues/level-grouping\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

Vue.use(VueResource);
/* 可以设置为系统的ctx的值 */
//Vue.http.options.root = ctx;
Vue.http.options.responseType = 'json';
Vue.http.options.headers = {
    'Content-Type': 'text/plain;charset=utf-8'
};
//Vue.http.options.dataType = 'json';
var t = new Vue({
    el: '#app',
    components: {
        app: page
    }
});

/***/ })

},[35]);