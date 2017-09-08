webpackJsonp([8],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    directives: [{
      name: "tip",
      rawName: "v-tip",
      value: ({
        position: 'top',
        tipText: 'ssssssssssssssssssss'
      }),
      expression: "{ position:'top',tipText:'ssssssssssssssssssss'}"
    }],
    staticClass: "com-layer-box"
  }, [_vm._v("xxxxxxxxxxxxxxxxxx")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "tip",
      rawName: "v-tip",
      value: ({
        position: 'bottom',
        tipText: '提示内容中有链接，可点击xsdsd 提示内容中有链接.'
      }),
      expression: "{ position:'bottom',tipText:'提示内容中有链接，可点击xsdsd 提示内容中有链接.'}"
    }],
    staticClass: "com-layer-box"
  }, [_vm._v("xxxxxxxxxxx")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "tip",
      rawName: "v-tip",
      value: ({
        position: 'left',
        tipText: '提示内容中有链接提示内容中有链接'
      }),
      expression: "{ position:'left',tipText:'提示内容中有链接提示内容中有链接'}"
    }],
    staticClass: "com-layer-box"
  }, [_c('span', {
    staticClass: "com-layer com-layer-question"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "tip",
      rawName: "v-tip",
      value: ({
        position: 'right',
        tipText: '提示内容中有链接，可点击xsdsd 提示内容中有链接'
      }),
      expression: "{ position:'right',tipText:'提示内容中有链接，可点击xsdsd 提示内容中有链接'}"
    }],
    staticClass: "com-layer-box"
  }, [_c('span', {
    staticClass: "com-layer com-layer-question"
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d21855d", module.exports)
  }
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(139),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-tip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-tip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d21855d", Component.options)
  } else {
    hotAPI.reload("data-v-7d21855d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tip,
    tipHtml,
    position,
    Vue = __webpack_require__(1);

__webpack_require__(69);

function createTipElement() {

	var div = document.createElement('div');

	tipHtml = div;

	document.body.appendChild(tipHtml);
}

function changeStyle(params) {

	var tipClassName = 'com-layer-text dn  com-layer-text-' + params.position;

	tipHtml.className = tipClassName;

	tipHtml.innerHTML = params.tipText;

	position = params.position;
}

function showTip(params) {

	changeStyle(params);

	var event = window.event;

	var left = event.pageX - event.offsetX;

	var top = event.pageY - event.offsetY;

	tipHtml.style.display = 'block';

	var tipHtmlWidth = tipHtml.offsetWidth;

	var tipHtmlHeight = tipHtml.offsetHeight;

	switch (position) {

		case 'bottom':

			tipHtml.style.left = left - 10 + 'px';

			tipHtml.style.top = top - tipHtmlHeight - 12 + 'px';

			break;

		case 'top':

			tipHtml.style.left = left + 'px';

			tipHtml.style.top = top + event.target.offsetHeight + 12 + 'px';

			break;

		case 'left':

			tipHtml.style.left = left + event.target.offsetWidth + 12 + 'px';

			tipHtml.style.top = top - tipHtmlHeight / 2 + 12 + 'px';

			break;

		case 'right':

			tipHtml.style.left = left - tipHtmlWidth - 12 + 'px';

			tipHtml.style.top = top - tipHtmlHeight / 2 + 12 + 'px';

			break;
	}
}

function hideTip() {

	tipHtml.style.display = 'none';
}

createTipElement();

Vue.directive('tip', {
	bind: function bind(el, binding) {
		//父节点还没有生成

		tip = el;

		el.addEventListener('mouseover', function () {
			showTip(binding.value);
		}, false);

		el.addEventListener('mouseout', hideTip, false);
	},
	unbind: function unbind(el) {

		el.removeEventListener('mouseover');

		el.removeEventListener('mouseout');
	}
});

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by xw on 2017/8/10.
 */
var Vue = __webpack_require__(1),
    tip = __webpack_require__(19),
    frame = __webpack_require__(3);

var t = new Vue({
    el: '#app',
    components: {
        app: tip,
        'frameWork': frame
    }
});

/***/ }),

/***/ 68:
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


__webpack_require__(21);

module.exports = {
    data: function data() {
        return {
            messgae: 'tip'
        };
    }
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[32]);