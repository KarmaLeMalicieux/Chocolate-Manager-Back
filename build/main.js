require('source-map-support/register');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/chocolateController":
/*!********************************************!*\
  !*** ./src/controller/chocolateController ***!
  \********************************************/
/*! exports provided: getAllChocolate, postChocolate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllChocolate", function() { return getAllChocolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postChocolate", function() { return postChocolate; });
/* harmony import */ var _model_chocolateModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/chocolateModel */ "./src/model/chocolateModel.js");


const getAllChocolate = async (req, res) => {
    try {
        const chocolates = await _model_chocolateModel__WEBPACK_IMPORTED_MODULE_0__["default"].find();
        res.json(chocolates);
    } catch (error) {
        res.json(error.message);
    }
};

const postChocolate = async (req, res) => {
    try {
        const newChocolate = await new _model_chocolateModel__WEBPACK_IMPORTED_MODULE_0__["default"]({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            grams: req.body.grams,
            originCountry: req.body.originCountry,
            imageUrl: req.body.imageUrl
        })
        newChocolate.save();
        res.json({
            newChocolate, message: " has been added"
        });
    } catch (error) {
        res.json(error.message);
    }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");
const volleyball = __webpack_require__(/*! volleyball */ "volleyball");
const cors = __webpack_require__(/*! cors */ "cors");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const {
  default: Chocolate
} = __webpack_require__(/*! ./model/chocolateModel */ "./src/model/chocolateModel.js");
const {
  default: chocolatesRouter
} = __webpack_require__(/*! ./routes/chocolatesRoutes */ "./src/routes/chocolatesRoutes");
const app = express();
const port = process.env.PORT || 3000;
main().catch(error => console.log(error));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/chocolate_db");
  console.log(`🔥 Database connected successfully 🔥`);
}
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors());
app.use(volleyball);
app.use("/", chocolatesRouter);
app.listen(port, () => {
  console.log("🛠️  Server Open 🛠️");
});

/***/ }),

/***/ "./src/model/chocolateModel.js":
/*!*************************************!*\
  !*** ./src/model/chocolateModel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const chocolateSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  grams: {
    type: Number
  },
  imageUrl: {
    type: String
  }
});
const Chocolate = mongoose__WEBPACK_IMPORTED_MODULE_0__["mongoose"].model("Chocolate", chocolateSchema);
/* harmony default export */ __webpack_exports__["default"] = (Chocolate);

/***/ }),

/***/ "./src/routes/chocolatesRoutes":
/*!*************************************!*\
  !*** ./src/routes/chocolatesRoutes ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_chocolateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/chocolateController */ "./src/controller/chocolateController");



const chocolatesRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();

// get all articles
chocolatesRouter.get("/", _controller_chocolateController__WEBPACK_IMPORTED_MODULE_1__["getAllChocolate"]);
chocolatesRouter.post("/add", _controller_chocolateController__WEBPACK_IMPORTED_MODULE_1__["postChocolate"]);

/* harmony default export */ __webpack_exports__["default"] = (chocolatesRouter);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karma/dev/simplon/back/Exercice_Guillaume/Server_Back/src/index.js */"./src/index.js");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "volleyball":
/*!*****************************!*\
  !*** external "volleyball" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ })

/******/ });
//# sourceMappingURL=main.map