/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    display: grid; \n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr 3fr; \n}\n\n.sidebarBtn {\n    width: 30px;\n    height: 50px;\n    border-style: none;\n    background-color: #0e7490;\n    cursor: pointer;\n    font-size:xx-large;\n    color: #dbeafe;\n    margin: auto auto 0 10px;\n}\n\n.header {\n    height: 13vh;\n    width: 100vw;\n    background-color: #0e7490;\n    grid-column: 1/span 2;\n    display: flex; \n}\n\n.logo {\n    margin-right: auto;\n    width: 210px;\n    text-align: center;\n    padding-top: 30px;\n    font-size: 2.5rem;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n\n.sidebar {\n    grid-row: 2;\n    background-color: #eff6ff; \n    height: 87vh;\n}\n\n.body {\n    grid-row: 2;\n    display: flex;\n    width: 100vw;\n}\n\n.list {\n    margin: 40px 0 0 40px; \n}\n\n#form-project {\n    display: flex;\n    justify-content: center;\n}\n\n#form-project:hover {\n    background-color: #e5e7eb;\n}\n\n#name {\n    border: 1px solid grey; \n    width: 200px;\n}\n\n.add-button, .cancel-button {\n    width: 80px;\n    margin: 5px;  \n    background-color: #0e7490;\n    border-style: none;\n    color: white; \n    cursor: pointer;\n}\n\n.project-form-button {\n    display: flex;\n    justify-content: center;\n}\n\n.items-list, .projects {\n    padding-bottom: 30px;\n    display: flex;\n    height: 5px;\n}\n\n#project-name-div{\n    width: 200px;\n}\n\n#inbox, #today, #week, .add-project, .add-project-btn, #project-name-btn{\n    border-radius: 10px;\n    border-style: none;\n    background-color: #eff6ff;\n    cursor: pointer;\n    font-size: 1rem;\n    text-align: left;\n    width: 220px;\n    height: 35px;\n}\n\n\n#inbox:hover, #today:hover, #week:hover, .add-project-btn:hover, #project-name-btn:hover {\n    background-color: #dbeafe;\n}\n\n.iconSvg {\n    margin: 3px 0 0 5px;\n    width:24px;\n    height:24px; \n}\n\n.iconSvg2 {\n    width: 20px;\n    height: 20px; \n\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project {\n    margin-left: 30px;\n    display: flex;\n    width: 200px;\n}\n\n.add-project:hover {\n    background-color: #dbeafe;\n    border-radius: 10px;\n    width: 200px;\n}\n\n.add-project-btn {\n    font-size: 1rem;\n}\n\n.items-list:hover {\n    padding-bottom: 30px;\n    background-color: #dbeafe;\n    width: 220px;\n    border-radius: 10px;\n    height: 5px;\n}\n\n.container-title {\n    width: 65vw;\n    height: 10vh;\n    background-color: #e5e7eb;\n    border-radius: 10px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    width: 20vw;\n    height: 8vh;\n    display: flex;\n    align-items: center;\n    font-family: 'Dancing Script', cursive;\n    color: #0e7490;\n    font-size: 2.5rem;\n    padding-left: 30px;\n}\n\n.main {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    height: 5vh;\n    width: 35vw;\n    border-style: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 30px auto 0 auto;\n}\n\n.add-task:hover {\n    background-color: #dbeafe;\n}\n\n#close {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n\n}\n\n#close:hover,\n#close:focus{\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#form{\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 440px;\n    height: 260px;\n    padding: 10px 20px 70px 30px;\n    border-style: none;\n    border-radius: 1em;\n    background-color: #0e7490;\n    box-shadow: 5px 5px #085f77;\n}\n\n.title-form {\n    font-size: 1.5rem; \n    margin-bottom: 20px;\n    text-align: center;\n    color: white;\n}\n\n.form-div {\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;  \n}\n\n.task-title, .description, .date, .priority {\n    color: white;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='text'] {\n    border-style: none;\n    width: 250px;\n    background-color: #FFFFFF;\n    border-radius: 3px;\n    padding: 5px;\n    font-size: 15px;\n    margin-top: 5px;\n}\n\n#description {\n    height: 100px;\n    width: 258px;\n}\n\n.date-priority {\n    display: flex; \n    flex-direction: column;\n    margin-left: 10px;\n}\n\n.submit {\n    width: 80px;\n    background-color: #dbeafe;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 3px;\n    margin-left: 330px;\n    margin-top: 20px;\n \n}\n\n.submit:hover {\n    background-color: #0e7490;\n    color: #ccfbf1;\n}\n\n.delete {\n    width: 20px;\n    height: 30px;\n    cursor: pointer; \n    color: rgb(97, 97, 97); \n    font-weight: bolder;\n    margin-top: 5px;\n    font-size: larger;\n}\n\n.todos-container {\n    border: 1px solid #0e7490; \n    border-radius: 5px; \n    width: 55vw;\n    height: 3vh;\n    display:flex; \n    justify-content: space-between;\n    align-items: center;\n    margin: 20px auto 0 auto;\n    padding: 10px;\n}\n\n.container1, .container2  {\n    display: flex;\n}\n\n\n#title-todo {\n    padding-left: 5px;\n}\n\n#date-todo {\n    padding-right: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');\n\nbody, html {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    display: grid; \n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr 3fr; \n}\n\n.sidebarBtn {\n    width: 30px;\n    height: 50px;\n    border-style: none;\n    background-color: #0e7490;\n    cursor: pointer;\n    font-size:xx-large;\n    color: #dbeafe;\n    margin: auto auto 0 10px;\n}\n\n.header {\n    height: 13vh;\n    width: 100vw;\n    background-color: #0e7490;\n    grid-column: 1/span 2;\n    display: flex; \n}\n\n.logo {\n    margin-right: auto;\n    width: 210px;\n    text-align: center;\n    padding-top: 30px;\n    font-size: 2.5rem;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n\n.sidebar {\n    grid-row: 2;\n    background-color: #eff6ff; \n    height: 87vh;\n}\n\n.body {\n    grid-row: 2;\n    display: flex;\n    width: 100vw;\n}\n\n.list {\n    margin: 40px 0 0 40px; \n}\n\n#form-project {\n    display: flex;\n    justify-content: center;\n}\n\n#form-project:hover {\n    background-color: #e5e7eb;\n}\n\n#name {\n    border: 1px solid grey; \n    width: 200px;\n}\n\n.add-button, .cancel-button {\n    width: 80px;\n    margin: 5px;  \n    background-color: #0e7490;\n    border-style: none;\n    color: white; \n    cursor: pointer;\n}\n\n.project-form-button {\n    display: flex;\n    justify-content: center;\n}\n\n.items-list, .projects {\n    padding-bottom: 30px;\n    display: flex;\n    height: 5px;\n}\n\n#project-name-div{\n    width: 200px;\n}\n\n#inbox, #today, #week, .add-project, .add-project-btn, #project-name-btn{\n    border-radius: 10px;\n    border-style: none;\n    background-color: #eff6ff;\n    cursor: pointer;\n    font-size: 1rem;\n    text-align: left;\n    width: 220px;\n    height: 35px;\n}\n\n\n#inbox:hover, #today:hover, #week:hover, .add-project-btn:hover, #project-name-btn:hover {\n    background-color: #dbeafe;\n}\n\n.iconSvg {\n    margin: 3px 0 0 5px;\n    width:24px;\n    height:24px; \n}\n\n.iconSvg2 {\n    width: 20px;\n    height: 20px; \n\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project {\n    margin-left: 30px;\n    display: flex;\n    width: 200px;\n}\n\n.add-project:hover {\n    background-color: #dbeafe;\n    border-radius: 10px;\n    width: 200px;\n}\n\n.add-project-btn {\n    font-size: 1rem;\n}\n\n.items-list:hover {\n    padding-bottom: 30px;\n    background-color: #dbeafe;\n    width: 220px;\n    border-radius: 10px;\n    height: 5px;\n}\n\n.container-title {\n    width: 65vw;\n    height: 10vh;\n    background-color: #e5e7eb;\n    border-radius: 10px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    width: 20vw;\n    height: 8vh;\n    display: flex;\n    align-items: center;\n    font-family: 'Dancing Script', cursive;\n    color: #0e7490;\n    font-size: 2.5rem;\n    padding-left: 30px;\n}\n\n.main {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    height: 5vh;\n    width: 35vw;\n    border-style: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 30px auto 0 auto;\n}\n\n.add-task:hover {\n    background-color: #dbeafe;\n}\n\n#close {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n\n}\n\n#close:hover,\n#close:focus{\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#form{\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 440px;\n    height: 260px;\n    padding: 10px 20px 70px 30px;\n    border-style: none;\n    border-radius: 1em;\n    background-color: #0e7490;\n    box-shadow: 5px 5px #085f77;\n}\n\n.title-form {\n    font-size: 1.5rem; \n    margin-bottom: 20px;\n    text-align: center;\n    color: white;\n}\n\n.form-div {\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;  \n}\n\n.task-title, .description, .date, .priority {\n    color: white;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='text'] {\n    border-style: none;\n    width: 250px;\n    background-color: #FFFFFF;\n    border-radius: 3px;\n    padding: 5px;\n    font-size: 15px;\n    margin-top: 5px;\n}\n\n#description {\n    height: 100px;\n    width: 258px;\n}\n\n.date-priority {\n    display: flex; \n    flex-direction: column;\n    margin-left: 10px;\n}\n\n.submit {\n    width: 80px;\n    background-color: #dbeafe;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 3px;\n    margin-left: 330px;\n    margin-top: 20px;\n \n}\n\n.submit:hover {\n    background-color: #0e7490;\n    color: #ccfbf1;\n}\n\n.delete {\n    width: 20px;\n    height: 30px;\n    cursor: pointer; \n    color: rgb(97, 97, 97); \n    font-weight: bolder;\n    margin-top: 5px;\n    font-size: larger;\n}\n\n.todos-container {\n    border: 1px solid #0e7490; \n    border-radius: 5px; \n    width: 55vw;\n    height: 3vh;\n    display:flex; \n    justify-content: space-between;\n    align-items: center;\n    margin: 20px auto 0 auto;\n    padding: 10px;\n}\n\n.container1, .container2  {\n    display: flex;\n}\n\n\n#title-todo {\n    padding-left: 5px;\n}\n\n#date-todo {\n    padding-right: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFormButton": () => (/* binding */ addFormButton),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle),
/* harmony export */   "closeButton": () => (/* binding */ closeButton),
/* harmony export */   "closeSpan": () => (/* binding */ closeSpan),
/* harmony export */   "deleteTitle": () => (/* binding */ deleteTitle),
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "removeProjectForm": () => (/* binding */ removeProjectForm),
/* harmony export */   "sidebarButton": () => (/* binding */ sidebarButton)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");




function addFormButton() {
    const addTask = document.querySelector('.add-task')
    addTask.addEventListener('click', () => {
        if(document.querySelector('#form') === null)
        (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.addForm)(); 
    })
}

function projectButton() {
    const project = document.querySelector('#project')
    project.addEventListener('click', () => {
        if(document.querySelector('#form-project') === null)
        (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.projectForm)(); 

    });
}

function sidebarButton() {
    const sidebarBtn = document.querySelector('.sidebarBtn')
    sidebarBtn.addEventListener('click', () => {
        if (document.querySelector('.sidebar').style.display === 'block') {
            document.querySelector('.sidebar').style.display = 'none'
        }
        else if (document.querySelector('.sidebar').style.display === 'none') {
            document.querySelector('.sidebar').style.display = 'block'
        }
    });
}

function deleteTitle() {
    const title = document.querySelector('.title')
    if(title != null) {
        const containerTitle = document.querySelector('.container-title')
        containerTitle.removeChild(title)
    }
}

function changeTitle() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'inbox') {
            deleteTitle(); 
            (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.appendTitle)('Inbox');
        }
        if(e.target.id === 'today') {
            deleteTitle(); 
            (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.appendTitle)('Today');
        }
        if(e.target.id === 'week') {
            deleteTitle(); 
            (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.appendTitle)('This week');
        }
    }); 

}

