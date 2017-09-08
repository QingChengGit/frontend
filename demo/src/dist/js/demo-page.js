webpackJsonp([6],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-page\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5399a883", Component.options)
  } else {
    hotAPI.reload("data-v-5399a883", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(130),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-25d1ef24",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-page\\page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25d1ef24", Component.options)
  } else {
    hotAPI.reload("data-v-25d1ef24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pagination-component"
  }, [_c('ul', {
    staticClass: "page-num",
    attrs: {
      "onselectstart": "return false;"
    }
  }, [_c('li', {
    staticClass: "shou-page",
    class: {
      'no-active': _vm.isStartPage
    },
    on: {
      "click": _vm.onePage
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('li', {
    staticClass: "prev-page",
    class: {
      'no-active': _vm.isStartPage
    },
    on: {
      "click": _vm.prevPage
    }
  }, [_vm._v("上一页")]), _vm._v(" "), _vm._l((_vm.pageArr), function(val, index) {
    return _c('li', {
      key: index,
      class: {
        'page-active': _vm.isPageAce == val
      },
      on: {
        "click": function($event) {
          _vm.pageClick(val)
        }
      }
    }, [_vm._v(" " + _vm._s(val <=
      0 ? '....' : val) + " ")])
  }), _vm._v(" "), _c('li', {
    staticClass: "prev-page",
    class: {
      'no-active': _vm.isEndPage
    },
    on: {
      "click": _vm.nextPage
    }
  }, [_vm._v("下一页")]), _vm._v(" "), _c('li', {
    staticClass: "shou-page",
    class: {
      'no-active': _vm.isEndPage
    },
    on: {
      "click": _vm.endPage
    }
  }, [_vm._v("尾页")])], 2), _vm._v(" "), (_vm.isGreaterFifteen) ? _c('div', {
    staticClass: "right-elevator"
  }, [_c('div', {
    staticClass: "elevator-main"
  }, [_c('span', [_vm._v("到第")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.pageNum),
      expression: "pageNum",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "page-input",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.pageNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.pageNum = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("页")]), _vm._v(" "), _c('button', {
    staticClass: "page-btn",
    on: {
      "click": _vm.pageBtn
    }
  }, [_vm._v("确定")])])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-25d1ef24", module.exports)
  }
}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-demo-page"
  }, [_c('yunnex-page', {
    attrs: {
      "data-count": _vm.dataCount,
      "page-size": _vm.pageSize,
      "now-page": _vm.nowPage
    },
    on: {
      "change": _vm.changePage
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-58395986", module.exports)
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(135),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58395986", Component.options)
  } else {
    hotAPI.reload("data-v-58395986", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import Vue from 'vue';


var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(15),
    frame = __webpack_require__(3);

Vue.use(VueResource);
Vue.http.options.jsonp = 'jsonpcallback';

new Vue({
    el: '#app',
    components: {
        app: page,
        'frameWork': frame
    }
});

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var yunnexPage = __webpack_require__(117);

module.exports = yunnexPage;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        'dataCount': {
            type: Number,
            required: true
        },
        'pageSize': {
            type: Number,
            default: 10
        },
        'nowPage': {
            type: Number,
            default: 1
        }
    },
    data: function data() {
        return {
            pageCount: '', // 总页码
            everyPageSize: '',
            curPage: '', // 当前页
            nowShowPage: 9, // 每次切换的页码
            pageNum: '',
            isGreaterFifteen: false
        };
    },
    mounted: function mounted() {
        this.curPage = this.nowPage;
        this.everyPageSize = this.pageSize;
        this.pageCount = Math.ceil(this.dataCount / this.everyPageSize);
        if (this.pageCount >= 15) {
            this.isGreaterFifteen = true;
        }
    },

    watch: {
        'dataCount': function dataCount(n, o) {
            this.pageCount = Math.ceil(n / this.everyPageSize);
            if (this.pageCount >= 15) {
                this.isGreaterFifteen = true;
            }
        },
        'nowPage': function nowPage(n, o) {
            this.curPage = n;
        }
    },
    computed: {
        pageArr: function pageArr() {
            var startL = 1,
                endR = this.pageCount,
                tempArr = [];
            if (this.pageCount > this.nowShowPage) {
                if (this.curPage > 4 && this.curPage < this.pageCount - 4) {
                    startL = this.curPage - 4;
                    endR = this.curPage + 4;
                } else {
                    if (this.curPage <= 4) {
                        startL = 1;
                        endR = 9;
                    } else {
                        startL = this.pageCount - 8;
                        endR = this.pageCount;
                    }
                }
            }
            while (startL <= endR) {
                tempArr.push(startL);
                startL++;
            }
            if (tempArr[0] > 1) {
                tempArr[0] = 1;
                tempArr[1] = -1;
            }
            if (tempArr[tempArr.length - 1] < this.pageCount) {
                tempArr[tempArr.length - 1] = this.pageCount;
                tempArr[tempArr.length - 2] = 0;
            }
            return tempArr;
        },
        isPageAce: function isPageAce() {
            return this.curPage;
        },
        isStartPage: function isStartPage() {
            if (this.curPage == 1) {
                return true;
            } else {
                return false;
            }
        },
        isEndPage: function isEndPage() {
            if (this.curPage == this.pageCount) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        pageClick: function pageClick(val) {
            console.log(val);
            if (val > 0) {
                this.curPage = val;
            }
            if (val == 0) {
                this.curPage += 4;
            }
            if (val == -1) {
                this.curPage -= 4;
            }
            this.$emit('change', this.curPage);
        },
        onePage: function onePage() {
            if (this.curPage <= 1) {
                return;
            }
            this.pageClick(1);
        },
        prevPage: function prevPage() {
            if (this.curPage <= 1) {
                return;
            }
            this.pageClick(this.curPage - 1);
        },
        nextPage: function nextPage() {
            if (this.curPage >= this.pageCount) {
                return;
            }
            this.pageClick(this.curPage + 1);
        },
        endPage: function endPage() {
            if (this.curPage >= this.pageCount) {
                return;
            }
            this.pageClick(this.pageCount);
        },
        pageBtn: function pageBtn() {
            var r = /^\+?(0|[1-9][0-9]*)$/;
            if (!r.test(this.pageNum)) {
                this.pageClick(1);
            } else {
                if (this.pageNum > this.pageCount) {
                    this.pageClick(this.pageCount);
                } else if (this.pageNum <= 1) {
                    this.pageClick(1);
                } else {
                    this.pageClick(this.pageNum);
                }
            }
        }
    }
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(116);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            dataCount: 230, // 总条数
            pageSize: 10, // 每页显示的条数
            nowPage: 1 // 当前页
        };
    },

    components: {
        'yunnex-page': _index2.default
    },
    methods: {
        changePage: function changePage(num) {
            // 在分页组件中把当前的页码传过来
            console.log(num);
            return this.nowPge = num;
        }
    }
}; //
//
//
//
//
//
//

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[28]);