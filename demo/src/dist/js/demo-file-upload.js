webpackJsonp([4],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\uploader\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a394364", Component.options)
  } else {
    hotAPI.reload("data-v-5a394364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(127),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\common\\components\\uploader\\uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b7c18bc", Component.options)
  } else {
    hotAPI.reload("data-v-1b7c18bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yunnex-uploader-component"
  }, [_c('file-uploader', {
    ref: "upload",
    attrs: {
      "post-action": _vm.uploadConfig.backendUrl,
      "accept": _vm.accept,
      "extensions": _vm.fileExtensions,
      "size": _vm.fileMaxSize,
      "timeout": _vm.timeout,
      "data": _vm.uploadConfig.data
    },
    on: {
      "input-file": _vm.inputFile,
      "input": _vm.input
    },
    model: {
      value: (_vm.curFiles),
      callback: function($$v) {
        _vm.curFiles = $$v
      },
      expression: "curFiles"
    }
  }, [_c('span', {
    staticClass: "upload-btn-text"
  }, [_vm._v(_vm._s(_vm.uploadConfig.btnText || '上传图片'))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1b7c18bc", module.exports)
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(143),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\work\\git\\frontend\\demo\\src\\page-vues\\demo-file-upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo-file-upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd1c5298", Component.options)
  } else {
    hotAPI.reload("data-v-dd1c5298", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-file-upload"
  }, [_c('div', {
    staticClass: "baseinfo-config-item"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    class: !_vm.validateInfo.isSelectLogo ? 'invalid-btn' : 'uploader-btn-wrap'
  }, [_c('yunnex-uploader', {
    attrs: {
      "upload-config": _vm.logoFileUploaderConfig
    },
    on: {
      "upload-complete": _vm.handleLogoUploadResult,
      "file-input": _vm.validateLogoFile
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploadLogoName),
      expression: "uploadLogoName"
    }],
    staticClass: "upload-file-name"
  }, [_vm._v(_vm._s('已上传：' + _vm.uploadLogoName))]), _vm._v(" "), _c('div', {
    staticClass: "upload-btn",
    on: {
      "click": _vm.uploadFile
    }
  }, [_vm._v("上传")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tip-message"
  }, [_vm._v("图片尺寸为大于500*500px的正方形，且小于1M，支持格式：jpg、jpeg、png、bmp")])]), _vm._v(" "), _c('div', {
    staticClass: "baseinfo-config-item"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    class: !_vm.validateInfo.isSelectCover ? 'invalid-btn' : 'uploader-btn-wrap'
  }, [_c('yunnex-uploader', {
    attrs: {
      "upload-config": _vm.coverFileUploaderConfig
    },
    on: {
      "upload-complete": _vm.handleCoverUploadResult,
      "file-input": _vm.validateCoverFile
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploadCoverName),
      expression: "uploadCoverName"
    }],
    staticClass: "upload-file-name"
  }, [_vm._v(_vm._s('已上传：' + _vm.uploadCoverName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "tip-message"
  }, [_vm._v("\n            图片尺寸为大于1020*643px，不得有圆角，不得拉伸变形，且小于2M，支持格式：jpg、jpeg、png、bmp\n        ")])]), _vm._v(" "), _c('yunnex-dialog', {
    attrs: {
      "dialog-conf": _vm.conf
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "config-item-left"
  }, [_c('span', {
    staticClass: "require-symbol"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "config-text"
  }, [_vm._v("商户LOGO：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "config-item-left"
  }, [_c('span', {
    staticClass: "require-symbol"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "config-text"
  }, [_vm._v("封面图：")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dd1c5298", module.exports)
  }
}

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
  }var n = {};return e.m = t, e.c = n, e.p = "/dist/", e(0);
}([function (t, e, n) {
  "use strict";
  t.exports = n(97);
}, function (t, e, n) {
  var r = n(28)("wks"),
      o = n(21),
      i = n(2).Symbol,
      u = "function" == typeof i,
      s = t.exports = function (t) {
    return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t));
  };s.store = r;
}, function (t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
}, function (t, e) {
  var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
}, function (t, e, n) {
  var r = n(12);t.exports = function (t) {
    if (!r(t)) throw TypeError(t + " is not an object!");return t;
  };
}, function (t, e, n) {
  t.exports = !n(11)(function () {
    return 7 != Object.defineProperty({}, "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (t, e) {
  var n = {}.hasOwnProperty;t.exports = function (t, e) {
    return n.call(t, e);
  };
}, function (t, e, n) {
  var r = n(8),
      o = n(19);t.exports = n(5) ? function (t, e, n) {
    return r.f(t, e, o(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(35),
      i = n(30),
      u = Object.defineProperty;e.f = n(5) ? Object.defineProperty : function (t, e, n) {
    if (r(t), e = i(e, !0), r(n), o) try {
      return u(t, e, n);
    } catch (t) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
  };
}, function (t, e, n) {
  var r = n(36),
      o = n(23);t.exports = function (t) {
    return r(o(t));
  };
}, function (t, e) {
  var n = {}.toString;t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t;
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(40),
      o = n(25);t.exports = Object.keys || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(22);t.exports = function (t, e, n) {
    if (r(t), void 0 === e) return t;switch (n) {case 1:
        return function (n) {
          return t.call(e, n);
        };case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };case 3:
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };}return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(2),
      o = n(3),
      i = n(15),
      u = n(7),
      s = "prototype",
      a = function a(t, e, n) {
    var c,
        f,
        l,
        p = t & a.F,
        d = t & a.G,
        h = t & a.S,
        v = t & a.P,
        m = t & a.B,
        y = t & a.W,
        g = d ? o : o[e] || (o[e] = {}),
        b = g[s],
        x = d ? r : h ? r[e] : (r[e] || {})[s];d && (n = e);for (c in n) {
      f = !p && x && void 0 !== x[c], f && c in g || (l = f ? x[c] : n[c], g[c] = d && "function" != typeof x[c] ? n[c] : m && f ? i(l, r) : y && x[c] == l ? function (t) {
        var e = function e(_e, n, r) {
          if (this instanceof t) {
            switch (arguments.length) {case 0:
                return new t();case 1:
                return new t(_e);case 2:
                return new t(_e, n);}return new t(_e, n, r);
          }return t.apply(this, arguments);
        };return e[s] = t[s], e;
      }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((g.virtual || (g.virtual = {}))[c] = l, t & a.R && b && !b[c] && u(b, c, l)));
    }
  };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
}, function (t, e) {
  t.exports = !0;
}, function (t, e) {
  e.f = {}.propertyIsEnumerable;
}, function (t, e) {
  t.exports = function (t, e) {
    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
  };
}, function (t, e, n) {
  var r = n(8).f,
      o = n(6),
      i = n(1)("toStringTag");t.exports = function (t, e, n) {
    t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e });
  };
}, function (t, e) {
  var n = 0,
      r = Math.random();t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
  };
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
  };
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
  };
}, function (t, e, n) {
  var r = n(12),
      o = n(2).document,
      i = r(o) && r(o.createElement);t.exports = function (t) {
    return i ? o.createElement(t) : {};
  };
}, function (t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(28)("keys"),
      o = n(21);t.exports = function (t) {
    return r[t] || (r[t] = o(t));
  };
}, function (t, e, n) {
  var r = n(2),
      o = "__core-js_shared__",
      i = r[o] || (r[o] = {});t.exports = function (t) {
    return i[t] || (i[t] = {});
  };
}, function (t, e) {
  var n = Math.ceil,
      r = Math.floor;t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
  };
}, function (t, e, n) {
  var r = n(12);t.exports = function (t, e) {
    if (!r(t)) return t;var n, o;if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(2),
      o = n(3),
      i = n(17),
      u = n(32),
      s = n(8).f;t.exports = function (t) {
    var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});"_" == t.charAt(0) || t in e || s(e, t, { value: u.f(t) });
  };
}, function (t, e, n) {
  e.f = n(1);
}, function (t, e, n) {
  var r = n(10),
      o = n(1)("toStringTag"),
      i = "Arguments" == r(function () {
    return arguments;
  }()),
      u = function u(t, e) {
    try {
      return t[e];
    } catch (t) {}
  };t.exports = function (t) {
    var e, n, s;return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s;
  };
}, function (t, e, n) {
  t.exports = n(2).document && document.documentElement;
}, function (t, e, n) {
  t.exports = !n(5) && !n(11)(function () {
    return 7 != Object.defineProperty(n(24)("div"), "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (t, e, n) {
  var r = n(10);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == r(t) ? t.split("") : Object(t);
  };
}, function (t, e, n) {
  "use strict";
  var r = n(17),
      o = n(16),
      i = n(41),
      u = n(7),
      s = n(6),
      a = n(13),
      c = n(72),
      f = n(20),
      l = n(82),
      p = n(1)("iterator"),
      d = !([].keys && "next" in [].keys()),
      h = "@@iterator",
      v = "keys",
      m = "values",
      y = function y() {
    return this;
  };t.exports = function (t, e, n, g, b, x, _) {
    c(n, e, g);var w,
        O,
        E,
        j = function j(t) {
      if (!d && t in k) return k[t];switch (t) {case v:
          return function () {
            return new n(this, t);
          };case m:
          return function () {
            return new n(this, t);
          };}return function () {
        return new n(this, t);
      };
    },
        S = e + " Iterator",
        A = b == m,
        P = !1,
        k = t.prototype,
        M = k[p] || k[h] || b && k[b],
        T = M || j(b),
        C = b ? A ? j("entries") : T : void 0,
        F = "Array" == e ? k.entries || M : M;if (F && (E = l(F.call(new t())), E !== Object.prototype && (f(E, S, !0), r || s(E, p) || u(E, p, y))), A && M && M.name !== m && (P = !0, T = function T() {
      return M.call(this);
    }), r && !_ || !d && !P && k[p] || u(k, p, T), a[e] = T, a[S] = y, b) if (w = { values: A ? T : j(m), keys: x ? T : j(v), entries: C }, _) for (O in w) {
      O in k || i(k, O, w[O]);
    } else o(o.P + o.F * (d || P), e, w);return w;
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(79),
      i = n(25),
      u = n(27)("IE_PROTO"),
      s = function s() {},
      a = "prototype",
      _c = function c() {
    var t,
        e = n(24)("iframe"),
        r = i.length,
        o = "<",
        u = ">";for (e.style.display = "none", n(34).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + u + "document.F=Object" + o + "/script" + u), t.close(), _c = t.F; r--;) {
      delete _c[a][i[r]];
    }return _c();
  };t.exports = Object.create || function (t, e) {
    var n;return null !== t ? (s[a] = r(t), n = new s(), s[a] = null, n[u] = t) : n = _c(), void 0 === e ? n : o(n, e);
  };
}, function (t, e, n) {
  var r = n(40),
      o = n(25).concat("length", "prototype");e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(6),
      o = n(9),
      i = n(65)(!1),
      u = n(27)("IE_PROTO");t.exports = function (t, e) {
    var n,
        s = o(t),
        a = 0,
        c = [];for (n in s) {
      n != u && r(s, n) && c.push(n);
    }for (; e.length > a;) {
      r(s, n = e[a++]) && (~i(c, n) || c.push(n));
    }return c;
  };
}, function (t, e, n) {
  t.exports = n(7);
}, function (t, e, n) {
  var r,
      o,
      i,
      u = n(15),
      s = n(68),
      a = n(34),
      c = n(24),
      f = n(2),
      l = f.process,
      p = f.setImmediate,
      d = f.clearImmediate,
      h = f.MessageChannel,
      v = 0,
      m = {},
      y = "onreadystatechange",
      g = function g() {
    var t = +this;if (m.hasOwnProperty(t)) {
      var e = m[t];delete m[t], e();
    }
  },
      b = function b(t) {
    g.call(t.data);
  };p && d || (p = function p(t) {
    for (var e = [], n = 1; arguments.length > n;) {
      e.push(arguments[n++]);
    }return m[++v] = function () {
      s("function" == typeof t ? t : Function(t), e);
    }, r(v), v;
  }, d = function d(t) {
    delete m[t];
  }, "process" == n(10)(l) ? r = function r(t) {
    l.nextTick(u(g, t, 1));
  } : h ? (o = new h(), i = o.port2, o.port1.onmessage = b, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function r(t) {
    f.postMessage(t + "", "*");
  }, f.addEventListener("message", b, !1)) : r = y in c("script") ? function (t) {
    a.appendChild(c("script"))[y] = function () {
      a.removeChild(this), g.call(t);
    };
  } : function (t) {
    setTimeout(u(g, t, 1), 0);
  }), t.exports = { set: p, clear: d };
}, function (t, e, n) {
  var r = n(29),
      o = Math.min;t.exports = function (t) {
    return t > 0 ? o(r(t), 9007199254740991) : 0;
  };
}, function (t, e, n) {
  var r = n(23);t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e) {}, function (t, e, n) {
  "use strict";
  var r = n(86)(!0);n(37)(String, "String", function (t) {
    this._t = String(t), this._i = 0;
  }, function () {
    var t,
        e = this._t,
        n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 });
  });
}, function (t, e, n) {
  n(89);for (var r = n(2), o = n(7), i = n(13), u = n(1)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; a < 5; a++) {
    var c = s[a],
        f = r[c],
        l = f && f.prototype;l && !l[u] && o(l, u, c), i[c] = i.Array;
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    var o,
        i = t = t || {},
        u = _typeof(t.default);"object" !== u && "function" !== u || (o = t, i = t.default);var s = "function" == typeof i ? i.options : i;if (e && (s.render = e.render, s.staticRenderFns = e.staticRenderFns), n && (s._scopeId = n), r) {
      var a = Object.create(s.computed || null);Object.keys(r).forEach(function (t) {
        var e = r[t];a[t] = function () {
          return e;
        };
      }), s.computed = a;
    }return { esModule: o, exports: i, options: s };
  };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(51),
      i = r(o),
      u = n(53),
      s = r(u),
      a = n(56),
      c = r(a),
      f = n(57),
      l = r(f),
      p = n(98),
      d = r(p);e.default = { components: { InputFile: d.default }, props: { name: { type: String, default: "file" }, drop: { default: !1 }, dropDirectory: { default: !0 }, extensions: { default: Array }, postAction: { type: String }, putAction: { type: String }, accept: { type: String }, multiple: { type: Boolean }, directory: { type: Boolean }, timeout: { type: Number, default: 0 }, size: { type: Number }, headers: { type: Object, default: Object }, filter: { type: Function, default: function _default(t) {
          return t;
        } }, data: { type: Object, default: Object }, value: { type: Array, default: Array }, thread: { type: Number, default: 1 } }, data: function data() {
      return { mode: "html5", input: !1, active: !1, dropActive: !1, destroy: !1, files: [] };
    }, mounted: function mounted() {
      var t = this,
          e = document.createElement("input");e.type = "file", window.FormData && e.files ? this.mode = "html5" : this.mode = "html4", this._maps = {}, this.$parent.$forceUpdate(), this.$nextTick(function () {
        t.watchDrop(t.drop);
      });
    }, beforeDestroy: function beforeDestroy() {
      this.destroy = !0, this.active = !1;
    }, computed: { uploading: function t() {
        for (var t = 0, e = 0; e < this.files.length; e++) {
          this.files[e].active && t++;
        }return t;
      }, uploaded: function uploaded() {
        for (var t, e = 0; e < this.files.length; e++) {
          if (t = this.files[e], !t.error && !t.success) return !1;
        }return !0;
      } }, watch: { active: function active(t) {
        this.watchActive(t);
      }, dropActive: function dropActive() {
        this.$parent.$forceUpdate();
      }, value: function value(t) {
        this.files == t || this.input || (this.files = t);
      }, files: function files(t, e) {
        var n = this;this._oldFiles = e;for (var r = {}, o = function o() {
          var e = t[i],
              o = n._maps[e.id];r[e.id] = !0, o && o == e || (n.$emit("input-file", e, o), n._maps[e.id] = e, !e.active || o && o.active ? e.active || e.error || e.success || !o || !o.active || n.update(e, { error: "abort" }) : n.upload(e).then(function () {
            n.update(e, { active: !1, success: !0 });
          }).catch(function (t) {
            n.update(e, { active: !1, success: !1, error: t.code || t.error || t.message });
          }));
        }, i = 0; i < t.length; i++) {
          o();
        }for (var u in this._maps) {
          if (!r[u]) {
            var s = this._maps[u];delete this._maps[u], this.$emit("input-file", void 0, s);
          }
        }this.input = !0, this.$emit("input", t), this.$nextTick(function () {
          n.input = !1;
        }), this.active && this.watchActive(!0);
      }, drop: function drop(t) {
        this.watchDrop(t);
      } }, methods: { clear: function clear() {
        return this.files.length && (this.files = []), !0;
      }, get: function get(t) {
        if ("object" == ("undefined" == typeof t ? "undefined" : (0, l.default)(t))) {
          var e = this.files.indexOf(t);if (e != -1) return t;if (!t.id) return !1;t = t.id;
        }if (this._maps[t]) return this._maps[t];if (!t) return !1;for (var n = t, r = 0; r < this.files.length; r++) {
          if (t = this.files[r], t.id == n) return t;
        }return !1;
      }, add: function add(t, e) {
        "html5" == this.mode && t instanceof File && (t = { file: t, size: t.size, name: t.webkitRelativePath || t.name, type: t.type }), t = (0, c.default)({ size: -1, name: "Filename", type: "", progress: "0.00", speed: 0, active: !1, error: "", success: !1, putAction: this.putAction, postAction: this.postAction, timeout: this.timeout }, t, { response: {}, xhr: !1, iframe: !1 }), t.data = (0, c.default)({}, this.data, t.data ? t.data : {}), t.headers = (0, c.default)({}, this.headers, t.headers ? t.headers : {}), t.id || (t.id = Math.random().toString(36).substr(2)), this.multiple || this.clear();var n = this.files.concat([]);return e ? n.unshift(t) : n.push(t), this.files = n, t;
      }, remove: function remove(t) {
        if (t = this.get(t)) {
          var e = this.files.concat([]);e.splice(e.indexOf(t), 1), this.files = e;
        }return t;
      }, update: function update(t, e) {
        if (t = this.get(t)) {
          var n = (0, c.default)({}, t, e),
              r = this.files.concat([]);return r.splice(r.indexOf(t), 1, n), this.files = r, n;
        }return !1;
      }, addInputFile: function addInputFile(t) {
        if (t.files) for (var e = 0; e < t.files.length; e++) {
          var n = t.files[e];this.add({ size: n.size, name: n.webkitRelativePath || n.name, type: n.type, file: n, el: t });
        } else this.add({ name: t.value.replace(/^.*?([^\/\\\r\n]+)$/, "$1"), el: t });var r = this.$options.components.InputFile;r._Ctor && (r = "function" == typeof r._Ctor ? r._Ctor : r._Ctor[0]);new r({ parent: this, el: t });
      }, addEntry: function addEntry(t) {
        var e = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";if (t.isFile) return t.file(function (t) {
          e.add({ size: t.size, name: n + t.name, type: t.type, file: t });
        }), 1;if (t.isDirectory && this.dropDirectory) {
          var r = 0;return t.createReader().readEntries(function (o) {
            for (var i = 0; i < o.length && (r += e.addEntry(o[i], n + t.name + "/"), !r || e.multiple); i++) {}
          }), r;
        }return 0;
      }, upload: function upload(t) {
        if (!(t = this.get(t))) return s.default.reject(new Error("not_exists"));(t.error || t.success) && (t = this.update(t, { error: "", success: !1 }));var e = this.extensions;return e && (e.length || "undefined" == typeof e.length) && ("object" == ("undefined" == typeof e ? "undefined" : (0, l.default)(e)) && e instanceof RegExp || ("string" == typeof e && (e = e.split(",").map(function (t) {
          return t.trim();
        }).filter(function (t) {
          return t;
        })), e = new RegExp("\\.(" + e.join("|").replace(/\./g, "\\.") + ")$", "i")), t.name.search(e) == -1) ? s.default.reject(new Error("extension")) : this.size > 0 && t.size >= 0 && t.size > this.size ? s.default.reject(new Error("size")) : (t = this.filter(t) || this.get(t), !t || t.error || t.success ? s.default.reject(new Error(t ? t.error : "not_exists")) : "html5" == this.mode && t.putAction ? this.uploadPut(t) : "html5" == this.mode ? this.uploadHtml5(t) : this.uploadHtml4(t));
      }, uploadPut: function uploadPut(t) {
        var e,
            n = [];for (var r in t.data) {
          e = t.data[r], null !== e && void 0 !== e && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e));
        }var o = n.length ? (t.putAction.indexOf("?") == -1 ? "?" : "&") + n.join("&") : "",
            i = new XMLHttpRequest();return i.open("PUT", t.putAction + o), this.uploadXhr(i, t, t.file);
      }, uploadHtml5: function uploadHtml5(t) {
        var e,
            n = new window.FormData();for (var r in t.data) {
          e = t.data[r], e && "object" == ("undefined" == typeof e ? "undefined" : (0, l.default)(e)) && "function" != typeof e.toString ? n.append(r, (0, i.default)(e)) : null !== e && void 0 !== e && n.append(r, e);
        }n.append(this.name, t.file);var o = new XMLHttpRequest();return o.open("POST", t.postAction), this.uploadXhr(o, t, n);
      }, uploadXhr: function uploadXhr(t, e, n) {
        var r = this,
            o = 0,
            i = 0;t.upload.onprogress = function (t) {
          if (t.lengthComputable && (e = r.get(e))) {
            var n = Math.round(Date.now() / 1e3);n != o && (o = n, e = r.update(e, { progress: (t.loaded / t.total * 100).toFixed(2), speed: t.loaded - i }), i = t.loaded);
          }
        };var u = setInterval(function () {
          if ((!(e = r.get(e)) || e.success || e.error) && (u && (clearInterval(u), u = !1), !e || e.error)) try {
            t.abort(), t.timeout = 1;
          } catch (t) {}
        }, 50);return new s.default(function (o, i) {
          var s,
              a = function a(n) {
            if (!s) {
              if (s = !0, u && (clearInterval(u), u = !1), !(e = r.get(e))) return i(new Error("not_exists"));if (e.error) return i(new Error(e.error));var a = {};switch (n.type) {case "timeout":case "abort":
                  a.error = n.type;break;case "error":
                  t.status ? t.status >= 500 ? a.error = "server" : t.status >= 400 && (a.error = "denied") : a.error = "network";break;default:
                  t.status >= 500 ? a.error = "server" : t.status >= 400 ? a.error = "denied" : a.progress = "100.00";}if (t.responseText) {
                var c = t.getResponseHeader("Content-Type");c && c.indexOf("/json") != -1 ? a.response = JSON.parse(t.responseText) : a.response = t.responseText;
              }return e = r.update(e, a), e.error ? i(new Error(e.error)) : o(e);
            }
          };t.onload = a, t.onerror = a, t.onabort = a, t.ontimeout = a, e.timeout && (t.timeout = e.timeout);for (var c in e.headers) {
            t.setRequestHeader(c, e.headers[c]);
          }e = r.update(e, { xhr: t }), t.send(n);
        });
      }, uploadHtml4: function uploadHtml4(t) {
        var e = this,
            n = function n(t) {
          27 == t.keyCode && t.preventDefault();
        },
            r = document.createElement("iframe");r.id = "upload-iframe-" + t.id, r.name = "upload-iframe-" + t.id, r.src = "about:blank", r.setAttribute("style", "width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;");var o = document.createElement("form");o.action = t.postAction, o.name = "upload-form-" + t.id, o.setAttribute("method", "POST"), o.setAttribute("target", "upload-iframe-" + t.id), o.setAttribute("enctype", "multipart/form-data");var u, a;for (var c in t.data) {
          u = t.data[c], u && "object" == ("undefined" == typeof u ? "undefined" : (0, l.default)(u)) && "function" != typeof u.toString && (u = (0, i.default)(u)), null !== u && void 0 !== u && (a = document.createElement("input"), a.type = "hidden", a.name = c, o.appendChild(a));
        }o.appendChild(t.el), document.body.appendChild(r).appendChild(o);var f = function f() {
          var t;try {
            r.contentWindow && (t = r.contentWindow.document);
          } catch (t) {}if (!t) try {
            t = r.contentDocument ? r.contentDocument : r.document;
          } catch (e) {
            t = r.document;
          }return t && t.body ? t.body.innerHTML : null;
        };return new s.default(function (i, u) {
          setTimeout(function () {
            if (!(t = e.update(t, { iframe: r }))) return u(new Error("not_exists"));var s,
                a = setInterval(function () {
              (!(t = e.get(t)) || t.success || t.error) && (a && (clearInterval(a), a = !1), t && !t.error || r.onabort({ type: t ? "abort" : "not_exists" }));
            }, 50),
                c = function c(o) {
              if (!s) {
                if (s = !0, a && (clearInterval(a), a = !1), document.body.removeEventListener("keydown", n), r.parentNode && r.parentNode.removeChild(r), !(t = e.get(t))) return u(new Error("not_exists"));if (t.error) return u(new Error(t.error));var c = f(),
                    l = {};switch (o.type) {case "abort":
                    l.error = "abort";break;case "error":
                    t.error ? l.error = t.error : null === c ? l.error = "network" : l.error = "denied";break;default:
                    t.error ? l.error = t.error : null === l ? l.error = "network" : l.progress = "100.00";}if (null !== c) {
                  if (c && "{" == c.substr(0, 1) && "}" == c.substr(c.length - 1, 1)) try {
                    c = JSON.parse(c);
                  } catch (t) {}l.response = c;
                }return t = e.update(t, l), t.error ? u(new Error(t.error)) : i(t);
              }
            };r.onload = c, r.onerror = c, r.onabort = c, document.body.addEventListener("keydown", n), o.submit();
          }, 10);
        });
      }, watchActive: function watchActive(t) {
        for (var e, n = 0, r = this.uploading; e = this.files[n];) {
          if (n++, t && !this.destroy) {
            if (r >= this.thread) break;e.active || e.error || e.success || (this.update(e, { active: !0 }), r++);
          } else r = 0, e.active && this.update(e, { active: !1 });
        }0 == r && (this.active = !1);
      }, watchDrop: function watchDrop(t) {
        if ("html5" == this.mode) {
          if (this.dropElement) try {
            window.document.removeEventListener("dragenter", this.onDragenter, !1), window.document.removeEventListener("dragleave", this.onDragleave, !1), this.dropElement.removeEventListener("dragover", this.onDragover, !1), this.dropElement.removeEventListener("drop", this.onDrop, !1);
          } catch (t) {}t ? "string" == typeof t ? t = document.querySelector(t) || this.$root.$el.querySelector(t) : t === !0 && (t = this.$parent.$el) : t = !1, this.dropElement = t, this.dropElement && (window.document.addEventListener("dragenter", this.onDragenter, !1), window.document.addEventListener("dragleave", this.onDragleave, !1), this.dropElement.addEventListener("dragover", this.onDragover, !1), this.dropElement.addEventListener("drop", this.onDrop, !1));
        }
      }, onDragenter: function onDragenter(t) {
        t.preventDefault(), this.dropActive || (this.dropActive = !0);
      }, onDragleave: function onDragleave(t) {
        t.preventDefault(), ("HTML" == t.target.nodeName || 0 == t.screenX && 0 == t.screenY && 0 == t.screenY && !t.fromElement && t.offsetX < 0) && (this.dropActive = !1);
      }, onDragover: function onDragover(t) {
        t.preventDefault();
      }, onDrop: function onDrop(t) {
        t.preventDefault(), this.dropActive = !1;var e = t.dataTransfer;if (e.items && e.items.length) for (var n = 0; n < e.items.length; n++) {
          var r = e.items[n];if (r.getAsEntry ? this.addEntry(r.getAsEntry()) : r.webkitGetAsEntry ? this.addEntry(r.webkitGetAsEntry()) : this.add(r.getAsFile()), !this.multiple) break;
        } else if (e.files.length) for (var o = 0; o < e.files.length; o++) {
          var i = e.files[o];if (this.add(i), !this.multiple) break;
        }
      } } };
}, function (t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { methods: { change: function change(t) {
        this.$destroy(), this.$parent.addInputFile(t.target);
      } } };
}, function (t, e, n) {
  t.exports = { default: n(58), __esModule: !0 };
}, function (t, e, n) {
  t.exports = { default: n(59), __esModule: !0 };
}, function (t, e, n) {
  t.exports = { default: n(60), __esModule: !0 };
}, function (t, e, n) {
  t.exports = { default: n(61), __esModule: !0 };
}, function (t, e, n) {
  t.exports = { default: n(62), __esModule: !0 };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }e.__esModule = !0;var o = n(52),
      i = r(o);e.default = i.default || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }return t;
  };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }e.__esModule = !0;var o = n(55),
      i = r(o),
      u = n(54),
      s = r(u),
      a = "function" == typeof s.default && "symbol" == _typeof(i.default) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  };e.default = "function" == typeof s.default && "symbol" === a(i.default) ? function (t) {
    return "undefined" == typeof t ? "undefined" : a(t);
  } : function (t) {
    return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : a(t);
  };
}, function (t, e, n) {
  var r = n(3),
      o = r.JSON || (r.JSON = { stringify: JSON.stringify });t.exports = function (t) {
    return o.stringify.apply(o, arguments);
  };
}, function (t, e, n) {
  n(90), t.exports = n(3).Object.assign;
}, function (t, e, n) {
  n(45), n(46), n(47), n(91), t.exports = n(3).Promise;
}, function (t, e, n) {
  n(92), n(45), n(93), n(94), t.exports = n(3).Symbol;
}, function (t, e, n) {
  n(46), n(47), t.exports = n(32).f("iterator");
}, function (t, e) {
  t.exports = function () {};
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");return t;
  };
}, function (t, e, n) {
  var r = n(9),
      o = n(43),
      i = n(87);t.exports = function (t) {
    return function (e, n, u) {
      var s,
          a = r(e),
          c = o(a.length),
          f = i(u, c);if (t && n != n) {
        for (; c > f;) {
          if (s = a[f++], s != s) return !0;
        }
      } else for (; c > f; f++) {
        if ((t || f in a) && a[f] === n) return t || f || 0;
      }return !t && -1;
    };
  };
}, function (t, e, n) {
  var r = n(14),
      o = n(26),
      i = n(18);t.exports = function (t) {
    var e = r(t),
        n = o.f;if (n) for (var u, s = n(t), a = i.f, c = 0; s.length > c;) {
      a.call(t, u = s[c++]) && e.push(u);
    }return e;
  };
}, function (t, e, n) {
  var r = n(15),
      o = n(71),
      i = n(69),
      u = n(4),
      s = n(43),
      a = n(88),
      c = {},
      f = {},
      e = t.exports = function (t, e, n, l, p) {
    var d,
        h,
        v,
        m,
        y = p ? function () {
      return t;
    } : a(t),
        g = r(n, l, e ? 2 : 1),
        b = 0;if ("function" != typeof y) throw TypeError(t + " is not iterable!");if (i(y)) {
      for (d = s(t.length); d > b; b++) {
        if (m = e ? g(u(h = t[b])[0], h[1]) : g(t[b]), m === c || m === f) return m;
      }
    } else for (v = y.call(t); !(h = v.next()).done;) {
      if (m = o(v, g, h.value, e), m === c || m === f) return m;
    }
  };e.BREAK = c, e.RETURN = f;
}, function (t, e) {
  t.exports = function (t, e, n) {
    var r = void 0 === n;switch (e.length) {case 0:
        return r ? t() : t.call(n);case 1:
        return r ? t(e[0]) : t.call(n, e[0]);case 2:
        return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);case 3:
        return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);case 4:
        return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);}return t.apply(n, e);
  };
}, function (t, e, n) {
  var r = n(13),
      o = n(1)("iterator"),
      i = Array.prototype;t.exports = function (t) {
    return void 0 !== t && (r.Array === t || i[o] === t);
  };
}, function (t, e, n) {
  var r = n(10);t.exports = Array.isArray || function (t) {
    return "Array" == r(t);
  };
}, function (t, e, n) {
  var r = n(4);t.exports = function (t, e, n, o) {
    try {
      return o ? e(r(n)[0], n[1]) : e(n);
    } catch (e) {
      var i = t.return;throw void 0 !== i && r(i.call(t)), e;
    }
  };
}, function (t, e, n) {
  "use strict";
  var r = n(38),
      o = n(19),
      i = n(20),
      u = {};n(7)(u, n(1)("iterator"), function () {
    return this;
  }), t.exports = function (t, e, n) {
    t.prototype = r(u, { next: o(1, n) }), i(t, e + " Iterator");
  };
}, function (t, e, n) {
  var r = n(1)("iterator"),
      o = !1;try {
    var i = [7][r]();i.return = function () {
      o = !0;
    }, Array.from(i, function () {
      throw 2;
    });
  } catch (t) {}t.exports = function (t, e) {
    if (!e && !o) return !1;var n = !1;try {
      var i = [7],
          u = i[r]();u.next = function () {
        return { done: n = !0 };
      }, i[r] = function () {
        return u;
      }, t(i);
    } catch (t) {}return n;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return { value: e, done: !!t };
  };
}, function (t, e, n) {
  var r = n(14),
      o = n(9);t.exports = function (t, e) {
    for (var n, i = o(t), u = r(i), s = u.length, a = 0; s > a;) {
      if (i[n = u[a++]] === e) return n;
    }
  };
}, function (t, e, n) {
  var r = n(21)("meta"),
      o = n(12),
      i = n(6),
      u = n(8).f,
      s = 0,
      a = Object.isExtensible || function () {
    return !0;
  },
      c = !n(11)(function () {
    return a(Object.preventExtensions({}));
  }),
      f = function f(t) {
    u(t, r, { value: { i: "O" + ++s, w: {} } });
  },
      l = function l(t, e) {
    if (!o(t)) return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : ("string" == typeof t ? "S" : "P") + t;if (!i(t, r)) {
      if (!a(t)) return "F";if (!e) return "E";f(t);
    }return t[r].i;
  },
      p = function p(t, e) {
    if (!i(t, r)) {
      if (!a(t)) return !0;if (!e) return !1;f(t);
    }return t[r].w;
  },
      d = function d(t) {
    return c && h.NEED && a(t) && !i(t, r) && f(t), t;
  },
      h = t.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: p, onFreeze: d };
}, function (t, e, n) {
  var r = n(2),
      o = n(42).set,
      i = r.MutationObserver || r.WebKitMutationObserver,
      u = r.process,
      s = r.Promise,
      a = "process" == n(10)(u);t.exports = function () {
    var t,
        e,
        n,
        c = function c() {
      var r, o;for (a && (r = u.domain) && r.exit(); t;) {
        o = t.fn, t = t.next;try {
          o();
        } catch (r) {
          throw t ? n() : e = void 0, r;
        }
      }e = void 0, r && r.enter();
    };if (a) n = function n() {
      u.nextTick(c);
    };else if (i) {
      var f = !0,
          l = document.createTextNode("");new i(c).observe(l, { characterData: !0 }), n = function n() {
        l.data = f = !f;
      };
    } else if (s && s.resolve) {
      var p = s.resolve();n = function n() {
        p.then(c);
      };
    } else n = function n() {
      o.call(r, c);
    };return function (r) {
      var o = { fn: r, next: void 0 };e && (e.next = o), t || (t = o, n()), e = o;
    };
  };
}, function (t, e, n) {
  "use strict";
  var r = n(14),
      o = n(26),
      i = n(18),
      u = n(44),
      s = n(36),
      a = Object.assign;t.exports = !a || n(11)(function () {
    var t = {},
        e = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";return t[n] = 7, r.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != a({}, t)[n] || Object.keys(a({}, e)).join("") != r;
  }) ? function (t, e) {
    for (var n = u(t), a = arguments.length, c = 1, f = o.f, l = i.f; a > c;) {
      for (var p, d = s(arguments[c++]), h = f ? r(d).concat(f(d)) : r(d), v = h.length, m = 0; v > m;) {
        l.call(d, p = h[m++]) && (n[p] = d[p]);
      }
    }return n;
  } : a;
}, function (t, e, n) {
  var r = n(8),
      o = n(4),
      i = n(14);t.exports = n(5) ? Object.defineProperties : function (t, e) {
    o(t);for (var n, u = i(e), s = u.length, a = 0; s > a;) {
      r.f(t, n = u[a++], e[n]);
    }return t;
  };
}, function (t, e, n) {
  var r = n(18),
      o = n(19),
      i = n(9),
      u = n(30),
      s = n(6),
      a = n(35),
      c = Object.getOwnPropertyDescriptor;e.f = n(5) ? c : function (t, e) {
    if (t = i(t), e = u(e, !0), a) try {
      return c(t, e);
    } catch (t) {}if (s(t, e)) return o(!r.f.call(t, e), t[e]);
  };
}, function (t, e, n) {
  var r = n(9),
      o = n(39).f,
      i = {}.toString,
      u = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      s = function s(t) {
    try {
      return o(t);
    } catch (t) {
      return u.slice();
    }
  };t.exports.f = function (t) {
    return u && "[object Window]" == i.call(t) ? s(t) : o(r(t));
  };
}, function (t, e, n) {
  var r = n(6),
      o = n(44),
      i = n(27)("IE_PROTO"),
      u = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
    return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
  };
}, function (t, e, n) {
  var r = n(7);t.exports = function (t, e, n) {
    for (var o in e) {
      n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
    }return t;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      o = n(3),
      i = n(8),
      u = n(5),
      s = n(1)("species");t.exports = function (t) {
    var e = "function" == typeof o[t] ? o[t] : r[t];u && e && !e[s] && i.f(e, s, { configurable: !0, get: function get() {
        return this;
      } });
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(22),
      i = n(1)("species");t.exports = function (t, e) {
    var n,
        u = r(t).constructor;return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n);
  };
}, function (t, e, n) {
  var r = n(29),
      o = n(23);t.exports = function (t) {
    return function (e, n) {
      var i,
          u,
          s = String(o(e)),
          a = r(n),
          c = s.length;return a < 0 || a >= c ? t ? "" : void 0 : (i = s.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === c || (u = s.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? s.charAt(a) : i : t ? s.slice(a, a + 2) : (i - 55296 << 10) + (u - 56320) + 65536);
    };
  };
}, function (t, e, n) {
  var r = n(29),
      o = Math.max,
      i = Math.min;t.exports = function (t, e) {
    return t = r(t), t < 0 ? o(t + e, 0) : i(t, e);
  };
}, function (t, e, n) {
  var r = n(33),
      o = n(1)("iterator"),
      i = n(13);t.exports = n(3).getIteratorMethod = function (t) {
    if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
  };
}, function (t, e, n) {
  "use strict";
  var r = n(63),
      o = n(74),
      i = n(13),
      u = n(9);t.exports = n(37)(Array, "Array", function (t, e) {
    this._t = u(t), this._i = 0, this._k = e;
  }, function () {
    var t = this._t,
        e = this._k,
        n = this._i++;return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]);
  }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
}, function (t, e, n) {
  var r = n(16);r(r.S + r.F, "Object", { assign: n(78) });
}, function (t, e, n) {
  "use strict";
  var r,
      o,
      i,
      u = n(17),
      s = n(2),
      a = n(15),
      c = n(33),
      f = n(16),
      l = n(12),
      p = n(22),
      d = n(64),
      h = n(67),
      v = n(85),
      m = n(42).set,
      y = n(77)(),
      g = "Promise",
      b = s.TypeError,
      x = s.process,
      _2 = s[g],
      x = s.process,
      w = "process" == c(x),
      O = function O() {},
      E = !!function () {
    try {
      var t = _2.resolve(1),
          e = (t.constructor = {})[n(1)("species")] = function (t) {
        t(O, O);
      };return (w || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e;
    } catch (t) {}
  }(),
      j = function j(t, e) {
    return t === e || t === _2 && e === i;
  },
      S = function S(t) {
    var e;return !(!l(t) || "function" != typeof (e = t.then)) && e;
  },
      A = function A(t) {
    return j(_2, t) ? new P(t) : new o(t);
  },
      P = o = function o(t) {
    var e, n;this.promise = new t(function (t, r) {
      if (void 0 !== e || void 0 !== n) throw b("Bad Promise constructor");e = t, n = r;
    }), this.resolve = p(e), this.reject = p(n);
  },
      k = function k(t) {
    try {
      t();
    } catch (t) {
      return { error: t };
    }
  },
      M = function M(t, e) {
    if (!t._n) {
      t._n = !0;var n = t._c;y(function () {
        for (var r = t._v, o = 1 == t._s, i = 0, u = function u(e) {
          var n,
              i,
              u = o ? e.ok : e.fail,
              s = e.resolve,
              a = e.reject,
              c = e.domain;try {
            u ? (o || (2 == t._h && F(t), t._h = 1), u === !0 ? n = r : (c && c.enter(), n = u(r), c && c.exit()), n === e.promise ? a(b("Promise-chain cycle")) : (i = S(n)) ? i.call(n, s, a) : s(n)) : a(r);
          } catch (t) {
            a(t);
          }
        }; n.length > i;) {
          u(n[i++]);
        }t._c = [], t._n = !1, e && !t._h && T(t);
      });
    }
  },
      T = function T(t) {
    m.call(s, function () {
      var e,
          n,
          r,
          o = t._v;if (C(t) && (e = k(function () {
        w ? x.emit("unhandledRejection", o, t) : (n = s.onunhandledrejection) ? n({ promise: t, reason: o }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o);
      }), t._h = w || C(t) ? 2 : 1), t._a = void 0, e) throw e.error;
    });
  },
      C = function C(t) {
    if (1 == t._h) return !1;for (var e, n = t._a || t._c, r = 0; n.length > r;) {
      if (e = n[r++], e.fail || !C(e.promise)) return !1;
    }return !0;
  },
      F = function F(t) {
    m.call(s, function () {
      var e;w ? x.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({ promise: t, reason: t._v });
    });
  },
      D = function D(t) {
    var e = this;e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), M(e, !0));
  },
      N = function N(t) {
    var e,
        n = this;if (!n._d) {
      n._d = !0, n = n._w || n;try {
        if (n === t) throw b("Promise can't be resolved itself");(e = S(t)) ? y(function () {
          var r = { _w: n, _d: !1 };try {
            e.call(t, a(N, r, 1), a(D, r, 1));
          } catch (t) {
            D.call(r, t);
          }
        }) : (n._v = t, n._s = 1, M(n, !1));
      } catch (t) {
        D.call({ _w: n, _d: !1 }, t);
      }
    }
  };E || (_2 = function _(t) {
    d(this, _2, g, "_h"), p(t), r.call(this);try {
      t(a(N, this, 1), a(D, this, 1));
    } catch (t) {
      D.call(this, t);
    }
  }, r = function r(t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
  }, r.prototype = n(83)(_2.prototype, { then: function then(t, e) {
      var n = A(v(this, _2));return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = w ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise;
    }, catch: function _catch(t) {
      return this.then(void 0, t);
    } }), P = function P() {
    var t = new r();this.promise = t, this.resolve = a(N, t, 1), this.reject = a(D, t, 1);
  }), f(f.G + f.W + f.F * !E, { Promise: _2 }), n(20)(_2, g), n(84)(g), i = n(3)[g], f(f.S + f.F * !E, g, { reject: function reject(t) {
      var e = A(this),
          n = e.reject;return n(t), e.promise;
    } }), f(f.S + f.F * (u || !E), g, { resolve: function resolve(t) {
      if (t instanceof _2 && j(t.constructor, this)) return t;var e = A(this),
          n = e.resolve;return n(t), e.promise;
    } }), f(f.S + f.F * !(E && n(73)(function (t) {
    _2.all(t).catch(O);
  })), g, { all: function all(t) {
      var e = this,
          n = A(e),
          r = n.resolve,
          o = n.reject,
          i = k(function () {
        var n = [],
            i = 0,
            u = 1;h(t, !1, function (t) {
          var s = i++,
              a = !1;n.push(void 0), u++, e.resolve(t).then(function (t) {
            a || (a = !0, n[s] = t, --u || r(n));
          }, o);
        }), --u || r(n);
      });return i && o(i.error), n.promise;
    }, race: function race(t) {
      var e = this,
          n = A(e),
          r = n.reject,
          o = k(function () {
        h(t, !1, function (t) {
          e.resolve(t).then(n.resolve, r);
        });
      });return o && r(o.error), n.promise;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      o = n(6),
      i = n(5),
      u = n(16),
      s = n(41),
      a = n(76).KEY,
      c = n(11),
      f = n(28),
      l = n(20),
      p = n(21),
      d = n(1),
      h = n(32),
      v = n(31),
      m = n(75),
      y = n(66),
      g = n(70),
      b = n(4),
      x = n(9),
      _ = n(30),
      w = n(19),
      O = n(38),
      E = n(81),
      j = n(80),
      S = n(8),
      A = n(14),
      P = j.f,
      k = S.f,
      M = E.f,
      _T = r.Symbol,
      C = r.JSON,
      F = C && C.stringify,
      D = "prototype",
      N = d("_hidden"),
      I = d("toPrimitive"),
      R = {}.propertyIsEnumerable,
      $ = f("symbol-registry"),
      L = f("symbols"),
      z = f("op-symbols"),
      U = Object[D],
      H = "function" == typeof _T,
      J = r.QObject,
      W = !J || !J[D] || !J[D].findChild,
      B = i && c(function () {
    return 7 != O(k({}, "a", { get: function get() {
        return k(this, "a", { value: 7 }).a;
      } })).a;
  }) ? function (t, e, n) {
    var r = P(U, e);r && delete U[e], k(t, e, n), r && t !== U && k(U, e, r);
  } : k,
      q = function q(t) {
    var e = L[t] = O(_T[D]);return e._k = t, e;
  },
      X = H && "symbol" == _typeof(_T.iterator) ? function (t) {
    return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
  } : function (t) {
    return t instanceof _T;
  },
      G = function G(t, e, n) {
    return t === U && G(z, e, n), b(t), e = _(e, !0), b(n), o(L, e) ? (n.enumerable ? (o(t, N) && t[N][e] && (t[N][e] = !1), n = O(n, { enumerable: w(0, !1) })) : (o(t, N) || k(t, N, w(1, {})), t[N][e] = !0), B(t, e, n)) : k(t, e, n);
  },
      K = function K(t, e) {
    b(t);for (var n, r = y(e = x(e)), o = 0, i = r.length; i > o;) {
      G(t, n = r[o++], e[n]);
    }return t;
  },
      Y = function Y(t, e) {
    return void 0 === e ? O(t) : K(O(t), e);
  },
      Q = function Q(t) {
    var e = R.call(this, t = _(t, !0));return !(this === U && o(L, t) && !o(z, t)) && (!(e || !o(this, t) || !o(L, t) || o(this, N) && this[N][t]) || e);
  },
      V = function V(t, e) {
    if (t = x(t), e = _(e, !0), t !== U || !o(L, e) || o(z, e)) {
      var n = P(t, e);return !n || !o(L, e) || o(t, N) && t[N][e] || (n.enumerable = !0), n;
    }
  },
      Z = function Z(t) {
    for (var e, n = M(x(t)), r = [], i = 0; n.length > i;) {
      o(L, e = n[i++]) || e == N || e == a || r.push(e);
    }return r;
  },
      tt = function tt(t) {
    for (var e, n = t === U, r = M(n ? z : x(t)), i = [], u = 0; r.length > u;) {
      !o(L, e = r[u++]) || n && !o(U, e) || i.push(L[e]);
    }return i;
  };H || (_T = function T() {
    if (this instanceof _T) throw TypeError("Symbol is not a constructor!");var t = p(arguments.length > 0 ? arguments[0] : void 0),
        e = function e(n) {
      this === U && e.call(z, n), o(this, N) && o(this[N], t) && (this[N][t] = !1), B(this, t, w(1, n));
    };return i && W && B(U, t, { configurable: !0, set: e }), q(t);
  }, s(_T[D], "toString", function () {
    return this._k;
  }), j.f = V, S.f = G, n(39).f = E.f = Z, n(18).f = Q, n(26).f = tt, i && !n(17) && s(U, "propertyIsEnumerable", Q, !0), h.f = function (t) {
    return q(d(t));
  }), u(u.G + u.W + u.F * !H, { Symbol: _T });for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
    d(et[nt++]);
  }for (var et = A(d.store), nt = 0; et.length > nt;) {
    v(et[nt++]);
  }u(u.S + u.F * !H, "Symbol", { for: function _for(t) {
      return o($, t += "") ? $[t] : $[t] = _T(t);
    }, keyFor: function keyFor(t) {
      if (X(t)) return m($, t);throw TypeError(t + " is not a symbol!");
    }, useSetter: function useSetter() {
      W = !0;
    }, useSimple: function useSimple() {
      W = !1;
    } }), u(u.S + u.F * !H, "Object", { create: Y, defineProperty: G, defineProperties: K, getOwnPropertyDescriptor: V, getOwnPropertyNames: Z, getOwnPropertySymbols: tt }), C && u(u.S + u.F * (!H || c(function () {
    var t = _T();return "[null]" != F([t]) || "{}" != F({ a: t }) || "{}" != F(Object(t));
  })), "JSON", { stringify: function stringify(t) {
      if (void 0 !== t && !X(t)) {
        for (var e, n, r = [t], o = 1; arguments.length > o;) {
          r.push(arguments[o++]);
        }return e = r[1], "function" == typeof e && (n = e), !n && g(e) || (e = function e(t, _e2) {
          if (n && (_e2 = n.call(this, t, _e2)), !X(_e2)) return _e2;
        }), r[1] = e, F.apply(C, r);
      }
    } }), _T[D][I] || n(7)(_T[D], I, _T[D].valueOf), l(_T, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0);
}, function (t, e, n) {
  n(31)("asyncIterator");
}, function (t, e, n) {
  n(31)("observable");
}, function (t, e, n) {
  e = t.exports = n(96)(), e.push([t.id, ".file-uploads{overflow:hidden;position:relative;text-align:center;display:inline-block}.file-uploads.file-uploads-html4 input[type=file]{opacity:0;font-size:20em;z-index:1;top:0;left:0;right:0;bottom:0;position:absolute;width:100%;height:100%}.file-uploads.file-uploads-html5 input[type=file]{overflow:hidden;position:fixed;width:1px;height:1px;top:-99em}", ""]);
}, function (t, e) {
  t.exports = function () {
    var t = [];return t.toString = function () {
      for (var t = [], e = 0; e < this.length; e++) {
        var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
      }return t.join("");
    }, t.i = function (e, n) {
      "string" == typeof e && (e = [[null, e, ""]]);for (var r = {}, o = 0; o < this.length; o++) {
        var i = this[o][0];"number" == typeof i && (r[i] = !0);
      }for (o = 0; o < e.length; o++) {
        var u = e[o];"number" == typeof u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), t.push(u));
      }
    }, t;
  };
}, function (t, e, n) {
  n(101);var r = n(48)(n(49), n(100), null, null);t.exports = r.exports;
}, function (t, e, n) {
  var r = n(48)(n(50), n(99), null, null);t.exports = r.exports;
}, function (t, e) {
  t.exports = { render: function render() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("input", { attrs: { type: "file", name: t.$parent.name, id: t.$parent.id || t.$parent.name, accept: t.$parent.accept, webkitdirectory: t.$parent.directory && "html5" === t.$parent.mode, multiple: t.$parent.multiple && "html5" === t.$parent.mode }, on: { change: t.change } });
    }, staticRenderFns: [] };
}, function (t, e) {
  t.exports = { render: function render() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("label", { staticClass: "file-uploads", class: "file-uploads-" + t.mode }, [n("input-file"), t._v(" "), t._t("default")], 2);
    }, staticRenderFns: [] };
}, function (t, e, n) {
  var r = n(95);"string" == typeof r && (r = [[t.id, r, ""]]), r.locals && (t.exports = r.locals);n(102)("2bbec363", r, !0);
}, function (t, e, n) {
  function r(t) {
    for (var e = 0; e < t.length; e++) {
      var n = t[e],
          r = f[n.id];if (r) {
        r.refs++;for (var o = 0; o < r.parts.length; o++) {
          r.parts[o](n.parts[o]);
        }for (; o < n.parts.length; o++) {
          r.parts.push(i(n.parts[o]));
        }r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
      } else {
        for (var u = [], o = 0; o < n.parts.length; o++) {
          u.push(i(n.parts[o]));
        }f[n.id] = { id: n.id, refs: 1, parts: u };
      }
    }
  }function o() {
    var t = document.createElement("style");return t.type = "text/css", l.appendChild(t), t;
  }function i(t) {
    var e,
        n,
        r = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');if (r) {
      if (h) return v;r.parentNode.removeChild(r);
    }if (m) {
      var i = d++;r = p || (p = o()), e = u.bind(null, r, i, !1), n = u.bind(null, r, i, !0);
    } else r = o(), e = s.bind(null, r), n = function n() {
      r.parentNode.removeChild(r);
    };return e(t), function (r) {
      if (r) {
        if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;e(t = r);
      } else n();
    };
  }function u(t, e, n, r) {
    var o = n ? "" : r.css;if (t.styleSheet) t.styleSheet.cssText = y(e, o);else {
      var i = document.createTextNode(o),
          u = t.childNodes;u[e] && t.removeChild(u[e]), u.length ? t.insertBefore(i, u[e]) : t.appendChild(i);
    }
  }function s(t, e) {
    var n = e.css,
        r = e.media,
        o = e.sourceMap;if (r && t.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;else {
      for (; t.firstChild;) {
        t.removeChild(t.firstChild);
      }t.appendChild(document.createTextNode(n));
    }
  }var a = "undefined" != typeof document,
      c = n(103),
      f = {},
      l = a && (document.head || document.getElementsByTagName("head")[0]),
      p = null,
      d = 0,
      h = !1,
      v = function v() {},
      m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports = function (t, e, n) {
    h = n;var o = c(t, e);return r(o), function (e) {
      for (var n = [], i = 0; i < o.length; i++) {
        var u = o[i],
            s = f[u.id];s.refs--, n.push(s);
      }e ? (o = c(t, e), r(o)) : o = [];for (var i = 0; i < n.length; i++) {
        var s = n[i];if (0 === s.refs) {
          for (var a = 0; a < s.parts.length; a++) {
            s.parts[a]();
          }delete f[s.id];
        }
      }
    };
  };var y = function () {
    var t = [];return function (e, n) {
      return t[e] = n, t.filter(Boolean).join("\n");
    };
  }();
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = [], r = {}, o = 0; o < e.length; o++) {
      var i = e[o],
          u = i[0],
          s = i[1],
          a = i[2],
          c = i[3],
          f = { id: t + ":" + o, css: s, media: a, sourceMap: c };r[u] ? r[u].parts.push(f) : n.push(r[u] = { id: u, parts: [f] });
    }return n;
  };
}]);
//# sourceMappingURL=vue-upload-component.min.js.map

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by liuxinxin on 2017/5/22.
 */