function closeSpan() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'close') {
            removeForm(); 
        }
    });
}

function removeForm() {
    const main = document.querySelector('.main')
    const form = document.querySelector('#form')
    main.removeChild(form)
}

function closeButton() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'cancel') {
            removeProjectForm()
        }
    });
}

function removeProjectForm() {
    const projectDiv = document.querySelector('.projects')
    const formProject = document.querySelector('#form-project')
    projectDiv.removeChild(formProject) 
}





/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addForm": () => (/* binding */ addForm),
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton),
/* harmony export */   "appendTitle": () => (/* binding */ appendTitle),
/* harmony export */   "initialPage": () => (/* binding */ initialPage),
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


 function initialPage() {  
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('container')

    const header = document.createElement('div')
    header.classList.add('header')
    
    const appearDisappearSidebar = document.createElement('button')
    appearDisappearSidebar.classList.add('sidebarBtn')
    appearDisappearSidebar.textContent = '≡'

    const logo = document.createElement('div')
    logo.classList.add('logo')
    logo.textContent = "Let's do this!"

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    sidebar.style.display = 'block'

    const list = document.createElement('div')
    list.classList.add('list')

    const inbox = document.createElement('div')
    inbox.classList.add('items-list')

    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.classList.add('iconSvg')
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.setAttribute('fill', '#0284c7');
    iconPath.setAttribute('d', 'M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z');
    iconSvg.appendChild(iconPath);

    const inboxBtn = document.createElement('button')
    inboxBtn.textContent = "Inbox"
    inboxBtn.setAttribute('id', 'inbox')

    const today = document.createElement('div')
    today.classList.add('items-list')

    const iconSvg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg2.classList.add('iconSvg')
    const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg2.setAttribute('viewBox', '0 0 24 24');
    iconSvg2.setAttribute('fill', '#0284c7');
    iconPath2.setAttribute('d', 'M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7');
    iconSvg2.appendChild(iconPath2);

    const todayBtn = document.createElement('button')
    todayBtn.textContent = 'Today'
    todayBtn.setAttribute('id', 'today')

    const week = document.createElement('div')
    week.classList.add('items-list')

    const iconSvg3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg3.classList.add('iconSvg')
    const iconPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg3.setAttribute('viewBox', '0 0 24 24');
    iconSvg3.setAttribute('fill', '#0284c7');
    iconPath3.setAttribute('d', 'M5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.89 21 5V19C21 20.1 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.89 3.9 3 5 3M5 19H19V9H5V19M5 7H19V5H5V7M17 11V13H7V11H17');
    iconSvg3.appendChild(iconPath3);

    const weekBtn = document.createElement('button')
    weekBtn.textContent = 'This week'
    weekBtn.setAttribute('id', 'week')

    const projects = document.createElement('div')
    projects.classList.add('projects')

    const projectsBtn = document.createElement('h3')
    projectsBtn.textContent = 'Projects'

    const addProject = document.createElement('div')
    addProject.classList.add('add-project')

    const iconSvg4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg4.classList.add('iconSvg')
    const iconPath4 = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg4.setAttribute('viewBox', '0 0 24 24');
    iconSvg4.setAttribute('fill', '#0284c7');
    iconPath4.setAttribute('d', 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z');
    iconSvg4.appendChild(iconPath4);

    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-btn')
    addProjectButton.textContent = 'Create new project'
    addProjectButton.setAttribute('id', 'project')

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('projects-container')

    const body = document.createElement('div')
    body.classList.add('body')
    
    const main = document.createElement('div')
    main.classList.add('main')

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('container-title')

    const contentTodos = document.createElement('div')
    contentTodos.classList.add('content')

    inbox.appendChild(iconSvg)
    inbox.appendChild(inboxBtn)
    
    list.appendChild(inbox)
    
    today.appendChild(iconSvg2)
    today.appendChild(todayBtn)
    list.appendChild(today)
    
    week.appendChild(iconSvg3)
    week.appendChild(weekBtn)
    list.appendChild(week)

    projects.appendChild(projectsBtn)

    addProject.appendChild(iconSvg4)
    addProject.appendChild(addProjectButton)
    projects.appendChild(addProject)
    projects.appendChild(projectContainer)
    list.appendChild(projects)
    
    sidebar.appendChild(list)
    body.appendChild(sidebar)
    main.appendChild(containerTitle)
    main.appendChild(contentTodos)
    body.appendChild(main)
    header.appendChild(appearDisappearSidebar)
    header.appendChild(logo)

    container.appendChild(header)
    container.appendChild(body)

    content.appendChild(container)

}

function addTaskButton() {
    const main = document.querySelector('.main')

    const addTask = document.createElement('button')
    addTask.classList.add('add-task')
    addTask.textContent = '+ Add Task'

    main.appendChild(addTask)
}

function addForm() {
    const main = document.querySelector('.main')
    
    const form = document.createElement('form')
    form.setAttribute('id', 'form')

    const close = document.createElement('span')
    close.setAttribute('id', 'close')
    close.textContent = 'X'

    const titleForm = document.createElement('div')
    titleForm.classList.add('title-form')
    titleForm.textContent = 'New Task'

    const formDiv = document.createElement('div')
    formDiv.classList.add('form-div')
    
    const taskTitleDiv = document.createElement('div')
    taskTitleDiv.classList.add('task-title')

    const taskTitleLabel= document.createElement('label')
    taskTitleLabel.htmlFor = 'title'
    taskTitleLabel.textContent = 'TITLE: '

    const taskTitleInput = document.createElement("input")
    taskTitleInput.setAttribute("type", "text");
    taskTitleInput.setAttribute("name", "title");
    taskTitleInput.setAttribute("id", "title");

    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')

    const descriptionLabel = document.createElement('label')
    descriptionLabel.htmlFor = 'description'
    descriptionLabel.textContent = 'DESCRIPTION: '

    const descriptionInput = document.createElement("textarea")
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");
    
    const datePriority = document.createElement('div')
    datePriority.classList.add('date-priority')

    const dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('date')

    const dueDateLabel = document.createElement('label')
    dueDateLabel.htmlFor = 'date'
    dueDateLabel.textContent = 'DUE DATE: '
   
    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "date");
    dueDateInput.setAttribute("id", "date");
  
    const selectPriorityDiv = document.createElement('div')
    selectPriorityDiv.classList.add('priority')
    
    const selectPriorityLabel = document.createElement('label')
    selectPriorityLabel.htmlFor = 'priority'
    selectPriorityLabel.textContent = 'PRIORITY: '

    const selectPriority = document.createElement("select")
    selectPriority.setAttribute('id', 'select')
    const option1 = document.createElement('option')
    option1.textContent = 'Low'

    const option2 = document.createElement('option')
    option2.textContent = 'Medium'

    const option3 = document.createElement('option')
    option3.textContent = 'High'

    const formButtonDiv = document.createElement('div')
    formButtonDiv.classList.add('form-button')

    const formButton = document.createElement('button')
    formButton.setAttribute('type', 'button')
    formButton.textContent = 'Submit'
    formButton.setAttribute('id', 'submit')
    formButton.classList.add('submit')

    formButtonDiv.appendChild(formButton)
    selectPriority.appendChild(option1)
    selectPriority.appendChild(option2)
    selectPriority.appendChild(option3)

    selectPriorityDiv.appendChild(selectPriorityLabel)
    selectPriorityDiv.appendChild(selectPriority)

    dueDateDiv.appendChild(dueDateLabel)
    dueDateDiv.appendChild(dueDateInput)

    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(descriptionInput)

    taskTitleDiv.appendChild(taskTitleLabel)
    taskTitleDiv.appendChild(taskTitleInput)
    
    datePriority.appendChild(dueDateDiv)
    datePriority.appendChild(selectPriorityDiv)

    formDiv.appendChild(taskTitleDiv)
    formDiv.appendChild(descriptionDiv)
    formDiv.appendChild(datePriority)
    formDiv.appendChild(formButtonDiv)

    form.appendChild(close)
    form.appendChild(titleForm)
    form.appendChild(formDiv)
    main.appendChild(form)
}

