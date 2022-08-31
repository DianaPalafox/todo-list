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
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    display: grid; \n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr 3fr; \n}\n\n.sidebarBtn {\n    width: 30px;\n    height: 50px;\n    border-style: none;\n    background-color: #0e7490;\n    cursor: pointer;\n    font-size:xx-large;\n    color: #dbeafe;\n    margin: auto auto 0 10px;\n}\n\n.header {\n    height: 13vh;\n    width: 100vw;\n    background-color: #0e7490;\n    grid-column: 1/span 2;\n    display: flex; \n}\n\n.logo {\n    margin-right: auto;\n    width: 210px;\n    text-align: center;\n    padding-top: 30px;\n    font-size: 2.5rem;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n\n.sidebar {\n    grid-row: 2;\n    background-color: #eff6ff; \n    height: 87vh;\n}\n\n.body {\n    grid-row: 2;\n    display: flex;\n    width: 100vw;\n}\n\n.list {\n    margin: 40px 0 0 40px; \n}\n\n#form-project {\n    display: flex;\n    justify-content: center;\n}\n\n#form-project:hover {\n    background-color: #e5e7eb;\n}\n\n#name {\n    border: 1px solid grey; \n    width: 200px;\n}\n\n.add-button, .cancel-button {\n    width: 80px;\n    margin: 5px;  \n    background-color: #0e7490;\n    border-style: none;\n    color: white; \n    cursor: pointer;\n}\n\n.project-form-button {\n    display: flex;\n    justify-content: center;\n}\n\n.items-list, .projects {\n    padding-bottom: 30px;\n    display: flex;\n    height: 5px;\n}\n\n#project-name-div{\n    width: 200px;\n}\n\n#inbox, #today, #week, .add-project, .add-project-btn, #project-name-btn{\n    border-radius: 10px;\n    border-style: none;\n    background-color: #eff6ff;\n    cursor: pointer;\n    font-size: 1rem;\n    text-align: left;\n    width: 220px;\n    height: 35px;\n}\n\n\n#inbox:hover, #today:hover, #week:hover, .add-project-btn:hover, #project-name-btn:hover {\n    background-color: #dbeafe;\n}\n\n.iconSvg {\n    margin: 3px 0 0 5px;\n    width:24px;\n    height:24px; \n}\n\n.iconSvg2 {\n    width: 20px;\n    height: 20px; \n    cursor: pointer;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project {\n    margin-left: 30px;\n    display: flex;\n    width: 200px;\n}\n\n.add-project:hover {\n    background-color: #dbeafe;\n    border-radius: 10px;\n    width: 200px;\n}\n\n.add-project-btn {\n    font-size: 1rem;\n}\n\n.items-list:hover {\n    padding-bottom: 30px;\n    background-color: #dbeafe;\n    width: 220px;\n    border-radius: 10px;\n    height: 5px;\n}\n\n.container-title {\n    width: 65vw;\n    height: 10vh;\n    background-color: #e5e7eb;\n    border-radius: 10px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    width: 20vw;\n    height: 8vh;\n    display: flex;\n    align-items: center;\n    font-family: 'Dancing Script', cursive;\n    color: #0e7490;\n    font-size: 2.5rem;\n    padding-left: 30px;\n}\n\n.main {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    height: 5vh;\n    width: 35vw;\n    border-style: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 30px auto 0 auto;\n}\n\n.add-task:hover {\n    background-color: #dbeafe;\n}\n\n#close {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n\n}\n\n#close:hover,\n#close:focus{\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#form{\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 440px;\n    height: 260px;\n    padding: 10px 20px 70px 30px;\n    border-style: none;\n    border-radius: 1em;\n    background-color: #0e7490;\n    box-shadow: 5px 5px #085f77;\n}\n\n.title-form {\n    font-size: 1.5rem; \n    margin-bottom: 20px;\n    text-align: center;\n    color: white;\n}\n\n.form-div {\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;  \n}\n\n.task-title, .description, .date, .priority {\n    color: white;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='text'] {\n    border-style: none;\n    width: 250px;\n    background-color: #FFFFFF;\n    border-radius: 3px;\n    padding: 5px;\n    font-size: 15px;\n    margin-top: 5px;\n}\n\n#description {\n    height: 100px;\n    width: 258px;\n}\n\n.date-priority {\n    display: flex; \n    flex-direction: column;\n    margin-left: 10px;\n}\n\n.submit {\n    width: 80px;\n    background-color: #dbeafe;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 3px;\n    margin-left: 330px;\n    margin-top: 20px;\n \n}\n\n.submit:hover {\n    background-color: #0e7490;\n    color: #ccfbf1;\n}\n\n.delete {\n    width: 20px;\n    height: 30px;\n    cursor: pointer; \n    color: rgb(97, 97, 97); \n    font-weight: bolder;\n    margin-top: 5px;\n    font-size: larger;\n}\n\n.todos-container {\n    border: 1px solid #0e7490; \n    border-radius: 5px; \n    width: 55vw;\n    height: 3vh;\n    display:flex; \n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 20px auto 0 auto;\n    padding: 10px;\n}\n\n.container1, .container2  {\n    display: flex;\n}\n\n.container2 {\n    justify-self: end;\n}\n\n#title-todo {\n    padding-left: 5px;\n}\n\n#date-todo {\n    padding-right: 5px;\n}\n\n#todos-container {\n    display: grid; \n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');\n\nbody, html {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    display: grid; \n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr 3fr; \n}\n\n.sidebarBtn {\n    width: 30px;\n    height: 50px;\n    border-style: none;\n    background-color: #0e7490;\n    cursor: pointer;\n    font-size:xx-large;\n    color: #dbeafe;\n    margin: auto auto 0 10px;\n}\n\n.header {\n    height: 13vh;\n    width: 100vw;\n    background-color: #0e7490;\n    grid-column: 1/span 2;\n    display: flex; \n}\n\n.logo {\n    margin-right: auto;\n    width: 210px;\n    text-align: center;\n    padding-top: 30px;\n    font-size: 2.5rem;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n\n.sidebar {\n    grid-row: 2;\n    background-color: #eff6ff; \n    height: 87vh;\n}\n\n.body {\n    grid-row: 2;\n    display: flex;\n    width: 100vw;\n}\n\n.list {\n    margin: 40px 0 0 40px; \n}\n\n#form-project {\n    display: flex;\n    justify-content: center;\n}\n\n#form-project:hover {\n    background-color: #e5e7eb;\n}\n\n#name {\n    border: 1px solid grey; \n    width: 200px;\n}\n\n.add-button, .cancel-button {\n    width: 80px;\n    margin: 5px;  \n    background-color: #0e7490;\n    border-style: none;\n    color: white; \n    cursor: pointer;\n}\n\n.project-form-button {\n    display: flex;\n    justify-content: center;\n}\n\n.items-list, .projects {\n    padding-bottom: 30px;\n    display: flex;\n    height: 5px;\n}\n\n#project-name-div{\n    width: 200px;\n}\n\n#inbox, #today, #week, .add-project, .add-project-btn, #project-name-btn{\n    border-radius: 10px;\n    border-style: none;\n    background-color: #eff6ff;\n    cursor: pointer;\n    font-size: 1rem;\n    text-align: left;\n    width: 220px;\n    height: 35px;\n}\n\n\n#inbox:hover, #today:hover, #week:hover, .add-project-btn:hover, #project-name-btn:hover {\n    background-color: #dbeafe;\n}\n\n.iconSvg {\n    margin: 3px 0 0 5px;\n    width:24px;\n    height:24px; \n}\n\n.iconSvg2 {\n    width: 20px;\n    height: 20px; \n    cursor: pointer;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project {\n    margin-left: 30px;\n    display: flex;\n    width: 200px;\n}\n\n.add-project:hover {\n    background-color: #dbeafe;\n    border-radius: 10px;\n    width: 200px;\n}\n\n.add-project-btn {\n    font-size: 1rem;\n}\n\n.items-list:hover {\n    padding-bottom: 30px;\n    background-color: #dbeafe;\n    width: 220px;\n    border-radius: 10px;\n    height: 5px;\n}\n\n.container-title {\n    width: 65vw;\n    height: 10vh;\n    background-color: #e5e7eb;\n    border-radius: 10px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    width: 20vw;\n    height: 8vh;\n    display: flex;\n    align-items: center;\n    font-family: 'Dancing Script', cursive;\n    color: #0e7490;\n    font-size: 2.5rem;\n    padding-left: 30px;\n}\n\n.main {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    height: 5vh;\n    width: 35vw;\n    border-style: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 30px auto 0 auto;\n}\n\n.add-task:hover {\n    background-color: #dbeafe;\n}\n\n#close {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n\n}\n\n#close:hover,\n#close:focus{\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#form{\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 440px;\n    height: 260px;\n    padding: 10px 20px 70px 30px;\n    border-style: none;\n    border-radius: 1em;\n    background-color: #0e7490;\n    box-shadow: 5px 5px #085f77;\n}\n\n.title-form {\n    font-size: 1.5rem; \n    margin-bottom: 20px;\n    text-align: center;\n    color: white;\n}\n\n.form-div {\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;  \n}\n\n.task-title, .description, .date, .priority {\n    color: white;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='text'] {\n    border-style: none;\n    width: 250px;\n    background-color: #FFFFFF;\n    border-radius: 3px;\n    padding: 5px;\n    font-size: 15px;\n    margin-top: 5px;\n}\n\n#description {\n    height: 100px;\n    width: 258px;\n}\n\n.date-priority {\n    display: flex; \n    flex-direction: column;\n    margin-left: 10px;\n}\n\n.submit {\n    width: 80px;\n    background-color: #dbeafe;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 3px;\n    margin-left: 330px;\n    margin-top: 20px;\n \n}\n\n.submit:hover {\n    background-color: #0e7490;\n    color: #ccfbf1;\n}\n\n.delete {\n    width: 20px;\n    height: 30px;\n    cursor: pointer; \n    color: rgb(97, 97, 97); \n    font-weight: bolder;\n    margin-top: 5px;\n    font-size: larger;\n}\n\n.todos-container {\n    border: 1px solid #0e7490; \n    border-radius: 5px; \n    width: 55vw;\n    height: 3vh;\n    display:flex; \n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 20px auto 0 auto;\n    padding: 10px;\n}\n\n.container1, .container2  {\n    display: flex;\n}\n\n.container2 {\n    justify-self: end;\n}\n\n#title-todo {\n    padding-left: 5px;\n}\n\n#date-todo {\n    padding-right: 5px;\n}\n\n#todos-container {\n    display: grid; \n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "deleteTitle": () => (/* binding */ deleteTitle),
/* harmony export */   "dom_events": () => (/* binding */ dom_events),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "removeProjectForm": () => (/* binding */ removeProjectForm)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");




const dom_events = () => {
    (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.appendTitle)('Inbox')
    const addFormButton = (() => {
        const addTask = document.querySelector('.add-task')
        addTask.addEventListener('click', () => {
            if(document.querySelector('#form') === null) {
                (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.addForm)(); 
            }       
        })
    })();
    
    const projectButton = (() => {
        const project = document.querySelector('#project')
        project.addEventListener('click', () => {
            if(document.querySelector('#form-project') === null) {
               (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.projectForm)(); 
            }      
        });
    })();
    
    const sidebarButton = (() => {
        const sidebarBtn = document.querySelector('.sidebarBtn')
        sidebarBtn.addEventListener('click', () => {
            if (document.querySelector('.sidebar').style.display === 'block') {
                document.querySelector('.sidebar').style.display = 'none'
            }
            else if (document.querySelector('.sidebar').style.display === 'none') {
                document.querySelector('.sidebar').style.display = 'block'
            }
        });
    })();
    
    
    const changeTitle = (() => {
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
    
    })();
    
    const closeSpan = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'close') {
                removeForm(); 
            }
        });
    })();
    
    const closeButton = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'cancel') {
                removeProjectForm()
            }
        });
    })();
    
}

