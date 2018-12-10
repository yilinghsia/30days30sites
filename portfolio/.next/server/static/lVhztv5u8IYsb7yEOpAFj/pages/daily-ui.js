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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-summary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/uidaily.png",
    alt: "daily ui sketches"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the challenge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "intro"
  }, "The Daily UI challenge is a 100-days challenge where you create designs based on prompts that are sent via email. I started participating in November 2018 because it seemed fun but I expect that it would also give me the necessary practise to improve my skills. Currently as i'm writing this, I haven't finished the challenge yet. So, in a type of dear diary style, I will update and keep track of the challenge here weekly!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "challenge-entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Days 1-7: Getting in the groove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Sign-up.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#1 Sign up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Checkout.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#2 Check out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Landing-page.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#3 Landing page")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Calculator.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#4 Calculator")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/App-icon.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#5 App icon")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/User-profile.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#6 User profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Settings.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#7 Settings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I will admit that doing a prompt daily turned out to be more like \"2 prompts a day to catch up because I didn't have time yesterday\" Nonetheless, the first week is over and i'm right on track! I had a lot of fun with the prompts once I started working on them. I played around with gradients and colors while trying to understand the well-known duotone effect that you see in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_window",
    href: "https://medium.com/@pierrellev/reproduce-colorizer-effect-of-spotify-71d5de88039f"
  }, "Spotify's posters."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "challenge-entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Days 8 - 14: Having fun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/404-page.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#8 404 page")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Music-player.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#9 Music Player")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Social-share.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#10 Social Share")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Success.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#11 Flash Message")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Shop.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#12 E-commerce Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Direct-messaging.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#13 Direct Messaging")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Countdown-timer.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#14 Countdown Timer"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Second week done! This week was about having fun with the prompts and I think you can see some of it in the designs. To be honest these designs are my favorite so far. Something else that happened was that I continued making app designs, something i'm usually not involved with. Besides a project in school I haven't really made any other designs for apps so making my view \"smaller\" allowed me to think more creatively about how I wanted to display things.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "challenge-entry"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Days 15 - 21: Having fun"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Off-switch.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#15 On/off switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Overlay.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#16 Pop-up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Email-receipt.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#17 Email receipt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Analytics-Chart.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#18 Analytics chart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Leaderboard.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#19 Leaderboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Location-tracker.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#20 Location tracker")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/ui-daily/Dashboard.png",
    alt: "day"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caption"
  }, "#21 Home monitoring dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This week I tried to work on making designs appear more spacious with the help of spacing and accent colors. I believe i've read somewhere before that you have to do something for 20-60 days consistently to form a new habit. I'm not sure how much truth is in that but if it's true, I think i'm a quarter in into forming this habit. Making a design every day consistently is proving challenging at times but it's definitely good practise and motivating to see your designs in a row like this!")));
});

/***/ })

/******/ });