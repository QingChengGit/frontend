webpackJsonp([10],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(124),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0809dbf6", Component.options)
  } else {
    hotAPI.reload("data-v-0809dbf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-demo-dialog"
  }, [_c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.showAlertDialog
    }
  }, [_vm._v("Alert框")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.showConfirmDialog
    }
  }, [_vm._v("Confirm框")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.showAutoCloseDialog
    }
  }, [_vm._v("AutoClose框")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn green-btn",
    on: {
      "click": _vm.showMsgBoxDialog
    }
  }, [_vm._v("MsgBox框")]), _vm._v(" "), _c('yunnex-dialog', {
    attrs: {
      "dialog-conf": _vm.conf
    },
    on: {
      "close": _vm.closeDialogHandle
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0809dbf6", module.exports)
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/5/22.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(12),
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

/***/ 61:
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

var yunnexDialog = __webpack_require__(8),
    util = __webpack_require__(4);

function openDialog(context, config) {
    context.conf = util.clone(config);
    context.conf.isShow = true;
}
module.exports = {
    data: function data() {
        return {
            /*
                 对话框配置对象选项
                 dialogConf: {
                 dialogType: string [.*Alert|.*Confirm|autoClose|msgBox]任意一种, 必填
                 dialogMessage: string, 可选
                 //对话框上显示的图标class。比如显示一个成功、失败、错误的图标
                 dialogIcon: string, 可选
                 //对话框窗右上角关闭按钮的class，如果不设置该选型则对话框右上角无关闭按钮
                 closeClass: string, 可选
                 okBtnText: string  默认为：确定,
                 cancelBtnText: string  默认为：取消,
                 //控制对话框的显示、关闭
                 isShow: boolean, 必填
                 //delayTime,对话框自动关闭的延时时间，如果对话框类型为autoClose才有效
                 delayTime: number, 默认为2000毫秒
             }
             */
            conf: {
                dialogType: '',
                dialogMessage: '',
                dialogIcon: '',
                okBtnText: '',
                isShow: false
            }
        };
    },
    components: {
        'yunnex-dialog': yunnexDialog
    },
    methods: {
        showAlertDialog: function showAlertDialog() {
            openDialog(this, {
                dialogType: 'tipAlert',
                dialogMessage: '我是一个Alert提示消息!',
                dialogIcon: 'icon-warn',
                okBtnText: '我是自定义按钮文字'
            });
        },
        showConfirmDialog: function showConfirmDialog() {
            openDialog(this, {
                dialogType: 'tipConfirm',
                dialogMessage: '我是一个Confirm提示消息!',
                dialogIcon: 'icon-error'
            });
        },
        showAutoCloseDialog: function showAutoCloseDialog() {
            openDialog(this, {
                dialogType: 'autoClose',
                dialogMessage: '我是一个自动关闭对话框的提示消息!',
                dialogIcon: 'icon-success'
            });
        },
        showMsgBoxDialog: function showMsgBoxDialog() {
            var self = this,
                config = {
                dialogType: 'msgBox',
                dialogMessage: '我是一个不能手动、自动关闭只能通过程序来关闭的对话框!',
                dialogIcon: 'icon-success'
            };

            openDialog(this, config);
            setTimeout(function () {
                //关闭窗口
                config.isShow = false;
                self.conf = config;
            }, 2000);
        },
        closeDialogHandle: function closeDialogHandle(flag) {
            //对话框关闭的时候触发的回调，如果点击了对话框的确定按钮则flag值为true
            var o = {
                dialogType: 'autoClose',
                dialogMessage: '你点击了!',
                dialogIcon: 'icon-success',
                //默认2秒关闭
                delayTime: 1000
            },
                self = this;

            if (flag) {
                o.dialogMessage += '确定按钮!';
            } else {
                o.dialogMessage += '取消或者关闭按钮!';
            }
            openDialog(this, o);
        }
    }
};

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[25]);