function projectForm() {
    const projectDiv = document.querySelector('.projects')
    const projectForm = document.createElement('form')
    projectForm.setAttribute('id', 'form-project')

    const nameProject = document.createElement('div')
    nameProject.classList.add('name-project')

    const nameProjectLabel= document.createElement('label')
    nameProjectLabel.htmlFor = 'name'

    const nameProjectInput = document.createElement("input")
    nameProjectInput.setAttribute("type", "text");
    nameProjectInput.setAttribute("name", "name");
    nameProjectInput.setAttribute("id", "name");
    nameProjectInput.setAttribute("placeholder", "Enter Project Name")
    
    const projectFormDiv = document.createElement('div')
    projectFormDiv.classList.add('project-form-button')

    const addButton = document.createElement('button')
    addButton.classList.add('add-button')
    addButton.setAttribute('type', 'button')
    addButton.setAttribute('id', 'add')
    addButton.textContent = 'Add'

    const cancelButton = document.createElement('button')
    cancelButton.classList.add('cancel-button')
    cancelButton.textContent = 'Cancel'
    cancelButton.setAttribute('type', 'reset')
    cancelButton.setAttribute('id', 'cancel')

    projectFormDiv.appendChild(addButton)
    projectFormDiv.appendChild(cancelButton)

    nameProject.appendChild(nameProjectLabel)
    nameProject.appendChild(nameProjectInput)
    nameProject.appendChild(projectFormDiv)

    projectForm.appendChild(nameProject)
    projectDiv.appendChild(projectForm)
}

