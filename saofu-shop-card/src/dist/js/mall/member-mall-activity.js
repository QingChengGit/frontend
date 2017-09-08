webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/7/3.
 */
var util = createEmptyObject(),
    toString = Object.prototype.toString;
(function () {
    var types = ['String', 'Number', 'Object', 'Function', 'Array'],
        i = 0,
        l = types.length;

    for (i; i < l; i++) {
        util['is' + types[i]] = function (_type) {
            return function (val) {
                return toString.call(val) === '[object ' + _type + ']';
            };
        }(types[i]);
    }
})();
function createEmptyObject() {
    return Object.create ? Object.create(null) : {};
}
util.clone = function clone(source, isDeep) {
    var rs, p, l;

    if (util.isArray(source)) {
        l = source.length;
        rs = new Array(l);
        while (l--) {
            rs[l] = clone(source[l], isDeep);
        }
    } else if (util.isObject(source)) {
        if (isDeep) {
            rs = JSON.parse(JSON.stringify(source));
        } else {
            rs = createEmptyObject();
            for (p in source) {
                rs[p] = source[p];
            }
        }
    } else {
        rs = source;
    }

    return rs;
};
util.parseQueryString = function parseQueryString(str) {
    var regUrl = /^[^\?]+\?([\w\W]+)$/,
        regPara = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arrUrl = regUrl.exec(str),
        arrPara,
        strPara,
        rs = {};

    if (arrUrl && arrUrl[1]) {
        strPara = arrUrl[1];
        while ((arrPara = regPara.exec(strPara)) != null) {
            rs[arrPara[1]] = arrPara[2];
        }
    }
    return rs;
};
util.getUrlInfo = function getUrlInfo(url) {
    var a = document.createElement('a'),
        rs = createEmptyObject(),
        protocolMap = {
        'http': 80,
        'https': 443
    };

    a.href = url;
    rs.host = a.host;
    rs.protocol = a.protocol;
    rs.port = a.port || protocolMap[rs.protocol.replace(':', '')];
    rs.pathname = a.pathname;
    rs.hash = a.hash.substr(1);
    rs.origin = a.origin;
    rs.queryObject = this.parseQueryString(url);
    a = null;

    return rs;
};

