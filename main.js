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
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    display: grid; \n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr 3fr; \n}\n\n.sidebarBtn {\n    width: 30px;\n    height: 50px;\n    border-style: none;\n    background-color: #0e7490;\n    cursor: pointer;\n    font-size:xx-large;\n    color: #dbeafe;\n    margin: auto auto 0 10px;\n}\n\n.header {\n    height: 13vh;\n    width: 100vw;\n    background-color: #0e7490;\n    grid-column: 1/span 2;\n    display: flex; \n}\n\n.logo {\n    margin-right: auto;\n    width: 210px;\n    text-align: center;\n    padding-top: 30px;\n    font-size: 2.5rem;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n\n.sidebar {\n    grid-row: 2;\n    background-color: #eff6ff; \n    height: 87vh;\n}\n\n.body {\n    grid-row: 2;\n    display: flex;\n    width: 100vw;\n}\n\n.list {\n    margin: 40px 0 0 40px; \n}\n\n#form-project {\n    display: flex;\n    justify-content: center;\n}\n\n#form-project:hover {\n    background-color: #e5e7eb;\n}\n\n#name {\n    border: 1px solid grey; \n    width: 200px;\n}\n\n.add-button, .cancel-button {\n    width: 80px;\n    margin: 5px;  \n    background-color: #0e7490;\n    border-style: none;\n    color: white; \n    cursor: pointer;\n}\n\n.project-form-button {\n    display: flex;\n    justify-content: center;\n}\n\n.items-list, .projects {\n    padding-bottom: 30px;\n    display: flex;\n    height: 5px;\n}\n\n#project-name-div{\n    width: 200px;\n}\n\n#inbox, #today, #week, .add-project, .add-project-btn, #project-name-btn{\n    border-radius: 10px;\n    border-style: none;\n    background-color: #eff6ff;\n    cursor: pointer;\n    font-size: 1rem;\n    text-align: left;\n    width: 220px;\n    height: 35px;\n}\n\n\n#inbox:hover, #today:hover, #week:hover, .add-project-btn:hover, #project-name-btn:hover {\n    background-color: #dbeafe;\n}\n\n.iconSvg {\n    margin: 3px 0 0 5px;\n    width:24px;\n    height:24px; \n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project {\n    margin-left: 30px;\n    display: flex;\n    width: 200px;\n}\n\n.add-project:hover {\n    background-color: #dbeafe;\n    border-radius: 10px;\n    width: 200px;\n}\n\n.add-project-btn {\n    font-size: 1rem;\n}\n\n.items-list:hover {\n    padding-bottom: 30px;\n    background-color: #dbeafe;\n    width: 220px;\n    border-radius: 10px;\n    height: 5px;\n}\n\n.container-title {\n    width: 65vw;\n    height: 10vh;\n    background-color: #e5e7eb;\n    border-radius: 10px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    width: 20vw;\n    height: 8vh;\n    display: flex;\n    align-items: center;\n    font-family: 'Dancing Script', cursive;\n    color: #0e7490;\n    font-size: 2.5rem;\n    padding-left: 30px;\n}\n\n.main {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    height: 5vh;\n    width: 35vw;\n    border-style: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 30px auto 0 auto;\n}\n\n.add-task:hover {\n    background-color: #dbeafe;\n}\n\n#close {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n\n}\n\n#close:hover,\n#close:focus{\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#form{\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 440px;\n    height: 260px;\n    padding: 10px 20px 70px 30px;\n    border-style: none;\n    border-radius: 1em;\n    background-color: #0e7490;\n    box-shadow: 5px 5px #085f77;\n}\n\n.title-form {\n    font-size: 1.5rem; \n    margin-bottom: 20px;\n    text-align: center;\n    color: white;\n}\n\n.form-div {\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;  \n}\n\n.task-title, .description, .date, .priority {\n    color: white;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='text'] {\n    border-style: none;\n    width: 250px;\n    background-color: #FFFFFF;\n    border-radius: 3px;\n    padding: 5px;\n    font-size: 15px;\n    margin-top: 5px;\n}\n\n#description {\n    height: 100px;\n    width: 258px;\n}\n\n.date-priority {\n    display: flex; \n    flex-direction: column;\n    margin-left: 10px;\n}\n\n.submit {\n    width: 80px;\n    background-color: #dbeafe;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 3px;\n    margin-left: 330px;\n    margin-top: 20px;\n \n}\n\n.submit:hover {\n    background-color: #0e7490;\n    color: #ccfbf1;\n}\n\n.delete {\n    width: 20px;\n    height: 30px;\n    cursor: pointer; \n    color: rgb(97, 97, 97); \n    font-weight: bolder;\n    margin-top: 5px;\n    font-size: larger;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');\n\nbody, html {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    display: grid; \n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr 3fr; \n}\n\n.sidebarBtn {\n    width: 30px;\n    height: 50px;\n    border-style: none;\n    background-color: #0e7490;\n    cursor: pointer;\n    font-size:xx-large;\n    color: #dbeafe;\n    margin: auto auto 0 10px;\n}\n\n.header {\n    height: 13vh;\n    width: 100vw;\n    background-color: #0e7490;\n    grid-column: 1/span 2;\n    display: flex; \n}\n\n.logo {\n    margin-right: auto;\n    width: 210px;\n    text-align: center;\n    padding-top: 30px;\n    font-size: 2.5rem;\n    color: white;\n    font-family: 'Dancing Script', cursive;\n}\n\n.sidebar {\n    grid-row: 2;\n    background-color: #eff6ff; \n    height: 87vh;\n}\n\n.body {\n    grid-row: 2;\n    display: flex;\n    width: 100vw;\n}\n\n.list {\n    margin: 40px 0 0 40px; \n}\n\n#form-project {\n    display: flex;\n    justify-content: center;\n}\n\n#form-project:hover {\n    background-color: #e5e7eb;\n}\n\n#name {\n    border: 1px solid grey; \n    width: 200px;\n}\n\n.add-button, .cancel-button {\n    width: 80px;\n    margin: 5px;  \n    background-color: #0e7490;\n    border-style: none;\n    color: white; \n    cursor: pointer;\n}\n\n.project-form-button {\n    display: flex;\n    justify-content: center;\n}\n\n.items-list, .projects {\n    padding-bottom: 30px;\n    display: flex;\n    height: 5px;\n}\n\n#project-name-div{\n    width: 200px;\n}\n\n#inbox, #today, #week, .add-project, .add-project-btn, #project-name-btn{\n    border-radius: 10px;\n    border-style: none;\n    background-color: #eff6ff;\n    cursor: pointer;\n    font-size: 1rem;\n    text-align: left;\n    width: 220px;\n    height: 35px;\n}\n\n\n#inbox:hover, #today:hover, #week:hover, .add-project-btn:hover, #project-name-btn:hover {\n    background-color: #dbeafe;\n}\n\n.iconSvg {\n    margin: 3px 0 0 5px;\n    width:24px;\n    height:24px; \n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project {\n    margin-left: 30px;\n    display: flex;\n    width: 200px;\n}\n\n.add-project:hover {\n    background-color: #dbeafe;\n    border-radius: 10px;\n    width: 200px;\n}\n\n.add-project-btn {\n    font-size: 1rem;\n}\n\n.items-list:hover {\n    padding-bottom: 30px;\n    background-color: #dbeafe;\n    width: 220px;\n    border-radius: 10px;\n    height: 5px;\n}\n\n.container-title {\n    width: 65vw;\n    height: 10vh;\n    background-color: #e5e7eb;\n    border-radius: 10px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    width: 20vw;\n    height: 8vh;\n    display: flex;\n    align-items: center;\n    font-family: 'Dancing Script', cursive;\n    color: #0e7490;\n    font-size: 2.5rem;\n    padding-left: 30px;\n}\n\n.main {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    height: 5vh;\n    width: 35vw;\n    border-style: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 30px auto 0 auto;\n}\n\n.add-task:hover {\n    background-color: #dbeafe;\n}\n\n#close {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n\n}\n\n#close:hover,\n#close:focus{\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#form{\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 440px;\n    height: 260px;\n    padding: 10px 20px 70px 30px;\n    border-style: none;\n    border-radius: 1em;\n    background-color: #0e7490;\n    box-shadow: 5px 5px #085f77;\n}\n\n.title-form {\n    font-size: 1.5rem; \n    margin-bottom: 20px;\n    text-align: center;\n    color: white;\n}\n\n.form-div {\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;  \n}\n\n.task-title, .description, .date, .priority {\n    color: white;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='text'] {\n    border-style: none;\n    width: 250px;\n    background-color: #FFFFFF;\n    border-radius: 3px;\n    padding: 5px;\n    font-size: 15px;\n    margin-top: 5px;\n}\n\n#description {\n    height: 100px;\n    width: 258px;\n}\n\n.date-priority {\n    display: flex; \n    flex-direction: column;\n    margin-left: 10px;\n}\n\n.submit {\n    width: 80px;\n    background-color: #dbeafe;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 3px;\n    margin-left: 330px;\n    margin-top: 20px;\n \n}\n\n.submit:hover {\n    background-color: #0e7490;\n    color: #ccfbf1;\n}\n\n.delete {\n    width: 20px;\n    height: 30px;\n    cursor: pointer; \n    color: rgb(97, 97, 97); \n    font-weight: bolder;\n    margin-top: 5px;\n    font-size: larger;\n}\n\n"],"sourceRoot":""}]);
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
    const main = document.querySelector('.main')

    myTodos.forEach(function(todo, i) {
        const todosContainer = document.createElement('div')
        todosContainer.setAttribute('data-index', `${i}`)
        todosContainer.classList.add('todos-container')

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

        const date = document.createElement('div')
        date.setAttribute('id', 'date-todo')
        date.textContent = `${todo.date}`

        const iconSvg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.classList.add('iconSvg')
        iconSvg.setAttribute('id', 'edit')
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('fill', '#0284c7');
        iconPath.setAttribute('d', 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z');
        iconSvg.appendChild(iconPath);

        const iconSvg2 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg2.classList.add('iconSvg')
        iconSvg2.setAttribute('id', 'expanse')
        const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg2.setAttribute('viewBox', '0 0 24 24');
        iconSvg2.setAttribute('fill', '#0284c7');
        iconPath2.setAttribute('d', 'M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z');
        iconSvg2.appendChild(iconPath2);

        const iconSvg3 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg3.classList.add('iconSvg')
        iconSvg3.setAttribute('id', 'priority-flag')
        const iconPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg3.setAttribute('viewBox', '0 0 24 24');
        iconSvg3.setAttribute('fill', '#0284c7');
        iconPath3.setAttribute('d', 'M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z');
        iconSvg3.appendChild(iconPath3);

        const iconSvg4 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg4.classList.add('iconSvg')
        iconSvg4.setAttribute('id', 'priority-flag')
        const iconPath4 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg4.setAttribute('viewBox', '0 0 24 24');
        iconSvg4.setAttribute('fill', '#0284c7');
        iconPath4.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
        iconSvg4.appendChild(iconPath4);
        
        checkboxContainer.appendChild(checkboxLabel)
        checkboxContainer.appendChild(checkboxInput)
        checkboxContainer.appendChild(checkmark)

        todosContainer.appendChild(checkboxContainer)
        todosContainer.appendChild(title)
        todosContainer.appendChild(date)
        todosContainer.appendChild(iconSvg)
        todosContainer.appendChild(iconSvg2)
        todosContainer.appendChild(iconSvg3)
        todosContainer.appendChild(iconSvg4)

        main.appendChild(todosContainer)
    }) 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFV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O0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVc7QUFDdkI7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hUb0I7QUFDbUM7QUFDYjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFpQjtBQUM3QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsRUFBRTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTs7QUFFbEQ7QUFDQTtBQUNBLG9CQUFvQixxREFBVztBQUMvQixvQ0FBb0MsYUFBYTtBQUNqRCxvQkFBb0IsMERBQVc7QUFDL0IsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLEVBQUU7QUFDM0M7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGb0I7QUFDZTs7O0FBR25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFVO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7O0FBRTFDO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUMzSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F5RTtBQUNpQztBQUNwRTtBQUNOOzs7QUFHaEMsMERBQVc7QUFDWCwwREFBVztBQUNYLHVEQUFhO0FBQ2IsNERBQWE7QUFDYixvREFBVztBQUNYLHNEQUFhO0FBQ2Isc0RBQWE7QUFDYixrREFBUztBQUNULG9EQUFXO0FBQ1gsb0RBQVM7QUFDVCxnREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0aWFsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7IFxcbn1cXG5cXG4uc2lkZWJhckJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6eHgtbGFyZ2U7XFxuICAgIGNvbG9yOiAjZGJlYWZlO1xcbiAgICBtYXJnaW46IGF1dG8gYXV0byAwIDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEzdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7IFxcbiAgICBoZWlnaHQ6IDg3dmg7XFxufVxcblxcbi5ib2R5IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBtYXJnaW46IDQwcHggMCAwIDQwcHg7IFxcbn1cXG5cXG4jZm9ybS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbn1cXG5cXG4jbmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7IFxcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW46IDVweDsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW1zLWxpc3QsIC5wcm9qZWN0cyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1kaXZ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuI2luYm94LCAjdG9kYXksICN3ZWVrLCAuYWRkLXByb2plY3QsIC5hZGQtcHJvamVjdC1idG4sICNwcm9qZWN0LW5hbWUtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuXFxuI2luYm94OmhvdmVyLCAjdG9kYXk6aG92ZXIsICN3ZWVrOmhvdmVyLCAuYWRkLXByb2plY3QtYnRuOmhvdmVyLCAjcHJvamVjdC1uYW1lLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxufVxcblxcbi5pY29uU3ZnIHtcXG4gICAgbWFyZ2luOiAzcHggMCAwIDVweDtcXG4gICAgd2lkdGg6MjRweDtcXG4gICAgaGVpZ2h0OjI0cHg7IFxcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5pdGVtcy1saXN0OmhvdmVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbi5jb250YWluZXItdGl0bGUge1xcbiAgICB3aWR0aDogNjV2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjMGU3NDkwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4jY2xvc2U6aG92ZXIsXFxuI2Nsb3NlOmZvY3Vze1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDQ0MHB4O1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggNzBweCAzMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjMDg1Zjc3O1xcbn1cXG5cXG4udGl0bGUtZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyAgXFxufVxcblxcbi50YXNrLXRpdGxlLCAuZGVzY3JpcHRpb24sIC5kYXRlLCAucHJpb3JpdHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMjU4cHg7XFxufVxcblxcbi5kYXRlLXByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiBcXG59XFxuXFxuLnN1Ym1pdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGNvbG9yOiAjY2NmYmYxO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gICAgY29sb3I6IHJnYig5NywgOTcsIDk3KTsgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5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QUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjsgXFxufVxcblxcbi5zaWRlYmFyQnRuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTp4eC1sYXJnZTtcXG4gICAgY29sb3I6ICNkYmVhZmU7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvIDAgMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTN2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjsgXFxuICAgIGhlaWdodDogODd2aDtcXG59XFxuXFxuLmJvZHkge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogNDBweCAwIDAgNDBweDsgXFxufVxcblxcbiNmb3JtLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxufVxcblxcbiNuYW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgXFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24sIC5jYW5jZWwtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIG1hcmdpbjogNXB4OyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc0OTA7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaXRlbXMtbGlzdCwgLnByb2plY3RzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lLWRpdntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4jaW5ib3gsICN0b2RheSwgI3dlZWssIC5hZGQtcHJvamVjdCwgLmFkZC1wcm9qZWN0LWJ0biwgI3Byb2plY3QtbmFtZS1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG5cXG4jaW5ib3g6aG92ZXIsICN0b2RheTpob3ZlciwgI3dlZWs6aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIsICNwcm9qZWN0LW5hbWUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG59XFxuXFxuLmljb25Tdmcge1xcbiAgICBtYXJnaW46IDNweCAwIDAgNXB4O1xcbiAgICB3aWR0aDoyNHB4O1xcbiAgICBoZWlnaHQ6MjRweDsgXFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLml0ZW1zLWxpc3Q6aG92ZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuLmNvbnRhaW5lci10aXRsZSB7XFxuICAgIHdpZHRoOiA2NXZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICMwZTc0OTA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxufVxcblxcbiNjbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNjbG9zZTpob3ZlcixcXG4jY2xvc2U6Zm9jdXN7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDQwcHg7XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCA3MHB4IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NDkwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICMwODVmNzc7XFxufVxcblxcbi50aXRsZS1mb3JtIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7ICBcXG59XFxuXFxuLnRhc2stdGl0bGUsIC5kZXNjcmlwdGlvbiwgLmRhdGUsIC5wcmlvcml0eSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAyNThweDtcXG59XFxuXFxuLmRhdGUtcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuIFxcbn1cXG5cXG4uc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzQ5MDtcXG4gICAgY29sb3I6ICNjY2ZiZjE7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBjb2xvcjogcmdiKDk3LCA5NywgOTcpOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHthZGRGb3JtLCBwcm9qZWN0Rm9ybSwgYXBwZW5kVGl0bGV9IGZyb20gJy4vaW5pdGlhbC1wYWdlJztcblxuXG5mdW5jdGlvbiBhZGRGb3JtQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykgPT09IG51bGwpXG4gICAgICAgIGFkZEZvcm0oKTsgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKVxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXByb2plY3QnKSA9PT0gbnVsbClcbiAgICAgICAgcHJvamVjdEZvcm0oKTsgXG5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhckJ1dHRvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJCdG4nKVxuICAgIHNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKVxuICAgIGlmKHRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRpdGxlJylcbiAgICAgICAgY29udGFpbmVyVGl0bGUucmVtb3ZlQ2hpbGQodGl0bGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaXRsZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICdpbmJveCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRpdGxlKCk7IFxuICAgICAgICAgICAgYXBwZW5kVGl0bGUoJ0luYm94Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRpdGxlKCk7IFxuICAgICAgICAgICAgYXBwZW5kVGl0bGUoJ1RvZGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgZGVsZXRlVGl0bGUoKTsgXG4gICAgICAgICAgICBhcHBlbmRUaXRsZSgnVGhpcyB3ZWVrJyk7XG4gICAgICAgIH1cbiAgICB9KTsgXG5cbn1cblxuZnVuY3Rpb24gY2xvc2VTcGFuKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJylcbiAgICBtYWluLnJlbW92ZUNoaWxkKGZvcm0pXG59XG5cbmZ1bmN0aW9uIGNsb3NlQnV0dG9uKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3RGb3JtKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICBjb25zdCBmb3JtUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXByb2plY3QnKVxuICAgIHByb2plY3REaXYucmVtb3ZlQ2hpbGQoZm9ybVByb2plY3QpIFxufVxuXG5cblxuZXhwb3J0IHtwcm9qZWN0QnV0dG9uLCBhZGRGb3JtQnV0dG9uLCBzaWRlYmFyQnV0dG9uLCBjaGFuZ2VUaXRsZSwgY2xvc2VTcGFuLCBjbG9zZUJ1dHRvbiwgcmVtb3ZlUHJvamVjdEZvcm0sIGRlbGV0ZVRpdGxlLCByZW1vdmVGb3JtIH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG4gZnVuY3Rpb24gaW5pdGlhbFBhZ2UoKSB7ICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgIFxuICAgIGNvbnN0IGFwcGVhckRpc2FwcGVhclNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFwcGVhckRpc2FwcGVhclNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckJ0bicpXG4gICAgYXBwZWFyRGlzYXBwZWFyU2lkZWJhci50ZXh0Q29udGVudCA9ICfiiaEnXG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIkxldCdzIGRvIHRoaXMhXCJcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmJveC5jbGFzc0xpc3QuYWRkKCdpdGVtcy1saXN0JylcblxuICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGljb25TdmcuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZycpXG4gICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTE5LDE1SDE1QTMsMyAwIDAsMSAxMiwxOEEzLDMgMCAwLDEgOSwxNUg1VjVIMTlNMTksM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNaJyk7XG4gICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG5cbiAgICBjb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaW5ib3hCdG4udGV4dENvbnRlbnQgPSBcIkluYm94XCJcbiAgICBpbmJveEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYm94JylcblxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCdpdGVtcy1saXN0JylcblxuICAgIGNvbnN0IGljb25TdmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBpY29uU3ZnMi5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICBjb25zdCBpY29uUGF0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBpY29uU3ZnMi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgIGljb25QYXRoMi5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuODkgMyA1VjE5QzMgMjAuMTEgMy45IDIxIDUgMjFIMTlDMjAuMTEgMjEgMjEgMjAuMTEgMjEgMTlWNUMyMSAzLjg5IDIwLjExIDMgMTkgM00xOSAxOUg1VjlIMTlWMTlNMTkgN0g1VjVIMTlNNyAxMUgxMlYxNkg3Jyk7XG4gICAgaWNvblN2ZzIuYXBwZW5kQ2hpbGQoaWNvblBhdGgyKTtcblxuICAgIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0b2RheUJ0bi50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICB0b2RheUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5JylcblxuICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgnaXRlbXMtbGlzdCcpXG5cbiAgICBjb25zdCBpY29uU3ZnMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgaWNvblN2ZzMuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZycpXG4gICAgY29uc3QgaWNvblBhdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcbiAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgaWNvblN2ZzMuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICBpY29uUGF0aDMuc2V0QXR0cmlidXRlKCdkJywgJ001IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMSAyMC4xMSAyMSAxOSAyMUg1QzMuOSAyMSAzIDIwLjExIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzTTUgMTlIMTlWOUg1VjE5TTUgN0gxOVY1SDVWN00xNyAxMVYxM0g3VjExSDE3Jyk7XG4gICAgaWNvblN2ZzMuYXBwZW5kQ2hpbGQoaWNvblBhdGgzKTtcblxuICAgIGNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHdlZWtCdG4udGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJ1xuICAgIHdlZWtCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd3ZWVrJylcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpXG5cbiAgICBjb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBwcm9qZWN0c0J0bi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKVxuXG4gICAgY29uc3QgaWNvblN2ZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGljb25Tdmc0LmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcnKVxuICAgIGNvbnN0IGljb25QYXRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgaWNvblN2ZzQuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIGljb25Tdmc0LnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgaWNvblBhdGg0LnNldEF0dHJpYnV0ZSgnZCcsICdNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMyw3SDExVjExSDdWMTNIMTFWMTdIMTNWMTNIMTdWMTFIMTNWN1onKTtcbiAgICBpY29uU3ZnNC5hcHBlbmRDaGlsZChpY29uUGF0aDQpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKVxuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIG5ldyBwcm9qZWN0J1xuICAgIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0JylcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtY29udGFpbmVyJylcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpXG4gICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItdGl0bGUnKVxuXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaWNvblN2ZylcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveEJ0bilcbiAgICBcbiAgICBsaXN0LmFwcGVuZENoaWxkKGluYm94KVxuICAgIFxuICAgIHRvZGF5LmFwcGVuZENoaWxkKGljb25TdmcyKVxuICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5QnRuKVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kYXkpXG4gICAgXG4gICAgd2Vlay5hcHBlbmRDaGlsZChpY29uU3ZnMylcbiAgICB3ZWVrLmFwcGVuZENoaWxkKHdlZWtCdG4pXG4gICAgbGlzdC5hcHBlbmRDaGlsZCh3ZWVrKVxuXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pXG5cbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGljb25Tdmc0KVxuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbilcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gICAgbGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0cylcbiAgICBcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyVGl0bGUpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhcHBlYXJEaXNhcHBlYXJTaWRlYmFyKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSlcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKVxuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzaydcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFzaylcbn1cblxuZnVuY3Rpb24gYWRkRm9ybSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpXG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UnKVxuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ1gnXG5cbiAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlRm9ybS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1mb3JtJylcbiAgICB0aXRsZUZvcm0udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXG5cbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGl2JylcbiAgICBcbiAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcblxuICAgIGNvbnN0IHRhc2tUaXRsZUxhYmVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdGFza1RpdGxlTGFiZWwuaHRtbEZvciA9ICd0aXRsZSdcbiAgICB0YXNrVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUSVRMRTogJ1xuXG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdkZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0RFU0NSSVBUSU9OOiAnXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIFxuICAgIGNvbnN0IGRhdGVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGF0ZVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2RhdGUtcHJpb3JpdHknKVxuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlJylcblxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICdkYXRlJ1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEVUUgREFURTogJ1xuICAgXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICBcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2VsZWN0UHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKVxuICAgIFxuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgc2VsZWN0UHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3ByaW9yaXR5J1xuICAgIHNlbGVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUFJJT1JJVFk6ICdcblxuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0JylcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBvcHRpb24xLnRleHRDb250ZW50ID0gJ0xvdydcblxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xuXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0aW9uMy50ZXh0Q29udGVudCA9ICdIaWdoJ1xuXG4gICAgY29uc3QgZm9ybUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpXG5cbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuICAgIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKVxuICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0JylcblxuICAgIGZvcm1CdXR0b25EaXYuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbilcbiAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24xKVxuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpXG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMylcblxuICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5TGFiZWwpXG4gICAgc2VsZWN0UHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJpb3JpdHkpXG5cbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dClcblxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcblxuICAgIHRhc2tUaXRsZURpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVMYWJlbClcbiAgICB0YXNrVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpXG4gICAgXG4gICAgZGF0ZVByaW9yaXR5LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG4gICAgZGF0ZVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5RGl2KVxuXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVEaXYpXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdilcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGRhdGVQcmlvcml0eSlcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1CdXR0b25EaXYpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGb3JtKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdilcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXByb2plY3QnKVxuXG4gICAgY29uc3QgbmFtZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hbWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25hbWUtcHJvamVjdCcpXG5cbiAgICBjb25zdCBuYW1lUHJvamVjdExhYmVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbmFtZVByb2plY3RMYWJlbC5odG1sRm9yID0gJ25hbWUnXG5cbiAgICBjb25zdCBuYW1lUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgbmFtZVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuYW1lUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBQcm9qZWN0IE5hbWVcIilcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWJ1dHRvbicpXG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJylcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJylcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Jlc2V0JylcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwnKVxuXG4gICAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcblxuICAgIG5hbWVQcm9qZWN0LmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0TGFiZWwpXG4gICAgbmFtZVByb2plY3QuYXBwZW5kQ2hpbGQobmFtZVByb2plY3RJbnB1dClcbiAgICBuYW1lUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdilcblxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0KVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRpdGxlKHRpdGxlVmFyKSB7XG4gICAgY29uc3QgY29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRpdGxlJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVWYXJcbiAgICBcbiAgICBjb250YWluZXJUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbn1cblxuXG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlLCBhZGRUYXNrQnV0dG9uLCBwcm9qZWN0Rm9ybSwgYWRkRm9ybSwgYXBwZW5kVGl0bGUgfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge3JlbW92ZVByb2plY3RGb3JtLCBkZWxldGVUaXRsZX0gZnJvbSBcIi4vZXZlbnRzXCJcbmltcG9ydCB7YXBwZW5kVGl0bGV9IGZyb20gXCIuL2luaXRpYWwtcGFnZVwiXG5cbmxldCBteVByb2plY3RzID0gW107IFxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTsgXG4gICAgaWYobmFtZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1RoZSBwcm9qZWN0IG5hbWUgbXVzdCBiZSBmaWxsZWQgb3V0JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSlcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gICAgfSAgIFxufVxuXG5mdW5jdGlvbiBhZGRCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnYWRkJykge1xuICAgICAgICAgICAgZ2V0TmFtZSgpOyBcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QoKVxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdEZvcm0oKSBcbiAgICAgICAgfVxuICAgIH0pOyAgICBcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpXG5cbiAgICBteVByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCwgaSkgeyBcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0TmFtZURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpfWApXG4gICAgICAgIHByb2plY3ROYW1lRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC1uYW1lLWRpdmApXG4gICAgICAgIHByb2plY3ROYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWxpc3QnKVxuXG4gICAgICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcnKVxuICAgICAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNNyw1SDIxVjdIN1Y1TTcsMTNWMTFIMjFWMTNIN000LDQuNUExLjUsMS41IDAgMCwxIDUuNSw2QTEuNSwxLjUgMCAwLDEgNCw3LjVBMS41LDEuNSAwIDAsMSAyLjUsNkExLjUsMS41IDAgMCwxIDQsNC41TTQsMTAuNUExLjUsMS41IDAgMCwxIDUuNSwxMkExLjUsMS41IDAgMCwxIDQsMTMuNUExLjUsMS41IDAgMCwxIDIuNSwxMkExLjUsMS41IDAgMCwxIDQsMTAuNU03LDE5VjE3SDIxVjE5SDdNNCwxNi41QTEuNSwxLjUgMCAwLDEgNS41LDE4QTEuNSwxLjUgMCAwLDEgNCwxOS41QTEuNSwxLjUgMCAwLDEgMi41LDE4QTEuNSwxLjUgMCAwLDEgNCwxNi41WicpO1xuICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lLWJ0bicpXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWBcblxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0KCkge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRpdGxlKCk7IFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7cHJvamVjdC5uYW1lfWA7IFxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUaXRsZShuYW1lKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VQcm9qZWN0KCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG4gICAgICAgIGRlbGV0ZVByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUnKVxuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUJ0bigpIHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UHJvamVjdHMuc3BsaWNlKGAke2l9YCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdE5hbWVEaXYpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGVCdG4oKTsgXG4gICAgXG4gICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKGljb25TdmcpXG4gICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgICAgICBwcm9qZWN0TmFtZURpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKVxuICAgIGlmKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1kaXYnKSkpIHtcbiAgICAgICAgd2hpbGUgKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHthZGRCdXR0b24sIGFkZFByb2plY3R9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7cmVtb3ZlRm9ybX0gZnJvbSAnLi9ldmVudHMnXG5cblxubGV0IG15VG9kb3MgPSBbXVxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUgXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kb3MoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgZ2V0SW5mbygpOyBcbiAgICAgICAgICAgIHJlbW92ZUZvcm0oKTsgIFxuICAgICAgICAgICAgZGlzcGxheVRvZG9zKCk7ICBcbiAgICAgICAgfVxuICAgIH0pOyAgICAgICAgICBcbn1cblxuZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZVxuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1RpdGxlIG11c3QgYmUgZmlsbGVkIG91dCcpO1xuICAgIH1cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSBcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpXG4gICAgbGV0IHByaW9yaXR5ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KVxuICAgIG15VG9kb3MucHVzaChuZXdUb2RvKVxuICAgIGNvbnNvbGUubG9nKG15VG9kb3MpXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgbXlUb2Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRvZG8sIGkpIHtcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpfWApXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9zLWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGNoZWNrYm94TGFiZWwuaHRtbEZvciA9ICdjaGVja2JveCdcblxuICAgICAgICBjb25zdCBjaGVja2JveElucHV0ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY2hlY2tib3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuXG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJylcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtdG9kbycpXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gXG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXRvZG8nKVxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dG9kby5kYXRlfWBcblxuICAgICAgICBjb25zdCBpY29uU3ZnID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIGljb25TdmcuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZycpXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0JylcbiAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVonKTtcbiAgICAgICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG5cbiAgICAgICAgY29uc3QgaWNvblN2ZzIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgaWNvblN2ZzIuY2xhc3NMaXN0LmFkZCgnaWNvblN2ZycpXG4gICAgICAgIGljb25TdmcyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhwYW5zZScpXG4gICAgICAgIGNvbnN0IGljb25QYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdwYXRoJyk7XG5cbiAgICAgICAgaWNvblN2ZzIuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgICAgICBpY29uU3ZnMi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzAyODRjNycpO1xuICAgICAgICBpY29uUGF0aDIuc2V0QXR0cmlidXRlKCdkJywgJ00xMiwxN0w3LDEySDEwVjhIMTRWMTJIMTdMMTIsMTdNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJNMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0WicpO1xuICAgICAgICBpY29uU3ZnMi5hcHBlbmRDaGlsZChpY29uUGF0aDIpO1xuXG4gICAgICAgIGNvbnN0IGljb25TdmczID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIGljb25TdmczLmNsYXNzTGlzdC5hZGQoJ2ljb25TdmcnKVxuICAgICAgICBpY29uU3ZnMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWZsYWcnKVxuICAgICAgICBjb25zdCBpY29uUGF0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xuXG4gICAgICAgIGljb25TdmczLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgaWNvblN2ZzMuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMwMjg0YzcnKTtcbiAgICAgICAgaWNvblBhdGgzLnNldEF0dHJpYnV0ZSgnZCcsICdNNiwzQTEsMSAwIDAsMSA3LDRWNC44OEM4LjA2LDQuNDQgOS41LDQgMTEsNEMxNCw0IDE0LDYgMTYsNkMxOSw2IDIwLDQgMjAsNFYxMkMyMCwxMiAxOSwxNCAxNiwxNEMxMywxNCAxMywxMiAxMSwxMkM4LDEyIDcsMTQgNywxNFYyMUg1VjRBMSwxIDAgMCwxIDYsM1onKTtcbiAgICAgICAgaWNvblN2ZzMuYXBwZW5kQ2hpbGQoaWNvblBhdGgzKTtcblxuICAgICAgICBjb25zdCBpY29uU3ZnNCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBpY29uU3ZnNC5jbGFzc0xpc3QuYWRkKCdpY29uU3ZnJylcbiAgICAgICAgaWNvblN2ZzQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1mbGFnJylcbiAgICAgICAgY29uc3QgaWNvblBhdGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcblxuICAgICAgICBpY29uU3ZnNC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgIGljb25Tdmc0LnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMDI4NGM3Jyk7XG4gICAgICAgIGljb25QYXRoNC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaJyk7XG4gICAgICAgIGljb25Tdmc0LmFwcGVuZENoaWxkKGljb25QYXRoNCk7XG4gICAgICAgIFxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveElucHV0KVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspXG5cbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uU3ZnKVxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uU3ZnMilcbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvblN2ZzMpXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Tdmc0KVxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpXG4gICAgfSkgXG59XG5cbmV4cG9ydCB7YWRkVG9kb3N9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbFBhZ2UsIGFkZFRhc2tCdXR0b24sIGFwcGVuZFRpdGxlIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQge3Byb2plY3RCdXR0b24sIGFkZEZvcm1CdXR0b24sIHNpZGViYXJCdXR0b24sIGNoYW5nZVRpdGxlLCBjbG9zZVNwYW4sIGNsb3NlQnV0dG9uIH0gZnJvbSBcIi4vZXZlbnRzXCJcbmltcG9ydCB7IGFkZEJ1dHRvbiB9IGZyb20gXCIuL3Byb2plY3RzXCJcbmltcG9ydCB7YWRkVG9kb3N9IGZyb20gXCIuL3RvZG9zXCJcblxuXG5pbml0aWFsUGFnZSgpOyBcbmFwcGVuZFRpdGxlKCdJbmJveCcpXG5zaWRlYmFyQnV0dG9uKCk7IFxuYWRkVGFza0J1dHRvbigpOyBcbmNoYW5nZVRpdGxlKCk7IFxuYWRkRm9ybUJ1dHRvbigpOyBcbnByb2plY3RCdXR0b24oKTsgXG5jbG9zZVNwYW4oKTsgXG5jbG9zZUJ1dHRvbigpOyBcbmFkZEJ1dHRvbigpOyBcbmFkZFRvZG9zKCk7IFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9