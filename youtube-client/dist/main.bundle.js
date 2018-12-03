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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/drawMovie.js":
/*!*************************!*\
  !*** ./js/drawMovie.js ***!
  \*************************/
/*! exports provided: DrawMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawMovie\", function() { return DrawMovie; });\nclass DrawMovie {\r\n  makeMovieBlock(data) {\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    const movieItem = document.querySelector(\".result-temp\");\r\n\r\n    data.forEach((item) => {\r\n      const block = movieItem.content.cloneNode(true);\r\n\r\n      const title = block.querySelector(\".title\");\r\n      const preview = block.querySelector(\".preview\");\r\n      const description = block.querySelector(\".description\");\r\n      const author = block.querySelector(\".author\");\r\n      const date = block.querySelector(\".date\");\r\n      const rate = block.querySelector(\".rate\");\r\n\r\n      title.setAttribute('href', 'https://www.youtube.com/watch?v=' + item.id.videoId);\r\n      title.textContent = 'https://www.youtube.com/watch?v=' + item.id.videoId;\r\n      preview.style.backgroundImage = `url(${item.snippet.thumbnails.high.url || 'img/placeholder.jpg'})`;\r\n      description.textContent = item.snippet.description || ' ... Something is wrong, the description is not defined ... ';\r\n      author.textContent = item.snippet.channelTitle;\r\n      date.textContent = item.snippet.publishedAt.slice(0, 10).split('-').join('-') + ' | ' + item.snippet.publishedAt.slice(11, 19).split('-').join(':');\r\n\r\n      const videoId = item.id.videoId;\r\n\r\n      function getRate() {\r\n\r\n        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD4vV8YtxlNXyq02GyPU5v1Pd4LoweSe1s&part=statistics&id=${videoId}`)\r\n          .then(res => res.json())\r\n          .then(data => rate.textContent = data.items[0].statistics.viewCount)\r\n          .catch(err => console.error(err));\r\n      }\r\n\r\n      getRate();\r\n\r\n      fragment.appendChild(block);\r\n    });\r\n\r\n    document.querySelector(\".movie-block\").innerHTML = '';\r\n    document.querySelector(\".movie-block\").appendChild(fragment);\r\n    const arrowVis = document.querySelector(\".wrapper__arrow\");\r\n    arrowVis.style.visibility = \"visible\";\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/drawMovie.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movieAPILoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieAPILoader */ \"./js/movieAPILoader.js\");\n/* harmony import */ var _drawMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawMovie */ \"./js/drawMovie.js\");\n\r\n\r\n\r\nconst movieAPI = new _movieAPILoader__WEBPACK_IMPORTED_MODULE_0__[\"movieAPILoader\"]();\r\nconst drawMovie = new _drawMovie__WEBPACK_IMPORTED_MODULE_1__[\"DrawMovie\"]();\r\n\r\nlet count = 1;\r\ndocument.querySelector(\".header__navigation-bottom-submit\").addEventListener(\"click\", () => {\r\n  movieAPI.getResponse(drawMovie.makeMovieBlock);\r\n})\r\n\r\nwindow.addEventListener('keydown', keypress);\r\n\r\nfunction keypress(e) {\r\n  if (e.keyCode == '13') {\r\n    movieAPI.getResponse(drawMovie.makeMovieBlock);\r\n  };\r\n}\r\n\r\n\r\nconst leftArrow = document.querySelector('.wrapper__arrow_left-arrow');\r\nconst movieList = document.querySelector('.movie-block');\r\nconst wrap = document.querySelector('.wrapper');\r\n\r\n\r\nfunction pagingLeft() {\r\n  const pos = parseInt(movieList.style.marginLeft) || 0;\r\n  const widthWrap = wrap.offsetWidth;\r\n  if (pos != 0) {\r\n    movieList.style.marginLeft = (pos + widthWrap) + 'px';\r\n    \r\n  }\r\n  count--;\r\n}\r\nleftArrow.addEventListener('mouseup', pagingLeft);\r\n\r\nconst rightArrow = document.querySelector('.wrapper__arrow_right-arrow');\r\n\r\nfunction pagingRight() {\r\n  const pos = parseInt(movieList.style.marginLeft) || 0;\r\n  const widthWrap = wrap.offsetWidth;\r\n  movieList.style.marginLeft = (pos - widthWrap) + 'px';\r\n  count++;\r\n}\r\nconsole.log(count\r\n);\r\nrightArrow.addEventListener('mouseup', pagingRight);\r\n\r\nwindow.addEventListener('keydown', arrowPress);\r\n\r\nfunction arrowPress(e) {\r\n  if (e.keyCode == '37') {\r\n    pagingLeft();\r\n  } else if (e.keyCode == '39') {\r\n    pagingRight();\r\n  };\r\n}\r\nconsole.log(count\r\n);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/movieAPILoader.js":
/*!******************************!*\
  !*** ./js/movieAPILoader.js ***!
  \******************************/
/*! exports provided: movieAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movieAPILoader\", function() { return movieAPILoader; });\nclass movieAPILoader {\r\n  constructor() {\r\n    this.Key = \"AIzaSyD4vV8YtxlNXyq02GyPU5v1Pd4LoweSe1s\";\r\n    this.url = \"https://www.googleapis.com/youtube/v3/\";\r\n  }\r\n  \r\n  _errorHandler(res) {\r\n    if (!res.ok) {\r\n      if (res.status === 401 || res.status === 404) alert(`Sorry, but there is ${res.status} error: ${res.statusText}`);\r\n      throw Error(res.statusText);\r\n    }\r\n    return res;\r\n  }\r\n\r\n  makeUrl() {\r\n    function request() {\r\n      let context = document.getElementById('header__navigation-request-input').value;\r\n      return context;\r\n    };\r\n    let url = `${this.url}search?key=${this.Key}&maxResults=15&part=snippet&type=video&q=${request()}`;\r\n    return url;\r\n  }\r\n\r\n  getResponse(callback) {\r\n    fetch(this.makeUrl())\r\n      .then(this._errorHandler)\r\n      .then(res => res.json())\r\n      .then(data => callback(data.items))\r\n      .catch(err => console.error(err));\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/movieAPILoader.js?");

/***/ })

/******/ });