module.exports = util;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\base-dialog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e65c813", Component.options)
  } else {
    hotAPI.reload("data-v-0e65c813", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
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

module.exports = {
    props: {
        /*
            @desc dialogConfig 对话框配置对象，可配置参数如下：
            {
                //对换框标题文本,默认为"提示" [optional]
                title: '提示',
                //对话框整体样式class [optional]
                dialogClass: 'myDialogClass',
                //对换框title区域的样式类 [optional]
                titleClass: '',
                //关闭按钮的class，如果不设置该属性此无关闭按钮 [optional]
                closeClass: 'myCloseClass',
                //是否显示对话框
                isShow: true
            }
         */
        dialogConfig: {
            type: Object,
            required: true
        }
    },
    computed: {
        titleClass: function titleClass() {
            return this.dialogConfig.titleClass || 'yunnex-dialog-title';
        },
        title: function title() {
            return this.dialogConfig.title || '提示';
        }
    },
    methods: {
        closeDialog: function closeDialog(e) {
            this.close();
        },
        close: function close(flag) {
            this.dialogConfig.isShow = false;
            this.$emit('base-dialog-closing', flag);
        }
    },
    mounted: function mounted() {
        var self = this,
            okBtn = self.$el.querySelector('[ok-btn]'),
            cancelBtn = self.$el.querySelector('[cancel-btn]');

        if (okBtn) {
            okBtn.addEventListener('click', function (e) {
                self.close(true);
            }, false);
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function (e) {
                self.close(false);
            }, false);
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseDialog = __webpack_require__(21);

module.exports = baseDialog;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var yunnexDialog = __webpack_require__(23);

module.exports = yunnexDialog;

/***/ }),
/* 10 */
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
//

var dialog = __webpack_require__(6),
    util = __webpack_require__(3),
    spriteCss = __webpack_require__(15);

module.exports = {
    data: function data() {
        return {
            //组件内部控制对话框关闭的标志
            hideFlag: 0
        };
    },
    props: {
        /*
         dialogConf: {
            dialogType: string [.*Alert|.*Confirm|autoClose|msgBox]任意一种,
            dialogMessage: string, 可选
            //对话框上显示的图标class。比如显示一个成功、失败、错误的图标
            dialogIcon: string, 可选
            //对话框窗右上角关闭按钮的class，如果不设置该选型则对话框右上角无关闭按钮
            closeClass: string, 可选
            okBtnText: string  默认为：确定,
            cancelBtnText: string  默认为：取消,
            //控制对话框的显示、关闭
            isShow: boolean,
            //delayTime,对话框自动关闭的延时时间，如果对话框类型为autoClose才有效
            delayTime: number, 默认为2000毫秒
         }
        */
        dialogConf: {
            type: Object,
            required: true
        }
    },
    computed: {
        innerConf: function innerConf() {
            var rs;

            rs = util.clone(this.dialogConf);
            rs.okBtnText = rs.okBtnText || '确定';
            rs.cancelBtnText = rs.cancelBtnText || '取消';
            rs.dialogType === 'msgBox' && (rs.closeClass = '');
            if (!!this.hideFlag) {
                rs.isShow = false;
                this.hideFlag = 0;
            }

            return rs;
        },
        ensureBtnClass: function ensureBtnClass() {
            return {
                'alert-btn': /^.*Alert/.test(this.dialogConf.dialogType),
                'confirm-btn': /^.*Confirm$/.test(this.dialogConf.dialogType)
            };
        }
    },
    methods: {
        dialogCloseHand: function dialogCloseHand(flag) {
            //对话框关闭的时候触发的回调，如果点击了对话框的确定按钮则flag值为true
            if (this.innerConf.dialogCloseCb) {
                this.innerConf.dialogCloseCb(flag);
            }
            this.hideFlag = (this.hideFlag + 1) % 2;
            this.$emit('close', flag);
        }
    },
    watch: {
        dialogConf: function dialogConf(val, oldVal) {
            var self = this,
                delayTime = val.delayTime || 2000;

            if (val.dialogType === 'autoClose' && val.isShow) {
                setTimeout(function () {
                    self.hideFlag = (self.hideFlag + 1) % 2;
                }, delayTime);
            }
        }
    },
    components: {
        'dialog': dialog
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var yunnexPage = __webpack_require__(25);

module.exports = yunnexPage;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _select = __webpack_require__(27);

module.exports = _select;

/***/ }),
/* 14 */
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

var sprite = __webpack_require__(16);

module.exports = {
    data: function data() {
        return {
            searchText: '',
            selectedItem: null,
            selectData: [],
            isActive: false
        };
    },
    props: {
        selectTitle: {
            type: Object,
            required: true
        },
        sourceData: {
            type: Array,
            required: true
        },
        isShowSearch: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        search: function search() {
            var self = this,
                text = this.searchText.trim(),
                reg;

            self.selectData = [];
            if (text) {
                reg = new RegExp(text, 'i');
                self.sourceData.forEach(function (item, index) {
                    if (reg.test(item[self.selectTitle.text])) {
                        self.selectData.push(item);
                    }
                });
            } else {
                this.selectData = this.sourceData.concat([]);
            }
        },
        selectItem: function selectItem(evt) {
            var target = evt.target,
                id,
                self = this;

            if (self.disabled || !target.hasAttribute('option-id')) {
                return;
            }
            self.searchText = '';
            self.isActive = false;
            id = target.getAttribute('option-id');
            if (self.selectedItem && self.selectedItem[self.selectTitle.name] == id) {
                return;
            }
            self.selectData.some(function (item, index) {
                if (item[self.selectTitle.name] == id) {
                    self.selectedItem = item;
                    self.$emit('input', item[self.selectTitle.name]);
                    self.$emit('select-change', item);
                    return true;
                }
            });
        },
        clickSelector: function clickSelector() {
            if (this.disabled) {
                return;
            }
            this.isActive = !this.isActive;
            this.isActive && (this.selectData = this.sourceData.concat([]));
        },
        closeSelect: function closeSelect(evt) {
            var target = evt.target;

            if (!this.$el.contains(target)) {
                this.isActive = false;
            }
        }
    },
    computed: {
        setSelectedItem: function setSelectedItem() {
            var self = this;

            self.sourceData.some(function (item) {
                if (item.selected) {
                    self.selectedItem = item;
                    self.$emit('input', item[self.selectTitle.name]);
                    //self.$emit('select-change', item);
                    return true;
                }
            });
        }
    },
    mounted: function mounted() {
        document.body.addEventListener('click', this.closeSelect, false);
    },
    beforeDestroy: function beforeDestroy() {
        document.body.removeEventListener('click', this.closeSelect, false);
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(30),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\base-dialog\\dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41dcdb57", Component.options)
  } else {
    hotAPI.reload("data-v-41dcdb57", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\dialog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a57650a2", Component.options)
  } else {
    hotAPI.reload("data-v-a57650a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(31),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\dialog\\platform-dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] platform-dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a70bc7f", Component.options)
  } else {
    hotAPI.reload("data-v-4a70bc7f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
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
    hotAPI.createRecord("data-v-1084d1c8", Component.options)
  } else {
    hotAPI.reload("data-v-1084d1c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(29),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3c433a96",
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
    hotAPI.createRecord("data-v-3c433a96", Component.options)
  } else {
    hotAPI.reload("data-v-3c433a96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-select\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-141dc0c9", Component.options)
  } else {
    hotAPI.reload("data-v-141dc0c9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(28),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-select\\search-select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search-select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-383f4638", Component.options)
  } else {
    hotAPI.reload("data-v-383f4638", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yunnex-select-component"
  }, [_c('div', {
    staticClass: "selected-text",
    class: {
      'disabled': _vm.disabled, 'selected-text-active': _vm.isActive
    },
    on: {
      "click": _vm.clickSelector
    }
  }, [_vm._v("\r\n        " + _vm._s(_vm.selectedItem ? _vm.selectedItem[_vm.selectTitle.text] : '') + "\r\n        "), _c('i', {
    staticClass: "icon-select-arrow select-icon"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "select-item-wrap"
  }, [(_vm.isShowSearch) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchText),
      expression: "searchText"
    }],
    staticClass: "search-input",
    attrs: {
      "type": "text",
      "placeholder": _vm.searchPlaceholder
    },
    domProps: {
      "value": (_vm.searchText)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchText = $event.target.value
      }, _vm.search]
    }
  }) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "option-container",
    on: {
      "click": _vm.selectItem
    }
  }, _vm._l((_vm.selectData), function(item) {
    return _c('li', {
      staticClass: "option-item",
      class: {
        'option-item-selected': _vm.selectedItem &&
          _vm.selectedItem[_vm.selectTitle.name] === item[_vm.selectTitle.name]
      },
      attrs: {
        "option-id": item[_vm.selectTitle.name]
      }
    }, [_vm._v(_vm._s(item[_vm.selectTitle.text]))])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }],
    attrs: {
      "data-tmp": _vm.setSelectedItem
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-383f4638", module.exports)
  }
}

/***/ }),
/* 29 */
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3c433a96", module.exports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogConfig.isShow),
      expression: "dialogConfig.isShow"
    }],
    staticClass: "yunnex-dialog-container"
  }, [_c('div', {
    staticClass: "yunnex-dialog-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "yunnex-dialog",
    class: _vm.dialogConfig.dialogClass
  }, [_c('div', {
    class: _vm.titleClass
  }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n            "), (_vm.dialogConfig.closeClass) ? _c('i', {
    staticClass: "dialog-close",
    class: _vm.dialogConfig.closeClass,
    on: {
      "click": _vm.closeDialog
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-dialog-content"
  }, [_vm._t("dialog-content")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41dcdb57", module.exports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dialog', {
    attrs: {
      "dialog-config": _vm.innerConf
    },
    on: {
      "base-dialog-closing": _vm.dialogCloseHand
    }
  }, [_c('div', {
    staticClass: "dialog-content-wrap",
    slot: "dialog-content"
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.innerConf.dialogIcon),
      expression: "innerConf.dialogIcon"
    }],
    staticClass: "dialog-icon",
    class: _vm.innerConf.dialogIcon
  }), _vm._v(" "), _c('p', {
    staticClass: "dialog-message"
  }, [_vm._v(_vm._s(_vm.innerConf.dialogMessage))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.innerConf.dialogType !== 'autoClose' && _vm.innerConf.dialogType !== 'msgBox'),
      expression: "innerConf.dialogType!=='autoClose' && innerConf.dialogType !== 'msgBox'"
    }],
    staticClass: "dialog-btn-area"
  }, [_c('div', {
    staticClass: "btn",
    class: _vm.ensureBtnClass,
    attrs: {
      "ok-btn": ""
    }
  }, [_vm._v(_vm._s(_vm.innerConf.okBtnText))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (/.*Confirm/.test(_vm.innerConf.dialogType)),
      expression: "/.*Confirm/.test(innerConf.dialogType)"
    }],
    staticClass: "btn",
    attrs: {
      "cancel-btn": ""
    }
  }, [_vm._v(_vm._s(_vm.innerConf.cancelBtnText))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4a70bc7f", module.exports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(60),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\saofu-shop-card\\src\\page-vues\\mall\\member-mall-activity.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] member-mall-activity.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b5b02a6", Component.options)
  } else {
    hotAPI.reload("data-v-8b5b02a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/8/22.
 */
var Vue = __webpack_require__(2),
    VueResource = __webpack_require__(1),
    page = __webpack_require__(32);

Vue.use(VueResource);
var t = new Vue({
    el: '#app',
    components: {
        app: page
    }
});

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dialog = __webpack_require__(53);

module.exports = dialog;

/***/ }),
/* 39 */
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

