((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/hinoki.js"],{

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ecba6b44147cc8018369 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ecba6b44147cc8018369 */ "dll-reference dll_ecba6b44147cc8018369"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/hinoki.js":
/*!*************************!*\
  !*** ./pages/hinoki.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yilinghsia/Desktop/100-days-challenges/30-days-30-sites/portfolio/pages/hinoki.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/hinoki-devices.png",
    alt: "hinoki design on devices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "About the project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "When Hinoki Noodle Soup first opened up in 2016 it was the first ramen restaurant in Rotterdam, The Netherlands. While busy with opening up and getting into the business, the owners hadn\u2019t yet put much thought into the identity of their brand besides that it should have a strong Japanese feeling. This vague idea continued to flow into the design of the old homepage that was put together swiftly back then. After the designs were done, I put together a simple prototype with HTML, CSS and Javascript.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-challenge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "The challenge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-screens",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "The old website was a standard template which sped up the design process but didn\u2019t allow for a lot of customisation. The tricky part for me was trying to incorporate Hinoki\u2019s current brand that they\u2019ve developed into the design which I would describe as oriental, warm, casual, sincere and masculine. In order to create the same vibe as the restaurant, I incorporated a lot of the restaurant\u2019s elements into the webdesign. I went with a dark theme with a lot of warm colors as to show that cozy and sincere feeling."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/hinoki-about.png",
    alt: "hinoki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "full-design",
    src: "/static/images/hinoki.png",
    alt: "hinoki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/hinoki")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/hinoki.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/hinoki', function() {
module.exports = __webpack_require__(/*! ./pages/hinoki.js */"./pages/hinoki.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_ecba6b44147cc8018369":
/*!*******************************************!*\
  !*** external "dll_ecba6b44147cc8018369" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ecba6b44147cc8018369;

/***/ })

},[[5,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=hinoki.js.map