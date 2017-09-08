webpackJsonp([9],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-select"
  }, [_c('p', {
    staticClass: "explain-text"
  }, [_vm._v("下拉框:")]), _vm._v(" "), _c('yunnex-select', {
    attrs: {
      "source-data": _vm.selectData,
      "select-title": _vm.selectTitle
    },
    on: {
      "select-change": _vm.handleSelectChange
    },
    model: {
      value: (_vm.selectValue),
      callback: function($$v) {
        _vm.selectValue = $$v
      },
      expression: "selectValue"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "explain-text"
  }, [_vm._v("带搜索功能的下拉框:")]), _vm._v(" "), _c('yunnex-select', {
    attrs: {
      "source-data": _vm.selectData,
      "is-show-search": true,
      "select-title": _vm.selectTitle,
      "search-placeholder": '请输入搜索关键词'
    },
    model: {
      value: (_vm.searchSelectValue),
      callback: function($$v) {
        _vm.searchSelectValue = $$v
      },
      expression: "searchSelectValue"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "explain-text"
  }, [_vm._v("禁用的下拉框:")]), _vm._v(" "), _c('yunnex-select', {
    attrs: {
      "source-data": _vm.selectData,
      "select-title": _vm.selectTitle,
      "disabled": true
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1037ccac", module.exports)
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1037ccac", Component.options)
  } else {
    hotAPI.reload("data-v-1037ccac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/8/7.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(17),
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

/***/ 66:
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

var select = __webpack_require__(9),
    datas = [{ id: '01', text: 'vue' }, { id: '02', text: 'react', selected: true }, { id: '03', text: 'angular' }, { id: '04', text: 'java' }, { id: '05', text: 'nodejs' }, { id: '06', text: 'koa' }];

/*
     select组件props选项可以有如下值
     selectTitle: {
         //设置select组件的数据对应的键名
         type: Object,
         required: true
     },
     sourceData: {
         //设置select组件的源数据。要设置某一项数据默认选中直接给该项数据设置selected: true属性即可
         type: Array,
         required: true
     },
     isShowSearch: {
         //设置是否显示搜索框
         type: Boolean,
         default: false
     },
     searchPlaceholder: {
        //搜索的placeholder文本
        type: String
     },
     disabled: {
         //设置是否禁用下拉框
         type: Boolean,
         default: false
     }
 */
module.exports = {
    data: function data() {
        return {
            selectData: [],
            selectTitle: {
                name: 'id',
                text: 'text'
            },
            selectValue: '',
            searchSelectValue: ''
        };
    },
    methods: {
        handleSelectChange: function handleSelectChange(data) {
            console.log(data);
            console.log(this.selectValue);
        }
    },
    created: function created() {
        var self = this;

        setTimeout(function () {
            self.selectData = datas;
        }, 2000);
    },
    components: {
        'yunnex-select': select
    }
};

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[30]);