var pop = __webpack_require__(6);

module.exports = {
    props: {
        dialogConfig: {
            type: Object,
            required: true
        }
    },
    created: function created() {
        //this.dialogConfig.titleClass = 'pop-title';
        this.dialogConfig.closeClass = 'icon-popup-close-white';
    },
    components: {
        pop: pop
    }
};

/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var table = __webpack_require__(56);

module.exports = table;

/***/ }),
/* 42 */
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

var expand = __webpack_require__(54) /*,
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
            required: true
        },
        forKey: {
            type: String
            /*,
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
/* 43 */
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

var yunnexSelect = __webpack_require__(26),
    yunnexTable = __webpack_require__(55),
    yunnexPagination = __webpack_require__(24),
    yunnexDialog = __webpack_require__(22),
    yunnexPop = __webpack_require__(52),
    util = __webpack_require__(3),
    commCss = __webpack_require__(47),
    sprite = __webpack_require__(45),
    sortQueue,
    activityTypeMap = {};

function openDialog(context, config) {
    context.conf = util.clone(config);
    context.conf.isShow = true;
}

function moveData(arr, index, gap) {
    var tmp,
        tarIndex = index + gap;

    if (tarIndex < 0 || tarIndex > arr.length - 1) {
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
    var t, rs;

    t = date.getMonth() + 1;
    t = degreeNumber(t);
    rs = date.getFullYear() + '-' + t;
    t = degreeNumber(date.getDate());
    rs += '-' + t + ' ';
    t = date.getHours();
    t = degreeNumber(t);
    rs += t + ':';
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

    if (isNaN(offset) || mark === 'immediate') {
        //置顶、置底操作、mark为immediate的请求立即发送
        self.cb(name, id, offset);
        return;
    }
    //mark为second表明为被动添加到队列中，不发送请求
    if (!self.timer) {
        if (self.cb && typeof this.cb === 'function') {
            self.timer = setTimeout(function () {
                self.activityQueue.forEach(function (item) {
                    if (item.offset !== 0) {
                        if (!item.mark || item.mark && item.mark === 'first') {
                            self.cb(item.name, item.id, item.offset);
                        }
                    }
                });
                self.timer = null;
                self.activityQueue = [];
            }, 3000);
        }
    }
    self.activityQueue.some(function (item, index) {
        if (item.id === id) {
            self.activityQueue[index].offset += offset;
            self.activityQueue[index].mark = mark;
            flag = true;
            return true;
        }
    });
    if (!flag) {
        self.activityQueue.push({ name: name, id: id, offset: offset, mark: mark });
    }
};
module.exports = {
    data: function data() {
        var self = this;

        return {
            activityName: '',
            activityType: '',
            activityStatus: '',
            curActivity: null,
            activityTypeData: [{ key: '', value: '全部' }],
            activityStatusData: [{ key: '', value: '全部' }],
            selectTitle: {
                name: 'key',
                text: 'value'
            },
            tableTitles: [{ name: 'name', text: '兑换活动', width: '17%', render: function render(h, params) {
                    return h('div', [h('img', { attrs: { src: params.rowData.frontImgUrl }, 'class': 'activity-img' }), h('span', { 'class': 'activity-name-text', domProps: { innerHTML: params.data } })]);
                } }, { name: 'contentType', text: '类型', width: '6%', render: function render(h, params) {
                    return h('span', activityTypeMap[params.data]);
                } }, { name: 'exchangeBonus', text: '兑换价值', width: '7%' }, { name: 'exchangeNum', text: '已兑换量', width: '7%' }, { name: 'quantity', text: '余量', width: '6%' }, { name: 'beginTime', text: '开始时间', width: '14%', render: function render(h, params) {
                    return h('span', formatDate(new Date(params.data)));
                } }, { name: 'endTime', text: '结束时间', width: '14%', render: function render(h, params) {
                    return h('span', formatDate(new Date(params.data)));
                } }, { name: 'status', text: '状态', width: '10%', render: function render(h, params) {
                    var statusArr = [{ id: 0, text: '可兑换' }, { id: 2, text: '售罄' }, { id: 3, text: '下架' }],
                        otherStatusMap = {
                        1: '未开始',
                        4: '过期'
                    },
                        status = params.data;

                    if (status === 0 || status === 3) {
                        statusArr.splice(1, 1);
                    } else if (status !== 2) {
                        return h('span', { 'class': 'activity-status-text', domProps: {
                                innerHTML: otherStatusMap[status]
                            } });
                    }
                    statusArr.some(function (item, index) {
                        if (item.id === status) {
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
                            'select-change': function selectChange(item) {
                                self.changeActivityStatus(item.id, params.rowData);
                            }
                        }
                    });
                } }, { name: 'operate', text: '操作', width: '20%', render: function render(h, params) {
                    var upClass = 'move-green-icon',
                        downClass = upClass,
                        idx;

                    if (params.rowData.status !== 4) {
                        //状态为未过期
                        idx = self.pageSize * (self.curPage - 1) + params.index;
                        if (idx + 1 === self.orderMaxNo) {
                            downClass = 'move-gray-icon';
                        } else if (idx + params.index === 0) {
                            upClass = 'move-gray-icon';
                        }
                        return h('div', [h('a', {
                            attrs: {
                                'href': '/saofu-shop-card/member/mall/activity/edit?id=' + params.rowData.id,
                                'class': 'edit-link'
                            },
                            domProps: {
                                innerHTML: '编辑'
                            }
                        }), h('div', { 'class': upClass, on: { click: function click() {
                                    self.movePosition(params.rowData, 'up', params.index);
                                } } }, [h('i', { 'class': 'icon-up' })]), h('div', { 'class': upClass, on: { click: function click() {
                                    self.movePosition(params.rowData, 'top', params.index);
                                } } }, [h('i', { 'class': 'icon-move-top' })]), h('div', { 'class': downClass, on: { click: function click() {
                                    self.movePosition(params.rowData, 'down', params.index);
                                } } }, [h('i', { 'class': 'icon-down' })]), h('div', { 'class': downClass, on: { click: function click() {
                                    self.movePosition(params.rowData, 'bottom', params.index);
                                } } }, [h('i', { 'class': 'icon-move-bottom' })])]);
                    }
                    return h('span', '');
                } }],
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
        queryActivity: function queryActivity(param, cb) {
            var self = this,
                response;

            self.$http.post('/saofu-shop-card/member/mall/activity/list', param).then(function (res) {
                response = res.body;
                if (response.success) {
                    self.orderMaxNo = response.entry.orderMaxNo;
                    self.orderMinNo = response.entry.orderMinNo;
                    self.tableList = response.entry.activeList;
                    self.dataCount = response.entry.pageInfo.totalRows;
                    cb && cb(self.tableList);
                } else {
                    openDialog(self, {
                        dialogType: 'autoClose',
                        dialogMessage: '查询活动列表失败:' + response.message,
                        dialogIcon: 'icon-error'
                    });
                }
            });
        },
        queryActivityByCondition: function queryActivityByCondition() {
            var self = this;

            self.queryActivity({
                name: self.activityName,
                contentType: self.activityType,
                status: self.activityStatus,
                currentPage: 1,
                pageSize: self.pageSize
            });
        },
        createActivity: function createActivity() {
            window.location.href = '/saofu-shop-card/member/mall/activity/add';
        },
        changeActivityStatus: function changeActivityStatus(status, activity) {
            var originStatus = activity.status,
                amount = activity.quantity,
                self = this;

            if (status == 3) {
                //下架
                openDialog(self, {
                    dialogType: 'tipConfirm',
                    dialogMessage: '确定要下架该兑换活动吗?下架的内容将不会在微信积分商城展示!',
                    dialogIcon: 'icon-warn',
                    dialogCloseCb: function dialogCloseCb(flag) {
                        if (flag) {
                            self.offActivity(activity.id, originStatus);
                        } else {
                            self.tableList.some(function (item, index) {
                                if (item.id === activity.id) {
                                    self.tableList[index].status = originStatus + 1;
                                    self.tableList[index].status = originStatus;
                                    return true;
                                }
                            });
                        }
                    }
                });
            } else if (status == 0) {
                //重新上架
                if (originStatus == 2) {
                    //活动本身为售罄状态
                    self.curActivity = activity;
                    self.popConfig.isShow = true;
                } else if (originStatus == 3) {
                    if (amount > 0) {
                        openDialog(self, {
                            dialogType: 'tipConfirm',
                            dialogMessage: '确定要恢复该兑换活动吗?',
                            dialogIcon: 'icon-warn',
                            dialogCloseCb: function dialogCloseCb(flag) {
                                if (flag) {
                                    self.recoveryActivity(activity.id);
                                } else {
                                    self.tableList.some(function (item, index) {
                                        if (item.id === activity.id) {
                                            self.tableList[index].status = originStatus + 1;
                                            self.tableList[index].status = originStatus;
                                            return true;
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        //活动奖品对换余量为0
                        self.curActivity = activity;
                        self.popConfig.isShow = true;
                    }
                }
            }
        },
        offActivity: function offActivity(id, originStatus) {
            var response,
                self = this;

            self.$http.post('/saofu-shop-card/member/mall/activity/offshelf', {
                id: id
            }).then(function (res) {
                response = res.body;
                if (response.success) {
                    openDialog(self, {
                        dialogType: 'autoClose',
                        dialogMessage: '下架成功!',
                        dialogIcon: 'icon-success'
                    });
                } else {
                    self.tableList.some(function (item, index) {
                        if (item.id === id) {
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
        recoveryActivity: function recoveryActivity(id, activityAmount) {
            var response,
                self = this;

            self.$http.post('/saofu-shop-card/member/mall/activity/recovery', {
                id: id,
                quantity: activityAmount
            }).then(function (res) {
                response = res.body;
                if (response.success) {
                    openDialog(self, {
                        dialogType: 'autoClose',
                        dialogMessage: '恢复成功!',
                        dialogIcon: 'icon-success'
                    });
                } else {
                    self.tableList.some(function (item, index) {
                        if (item.id === id) {
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
        doRecoveryActivity: function doRecoveryActivity() {
            if (!this.curActivity) {
                return;
            }
            if (!this.activityAmount || !/\d+/.test(this.activityAmount)) {
                this.$set(this.errorInfo, 'activityAmount', '请输入合法的数字!');
                return;
            }
            this.$set(this.errorInfo, 'activityAmount', '');
            this.recoveryActivity(this.curActivity.id, this.activityAmount);
            this.popConfig.isShow = false;
        },
        closePop: function closePop() {
            var originStatus = this.curActivity.status,
                self = this;

            this.activityAmount = '';
            this.$set(this.errorInfo, 'activityAmount', '');
            this.tableList.some(function (item, index) {
                if (item.id === self.curActivity.id) {
                    self.tableList[index].status = originStatus + 1;
                    self.tableList[index].status = originStatus;
                    return true;
                }
            });
            this.popConfig.isShow = false;
        },
        handlePageChange: function handlePageChange(page) {
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
        movePosition: function movePosition(item, type, index) {
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

            if (gap === '-1' || gap === 'head') {
                direction = 'up';
            } else {
                direction = 'down';
            }
            if (preIndex + index + 1 >= this.orderMaxNo && direction === 'down' || preIndex + index <= 0 && direction === 'up') {
                //活动位于排序中的顶部或者底部
                return;
            }

            if (gap === 'head') {
                p = 1;
            } else if (gap === 'end') {
                p = Math.ceil(this.orderMaxNo / this.pageSize);
            }

            if (p && this.curPage !== p || index === 0 && direction === 'up' || index === this.pageSize - 1 && direction === 'down') {
                moveGap = parseInt(gap, 10);
                if (isNaN(moveGap)) {
                    moveGap = gap;
                }
                sortQueue.flushSortQueue(item.name, item.id, moveGap, 'immediate');
                if (!p) {
                    p = self.curPage + parseInt(gap, 10);
                }
                //需要进行跳页处理
                this.queryActivity({
                    name: self.activityName,
                    contentType: self.activityType,
                    status: self.activityStatus,
                    currentPage: p,
                    pageSize: self.pageSize
                }, function (arr) {
                    self.curPage = p;
                    if (gap === '-1') {
                        arr.pop();
                        arr.push(item);
                    } else if (gap === '1') {
                        arr.shift();
                        arr.unshift(item);
                    } else if (gap === 'head') {
                        if (arr[0] && arr[0].id !== item.id) {
                            arr.unshift(item);
                            arr.pop();
                        }
                    } else {
                        if (arr[self.orderMaxNo % self.pageSize - 1] && arr[self.orderMaxNo % self.pageSize - 1].id !== item.id) {
                            arr.shift();
                            arr.splice(self.orderMaxNo % self.pageSize - 1, 0, item);
                        }
                    }
                    self.tableList = arr;
                });
                return;
            }
            if (!p) {
                gap = parseInt(gap, 10);
                moveGap = gap;
                if (direction === 'up') {
                    nextItem = this.tableList[index - 1];
                    //相对于当前记录的前一条记录的gap应该为-1
                    nextItemGap = 1;
                } else {
                    nextItem = this.tableList[index + 1];
                    nextItemGap = -1;
                }
                sortQueue.flushSortQueue(item.name, item.id, gap, 'first');
                sortQueue.flushSortQueue(nextItem.name, nextItem.id, nextItemGap, 'second');
                this.tableList = moveData(this.tableList.concat(), index, moveGap);
            } else {
                sortQueue.flushSortQueue(item.name, item.id, gap);
                //对活动进行置顶或者置底操作
                if (p === 1 && direction === 'up') {
                    self.tableList.unshift(item);
                    self.tableList.splice(index + 1, 1);
                } else {
                    self.tableList.splice(index, 1);
                    self.tableList.splice(self.orderMaxNo % self.pageSize - 1, 0, item);
                }
            }
        },
        orderActivity: function orderActivity(name, id, offset) {
            var self = this,
                response;

            self.$http.post('/saofu-shop-card/member/mall/activity/order', {
                activeId: id,
                offSet: offset
            }).then(function (res) {
                response = res.body;
                if (!response.success) {
                    openDialog(self, {
                        dialogType: 'tipAlert',
                        dialogMessage: name + ',活动排序失败:' + response.message,
                        dialogIcon: 'icon-error'
                    });
                }
            });
        }
    },
    created: function created() {
        var self = this,
            response;

        self.$http.post('/saofu-shop-card/member/mall/activity/enum_list').then(function (res) {
            response = res.body;
            if (response.success) {
                self.activityTypeData = self.activityTypeData.concat(response.entry.contentTypes);
                self.activityStatusData = self.activityStatusData.concat(response.entry.activityStatus);
                self.activityTypeData.forEach(function (item) {
                    activityTypeMap[item.key] = item.value;
                });
            } else {
                openDialog(self, {
                    dialogType: 'tipAlert',
                    dialogMessage: '查询活动类型、状态接口失败:' + response.message,
                    dialogIcon: 'icon-error'
                });
            }
        }).then(function () {
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

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\pop\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17d6c340", Component.options)
  } else {
    hotAPI.reload("data-v-17d6c340", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\pop\\platform-pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] platform-pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73537f4e", Component.options)
  } else {
    hotAPI.reload("data-v-73537f4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
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
    hotAPI.createRecord("data-v-2004181a", Component.options)
  } else {
    hotAPI.reload("data-v-2004181a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
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
    hotAPI.createRecord("data-v-47426912", Component.options)
  } else {
    hotAPI.reload("data-v-47426912", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(58),
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
    hotAPI.createRecord("data-v-52cb9cfb", Component.options)
  } else {
    hotAPI.reload("data-v-52cb9cfb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 57 */,
/* 58 */
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
      key: item[_vm.forKey],
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-52cb9cfb", module.exports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    attrs: {
      "dialog-config": _vm.dialogConfig
    }
  }, [_c('div', {
    slot: "dialog-content"
  }, [_vm._t("pop-content")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73537f4e", module.exports)
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-mall-activity"
  }, [_c('div', {
    staticClass: "query-area"
  }, [_c('div', {
    staticClass: "query-item"
  }, [_c('span', {
    staticClass: "query-text"
  }, [_vm._v("活动名称：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.activityName),
      expression: "activityName"
    }],
    staticClass: "yunnex-input activity-name",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.activityName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.activityName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "query-item"
  }, [_c('span', {
    staticClass: "query-text"
  }, [_vm._v("活动类型：")]), _vm._v(" "), _c('yunnex-select', {
    attrs: {
      "source-data": _vm.activityTypeData,
      "select-title": _vm.selectTitle
    },
    model: {
      value: (_vm.activityType),
      callback: function($$v) {
        _vm.activityType = $$v
      },
      expression: "activityType"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "query-item"
  }, [_c('span', {
    staticClass: "query-text"
  }, [_vm._v("活动状态：")]), _vm._v(" "), _c('yunnex-select', {
    attrs: {
      "source-data": _vm.activityStatusData,
      "select-title": _vm.selectTitle
    },
    model: {
      value: (_vm.activityStatus),
      callback: function($$v) {
        _vm.activityStatus = $$v
      },
      expression: "activityStatus"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "activity-btn query-btn green-btn",
    on: {
      "click": _vm.queryActivityByCondition
    }
  }, [_vm._v("查询")])]), _vm._v(" "), _c('div', {
    staticClass: "add-activity-area"
  }, [_c('div', {
    staticClass: "activity-btn green-btn",
    on: {
      "click": _vm.createActivity
    }
  }, [_vm._v("新建兑换")]), _vm._v(" "), _c('div', {
    staticClass: "desc-message"
  }, [_vm._v("下架及过期的内容将不会在微信积分商城展示")])]), _vm._v(" "), _c('yunnex-table', {
    attrs: {
      "table-titles": _vm.tableTitles,
      "table-data": _vm.tableList
    }
  }), _vm._v(" "), _c('yunnex-pagination', {
    attrs: {
      "data-count": _vm.dataCount,
      "page-size": _vm.pageSize,
      "now-page": _vm.curPage
    },
    on: {
      "change": _vm.handlePageChange
    }
  }), _vm._v(" "), _c('yunnex-dialog', {
    attrs: {
      "dialog-conf": _vm.conf
    }
  }), _vm._v(" "), _c('yunnex-pop', {
    attrs: {
      "dialog-config": _vm.popConfig
    }
  }, [_c('div', {
    staticClass: "pop-content-wrap",
    slot: "pop-content"
  }, [_c('p', {
    staticClass: "tip-text"
  }, [_vm._v("该活动兑换余量为0，无法恢复兑换")]), _vm._v(" "), _c('span', [_vm._v("请添加兑换数量：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.activityAmount),
      expression: "activityAmount"
    }],
    staticClass: "yunnex-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.activityAmount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.activityAmount = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errorInfo.activityAmount),
      expression: "errorInfo.activityAmount"
    }],
    staticClass: "error-msg"
  }, [_vm._v(_vm._s(_vm.errorInfo.activityAmount))]), _vm._v(" "), _c('div', {
    staticClass: "operate-btn-area"
  }, [_c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.doRecoveryActivity
    }
  }, [_vm._v("保存并恢复")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn",
    on: {
      "click": _vm.closePop
    }
  }, [_vm._v("取消")])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8b5b02a6", module.exports)
  }
}

/***/ })
],[36]);