const deleteTitle = () => {
    const title = document.querySelector('.title')
    if(title != null) {
        const containerTitle = document.querySelector('.container-title')
        containerTitle.removeChild(title)
    }
}

const removeProjectForm = () => {
    if(document.querySelector('#form-project') !== null) {
        const projectDiv = document.querySelector('.projects')
        const formProject = document.querySelector('#form-project')
        projectDiv.removeChild(formProject) 
    }
};

const removeForm = () => {
    if(document.querySelector('#form') !== null) {
        const main = document.querySelector('.main')
        const form = document.querySelector('#form')
        main.removeChild(form)
    }   
};




/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addForm": () => (/* binding */ addForm),
/* harmony export */   "appendTitle": () => (/* binding */ appendTitle),
/* harmony export */   "dom_content": () => (/* binding */ dom_content),
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

//import {deleteTodos} from './todos'

const dom_content = () => {
    const initialPage = (() => {
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

    })();
          
    const addTaskButton = (() => {
        const main = document.querySelector('.main')
    
        const addTask = document.createElement('button')
        addTask.classList.add('add-task')
        addTask.textContent = '+ Add Task'
    
        main.appendChild(addTask)
    })();    
}

    const addForm = () => {
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

    };
        
    const projectForm = () => {
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

    }; 
    
    const appendTitle = (titleVar) => {
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
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");




const projects = () => {
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

    const addButton = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'add') {
                getName(); 
                deleteProject();
                addProject()
                ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.removeProjectForm)() 
            }
        });    
    })(); 

    const addProject = () => { 
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

            const deleteProject = document.createElement('span')
            deleteProject.textContent = 'x'
            deleteProject.classList.add('delete')
            deleteProject.setAttribute('id', 'delete')

            projectNameDiv.appendChild(iconSvg)
            projectNameDiv.appendChild(projectName)
            projectNameDiv.appendChild(deleteProject)
            projectContainer.appendChild(projectNameDiv)

            const changeProject = (() => {
                projectNameDiv.addEventListener('click', function() {
                    ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.deleteTitle)(); 
                    const name = `${project.name}`; 
                    (0,_initial_page__WEBPACK_IMPORTED_MODULE_2__.appendTitle)(name);
                }); 
            })(); 

            const deleteBtn = (() => { 
                deleteProject.addEventListener('click', function() {
                        myProjects.splice(`${i}`, 1);
                        projectContainer.removeChild(projectNameDiv)
                    });
            })(); 

    })
};

    function deleteProject() {
        const projectContainer = document.querySelector('.projects-container')
        if(document.body.contains(document.querySelector('#project-name-div'))) {
            while (projectContainer.firstChild) {
                projectContainer.removeChild(projectContainer.lastChild)
            }
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
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");



const todos = () => {
    let myTodos = []

    class Todo {
        constructor(title, description, date, priority) {
            this.title = title
            this.description = description 
            this.date = date 
            this.priority = priority
        }
    }

    const addTodos = (() => { 
        document.addEventListener('click', function(e) {
            if(e.target.id === 'submit') {
                console.log('works')
                getInfo(); 
                (0,_events__WEBPACK_IMPORTED_MODULE_1__.removeForm)();  
                deleteTodos(); 
                displayTodos();  
            }
        });          
    })(); 

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
            checkboxInput.classList.add('checkmark')

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
            iconPath2.classList.add('iconPath2')
            iconSvg2.setAttribute('viewBox', '0 0 24 24');
            iconSvg2.setAttribute('fill', '#0284c7');
            iconPath2.setAttribute('d', 'M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z');
            iconSvg2.appendChild(iconPath2);

            const iconSvg3 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            iconSvg3.classList.add('iconSvg2')
            iconSvg3.setAttribute('id', 'priority-flag')
            const iconPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');

            iconSvg3.setAttribute('viewBox', '0 0 24 24');
            iconPath3.setAttribute('d', 'M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z');
            iconSvg3.appendChild(iconPath3);

            const iconSvg4 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            iconSvg4.classList.add('iconSvg2')
            iconSvg4.setAttribute('id', 'delete')
            const iconPath4 = document.createElementNS('http://www.w3.org/2000/svg','path');

            iconSvg4.setAttribute('viewBox', '0 0 24 24');
            iconSvg4.setAttribute('fill', '#0284c7');
            iconPath4.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
            iconSvg4.appendChild(iconPath4);
        
            checkboxContainer.appendChild(checkboxLabel)
            checkboxContainer.appendChild(checkboxInput)

            container1.appendChild(checkboxContainer)
            container1.appendChild(title)
            container2.appendChild(date)
            container2.appendChild(iconSvg)
            container2.appendChild(iconSvg3)
            container2.appendChild(iconSvg4) 
            container2.appendChild(iconSvg2)

            todosContainer.appendChild(container1)
            todosContainer.appendChild(container2)

            content.appendChild(todosContainer)

            const removeTodo = (() => { 
                iconSvg4.addEventListener('click', function() {
                    myTodos.splice(`${i}`, 1);
                    content.removeChild(todosContainer)
                })
            })(); 

            const strikeTitle = (() => { 
                checkboxInput.addEventListener('click', function() {
                    if(checkboxInput.checked){
                        title.style.setProperty('text-decoration', 'line-through');
                    }
                    else {
                        title.style.textDecoration = 'none'
                     }
                }) 
            })(); 

            const flagPriority = (() => { 
                if(`${todo.priority}` === 'Low') {
                    iconSvg3.setAttribute('fill', '#16a34a');
                }
                if(`${todo.priority}` === 'Medium') {
                    iconSvg3.setAttribute('fill', '#fef08a');
                }
                if(`${todo.priority}` === 'High') {
                    iconSvg3.setAttribute('fill', '#e11d48');
                }           
            })();
    

        const expand = (() => { 
            iconSvg2.addEventListener('click', function(e) {           
                if(document.querySelector('.description-container') === null) {
                    iconSvg2.setAttribute('id', 'expand')
                    iconPath2.setAttribute('d', 'M12,7L17,12H14V16H10V12H7L12,7M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20Z');
                    iconSvg2.appendChild(iconPath2);

                    todosContainer.setAttribute('id', 'todos-container')
                    todosContainer.style.height = "9vh"; 

                    const descriptionContainer = document.createElement('div')
                    descriptionContainer.classList.add('description-container')
              
                    descriptionContainer.textContent = `${todo.description}`
                
                    container2.appendChild(iconSvg2)
                    todosContainer.appendChild(descriptionContainer)
                    

                }   
                else if(e.target.id === 'expand' && document.querySelector('.description-container') !== null) {
                    iconSvg2.setAttribute('id', 'expanse')
                    iconPath2.setAttribute('d', 'M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z');
                    iconSvg2.appendChild(iconPath2);
                    
                    const descriptionContainer = document.querySelector('.description-container')
                    descriptionContainer.remove()
                    todosContainer.style.height = "3vh"; 
                    
                    container2.appendChild(iconSvg2)
                    todosContainer.appendChild(container2)      
                } 
            })            
        })(); 

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






document.addEventListener('DOMContentLoaded', () => {
    (0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.dom_content)();
    (0,_events__WEBPACK_IMPORTED_MODULE_1__.dom_events)(); 
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projects)(); 
    (0,_todos__WEBPACK_IMPORTED_MODULE_3__.todos)(); 
})




/*import { initialPage, addTaskButton, appendTitle } from "./initial-page";
import {projectButton, addFormButton, sidebarButton, changeTitle, closeSpan, closeButton } from "./events"
import { addButton } from "./projects"
import {addTodos} from "./todos"


initialPage(); 
appendTitle('Inbox')
sidebarButton(); 
addTaskButton(); 
changeTitle(); 
addFormButton(); 
projectButton(); 
closeSpan(); 
closeButton(); 
addButton(); 
addTodos(); */



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHL0I7QUFDcEIsVUFBVSxhQUFhOztBQUVoQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVW9CO0FBQ21DO0FB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QUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDUjtBQUNBO0FBQ047OztBQUcvQjtBQUNBLElBQUksMERBQVc7QUFDZixJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBUTtBQUNaLElBQUksNkNBQUs7QUFDVCxDQUFDOzs7OztBQUtELFdBQVcsMENBQTBDO0FBQ3JELFFBQVEsbUZBQW1GO0FBQzNGLFNBQVMsWUFBWTtBQUNyQixRQUFRLFVBQVU7OztBQUdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyOyBcXG59XFxuXFxuLnNpZGViYXJCdG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xcbiAgICBjb2xvcjogI2RiZWFmZTtcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMCAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxM3ZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDsgXFxufVxcblxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmOyBcXG4gICAgaGVpZ2h0OiA4N3ZoO1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiA0MHB4IDAgMCA0MHB4OyBcXG59XFxuXFxuI2Zvcm0tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG59XFxuXFxuI25hbWUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5OyBcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luOiA1cHg7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pdGVtcy1saXN0LCAucHJvamVjdHMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtZGl2e1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNpbmJveCwgI3RvZGF5LCAjd2VlaywgLmFkZC1wcm9qZWN0LCAuYWRkLXByb2plY3QtYnRuLCAjcHJvamVjdC1uYW1lLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcblxcbiNpbmJveDpob3ZlciwgI3RvZGF5OmhvdmVyLCAjd2Vlazpob3ZlciwgLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgI3Byb2plY3QtbmFtZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbn1cXG5cXG4uaWNvblN2ZyB7XFxuICAgIG1hcmdpbjogM3B4IDAgMCA1cHg7XFxuICAgIHdpZHRoOjI0cHg7XFxuICAgIGhlaWdodDoyNHB4OyBcXG59XFxuXFxuLmljb25TdmcyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uaXRlbXMtbGlzdDpob3ZlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyLXRpdGxlIHtcXG4gICAgd2lkdGg6IDY1dnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogIzBlNzQ5MDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI2Nsb3NlOmhvdmVyLFxcbiNjbG9zZTpmb2N1c3tcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA0NDBweDtcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDcwcHggMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzA4NWY3NztcXG59XFxuXFxuLnRpdGxlLWZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgIFxcbn1cXG5cXG4udGFzay10aXRsZSwgLmRlc2NyaXB0aW9uLCAuZGF0ZSwgLnByaW9yaXR5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDI1OHB4O1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gXFxufVxcblxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBjb2xvcjogI2NjZmJmMTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7IFxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4udG9kb3MtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBlNzQ5MDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICAgIHdpZHRoOiA1NXZ3O1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lcjEsIC5jb250YWluZXIyICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250YWluZXIyIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiN0aXRsZS10b2RvIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiNkYXRlLXRvZG8ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiN0b2Rvcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lB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QUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjsgXFxufVxcblxcbi5zaWRlYmFyQnRuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTp4eC1sYXJnZTtcXG4gICAgY29sb3I6ICNkYmVhZmU7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvIDAgMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTN2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjsgXFxuICAgIGhlaWdodDogODd2aDtcXG59XFxuXFxuLmJvZHkge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogNDBweCAwIDAgNDBweDsgXFxufVxcblxcbiNmb3JtLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxufVxcblxcbiNuYW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgXFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24sIC5jYW5jZWwtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIG1hcmdpbjogNXB4OyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaXRlbXMtbGlzdCwgLnByb2plY3RzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lLWRpdntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4jaW5ib3gsICN0b2RheSwgI3dlZWssIC5hZGQtcHJvamVjdCwgLmFkZC1wcm9qZWN0LWJ0biwgI3Byb2plY3QtbmFtZS1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG5cXG4jaW5ib3g6aG92ZXIsICN0b2RheTpob3ZlciwgI3dlZWs6aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIsICNwcm9qZWN0LW5hbWUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG59XFxuXFxuLmljb25Tdmcge1xcbiAgICBtYXJnaW46IDNweCAwIDAgNXB4O1xcbiAgICB3aWR0aDoyNHB4O1xcbiAgICBoZWlnaHQ6MjRweDsgXFxufVxcblxcbi5pY29uU3ZnMiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLml0ZW1zLWxpc3Q6aG92ZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuLmNvbnRhaW5lci10aXRsZSB7XFxuICAgIHdpZHRoOiA2NXZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICMwZTc0OTA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNjbG9zZTpob3ZlcixcXG4jY2xvc2U6Zm9jdXN7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDQwcHg7XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCA3MHB4IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICMwODVmNzc7XFxufVxcblxcbi50aXRsZS1mb3JtIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7ICBcXG59XFxuXFxuLnRhc2stdGl0bGUsIC5kZXNjcmlwdGlvbiwgLmRhdGUsIC5wcmlvcml0eSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAyNThweDtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuIFxcbn1cXG5cXG4uc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgY29sb3I6ICNjY2ZiZjE7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBjb2xvcjogcmdiKDk3LCA5NywgOTcpOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTc0OTA7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgICB3aWR0aDogNTV2dztcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGRpc3BsYXk6ZmxleDsgXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIxLCAuY29udGFpbmVyMiAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udGFpbmVyMiB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jdGl0bGUtdG9kbyB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jZGF0ZS10b2RvIHtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4jdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBwcm9qZWN0Rm9ybSwgYWRkRm9ybSwgYXBwZW5kVGl0bGUgfSBmcm9tICcuL2luaXRpYWwtcGFnZSc7XG5cblxuZXhwb3J0IGNvbnN0IGRvbV9ldmVudHMgPSAoKSA9PiB7XG4gICAgYXBwZW5kVGl0bGUoJ0luYm94JylcbiAgICBjb25zdCBhZGRGb3JtQnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkRm9ybSgpOyBcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH0pXG4gICAgfSkoKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXByb2plY3QnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgcHJvamVjdEZvcm0oKTsgXG4gICAgICAgICAgICB9ICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3Qgc2lkZWJhckJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhckJ0bicpXG4gICAgICAgIHNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9ICgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICdpbmJveCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVUaXRsZSgpOyBcbiAgICAgICAgICAgICAgICBhcHBlbmRUaXRsZSgnSW5ib3gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAndG9kYXknKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGl0bGUoKTsgXG4gICAgICAgICAgICAgICAgYXBwZW5kVGl0bGUoJ1RvZGF5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ3dlZWsnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGl0bGUoKTsgXG4gICAgICAgICAgICAgICAgYXBwZW5kVGl0bGUoJ1RoaXMgd2VlaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgXG4gICAgfSkoKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZVNwYW4gPSAoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdEZvcm0oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICAgIFxufVxuXG5jb25zdCBkZWxldGVUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgaWYodGl0bGUgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250YWluZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItdGl0bGUnKVxuICAgICAgICBjb250YWluZXJUaXRsZS5yZW1vdmVDaGlsZCh0aXRsZSlcbiAgICB9XG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXByb2plY3QnKSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdERpdi5yZW1vdmVDaGlsZChmb3JtUHJvamVjdCkgXG4gICAgfVxufTtcblxuY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpXG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQoZm9ybSlcbiAgICB9ICAgXG59O1xuXG5leHBvcnQge3JlbW92ZUZvcm0sIHJlbW92ZVByb2plY3RGb3JtLCBkZWxldGVUaXRsZX1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG4vL2ltcG9ydCB7ZGVsZXRlVG9kb3N9IGZyb20gJy4vdG9kb3MnXG5cbmV4cG9ydCBjb25zdCBkb21fY29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsUGFnZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuICAgIFxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFwcGVhckRpc2FwcGVhclNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBhcHBlYXJEaXNhcHBlYXJTaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJCdG4nKVxuICAgICAgICBhcHBlYXJEaXNhcHBlYXJTaWRlYmFyLnRleHRDb250ZW50ID0gJ+KJoSdcbiAgICBcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIkxldCdzIGRvIHRoaXMhXCJcbiAgICBcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpXG4gICAgXG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnaXRlbXMtbGlzdCcpXG4gICAgXG4gICAgICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcnKVxuICAgICAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTksMTVIMTVBMywzIDAgMCwxIDEyLDE4QTMsMyAwIDAsMSA5LDE1SDVWNUgxOU0xOSwzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1onKTtcbiAgICAgICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgaW5ib3hCdG4udGV4dENvbnRlbnQgPSBcIkluYm94XCJcbiAgICAgICAgaW5ib3hCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdpbmJveCcpXG4gICAgXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnaXRlbXMtbGlzdCcpXG4gICAgXG4gICAgICAgIGNvbnN0IGljb25TdmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgaWNvblN2ZzIuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZycpXG4gICAgICAgIGNvbnN0IGljb25QYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgaWNvblN2ZzIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICAgICAgaWNvblBhdGgyLnNldEF0dHJpYnV0ZSgnZCcsICdNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy44OSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuODkgMjAuMTEgMyAxOSAzTTE5IDE5SDVWOUgxOVYxOU0xOSA3SDVWNUgxOU03IDExSDEyVjE2SDcnKTtcbiAgICAgICAgaWNvblN2ZzIuYXBwZW5kQ2hpbGQoaWNvblBhdGgyKTtcbiAgICBcbiAgICAgICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICB0b2RheUJ0bi50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICAgICAgdG9kYXlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpXG4gICAgXG4gICAgICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWxpc3QnKVxuICAgIFxuICAgICAgICBjb25zdCBpY29uU3ZnMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIGljb25TdmczLmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcnKVxuICAgICAgICBjb25zdCBpY29uUGF0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgICAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgIGljb25TdmczLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoMy5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOUMyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xIDIwLjExIDIxIDE5IDIxSDVDMy45IDIxIDMgMjAuMTEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNNNSAxOUgxOVY5SDVWMTlNNSA3SDE5VjVINVY3TTE3IDExVjEzSDdWMTFIMTcnKTtcbiAgICAgICAgaWNvblN2ZzMuYXBwZW5kQ2hpbGQoaWNvblBhdGgzKTtcbiAgICBcbiAgICAgICAgY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHdlZWtCdG4udGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJ1xuICAgICAgICB3ZWVrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VlaycpXG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgcHJvamVjdHNCdG4udGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXG4gICAgXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0JylcbiAgICBcbiAgICAgICAgY29uc3QgaWNvblN2ZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBpY29uU3ZnNC5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICAgICAgY29uc3QgaWNvblBhdGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICAgICAgaWNvblN2ZzQuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnNC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgICAgICBpY29uUGF0aDQuc2V0QXR0cmlidXRlKCdkJywgJ00xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEzLDdIMTFWMTFIN1YxM0gxMVYxN0gxM1YxM0gxN1YxMUgxM1Y3WicpO1xuICAgICAgICBpY29uU3ZnNC5hcHBlbmRDaGlsZChpY29uUGF0aDQpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKVxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBuZXcgcHJvamVjdCdcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnKVxuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKVxuICAgIFxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5JylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci10aXRsZScpXG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRlbnRUb2Rvcy5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbiAgICBcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaWNvblN2ZylcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hCdG4pXG4gICAgICAgIFxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGluYm94KVxuICAgICAgICBcbiAgICAgICAgdG9kYXkuYXBwZW5kQ2hpbGQoaWNvblN2ZzIpXG4gICAgICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5QnRuKVxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHRvZGF5KVxuICAgICAgICBcbiAgICAgICAgd2Vlay5hcHBlbmRDaGlsZChpY29uU3ZnMylcbiAgICAgICAgd2Vlay5hcHBlbmRDaGlsZCh3ZWVrQnRuKVxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHdlZWspXG4gICAgXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzQnRuKVxuICAgIFxuICAgICAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGljb25Tdmc0KVxuICAgICAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHMpXG4gICAgICAgIFxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXJUaXRsZSlcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50VG9kb3MpXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGFwcGVhckRpc2FwcGVhclNpZGViYXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgICB9KSgpO1xuICAgICAgICAgIFxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIFxuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpXG4gICAgICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzaydcbiAgICBcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhZGRUYXNrKVxuICAgIH0pKCk7ICAgIFxufVxuXG4gICAgY29uc3QgYWRkRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKVxuICAgIFxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJylcbiAgICAgICAgY2xvc2UudGV4dENvbnRlbnQgPSAnWCdcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGl0bGVGb3JtLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWZvcm0nKVxuICAgICAgICB0aXRsZUZvcm0udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGl2JylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcbiAgICBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlTGFiZWw9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgdGFza1RpdGxlTGFiZWwuaHRtbEZvciA9ICd0aXRsZSdcbiAgICAgICAgdGFza1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVElUTEU6ICdcbiAgICBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdkZXNjcmlwdGlvbidcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdERVNDUklQVElPTjogJ1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRlUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkYXRlUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZGF0ZS1wcmlvcml0eScpXG4gICAgXG4gICAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKVxuICAgIFxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ2RhdGUnXG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEVUUgREFURTogJ1xuICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gICAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0UHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzZWxlY3RQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZWxlY3RQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBzZWxlY3RQcmlvcml0eUxhYmVsLmh0bWxGb3IgPSAncHJpb3JpdHknXG4gICAgICAgIHNlbGVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUFJJT1JJVFk6ICdcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0JylcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSAnTG93J1xuICAgIFxuICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG4gICAgXG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBvcHRpb24zLnRleHRDb250ZW50ID0gJ0hpZ2gnXG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1CdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb3JtQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJylcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuICAgICAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0JylcbiAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKVxuICAgIFxuICAgICAgICBmb3JtQnV0dG9uRGl2LmFwcGVuZENoaWxkKGZvcm1CdXR0b24pXG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpXG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpXG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjMpXG4gICAgXG4gICAgICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5TGFiZWwpXG4gICAgICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KVxuICAgIFxuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXG4gICAgXG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpXG4gICAgXG4gICAgICAgIHRhc2tUaXRsZURpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVMYWJlbClcbiAgICAgICAgdGFza1RpdGxlRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KVxuICAgICAgICBcbiAgICAgICAgZGF0ZVByaW9yaXR5LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG4gICAgICAgIGRhdGVQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eURpdilcbiAgICBcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVEaXYpXG4gICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpXG4gICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZGF0ZVByaW9yaXR5KVxuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1CdXR0b25EaXYpXG4gICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2UpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGb3JtKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIH07XG4gICAgICAgIFxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXByb2plY3QnKVxuICAgIFxuICAgICAgICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hbWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25hbWUtcHJvamVjdCcpXG4gICAgXG4gICAgICAgIGNvbnN0IG5hbWVQcm9qZWN0TGFiZWw9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbmFtZVByb2plY3RMYWJlbC5odG1sRm9yID0gJ25hbWUnXG4gICAgXG4gICAgICAgIGNvbnN0IG5hbWVQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgbmFtZVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgbmFtZVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgICAgICAgbmFtZVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gICAgICAgIG5hbWVQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBQcm9qZWN0IE5hbWVcIilcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWJ1dHRvbicpXG4gICAgXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKVxuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJ1xuICAgIFxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwnKVxuICAgIFxuICAgICAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gICAgICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcbiAgICBcbiAgICAgICAgbmFtZVByb2plY3QuYXBwZW5kQ2hpbGQobmFtZVByb2plY3RMYWJlbClcbiAgICAgICAgbmFtZVByb2plY3QuYXBwZW5kQ2hpbGQobmFtZVByb2plY3RJbnB1dClcbiAgICAgICAgbmFtZVByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpXG4gICAgXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0KVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKVxuXG4gICAgfTsgXG4gICAgXG4gICAgY29uc3QgYXBwZW5kVGl0bGUgPSAodGl0bGVWYXIpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRpdGxlJylcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVWYXIgXG4gICAgICAgIGNvbnRhaW5lclRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIFxuICAgIH1cblxuXG5leHBvcnQge3Byb2plY3RGb3JtLCBhZGRGb3JtLCBhcHBlbmRUaXRsZX0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtyZW1vdmVQcm9qZWN0Rm9ybSwgZGVsZXRlVGl0bGV9IGZyb20gXCIuL2V2ZW50c1wiXG5pbXBvcnQge2FwcGVuZFRpdGxlfSBmcm9tIFwiLi9pbml0aWFsLXBhZ2VcIlxuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG4gICAgbGV0IG15UHJvamVjdHMgPSBbXTsgXG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTsgXG4gICAgICAgIGlmKG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhlIHByb2plY3QgbmFtZSBtdXN0IGJlIGZpbGxlZCBvdXQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKVxuICAgICAgICAgICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIGdldE5hbWUoKTsgXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3QoKVxuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3RGb3JtKCkgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgICBcbiAgICB9KSgpOyBcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7IFxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpXG5cbiAgICAgICAgbXlQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QsIGkpIHsgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpfWApXG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtbmFtZS1kaXZgKVxuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbXMtbGlzdCcpXG5cbiAgICAgICAgICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICAgICAgICAgIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICAgICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgICAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdkJywgJ003LDVIMjFWN0g3VjVNNywxM1YxMUgyMVYxM0g3TTQsNC41QTEuNSwxLjUgMCAwLDEgNS41LDZBMS41LDEuNSAwIDAsMSA0LDcuNUExLjUsMS41IDAgMCwxIDIuNSw2QTEuNSwxLjUgMCAwLDEgNCw0LjVNNCwxMC41QTEuNSwxLjUgMCAwLDEgNS41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMy41QTEuNSwxLjUgMCAwLDEgMi41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMC41TTcsMTlWMTdIMjFWMTlIN000LDE2LjVBMS41LDEuNSAwIDAsMSA1LjUsMThBMS41LDEuNSAwIDAsMSA0LDE5LjVBMS41LDEuNSAwIDAsMSAyLjUsMThBMS41LDEuNSAwIDAsMSA0LDE2LjVaJyk7XG4gICAgICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUtYnRuJylcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWBcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZScpXG5cbiAgICAgICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKGljb25TdmcpXG4gICAgICAgICAgICBwcm9qZWN0TmFtZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KVxuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VQcm9qZWN0ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVUaXRsZSgpOyBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGAke3Byb2plY3QubmFtZX1gOyBcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVGl0bGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgfSkoKTsgXG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9ICgoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UHJvamVjdHMuc3BsaWNlKGAke2l9YCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3ROYW1lRGl2KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7IFxuXG4gICAgfSlcbn07XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpXG4gICAgICAgIGlmKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1kaXYnKSkpIHtcbiAgICAgICAgICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7cmVtb3ZlRm9ybX0gZnJvbSAnLi9ldmVudHMnXG5cbmV4cG9ydCBjb25zdCB0b2RvcyA9ICgpID0+IHtcbiAgICBsZXQgbXlUb2RvcyA9IFtdXG5cbiAgICBjbGFzcyBUb2RvIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlIFxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb2RvcyA9ICgoKSA9PiB7IFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JrcycpXG4gICAgICAgICAgICAgICAgZ2V0SW5mbygpOyBcbiAgICAgICAgICAgICAgICByZW1vdmVGb3JtKCk7ICBcbiAgICAgICAgICAgICAgICBkZWxldGVUb2RvcygpOyBcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MoKTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICAgICAgICAgXG4gICAgfSkoKTsgXG5cbiAgICBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZVxuICAgICAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnVGl0bGUgbXVzdCBiZSBmaWxsZWQgb3V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlIFxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpXG4gICAgICAgIGxldCBwcmlvcml0eSA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblxuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIG15VG9kb3MucHVzaChuZXdUb2RvKSAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgICBteVRvZG9zLmZvckVhY2goZnVuY3Rpb24odG9kbywgaSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7aX1gKVxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3MtY29udGFpbmVyJylcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyMScpXG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNvbnRhaW5lcicpXG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICBjaGVja2JveExhYmVsLmh0bWxGb3IgPSAnY2hlY2tib3gnXG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgY2hlY2tib3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICAgICAgY2hlY2tib3hJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKVxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLXRvZG8nKVxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWBcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcjInKVxuXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXRvZG8nKVxuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZG8uZGF0ZX1gXG5cbiAgICAgICAgICAgIGNvbnN0IGljb25TdmcgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGljb25TdmcuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZzInKVxuICAgICAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQnKVxuICAgICAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuXG4gICAgICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICAgICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVonKTtcbiAgICAgICAgICAgIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xuXG4gICAgICAgICAgICBjb25zdCBpY29uU3ZnMiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgaWNvblN2ZzIuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZzInKVxuICAgICAgICAgICAgaWNvblN2ZzIuc2V0QXR0cmlidXRlKCdpZCcsICdleHBhbnNlJylcbiAgICAgICAgICAgIGNvbnN0IGljb25QYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgICAgICAgICBpY29uUGF0aDIuY2xhc3NMaXN0LmFkZCgnaWNvblBhdGgyJylcbiAgICAgICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgICAgICBpY29uUGF0aDIuc2V0QXR0cmlidXRlKCdkJywgJ00xMiwxN0w3LDEySDEwVjhIMTRWMTJIMTdMMTIsMTdNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJNMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0WicpO1xuICAgICAgICAgICAgaWNvblN2ZzIuYXBwZW5kQ2hpbGQoaWNvblBhdGgyKTtcblxuICAgICAgICAgICAgY29uc3QgaWNvblN2ZzMgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGljb25TdmczLmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcyJylcbiAgICAgICAgICAgIGljb25TdmczLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZmxhZycpXG4gICAgICAgICAgICBjb25zdCBpY29uUGF0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuXG4gICAgICAgICAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgICAgICBpY29uUGF0aDMuc2V0QXR0cmlidXRlKCdkJywgJ002LDNBMSwxIDAgMCwxIDcsNFY0Ljg4QzguMDYsNC40NCA5LjUsNCAxMSw0QzE0LDQgMTQsNiAxNiw2QzE5LDYgMjAsNCAyMCw0VjEyQzIwLDEyIDE5LDE0IDE2LDE0QzEzLDE0IDEzLDEyIDExLDEyQzgsMTIgNywxNCA3LDE0VjIxSDVWNEExLDEgMCAwLDEgNiwzWicpO1xuICAgICAgICAgICAgaWNvblN2ZzMuYXBwZW5kQ2hpbGQoaWNvblBhdGgzKTtcblxuICAgICAgICAgICAgY29uc3QgaWNvblN2ZzQgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGljb25Tdmc0LmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcyJylcbiAgICAgICAgICAgIGljb25Tdmc0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlJylcbiAgICAgICAgICAgIGNvbnN0IGljb25QYXRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG5cbiAgICAgICAgICAgIGljb25Tdmc0LnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgICAgIGljb25Tdmc0LnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgICAgICBpY29uUGF0aDQuc2V0QXR0cmlidXRlKCdkJywgJ005LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWicpO1xuICAgICAgICAgICAgaWNvblN2ZzQuYXBwZW5kQ2hpbGQoaWNvblBhdGg0KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKVxuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hJbnB1dClcblxuICAgICAgICAgICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICAgICAgICAgIGNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgICAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICAgICAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGljb25TdmcpXG4gICAgICAgICAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGljb25TdmczKVxuICAgICAgICAgICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChpY29uU3ZnNCkgXG4gICAgICAgICAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGljb25TdmcyKVxuXG4gICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIxKVxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyMilcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcilcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlVG9kbyA9ICgoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGljb25Tdmc0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG15VG9kb3Muc3BsaWNlKGAke2l9YCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9kb3NDb250YWluZXIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKCk7IFxuXG4gICAgICAgICAgICBjb25zdCBzdHJpa2VUaXRsZSA9ICgoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGNoZWNrYm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tib3hJbnB1dC5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfSkoKTsgXG5cbiAgICAgICAgICAgIGNvbnN0IGZsYWdQcmlvcml0eSA9ICgoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGlmKGAke3RvZG8ucHJpb3JpdHl9YCA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblN2ZzMuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMxNmEzNGEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoYCR7dG9kby5wcmlvcml0eX1gID09PSAnTWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnI2ZlZjA4YScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihgJHt0b2RvLnByaW9yaXR5fWAgPT09ICdIaWdoJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnI2UxMWQ0OCcpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgICAgfSkoKTtcbiAgICBcblxuICAgICAgICBjb25zdCBleHBhbmQgPSAoKCkgPT4geyBcbiAgICAgICAgICAgIGljb25TdmcyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lcicpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhwYW5kJylcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGgyLnNldEF0dHJpYnV0ZSgnZCcsICdNMTIsN0wxNywxMkgxNFYxNkgxMFYxMkg3TDEyLDdNMTIsMjJBMTAsMTAgMCAwLDEgMiwxMkExMCwxMCAwIDAsMSAxMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyTTEyLDIwQTgsOCAwIDAsMCAyMCwxMkE4LDggMCAwLDAgMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBaJyk7XG4gICAgICAgICAgICAgICAgICAgIGljb25TdmcyLmFwcGVuZENoaWxkKGljb25QYXRoMik7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2Rvcy1jb250YWluZXInKVxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjl2aFwiOyBcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3RvZG8uZGVzY3JpcHRpb259YFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGljb25TdmcyKVxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgZWxzZSBpZihlLnRhcmdldC5pZCA9PT0gJ2V4cGFuZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lcicpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhwYW5zZScpXG4gICAgICAgICAgICAgICAgICAgIGljb25QYXRoMi5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEyLDE3TDcsMTJIMTBWOEgxNFYxMkgxN0wxMiwxN00xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJBOCw4IDAgMCwwIDEyLDRaJyk7XG4gICAgICAgICAgICAgICAgICAgIGljb25TdmcyLmFwcGVuZENoaWxkKGljb25QYXRoMik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jb250YWluZXInKVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjN2aFwiOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoaWNvblN2ZzIpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcjIpICAgICAgXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXG4gICAgICAgIH0pKCk7IFxuXG4gICAgfSkgXG4gICAgXG59XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvcygpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgICAgaWYoZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtY29udGFpbmVyJykpKSB7XG4gICAgICAgICAgICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZG9tX2NvbnRlbnQgfSBmcm9tIFwiLi9pbml0aWFsLXBhZ2VcIjtcbmltcG9ydCB7IGRvbV9ldmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIlxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXG5pbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9zXCJcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGRvbV9jb250ZW50KCk7XG4gICAgZG9tX2V2ZW50cygpOyBcbiAgICBwcm9qZWN0cygpOyBcbiAgICB0b2RvcygpOyBcbn0pXG5cblxuXG5cbi8qaW1wb3J0IHsgaW5pdGlhbFBhZ2UsIGFkZFRhc2tCdXR0b24sIGFwcGVuZFRpdGxlIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQge3Byb2plY3RCdXR0b24sIGFkZEZvcm1CdXR0b24sIHNpZGViYXJCdXR0b24sIGNoYW5nZVRpdGxlLCBjbG9zZVNwYW4sIGNsb3NlQnV0dG9uIH0gZnJvbSBcIi4vZXZlbnRzXCJcbmltcG9ydCB7IGFkZEJ1dHRvbiB9IGZyb20gXCIuL3Byb2plY3RzXCJcbmltcG9ydCB7YWRkVG9kb3N9IGZyb20gXCIuL3RvZG9zXCJcblxuXG5pbml0aWFsUGFnZSgpOyBcbmFwcGVuZFRpdGxlKCdJbmJveCcpXG5zaWRlYmFyQnV0dG9uKCk7IFxuYWRkVGFza0J1dHRvbigpOyBcbmNoYW5nZVRpdGxlKCk7IFxuYWRkRm9ybUJ1dHRvbigpOyBcbnByb2plY3RCdXR0b24oKTsgXG5jbG9zZVNwYW4oKTsgXG5jbG9zZUJ1dHRvbigpOyBcbmFkZEJ1dHRvbigpOyBcbmFkZFRvZG9zKCk7ICovXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9