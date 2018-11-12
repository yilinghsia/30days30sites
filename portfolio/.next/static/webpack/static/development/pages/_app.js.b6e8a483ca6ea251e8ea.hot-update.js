webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./components/link.js");
var _jsxFileName = "/Users/yilinghsia/Desktop/100-days-challenges/30-days-30-sites/portfolio/components/header.js";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var menuItems = [{
  name: 'about',
  href: '/about'
}, {
  name: 'portfolio',
  href: '/'
}, {
  name: 'timeline',
  href: '/timeline'
}];

var Header = function Header(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Yi Ling Hsia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Front-end developer and designer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "site-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, menuItems.map(function (menuItem) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      key: menuItem.name,
      href: menuItem.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, menuItem.name));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, function () {
    switch (router.pathname) {
      case '/about':
        return 'hello';

      case '/':
        return 'my works';

      case '/timeline':
        return "let's chat!";
    }
  }()))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=_app.js.b6e8a483ca6ea251e8ea.hot-update.js.map