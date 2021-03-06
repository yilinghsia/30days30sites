module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-summary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/hinoki-devices.png",
    alt: "hinoki design on devices"
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "intro"
  }, "When Hinoki Noodle Soup first opened up in 2016 it was the first ramen restaurant in Rotterdam, The Netherlands. While busy with opening up and getting into the business, the owners hadn\u2019t yet put much thought into the identity of their brand besides that it should have a strong Japanese feeling. This vague idea continued to flow into the design of the old homepage that was put together swiftly back then. After the designs were done, I put together a simple prototype with HTML, CSS and Javascript.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-challenge"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "The challenge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-screens"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The old website was a standard template which sped up the design process but didn\u2019t allow for a lot of customisation. The tricky part for me was trying to incorporate Hinoki\u2019s current brand that they\u2019ve developed into the design which I would describe as oriental, warm, casual, sincere and masculine. In order to create the same vibe as the restaurant, I incorporated a lot of the restaurant\u2019s elements into the webdesign. I went with a dark theme with a lot of warm colors as to show that cozy and sincere feeling."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/hinoki-mobile.png",
    alt: "hinoki"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "styleguide"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/hinoki-wireframe.png",
    alt: "mockup aardvark"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/hinoki-styleguide.png",
    alt: "styleguide aardvark"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "full-design",
    src: "/static/images/hinoki.png",
    alt: "hinoki"
  })));
});

/***/ })

/******/ });