var Vue = __webpack_require__(1),
    VueResource = __webpack_require__(2),
    page = __webpack_require__(13),
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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uploader = __webpack_require__(113);

module.exports = uploader;

/***/ }),

/***/ 49:
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

var FileUploader = __webpack_require__(20),
    upload;

module.exports = {
    data: function data() {
        return {
            curFiles: null
        };
    },
    props: {
        uploadConfig: {
            type: Object,
            required: true
        }
    },
    computed: {
        auto: function auto() {
            if (typeof this.uploadConfig.auto !== 'undefined') {
                return this.uploadConfig.auto;
            }
            return true;
        },
        fileExtensions: function fileExtensions() {
            var extensions = 'jpg,jpeg,bmp,png';

            if (this.uploadConfig.fileExtensions) {
                extensions = this.fileExtensions;
            }

            return extensions;
        },
        accept: function accept() {
            var accepts = 'image/gif,image/jpg,image/jpeg,image/bmp,image/png';

            if (this.uploadConfig.accepts) {
                accepts = this.uploadConfig.accepts;
            }

            return accepts;
        },
        fileMaxSize: function fileMaxSize() {
            return this.uploadConfig.maxSize > 0 ? this.uploadConfig.maxSize : 1024 * 1024 * 10;
        },
        timeout: function timeout() {
            return this.uploadConfig.timeout > 0 ? this.uploadConfig.timeout : 1000 * 60;
        }
    },
    watch: {
        'uploadConfig.isStartUpload': function uploadConfigIsStartUpload(val, oldVal) {
            if (val && this.curFiles[0] && !this.curFiles[0].error && !this.auto) {
                this.$refs.upload.update(this.curFiles[0], { active: true });
            }
        }
    },
    methods: {
        input: function input(files) {
            if (!files[0].active && (!files[0].success || files[0].error)) {
                this.$emit('file-input', files[0]);
                if (files[0].error) {
                    //阻止上传
                    this.$refs.upload.active = false;
                }
            }
        },
        inputFile: function inputFile(newFile, oldFile) {
            var res;

            if (this.auto && !this.$refs.upload.uploaded && !this.$refs.upload.active) {
                this.$refs.upload.active = true;
            }
            if (newFile && oldFile && !newFile.active) {
                if (typeof oldFile.response === 'string') {
                    res = JSON.parse(oldFile.response);
                } else {
                    res = oldFile.response;
                }
                this.$emit('upload-complete', res, oldFile);
                this.auto && (this.uploadConfig.isStartUpload = false);
            }
        }
    },
    components: {
        FileUploader: FileUploader
    }
};

