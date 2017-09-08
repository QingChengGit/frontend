webpackJsonp([2],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-table\\expand-cell.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9788165a", Component.options)
  } else {
    hotAPI.reload("data-v-9788165a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-table\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07f63220", Component.options)
  } else {
    hotAPI.reload("data-v-07f63220", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-table\\yunnex-table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] yunnex-table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-458f5762", Component.options)
  } else {
    hotAPI.reload("data-v-458f5762", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-level-grouping"
  }, [_c('yunnex-table', {
    attrs: {
      "table-titles": _vm.titles,
      "table-data": _vm.tableList
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-001c26e0", module.exports)
  }
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yunnex-table-component"
  }, [_c('table', {
    staticClass: "yunnex-table"
  }, [_c('thead', {
    staticClass: "yunnex-table-thead"
  }, [_c('tr', _vm._l((_vm.tableTitles), function(title, i) {
    return _c('th', {
      style: ({
        'width': title.width
      })
    }, [(typeof title.text === 'function') ? _c('div', {
      staticClass: "yunnex-th-wrap"
    }, [_c('expand-cell', {
      attrs: {
        "render": title.text,
        "index": i
      }
    })], 1) : _c('div', {
      staticClass: "yunnex-th-wrap"
    }, [_vm._v("\n                    " + _vm._s(title.text) + "\n                ")])])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.tableData), function(item, index) {
    return _c('tr', {
      staticClass: "yunnex-table-tr"
    }, _vm._l((_vm.tableTitles), function(t, idx) {
      return _c('td', [(t.render) ? _c('div', {
        staticClass: "yunnex-cell-wrap"
      }, [_c('expand-cell', {
        attrs: {
          "render": t.render,
          "data": item[t.name],
          "row": item,
          "index": index
        }
      })], 1) : _c('div', {
        staticClass: "yunnex-cell-wrap"
      }, [_vm._v("\n                    " + _vm._s(item[t.name]) + "\n                ")])])
    }))
  }))]), _vm._v(" "), (_vm.isShowPagination) ? _c('pagination', {
    attrs: {
      "page-size": _vm.pageSize,
      "current-page": _vm.currentPage,
      "data-count": _vm.dataCount
    },
    on: {
      "jump-to-page": _vm.jumpToPage
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-458f5762", module.exports)
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(122),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-001c26e0", Component.options)
  } else {
    hotAPI.reload("data-v-001c26e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/5/22.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(18),
    frame = __webpack_require__(3);

Vue.use(VueResource);
Vue.http.options.jsonp = 'jsonpcallback';
var t = new Vue({
    el: '#app',
    components: {
        app: page,
        'frameWork': frame
    }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//

module.exports = {
    functional: true,
    render: function render(createElement, context) {
        var params = {
            data: context.props.data,
            rowData: context.props.row,
            index: context.props.index
        };
        return context.props.render(createElement, params);
    }
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var table = __webpack_require__(121);

module.exports = table;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var expand = __webpack_require__(119) /*,
                                      pagination = require('./pagination')*/;

module.exports = {
    data: function data() {
        return {};
    },
    props: {
        tableTitles: {
            type: Object,
            required: true
        },
        tableData: {
            type: Array,
            required: true /*,
                           isShowPagination: {
                              type: Boolean,
                              default: false
                           },
                           pageSize: {
                              type: Number,
                              required: this.isShowPagination
                           },
                           currentPage: {
                              type: Number,
                              default: 1
                           },
                           dataCount: {
                              type: Number
                           },
                           jumpToPage: {
                              type: Function,
                              required: this.isShowPagination
                           }*/
        } },
    components: {
        //在当前组件注册pagination组件
        //pagination: pagination,
        'expand-cell': expand
    }
};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var table = __webpack_require__(120);

module.exports = {
    data: function data() {
        var self = this;
        return {
            /*
                当表格单元格需要调用render来渲染最终输出内容时，请使用vue的render函数来创建输出内容。
                render函数用法参考：https://cn.vuejs.org/v2/guide/render-function.html
             */
            titles: [{
                name: 'appName',
                text: function text(h, params) {
                    return h('i', {
                        'class': 'fa fa-th-large'
                    }, '应用名称');
                },
                width: '14.286%'
            }, {
                name: 'appPackage',
                text: '应用包名',
                width: '14.286%'
            }, {
                name: 'appType',
                text: '应用类型',
                width: '14.286%'
            }, {
                name: 'author',
                text: '所属开发者',
                width: '14.286%'
            }, {
                name: 'crateTime',
                text: '创建日期',
                width: '14.286%'
            }, {
                name: 'slogan',
                text: '应用标语',
                width: '14.286%'
            }, {
                name: 'operate',
                text: '操作',
                width: '14.286%',
                render: function render(h, params) {
                    return h('div', {
                        'class': {
                            'yunnex-btn': true
                        },
                        on: {
                            click: function click() {
                                self.updateApp();
                            }
                        }
                    }, '更新');
                }
            }],
            tableList: [{
                appName: '外卖',
                appPackage: 'yunnex.waimai',
                appType: '掌贝官方应用',
                author: '掌贝',
                crateTime: '2016-03-15',
                slogan: '掌贝外卖让天下没有难送的外卖'
            }, {
                appName: '智能小二',
                appPackage: 'yunnex.intelligencewaiter',
                appType: '掌贝官方应用',
                author: '掌贝',
                crateTime: '2016-06-12',
                slogan: '掌贝智能小二让顾客光临变得更容易'
            }, {
                appName: '商户后台',
                appPackage: 'yunnex.saofu',
                appType: '掌贝官方应用',
                author: '掌贝',
                crateTime: '2015-05-12',
                slogan: '掌贝顾客大数据和智能营销平台'
            }]
        };
    },
    components: {
        'yunnex-table': table
    },
    methods: {
        updateApp: function updateApp() {
            alert('执行updateApp方法了!');
        }
    }
};

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[31]);