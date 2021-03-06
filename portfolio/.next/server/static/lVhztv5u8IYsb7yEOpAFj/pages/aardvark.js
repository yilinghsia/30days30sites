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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-summary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/the-aardvark-tile.png",
    alt: "hinoki design on devices"
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "intro"
  }, "Even though I had been working at EY for a while, I decided to go for a 10-week UI Design course in 2017 to sharpen my skills. I got a mentor assigned to me, who I met up with weekly over Skype to go through assignments with. There was a lot of material to prepare you for the \uFB01nal assignment: a news website. I really enjoyed following this course because it allowed me to ask questions and discuss with another designer. In return I have a better understanding on certain topics and it was a good and much needed basics refresher. You can see this project ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_window",
    href: "https://trydesignlab.com/certificates/ui-design/YiLing/"
  }, "here"), ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-challenge"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "The challenge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-screens"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "During this course I had a bit of a hard time trying to determine the look for The Aardvark since there were really no requirements. In the course you could see what others before you made, which was mostly bright, light and very stylized designs. I wanted my design to differ from these because I wanted to experiment with a different style than my normal one. So my design for The Aardvark became a night theme with some neon accents. After the course \uFB01nished I didn\u2019t stop playing around with the design, because I feel like the design that I handed in wasn\u2019t quite there yet. The design you see here is the latest version of The Aardvark. I tweaked a bit of the color and fonts so that gives it a smoother look compared to the one I submitted back then."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/aardvark-moodboard.png",
    alt: "moodboard"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "styleguide"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/mockup-aardvark.png",
    alt: "mockup aardvark"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/aardvark-styleguide.png",
    alt: "styleguide aardvark"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "full-design",
    src: "/static/images/aardvark.png",
    alt: "full screen aardvark"
  })));
});

/***/ })
/******/ ]);