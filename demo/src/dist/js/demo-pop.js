webpackJsonp([5],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
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
    hotAPI.createRecord("data-v-465006c7", Component.options)
  } else {
    hotAPI.reload("data-v-465006c7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(137),
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
    hotAPI.createRecord("data-v-5ce233dc", Component.options)
  } else {
    hotAPI.reload("data-v-5ce233dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 137:
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5ce233dc", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-demo-dialog"
  }, [_c('span', [_vm._v("我的名字:" + _vm._s(_vm.userName))]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.modifyUserName
    }
  }, [_vm._v("修改")]), _vm._v(" "), _c('pop', {
    attrs: {
      "dialog-config": _vm.config
    }
  }, [_c('div', {
    slot: "pop-content"
  }, [_c('p', [_vm._v("我是弹出框内容")]), _vm._v(" "), _c('span', [_vm._v("姓名：")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputName),
      expression: "inputName"
    }],
    staticClass: "yunnex-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.inputName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "operate-btn-area"
  }, [_c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.saveUserName
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn",
    on: {
      "click": _vm.cancelModify
    }
  }, [_vm._v("取消")])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9874a7da", module.exports)
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9874a7da", Component.options)
  } else {
    hotAPI.reload("data-v-9874a7da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/5/22.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(16),
    frame = __webpack_require__(3);

Vue.use(VueResource);
var t = new Vue({
    el: '#app',
    components: {
        app: page,
        'frameWork': frame
    }
});

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dialog = __webpack_require__(109);

module.exports = dialog;

/***/ }),

/***/ 45:
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

/***/ 65:
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

var yunnexPop = __webpack_require__(108);

module.exports = {
    data: function data() {
        return {
            userName: 'tom',
            inputName: '',
            /*
                设置pop弹框的配置选项对象
                {
                    //弹出框标题，默认为“提示”
                    title: string, 可选
                    //通过控制isShow的值来控制弹出框的关闭、打开。dialog也一样
                    isShow: boolean, 必填
                    //弹出框关闭按钮图标样式class
                    closeClass: string, 可选
                }
             */
            config: {
                title: '修改用户姓名',
                isShow: false
            }
        };
    },
    components: {
        'pop': yunnexPop
    },
    methods: {
        modifyUserName: function modifyUserName() {
            this.config.isShow = true;
        },
        saveUserName: function saveUserName() {
            this.userName = this.inputName;
        },
        cancelModify: function cancelModify() {
            this.config.isShow = false;
        }
    }
};

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[29]);