function appendTitle(titleVar) {
    const containerTitle = document.querySelector('.container-title')
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = titleVar
    
    containerTitle.appendChild(title)
}





/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");




let myProjects = []; 

class Project {
    constructor(name) {
        this.name = name 
    }
}

function getName() {
    let name = document.querySelector('#name').value; 
    if(name === '') {
        alert('The project name must be filled out')
    }
    else {
        let newProject = new Project(name)
        myProjects.push(newProject)
    }   
}

function addButton() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'add') {
            getName(); 
            deleteProject();
            addProject()
            ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.removeProjectForm)() 
        }
    });    
}

function addProject() {
    const projectContainer = document.querySelector('.projects-container')

    myProjects.forEach(function(project, i) { 
        const projectNameDiv = document.createElement('div')
        projectNameDiv.setAttribute('data-index', `${i}`)
        projectNameDiv.setAttribute('id', `project-name-div`)
        projectNameDiv.classList.add('items-list')

        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.classList.add('iconSvg')
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('fill', '#0284c7');
        iconPath.setAttribute('d', 'M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z');
        iconSvg.appendChild(iconPath);

        const projectName = document.createElement('button')
        projectName.setAttribute('id', 'project-name-btn')
        projectName.textContent = `${project.name}`

        function changeProject() {
            projectNameDiv.addEventListener('click', function(e) {
                    ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.deleteTitle)(); 
                    const name = `${project.name}`; 
                    (0,_initial_page__WEBPACK_IMPORTED_MODULE_2__.appendTitle)(name);
            }); 
         }

        changeProject();
    
        const deleteProject = document.createElement('span')
        deleteProject.textContent = 'x'
        deleteProject.classList.add('delete')
        deleteProject.setAttribute('id', 'delete')

        function deleteBtn() {
            deleteProject.addEventListener('click', function(e) {
                    myProjects.splice(`${i}`, 1);
                    projectContainer.removeChild(projectNameDiv)
                });
        }

        deleteBtn(); 
    
        projectNameDiv.appendChild(iconSvg)
        projectNameDiv.appendChild(projectName)
        projectNameDiv.appendChild(deleteProject)
        projectContainer.appendChild(projectNameDiv)
    })
}

function deleteProject() {
    const projectContainer = document.querySelector('.projects-container')
    if(document.body.contains(document.querySelector('#project-name-div'))) {
        while (projectContainer.firstChild) {
            projectContainer.removeChild(projectContainer.lastChild)
        }
    }
}



/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodos": () => (/* binding */ addTodos)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");




let myTodos = []

class Todo {
    constructor(title, description, date, priority) {
        this.title = title
        this.description = description 
        this.date = date 
        this.priority = priority
    }
}

function addTodos() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'submit') {
            getInfo(); 
            (0,_events__WEBPACK_IMPORTED_MODULE_1__.removeForm)();  
            deleteTodos(); 
            displayTodos();  
        }
    });          
}

function getInfo() {
    let title = document.querySelector('#title').value
    if (title === '') {
        alert('Title must be filled out');
    }
    let description = document.querySelector('#description').value
    let date = document.querySelector('#date').value 
    let select = document.querySelector('#select')
    let priority = select.options[select.selectedIndex].value;

    let newTodo = new Todo(title, description, date, priority)
    myTodos.push(newTodo)
    console.log(myTodos)
    
}

