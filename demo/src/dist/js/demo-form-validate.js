webpackJsonp([7],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-form-validate"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "yunnex-input",
    attrs: {
      "type": "text",
      "name": "username",
      "validate-rule": "required;len:5",
      "validate-message": "请输入用户名,长度为5位!"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  }), _vm._v(" "), _c('yunnex-select', {
    attrs: {
      "name": "langType",
      "source-data": _vm.typeList,
      "select-title": _vm.selectTitle,
      "validate-rule": "required",
      "validate-message": "请选择类型!",
      "data-value": _vm.selectType
    },
    model: {
      value: (_vm.selectType),
      callback: function($$v) {
        _vm.selectType = $$v
      },
      expression: "selectType"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "yunnex-input",
    attrs: {
      "type": "text",
      "name": "pwd",
      "custom-rule": "checkPassword",
      "validate-rule": "required",
      "validate-message": "请输入密码!;密码必须包含数字、字符"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.errorInfo.isValid),
      expression: "!errorInfo.isValid"
    }]
  }, [_vm._v("\n        " + _vm._s(_vm.errorInfo.info && _vm.errorInfo.info.langType) + "\n        " + _vm._s(_vm.errorInfo.info && _vm.errorInfo.info.pwd) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-53da1241", module.exports)
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-form-validate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-form-validate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53da1241", Component.options)
  } else {
    hotAPI.reload("data-v-53da1241", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/8/11.
 */
var validateStrategy = {
    required: function required(val) {
        if (typeof val === 'undefined' || !val.trim().length) {
            return false;
        }
        return true;
    },
    len: function len(val, l) {
        if (typeof val === 'undefined' || val.toString().trim().length != l) {
            return false;
        }
        return true;
    }
};
function FormValidate(ctx) {
    this.context = ctx || null;
    this.validateRuleArr = [];
    this.errorInfo = Object.create(null);
}

FormValidate.prototype.init = function init(el) {
    var element = typeof el === 'string' ? document.querySelector(el) : el,
        rules,
        customRules,
        self = this;

    if (!element) {
        return;
    }
    rules = element.querySelectorAll('[validate-rule]');
    rules = Array.prototype.slice.call(rules);
    rules.forEach(function (item, index) {
        rules = item.getAttribute('validate-rule');
        customRules = item.getAttribute('custom-rule');
        customRules = customRules ? self.context[customRules] : [];
        if (!customRules) {
            throw new Error('can not find ' + item.getAttribute('custom-rule') + ' definition at give context');
        }
        self.validateRuleArr.push({
            name: item.getAttribute('name'),
            rules: rules.split(';').concat(customRules),
            getValue: function (element) {
                return function () {
                    return "value" in element ? element.value : element.getAttribute('data-value');
                };
            }(item),
            message: item.getAttribute('validate-message').split(';')
        });
    });
};

FormValidate.prototype.validate = function validateData() {
    var ruleArr,
        rule,
        args,
        flag = true,
        self = this;

    //清空errorInfo
    self.errorInfo = Object.create(null);
    //校验规则与错误消息之间均以';'作为分隔符，校验规则的规则名称和参数之间':'作为分隔符，多个参数之间以','作为分隔符
    self.validateRuleArr.forEach(function (item) {
        item.rules.forEach(function (t, index) {
            if (typeof t === 'function') {
                if (!t.call(self.context, item.getValue())) {
                    flag = false;
                    //如果某一条校验规则找不到对应的错误消息则默认取第一条错误消息
                    self.errorInfo[item.name] = item.message[index] || item.message[0];
                }
                return true;
            }
            rule = t.split(':')[0];
            args = t.split(':')[1];
            if (args) {
                args = args.split(',');
                args.unshift(item.getValue());
            } else {
                args = [item.getValue()];
            }
            if (!validateStrategy[rule].apply(null, args)) {
                flag = false;
                //如果某一条校验规则找不到对应的错误消息则默认取第一条错误消息
                self.errorInfo[item.name] = item.message[index] || item.message[0];
            }
        });
    });

    return {
        isValid: flag,
        info: self.errorInfo
    };
};

FormValidate.prototype.clean = function clean() {
    this.validateRuleArr = [];
    this.errorInfo = Object.create(null);
};

module.exports = FormValidate;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/8/7.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(14),
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

/***/ 63:
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

var FormValidate = __webpack_require__(22),
    yunnexSelect = __webpack_require__(9),
    validateInstance;

module.exports = {
    data: function data() {
        return {
            username: '',
            selectType: '',
            password: '',
            selectTitle: {
                name: 'id',
                text: 'text'
            },
            typeList: [{ id: '01', text: 'vue' }, { id: '02', text: 'react', selected: true }, { id: '03', text: 'angular' }, { id: '04', text: 'java' }, { id: '05', text: 'nodejs' }, { id: '06', text: 'koa' }],
            errorInfo: {}
        };
    },
    methods: {
        submit: function submit() {
            /*
                当校验失败时validate方法返回的对象的isValid为false(记此对象为errorInfo),errorInfo.info对象
                为错误消息对象,根据校验项的name属性的值可以获取对应的校验项的错误消息。比如某个校验项的
                name="userName"，当校验失败的时候可以通过errorInfo.info.userName获取错误消息
             */
            this.errorInfo = validateInstance.validate();
        },
        checkPassword: function checkPassword(val) {
            //val为此校验项的value值
            if (!/(\d+[a-zA-Z]+)|([a-zA-Z]+\d+)/.test(this.password)) {
                return false;
            }
            return true;
        }
    },
    components: {
        'yunnex-select': yunnexSelect
    },
    mounted: function mounted() {
        //FormValidate构造函数接收一个context参数，该参数用来指定自定义校验规则函数所属的上下文环境
        validateInstance = new FormValidate(this);
        //设置校验起作用的范围，程序会扫描此范围内需要校验的项。参数可以为选择器字符串或者dom元素
        validateInstance.init('.page-form-validate');
    }
};

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[27]);