module.exports = 
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var App = __webpack_require__(1);

	var port = process.env.PORT || 3000;

	App.listen(port, function () {
	    console.log('Server started on port', port);
	})


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var express  = __webpack_require__(2);
	var auth0    = __webpack_require__(3);
	var Webtask  = __webpack_require__(4);
	// var template = require('./templates/index.jade');
	var metadata   = __webpack_require__(5);

	var app = express();

	app.use(auth0({
	  scopes: 'read:connections'
	}));

	app.set('view engine', 'pug');
	app.set('views', 'templates');

	app.get('/', function (req, res) {
	  res.header("Content-Type", 'text/html');
	  res.status(200).render('index.jade', {
	    baseUrl: res.locals.baseUrl
	  });
	});

	// This endpoint would be called by webtask-gallery to dicover your metadata
	app.get('/meta', function (req, res) {
	  res.status(200).send(metadata);
	});

	module.exports = app;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("auth0-oauth2-express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("webtask-tools");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {"title":"User Management","name":"auth0-user-management","version":"0.0.1","author":"dsa-lsc","description":"This is an ambitious extension","type":"application","repository":"https://github.com/auth0/auth0-user-management","keywords":["auth0","extension"]}

/***/ })
/******/ ]);