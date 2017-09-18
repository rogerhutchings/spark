/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Google Maps function. Note that it's added to the window object in order to
// make it available as a callback to the maps script.
var mapNode = document.getElementById('map');
var latLong = {
  lat: 51.516145,
  long: -0.135316
};

var map = void 0;

function initMap() {
  map = new google.maps.Map(mapNode, {
    zoom: 16,
    center: new google.maps.LatLng(latLong),
    mapTypeId: 'roadmap'
  });
}

window.initMap = initMap;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

$(document).ready(function () {
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  document.querySelector('.toggle-button').addEventListener('click', function () {
    slideout.toggle();
  });
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initMeetTheTeam() {
  var team = $('.js-person');
  var source = $("#team-modal-template").html();
  var template = Handlebars.compile(source);

  function createContext(el) {
    var data = el.parent().data();
    return {
      img: data.img,
      name: data.name,
      bio: data.bio
    };
  }

  function openLightbox(_ref) {
    var target = _ref.target;

    var context = createContext($(target));
    $.featherlight(template(context));
  }

  function showName(_ref2) {
    var target = _ref2.target;

    $(target).parent().find('.js-name').toggleClass('dn');
  }

  team.addClass('overlay-bg-animate overlay-bg-o50-orange-hover pointer');
  team.find('.js-name').removeClass('orange').addClass('dn white');

  team.hover(showName);

  team.on('click', openLightbox);

  $('#meet-the-team').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false
  });
}

$(document).ready(function () {
  if ($('#meet-the-team').length) {
    initMeetTheTeam();
  }
});

/***/ })
/******/ ]);