/***/ }),

/***/ 62:
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

var yunnexUploader = __webpack_require__(112),
    yunnexDialog = __webpack_require__(8),
    util = __webpack_require__(4);

function openDialog(context, config) {
    context.conf = util.clone(config);
    context.conf.isShow = true;
}

module.exports = {
    data: function data() {
        var uploadBackendUrl = '/saofu-shop-card/customer/config/sendImageToAlipay';

        return {
            conf: {
                dialogType: '',
                dialogMessage: '',
                dialogIcon: '',
                okBtnText: '',
                isShow: false
            },
            memberConfig: {
                cardBgImagePath: '',
                logoPath: ''
            },
            uploadLogoName: '',
            uploadCoverName: '',
            /*
                文件上传组件可选项配置对象:
                {
                    //设置在选择要上传文件后是否自动上传文件
                    auto: boolean， 可选
                    //设置文件上传的后端接口地址
                    backendUrl: string, 必填
                    //多个扩展名之间以逗号隔开比如'png,jpg',默认为'jpg,jpeg,bmp,png'
                    fileExtensions: string, 可选
                    //可上传文件类型对应的mimeType，默认为：'image/gif,image/jpg,image/jpeg,image/bmp,image/png'
                    accepts: string, 可选
                    //上传文件的最大空间，默认10M
                    maxSize: number, 可选
                    //设置文件上传超时时间，默认60秒
                    timeout: number， 单位毫秒 可选
                    //这个配置主要用在手动开始上传情况下，在手动上传的情况下单设置此属性为true时则开始上传文件。
                    //配置对象设置了auto: true时，此设置无效
                    isStartUpload: boolean, 可选
                    //上传文件按钮的文本，默认为‘上传图片’
                    btnText: string, 可选,
                    //传递给后端接口的参数对象
                    data: object, 可选
                }
             */
            logoFileUploaderConfig: {
                maxSize: 1024 * 1024,
                backendUrl: uploadBackendUrl,
                auto: true,
                isStartUpload: false
            },
            coverFileUploaderConfig: {
                maxSize: 2 * 1024 * 1024,
                backendUrl: uploadBackendUrl
            },
            validateInfo: {
                isSelectLogo: true,
                isSelectCover: true
            }
        };
    },
    methods: {
        validateLogoFile: function validateLogoFile(file) {
            var self = this;

            if (file.error === 'extension' || file.error === 'size') {
                openDialog(self, {
                    dialogType: 'autoClose',
                    dialogIcon: 'icon-err',
                    dialogMessage: '请上传合适的图片格式，支持格式：jpg、jpeg、png、bmp，且小于1M'
                });
            } else {
                openDialog(self, {
                    dialogType: 'msgBox',
                    dialogIcon: 'icon-tip',
                    dialogMessage: '文件上传中，请耐心等待...'
                });
            }
        },
        handleLogoUploadResult: function handleLogoUploadResult(res, file) {
            var self = this,
                conf = {
                dialogType: 'autoClose',
                dialogIcon: 'icon-err',
                dialogMessage: ''
            };

            if (res.success) {
                this.memberConfig.logoPath = res.attach.imageUrl;
                this.validateInfo.isSelectLogo = true;
                this.uploadLogoName = file.name;
                conf.dialogMessage = '上传logo成功!';
            } else {
                conf.dialogMessage = '上传logo失败:' + res.message;
            }
            openDialog(self, conf);
        },
        validateCoverFile: function validateCoverFile() {
            var self = this;

            if (file.error) {
                openDialog(self, {
                    dialogType: 'autoClose',
                    dialogIcon: 'icon-err',
                    dialogMessage: '请上传合适的图片格式，支持格式：jpg、jpeg、png、bmp，且小于2M'
                });
            } else {
                openDialog(self, {
                    dialogType: 'msgBox',
                    dialogIcon: 'icon-tip',
                    dialogMessage: '文件上传中，请耐心等待...'
                });
            }
        },
        handleCoverUploadResult: function handleCoverUploadResult(res, file) {
            var self = this,
                conf = {
                dialogType: 'autoClose',
                dialogIcon: 'icon-err',
                dialogMessage: '',
                delayTime: 600
            };

            if (res.success) {
                this.memberConfig.cardBgImagePath = res.attach.imageUrl;
                this.validateInfo.isSelectCover = true;
                this.uploadCoverName = file.name;
                conf.dialogMessage = '上传封面图成功!';
            } else {
                conf.dialogMessage = '上传封面图失败:' + res.message;
            }
            openDialog(self, conf);
        }
    },
    components: {
        'yunnex-uploader': yunnexUploader,
        'yunnex-dialog': yunnexDialog
    }
};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[26]);