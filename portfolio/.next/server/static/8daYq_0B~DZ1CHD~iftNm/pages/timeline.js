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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "current-projects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "What am I working on now?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Currently i'm participating in some 100-day-challenges that involve programming and designing! Here are some links where you can see things happening:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "social-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/yilinghsia/"
  }, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://codepen.io/yiepie/"
  }, "Codepen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.instagram.com/yiepie_/"
  }, "Instagram")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "year"
  }, "you are here "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Freelancing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Early 2018 I decided to move to Asia leaving my steady job at EY behind. From there on I started freelancing! ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "year"
  }, "2014 - 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Ernst & Young (EY)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The IT-team develops tools for customers in the climate change/sustainability sector with the main goal to create awareness. In the team I specialised in webdesign, usability and front end development to improve the User Experience")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "year"
  }, "2013 - 2014"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Internship - Memocom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "My first internship revolved around researching the User Interface Design and usability of the portals that Memocom uses for their projects. For my internship report I worked with Ruby on Rails, HTML and Sass to create and implement a new style guide which was well received and still used till this day")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "year"
  }, "2014"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "First job - Student aan Huis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Roughly translated as \u201CStudent to House\u201D, I would visit customers to help, instruct and guide them whenever they had issues or questions about their devices. Sometimes this also involved visits to high schools where we would be interacting with students"))))));
});

/***/ })

/******/ });