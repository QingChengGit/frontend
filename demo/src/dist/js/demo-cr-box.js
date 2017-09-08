webpackJsonp([3],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(128),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-cr-box.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-cr-box.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-205c739b", Component.options)
  } else {
    hotAPI.reload("data-v-205c739b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-cr-box\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1eb14be", Component.options)
  } else {
    hotAPI.reload("data-v-a1eb14be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(132),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\yunnex-cr-box\\yunnex-cr-box.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] yunnex-cr-box.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35569e8c", Component.options)
  } else {
    hotAPI.reload("data-v-35569e8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-cr-box"
  }, [_c('yunnex-cr-box', {
    attrs: {
      "config": _vm.boxConfig
    },
    on: {
      "checked-change": _vm.handleCheckedChange
    },
    model: {
      value: (_vm.checkedItems),
      callback: function($$v) {
        _vm.checkedItems = $$v
      },
      expression: "checkedItems"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "operate-btn-area"
  }, [_c('div', {
    staticClass: "yunnex-btn",
    on: {
      "click": _vm.setSingle
    }
  }, [_vm._v("单选")]), _vm._v(" "), _c('div', {
    staticClass: "yunnex-btn",
    on: {
      "click": _vm.setMultiple
    }
  }, [_vm._v("多选")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-205c739b", module.exports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yunnex-cr-box-component",
    on: {
      "click": _vm.selectItem
    }
  }, _vm._l((_vm.config.list), function(item) {
    return _c('div', {
      staticClass: "select-item",
      attrs: {
        "item-id": item.id
      }
    }, [_c('i', {
      staticClass: "select-icon",
      class: [_vm.isSelected(item) ? _vm.activeClass : _vm.iconClass]
    }), _vm._v(" "), _c('span', {
      staticClass: "select-text"
    }, [_vm._v(_vm._s(item.text))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-35569e8c", module.exports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/8/9.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(10),
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _crBox = __webpack_require__(115);

module.exports = _crBox;

/***/ }),

/***/ 51:
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

var sprite = __webpack_require__(75);

module.exports = {
    data: function data() {
        return {
            selectedItems: ''
        };
    },
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectItem: function selectItem(e) {
            var target = e.target,
                currentId,
                l,
                attrItem = 'item-id',
                self = this,
                hasSelected = false;

            if (!target.hasAttribute(attrItem)) {
                target = target.parentNode;
                while (target && target !== e.currentTarget) {
                    if (target.hasAttribute(attrItem)) {
                        break;
                    } else {
                        target = target.parentNode;
                    }
                }
            }
            if (target.hasAttribute(attrItem)) {
                currentId = target.getAttribute(attrItem);
                self.config.list.some(function (el, index, arr) {
                    if (el.id == currentId) {
                        if (self.config.isSingle) {
                            if (self.selectedItems && self.selectedItems[self.dataKey] == currentId) {
                                return true;
                            }
                            self.selectedItems = el;
                        } else {
                            l = self.selectedItems.length;
                            while (l--) {
                                if (self.selectedItems[l].id == currentId) {
                                    self.selectedItems.splice(l, 1);
                                    hasSelected = true;
                                    break;
                                }
                            }
                            !hasSelected && self.selectedItems.push(el);
                        }
                        self.$emit('input', self.selectedItems);
                        self.$emit('checked-change', self.selectedItems);
                        return true;
                    }
                });
            }
        },
        isSelected: function isSelected(item) {
            var self = this,
                flag = false;

            if (self.config.isSingle) {
                return item[self.dataKey] === self.selectedItems[self.dataKey];
            }
            self.selectedItems.some(function (t, index) {
                if (t[self.dataKey] === item[self.dataKey]) {
                    flag = true;
                    return true;
                }
            });

            return flag;
        },
        initSelectedItems: function initSelectedItems() {
            var self = this;

            if (!self.config.isSingle) {
                self.selectedItems = [];
            }
            self.config.list.some(function (item) {
                if (item.checked) {
                    if (self.config.isSingle) {
                        self.selectedItems = item;
                        return true;
                    } else {
                        self.selectedItems.push(item);
                    }
                }
            });
            self.$emit('input', self.selectedItems);
            self.$emit('checked-change', self.selectedItems);
        }
    },
    computed: {
        iconClass: function iconClass() {
            if (this.config.isSingle) {
                return this.config.iconClass ? this.config.iconClass : 'icon-single-default';
            }
            return this.config.iconClass ? this.config.iconClass : 'icon-multile-default';
        },
        activeClass: function activeClass() {
            if (this.config.isSingle) {
                return this.config.iconActiveClass ? this.config.iconActiveClass : 'icon-circle-green-checked';
            }
            return this.config.iconActiveClass ? this.config.iconActiveClass : 'icon-square-green-checked';
        },
        dataKey: function dataKey() {
            return this.config.propertyMap.key;
        },
        dataVal: function dataVal() {
            return this.config.propertyMap.val;
        }
    },
    watch: {
        'config.isSingle': function configIsSingle(newVal, oldVal) {
            this.initSelectedItems();
        },
        'config.list': function configList(newVal, oldVal) {
            this.initSelectedItems();
        }
    },
    created: function created() {
        this.initSelectedItems();
    }
};

/***/ }),

/***/ 59:
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

var box = __webpack_require__(114);

/*
 yunnex-cr-box组件(即自定义的checkbox/radio组件)props选项可以有如下值
 propertyMap: {
 //设置组件的数据对应的键名
     type: Object,
     required: true
 },
 //组件的数据列表
 list: {
     //要设置某一项数据默认选中直接给该项数据设置checked: true属性即可
     type: Array,
     required: true
 },
 iconClass: {
     //设置选项图标,组件有默认样式
     type: String
 },
 iconActiveClass: {
     //设置选项被选中时的icon
     type: String
 },
 isSingle: {
     //设置是否单选
     type: Boolean
 }
 */
module.exports = {
    data: function data() {
        return {
            checkedItems: '',
            boxConfig: {
                propertyMap: {
                    key: 'id',
                    val: 'text'
                },
                list: [{ id: '01', text: '冬瓜' }, { id: '02', text: '南瓜', checked: true }, { id: '03', text: '西瓜' }, { id: '04', text: '北瓜' }],
                isSingle: true
            }
        };
    },
    methods: {
        handleCheckedChange: function handleCheckedChange(data) {
            console.log(data);
            console.log(this.checkedItems);
        },
        setSingle: function setSingle() {
            this.boxConfig.isSingle = true;
        },
        setMultiple: function setMultiple() {
            this.boxConfig.isSingle = false;
        }
    },
    components: {
        'yunnex-cr-box': box
    }
};

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[23]);