function displayTodos() {
    const content = document.querySelector('.content')

    myTodos.forEach(function(todo, i) {
        const todosContainer = document.createElement('div')
        todosContainer.setAttribute('data-index', `${i}`)
        todosContainer.classList.add('todos-container')
        
        const container1 = document.createElement('div')
        container1.classList.add('container1')

        const checkboxContainer = document.createElement('div')
        checkboxContainer.classList.add('checkbox-container')

        const checkboxLabel = document.createElement('label')
        checkboxLabel.htmlFor = 'checkbox'

        const checkboxInput =  document.createElement('input')
        checkboxInput.setAttribute('type', 'checkbox')

        const checkmark = document.createElement('span')
        checkmark.classList.add('checkmark')

        const title = document.createElement('div')
        title.setAttribute('id', 'title-todo')
        title.textContent = `${todo.title}`

        const container2 = document.createElement('div')
        container2.classList.add('container2')

        const date = document.createElement('div')
        date.setAttribute('id', 'date-todo')
        date.textContent = `${todo.date}`

        const iconSvg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.classList.add('iconSvg2')
        iconSvg.setAttribute('id', 'edit')
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('fill', '#0284c7');
        iconPath.setAttribute('d', 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z');
        iconSvg.appendChild(iconPath);

        const iconSvg2 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg2.classList.add('iconSvg2')
        iconSvg2.setAttribute('id', 'expanse')
        const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg2.setAttribute('viewBox', '0 0 24 24');
        iconSvg2.setAttribute('fill', '#0284c7');
        iconPath2.setAttribute('d', 'M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z');
        iconSvg2.appendChild(iconPath2);

        const iconSvg3 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg3.classList.add('iconSvg2')
        iconSvg3.setAttribute('id', 'priority-flag')
        const iconPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg3.setAttribute('viewBox', '0 0 24 24');
        iconSvg3.setAttribute('fill', '#0284c7');
        iconPath3.setAttribute('d', 'M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z');
        iconSvg3.appendChild(iconPath3);

        const iconSvg4 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg4.classList.add('iconSvg2')
        iconSvg4.setAttribute('id', 'priority-flag')
        const iconPath4 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg4.setAttribute('viewBox', '0 0 24 24');
        iconSvg4.setAttribute('fill', '#0284c7');
        iconPath4.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
        iconSvg4.appendChild(iconPath4);
        
        checkboxContainer.appendChild(checkboxLabel)
        checkboxContainer.appendChild(checkboxInput)
        checkboxContainer.appendChild(checkmark)

        container1.appendChild(checkboxContainer)
        container1.appendChild(title)
        container2.appendChild(date)
        container2.appendChild(iconSvg)
        container2.appendChild(iconSvg2)
        container2.appendChild(iconSvg3)
        container2.appendChild(iconSvg4)

        todosContainer.appendChild(container1)
        todosContainer.appendChild(container2)

        content.appendChild(todosContainer)
    }) 
}

function deleteTodos() {
    const content = document.querySelector('.content')
    if(document.body.contains(document.querySelector('.todos-container'))) {
        while(content.firstChild) {
            content.removeChild(content.lastChild)
        }
    }

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos */ "./src/todos.js");






(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.initialPage)(); 
(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.appendTitle)('Inbox')
;(0,_events__WEBPACK_IMPORTED_MODULE_1__.sidebarButton)(); 
(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.addTaskButton)(); 
(0,_events__WEBPACK_IMPORTED_MODULE_1__.changeTitle)(); 
(0,_events__WEBPACK_IMPORTED_MODULE_1__.addFormButton)(); 
(0,_events__WEBPACK_IMPORTED_MODULE_1__.projectButton)(); 
(0,_events__WEBPACK_IMPORTED_MODULE_1__.closeSpan)(); 
(0,_events__WEBPACK_IMPORTED_MODULE_1__.closeButton)(); 
(0,_projects__WEBPACK_IMPORTED_MODULE_2__.addButton)(); 
(0,_todos__WEBPACK_IMPORTED_MODULE_3__.addTodos)(); 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBeUU7QUFDaUM7QUFDcEU7QUFDTjs7O0FBR2hDLDBEQUFXO0FBQ1gsMERBQVc7QUFDWCx1REFBYTtBQUNiLDREQUFhO0FBQ2Isb0RBQVc7QUFDWCxzREFBYTtBQUNiLHNEQUFhO0FBQ2Isa0RBQVM7QUFDVCxvREFBVztBQUNYLG9EQUFTO0FBQ1QsZ0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyOyBcXG59XFxuXFxuLnNpZGViYXJCdG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xcbiAgICBjb2xvcjogI2RiZWFmZTtcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMCAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxM3ZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDsgXFxufVxcblxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmOyBcXG4gICAgaGVpZ2h0OiA4N3ZoO1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiA0MHB4IDAgMCA0MHB4OyBcXG59XFxuXFxuI2Zvcm0tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG59XFxuXFxuI25hbWUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5OyBcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luOiA1cHg7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pdGVtcy1saXN0LCAucHJvamVjdHMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtZGl2e1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNpbmJveCwgI3RvZGF5LCAjd2VlaywgLmFkZC1wcm9qZWN0LCAuYWRkLXByb2plY3QtYnRuLCAjcHJvamVjdC1uYW1lLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcblxcbiNpbmJveDpob3ZlciwgI3RvZGF5OmhvdmVyLCAjd2Vlazpob3ZlciwgLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgI3Byb2plY3QtbmFtZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbn1cXG5cXG4uaWNvblN2ZyB7XFxuICAgIG1hcmdpbjogM3B4IDAgMCA1cHg7XFxuICAgIHdpZHRoOjI0cHg7XFxuICAgIGhlaWdodDoyNHB4OyBcXG59XFxuXFxuLmljb25TdmcyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDsgXFxuXFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLml0ZW1zLWxpc3Q6aG92ZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuLmNvbnRhaW5lci10aXRsZSB7XFxuICAgIHdpZHRoOiA2NXZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICMwZTc0OTA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNjbG9zZTpob3ZlcixcXG4jY2xvc2U6Zm9jdXN7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDQwcHg7XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCA3MHB4IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICMwODVmNzc7XFxufVxcblxcbi50aXRsZS1mb3JtIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7ICBcXG59XFxuXFxuLnRhc2stdGl0bGUsIC5kZXNjcmlwdGlvbiwgLmRhdGUsIC5wcmlvcml0eSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAyNThweDtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuIFxcbn1cXG5cXG4uc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgY29sb3I6ICNjY2ZiZjE7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBjb2xvcjogcmdiKDk3LCA5NywgOTcpOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTc0OTA7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgICB3aWR0aDogNTV2dztcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGRpc3BsYXk6ZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyMSwgLmNvbnRhaW5lcjIgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3RpdGxlLXRvZG8ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI2RhdGUtdG9kbyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7IFxcbn1cXG5cXG4uc2lkZWJhckJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6eHgtbGFyZ2U7XFxuICAgIGNvbG9yOiAjZGJlYWZlO1xcbiAgICBtYXJnaW46IGF1dG8gYXV0byAwIDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEzdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7IFxcbiAgICBoZWlnaHQ6IDg3dmg7XFxufVxcblxcbi5ib2R5IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBtYXJnaW46IDQwcHggMCAwIDQwcHg7IFxcbn1cXG5cXG4jZm9ybS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbn1cXG5cXG4jbmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7IFxcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW46IDVweDsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW1zLWxpc3QsIC5wcm9qZWN0cyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1kaXZ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuI2luYm94LCAjdG9kYXksICN3ZWVrLCAuYWRkLXByb2plY3QsIC5hZGQtcHJvamVjdC1idG4sICNwcm9qZWN0LW5hbWUtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuXFxuI2luYm94OmhvdmVyLCAjdG9kYXk6aG92ZXIsICN3ZWVrOmhvdmVyLCAuYWRkLXByb2plY3QtYnRuOmhvdmVyLCAjcHJvamVjdC1uYW1lLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxufVxcblxcbi5pY29uU3ZnIHtcXG4gICAgbWFyZ2luOiAzcHggMCAwIDVweDtcXG4gICAgd2lkdGg6MjRweDtcXG4gICAgaGVpZ2h0OjI0cHg7IFxcbn1cXG5cXG4uaWNvblN2ZzIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4OyBcXG5cXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uaXRlbXMtbGlzdDpob3ZlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyLXRpdGxlIHtcXG4gICAgd2lkdGg6IDY1dnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogIzBlNzQ5MDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI2Nsb3NlOmhvdmVyLFxcbiNjbG9zZTpmb2N1c3tcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA0NDBweDtcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDcwcHggMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzA4NWY3NztcXG59XFxuXFxuLnRpdGxlLWZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgIFxcbn1cXG5cXG4udGFzay10aXRsZSwgLmRlc2NyaXB0aW9uLCAuZGF0ZSwgLnByaW9yaXR5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDI1OHB4O1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gXFxufVxcblxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBjb2xvcjogI2NjZmJmMTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7IFxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4udG9kb3MtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBlNzQ5MDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICAgIHdpZHRoOiA1NXZ3O1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIxLCAuY29udGFpbmVyMiAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4jdGl0bGUtdG9kbyB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jZGF0ZS10b2RvIHtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge2FkZEZvcm0sIHByb2plY3RGb3JtLCBhcHBlbmRUaXRsZX0gZnJvbSAnLi9pbml0aWFsLXBhZ2UnO1xuXG5cbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKSA9PT0gbnVsbClcbiAgICAgICAgYWRkRm9ybSgpOyBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tcHJvamVjdCcpID09PSBudWxsKVxuICAgICAgICBwcm9qZWN0Rm9ybSgpOyBcblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyQnV0dG9uKCkge1xuICAgIGNvbnN0IHNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhckJ0bicpXG4gICAgc2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgaWYodGl0bGUgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250YWluZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItdGl0bGUnKVxuICAgICAgICBjb250YWluZXJUaXRsZS5yZW1vdmVDaGlsZCh0aXRsZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2luYm94Jykge1xuICAgICAgICAgICAgZGVsZXRlVGl0bGUoKTsgXG4gICAgICAgICAgICBhcHBlbmRUaXRsZSgnSW5ib3gnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgZGVsZXRlVGl0bGUoKTsgXG4gICAgICAgICAgICBhcHBlbmRUaXRsZSgnVG9kYXknKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ3dlZWsnKSB7XG4gICAgICAgICAgICBkZWxldGVUaXRsZSgpOyBcbiAgICAgICAgICAgIGFwcGVuZFRpdGxlKCdUaGlzIHdlZWsnKTtcbiAgICAgICAgfVxuICAgIH0pOyBcblxufVxuXG5mdW5jdGlvbiBjbG9zZVNwYW4oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICByZW1vdmVGb3JtKCk7IFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKVxuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZm9ybSlcbn1cblxuZnVuY3Rpb24gY2xvc2VCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdEZvcm0oKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIGNvbnN0IGZvcm1Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tcHJvamVjdCcpXG4gICAgcHJvamVjdERpdi5yZW1vdmVDaGlsZChmb3JtUHJvamVjdCkgXG59XG5cblxuXG5leHBvcnQge3Byb2plY3RCdXR0b24sIGFkZEZvcm1CdXR0b24sIHNpZGViYXJCdXR0b24sIGNoYW5nZVRpdGxlLCBjbG9zZVNwYW4sIGNsb3NlQnV0dG9uLCByZW1vdmVQcm9qZWN0Rm9ybSwgZGVsZXRlVGl0bGUsIHJlbW92ZUZvcm0gfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbiBmdW5jdGlvbiBpbml0aWFsUGFnZSgpIHsgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgXG4gICAgY29uc3QgYXBwZWFyRGlzYXBwZWFyU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYXBwZWFyRGlzYXBwZWFyU2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyQnRuJylcbiAgICBhcHBlYXJEaXNhcHBlYXJTaWRlYmFyLnRleHRDb250ZW50ID0gJ+KJoSdcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiTGV0J3MgZG8gdGhpcyFcIlxuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluYm94LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWxpc3QnKVxuXG4gICAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTksMTVIMTVBMywzIDAgMCwxIDEyLDE4QTMsMyAwIDAsMSA5LDE1SDVWNUgxOU0xOSwzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1onKTtcbiAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcblxuICAgIGNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBpbmJveEJ0bi50ZXh0Q29udGVudCA9IFwiSW5ib3hcIlxuICAgIGluYm94QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5ib3gnKVxuXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWxpc3QnKVxuXG4gICAgY29uc3QgaWNvblN2ZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGljb25TdmcyLmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcnKVxuICAgIGNvbnN0IGljb25QYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgaWNvblN2ZzIuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgaWNvblBhdGgyLnNldEF0dHJpYnV0ZSgnZCcsICdNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy44OSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuODkgMjAuMTEgMyAxOSAzTTE5IDE5SDVWOUgxOVYxOU0xOSA3SDVWNUgxOU03IDExSDEyVjE2SDcnKTtcbiAgICBpY29uU3ZnMi5hcHBlbmRDaGlsZChpY29uUGF0aDIpO1xuXG4gICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRvZGF5QnRuLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgIHRvZGF5QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXknKVxuXG4gICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd2Vlay5jbGFzc0xpc3QuYWRkKCdpdGVtcy1saXN0JylcblxuICAgIGNvbnN0IGljb25TdmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBpY29uU3ZnMy5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICBjb25zdCBpY29uUGF0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgIGljb25TdmczLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgIGljb25QYXRoMy5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOUMyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xIDIwLjExIDIxIDE5IDIxSDVDMy45IDIxIDMgMjAuMTEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNNNSAxOUgxOVY5SDVWMTlNNSA3SDE5VjVINVY3TTE3IDExVjEzSDdWMTFIMTcnKTtcbiAgICBpY29uU3ZnMy5hcHBlbmRDaGlsZChpY29uUGF0aDMpO1xuXG4gICAgY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgd2Vla0J0bi50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnXG4gICAgd2Vla0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWsnKVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJylcblxuICAgIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHByb2plY3RzQnRuLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpXG5cbiAgICBjb25zdCBpY29uU3ZnNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgaWNvblN2ZzQuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZycpXG4gICAgY29uc3QgaWNvblBhdGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICBpY29uU3ZnNC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgaWNvblN2ZzQuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICBpY29uUGF0aDQuc2V0QXR0cmlidXRlKCdkJywgJ00xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEzLDdIMTFWMTFIN1YxM0gxMVYxN0gxM1YxM0gxN1YxMUgxM1Y3WicpO1xuICAgIGljb25Tdmc0LmFwcGVuZENoaWxkKGljb25QYXRoNCk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgbmV3IHByb2plY3QnXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnKVxuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKVxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5JylcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuXG4gICAgY29uc3QgY29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci10aXRsZScpXG5cbiAgICBjb25zdCBjb250ZW50VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRUb2Rvcy5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcblxuICAgIGluYm94LmFwcGVuZENoaWxkKGljb25TdmcpXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hCdG4pXG4gICAgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpbmJveClcbiAgICBcbiAgICB0b2RheS5hcHBlbmRDaGlsZChpY29uU3ZnMilcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheUJ0bilcbiAgICBsaXN0LmFwcGVuZENoaWxkKHRvZGF5KVxuICAgIFxuICAgIHdlZWsuYXBwZW5kQ2hpbGQoaWNvblN2ZzMpXG4gICAgd2Vlay5hcHBlbmRDaGlsZCh3ZWVrQnRuKVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQod2VlaylcblxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzQnRuKVxuXG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChpY29uU3ZnNClcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHMpXG4gICAgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lclRpdGxlKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudFRvZG9zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYXBwZWFyRGlzYXBwZWFyU2lkZWJhcilcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxufVxuXG5mdW5jdGlvbiBhZGRUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJylcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2spXG59XG5cbmZ1bmN0aW9uIGFkZEZvcm0oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICBcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKVxuXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJylcbiAgICBjbG9zZS50ZXh0Q29udGVudCA9ICdYJ1xuXG4gICAgY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZUZvcm0uY2xhc3NMaXN0LmFkZCgndGl0bGUtZm9ybScpXG4gICAgdGl0bGVGb3JtLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuXG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWRpdicpXG4gICAgXG4gICAgY29uc3QgdGFza1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpXG5cbiAgICBjb25zdCB0YXNrVGl0bGVMYWJlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRhc2tUaXRsZUxhYmVsLmh0bWxGb3IgPSAndGl0bGUnXG4gICAgdGFza1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVElUTEU6ICdcblxuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAnZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdERVNDUklQVElPTjogJ1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBcbiAgICBjb25zdCBkYXRlUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRhdGVQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdkYXRlLXByaW9yaXR5JylcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZScpXG5cbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAnZGF0ZSdcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRFVFIERBVEU6ICdcbiAgIFxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgXG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNlbGVjdFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcbiAgICBcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHNlbGVjdFByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICdwcmlvcml0eSdcbiAgICBzZWxlY3RQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1BSSU9SSVRZOiAnXG5cbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdCcpXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdMb3cnXG5cbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBvcHRpb24yLnRleHRDb250ZW50ID0gJ01lZGl1bSdcblxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG9wdGlvbjMudGV4dENvbnRlbnQgPSAnSGlnaCdcblxuICAgIGNvbnN0IGZvcm1CdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1CdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKVxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbiAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0JylcbiAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpXG5cbiAgICBmb3JtQnV0dG9uRGl2LmFwcGVuZENoaWxkKGZvcm1CdXR0b24pXG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSlcbiAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKVxuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjMpXG5cbiAgICBzZWxlY3RQcmlvcml0eURpdi5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eUxhYmVsKVxuICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KVxuXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXG5cbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpXG5cbiAgICB0YXNrVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlTGFiZWwpXG4gICAgdGFza1RpdGxlRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KVxuICAgIFxuICAgIGRhdGVQcmlvcml0eS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KVxuICAgIGRhdGVQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eURpdilcblxuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlRGl2KVxuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChkYXRlUHJpb3JpdHkpXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uRGl2KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRm9ybSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1wcm9qZWN0JylcblxuICAgIGNvbnN0IG5hbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYW1lUHJvamVjdC5jbGFzc0xpc3QuYWRkKCduYW1lLXByb2plY3QnKVxuXG4gICAgY29uc3QgbmFtZVByb2plY3RMYWJlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIG5hbWVQcm9qZWN0TGFiZWwuaHRtbEZvciA9ICduYW1lJ1xuXG4gICAgY29uc3QgbmFtZVByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG5hbWVQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbmFtZVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgICBuYW1lUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcbiAgICBuYW1lUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgUHJvamVjdCBOYW1lXCIpXG4gICAgXG4gICAgY29uc3QgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1idXR0b24nKVxuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idXR0b24nKVxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsJylcblxuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXG5cbiAgICBuYW1lUHJvamVjdC5hcHBlbmRDaGlsZChuYW1lUHJvamVjdExhYmVsKVxuICAgIG5hbWVQcm9qZWN0LmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0SW5wdXQpXG4gICAgbmFtZVByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpXG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lUHJvamVjdClcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUaXRsZSh0aXRsZVZhcikge1xuICAgIGNvbnN0IGNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci10aXRsZScpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVmFyXG4gICAgXG4gICAgY29udGFpbmVyVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGUpXG59XG5cblxuXG5leHBvcnQgeyBpbml0aWFsUGFnZSwgYWRkVGFza0J1dHRvbiwgcHJvamVjdEZvcm0sIGFkZEZvcm0sIGFwcGVuZFRpdGxlIH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtyZW1vdmVQcm9qZWN0Rm9ybSwgZGVsZXRlVGl0bGV9IGZyb20gXCIuL2V2ZW50c1wiXG5pbXBvcnQge2FwcGVuZFRpdGxlfSBmcm9tIFwiLi9pbml0aWFsLXBhZ2VcIlxuXG5sZXQgbXlQcm9qZWN0cyA9IFtdOyBcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7IFxuICAgIGlmKG5hbWUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdUaGUgcHJvamVjdCBuYW1lIG11c3QgYmUgZmlsbGVkIG91dCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpXG4gICAgICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgIH0gICBcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIGdldE5hbWUoKTsgXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KClcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3RGb3JtKCkgXG4gICAgICAgIH1cbiAgICB9KTsgICAgXG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKVxuXG4gICAgbXlQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QsIGkpIHsgXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdE5hbWVEaXYuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7aX1gKVxuICAgICAgICBwcm9qZWN0TmFtZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtbmFtZS1kaXZgKVxuICAgICAgICBwcm9qZWN0TmFtZURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtcy1saXN0JylcblxuICAgICAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTcsNUgyMVY3SDdWNU03LDEzVjExSDIxVjEzSDdNNCw0LjVBMS41LDEuNSAwIDAsMSA1LjUsNkExLjUsMS41IDAgMCwxIDQsNy41QTEuNSwxLjUgMCAwLDEgMi41LDZBMS41LDEuNSAwIDAsMSA0LDQuNU00LDEwLjVBMS41LDEuNSAwIDAsMSA1LjUsMTJBMS41LDEuNSAwIDAsMSA0LDEzLjVBMS41LDEuNSAwIDAsMSAyLjUsMTJBMS41LDEuNSAwIDAsMSA0LDEwLjVNNywxOVYxN0gyMVYxOUg3TTQsMTYuNUExLjUsMS41IDAgMCwxIDUuNSwxOEExLjUsMS41IDAgMCwxIDQsMTkuNUExLjUsMS41IDAgMCwxIDIuNSwxOEExLjUsMS41IDAgMCwxIDQsMTYuNVonKTtcbiAgICAgICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZS1idG4nKVxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gXG5cbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdCgpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVUaXRsZSgpOyBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGAke3Byb2plY3QubmFtZX1gOyBcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVGl0bGUobmFtZSk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlUHJvamVjdCgpO1xuICAgIFxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAneCdcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxuICAgICAgICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlJylcblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVCdG4oKSB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBteVByb2plY3RzLnNwbGljZShgJHtpfWAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3ROYW1lRGl2KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlQnRuKCk7IFxuICAgIFxuICAgICAgICBwcm9qZWN0TmFtZURpdi5hcHBlbmRDaGlsZChpY29uU3ZnKVxuICAgICAgICBwcm9qZWN0TmFtZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdE5hbWVEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdClcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZURpdilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJylcbiAgICBpZihkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZGl2JykpKSB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7YWRkQnV0dG9uLCBhZGRQcm9qZWN0fSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge3JlbW92ZUZvcm19IGZyb20gJy4vZXZlbnRzJ1xuXG5cbmxldCBteVRvZG9zID0gW11cblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIFxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlIFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9zKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgIGdldEluZm8oKTsgXG4gICAgICAgICAgICByZW1vdmVGb3JtKCk7ICBcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9zKCk7IFxuICAgICAgICAgICAgZGlzcGxheVRvZG9zKCk7ICBcbiAgICAgICAgfVxuICAgIH0pOyAgICAgICAgICBcbn1cblxuZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZVxuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1RpdGxlIG11c3QgYmUgZmlsbGVkIG91dCcpO1xuICAgIH1cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSBcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpXG4gICAgbGV0IHByaW9yaXR5ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KVxuICAgIG15VG9kb3MucHVzaChuZXdUb2RvKVxuICAgIGNvbnNvbGUubG9nKG15VG9kb3MpXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgbXlUb2Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRvZG8sIGkpIHtcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpfWApXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9zLWNvbnRhaW5lcicpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXIxJylcblxuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgY2hlY2tib3hMYWJlbC5odG1sRm9yID0gJ2NoZWNrYm94J1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjaGVja2JveElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG5cbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS10b2RvJylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWBcblxuICAgICAgICBjb25zdCBjb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXIyJylcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtdG9kbycpXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLmRhdGV9YFxuXG4gICAgICAgIGNvbnN0IGljb25TdmcgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnMicpXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0JylcbiAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVonKTtcbiAgICAgICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG5cbiAgICAgICAgY29uc3QgaWNvblN2ZzIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgaWNvblN2ZzIuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZzInKVxuICAgICAgICBpY29uU3ZnMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2V4cGFuc2UnKVxuICAgICAgICBjb25zdCBpY29uUGF0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuXG4gICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgaWNvblN2ZzIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICAgICAgaWNvblBhdGgyLnNldEF0dHJpYnV0ZSgnZCcsICdNMTIsMTdMNywxMkgxMFY4SDE0VjEySDE3TDEyLDE3TTEyLDJBMTAsMTAgMCAwLDEgMjIsMTJBMTAsMTAgMCAwLDEgMTIsMjJBMTAsMTAgMCAwLDEgMiwxMkExMCwxMCAwIDAsMSAxMiwyTTEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwQTgsOCAwIDAsMCAyMCwxMkE4LDggMCAwLDAgMTIsNFonKTtcbiAgICAgICAgaWNvblN2ZzIuYXBwZW5kQ2hpbGQoaWNvblBhdGgyKTtcblxuICAgICAgICBjb25zdCBpY29uU3ZnMyA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBpY29uU3ZnMy5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnMicpXG4gICAgICAgIGljb25TdmczLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZmxhZycpXG4gICAgICAgIGNvbnN0IGljb25QYXRoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG5cbiAgICAgICAgaWNvblN2ZzMuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgICAgICBpY29uUGF0aDMuc2V0QXR0cmlidXRlKCdkJywgJ002LDNBMSwxIDAgMCwxIDcsNFY0Ljg4QzguMDYsNC40NCA5LjUsNCAxMSw0QzE0LDQgMTQsNiAxNiw2QzE5LDYgMjAsNCAyMCw0VjEyQzIwLDEyIDE5LDE0IDE2LDE0QzEzLDE0IDEzLDEyIDExLDEyQzgsMTIgNywxNCA3LDE0VjIxSDVWNEExLDEgMCAwLDEgNiwzWicpO1xuICAgICAgICBpY29uU3ZnMy5hcHBlbmRDaGlsZChpY29uUGF0aDMpO1xuXG4gICAgICAgIGNvbnN0IGljb25Tdmc0ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIGljb25Tdmc0LmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcyJylcbiAgICAgICAgaWNvblN2ZzQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1mbGFnJylcbiAgICAgICAgY29uc3QgaWNvblBhdGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcblxuICAgICAgICBpY29uU3ZnNC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgIGljb25Tdmc0LnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoNC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaJyk7XG4gICAgICAgIGljb25Tdmc0LmFwcGVuZENoaWxkKGljb25QYXRoNCk7XG4gICAgICAgIFxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveElucHV0KVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspXG5cbiAgICAgICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICAgICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGljb25TdmcpXG4gICAgICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoaWNvblN2ZzIpXG4gICAgICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoaWNvblN2ZzMpXG4gICAgICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoaWNvblN2ZzQpXG5cbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyMSlcbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyMilcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKVxuICAgIH0pIFxufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvcygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGlmKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpKSkge1xuICAgICAgICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IHthZGRUb2Rvc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZSwgYWRkVGFza0J1dHRvbiwgYXBwZW5kVGl0bGUgfSBmcm9tIFwiLi9pbml0aWFsLXBhZ2VcIjtcbmltcG9ydCB7cHJvamVjdEJ1dHRvbiwgYWRkRm9ybUJ1dHRvbiwgc2lkZWJhckJ1dHRvbiwgY2hhbmdlVGl0bGUsIGNsb3NlU3BhbiwgY2xvc2VCdXR0b24gfSBmcm9tIFwiLi9ldmVudHNcIlxuaW1wb3J0IHsgYWRkQnV0dG9uIH0gZnJvbSBcIi4vcHJvamVjdHNcIlxuaW1wb3J0IHthZGRUb2Rvc30gZnJvbSBcIi4vdG9kb3NcIlxuXG5cbmluaXRpYWxQYWdlKCk7IFxuYXBwZW5kVGl0bGUoJ0luYm94JylcbnNpZGViYXJCdXR0b24oKTsgXG5hZGRUYXNrQnV0dG9uKCk7IFxuY2hhbmdlVGl0bGUoKTsgXG5hZGRGb3JtQnV0dG9uKCk7IFxucHJvamVjdEJ1dHRvbigpOyBcbmNsb3NlU3BhbigpOyBcbmNsb3NlQnV0dG9uKCk7IFxuYWRkQnV0dG9uKCk7IFxuYWRkVG9kb3MoKTsgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=