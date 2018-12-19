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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_box_block_js__ = __webpack_require__(/*! ./info-box/block.js */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_box_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__info_box_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//const THEME_NAME = 'cocoon';\n// import './block/block.js';\n// import './edit-block/block.js';\n//import './define.js';\n// import './hello-world-step-03/block.js';\n// import './hello-world-step-04/block.js';\n// import './latest-post/block.js';\n//import './info-block/block.js';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vY29uc3QgVEhFTUVfTkFNRSA9ICdjb2Nvb24nO1xuLy8gaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrLmpzJztcbi8vIGltcG9ydCAnLi9lZGl0LWJsb2NrL2Jsb2NrLmpzJztcbi8vaW1wb3J0ICcuL2RlZmluZS5qcyc7XG4vLyBpbXBvcnQgJy4vaGVsbG8td29ybGQtc3RlcC0wMy9ibG9jay5qcyc7XG4vLyBpbXBvcnQgJy4vaGVsbG8td29ybGQtc3RlcC0wNC9ibG9jay5qcyc7XG4vLyBpbXBvcnQgJy4vbGF0ZXN0LXBvc3QvYmxvY2suanMnO1xuLy9pbXBvcnQgJy4vaW5mby1ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vaW5mby1ib3gvYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 13:
/*!*******************************!*\
  !*** ./src/info-box/block.js ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl;\nvar Fragment = wp.element.Fragment;\n\nvar THEME_NAME = 'cocoon';\n\nregisterBlockType('cocoon-blocks/info-box', {\n\n  title: __('ボックス（案内）', THEME_NAME),\n  icon: 'info',\n  category: 'cocoon',\n\n  attributes: {\n    content: {\n      type: 'string',\n      source: 'html',\n      selector: 'div'\n    },\n    style: {\n      type: 'string',\n      default: 'primary-box'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var content = attributes.content,\n        style = attributes.style,\n        alignment = attributes.alignment;\n\n\n    function onChange(event) {\n      setAttributes({ style: event.target.value });\n    }\n\n    function onChangeContent(newContent) {\n      setAttributes({ content: newContent });\n    }\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          { title: __('スタイル設定', THEME_NAME) },\n          wp.element.createElement(SelectControl, {\n            label: __('案内スタイル', THEME_NAME),\n            value: style,\n            onChange: function onChange(value) {\n              return setAttributes({ style: value });\n            },\n            options: [{\n              value: 'primary-box',\n              label: __('プライマリー（濃い水色）', THEME_NAME)\n            }, {\n              value: 'secondary-box',\n              label: __('セカンダリー（濃い灰色）', THEME_NAME)\n            }, {\n              value: 'info-box',\n              label: __('インフォ（薄い青）', THEME_NAME)\n            }, {\n              value: 'warning-box',\n              label: __('ワーニング（薄い黄色）', THEME_NAME)\n            }, {\n              value: 'danger-box',\n              label: __('デンジャー（薄い赤色）', THEME_NAME)\n            }, {\n              value: 'light-box',\n              label: __('ライト（白色）', THEME_NAME)\n            }, {\n              value: 'dark-box',\n              label: __('ダーク（暗い灰色）', THEME_NAME)\n            }]\n          })\n        )\n      ),\n      wp.element.createElement(\n        'div',\n        { className: attributes.style },\n        wp.element.createElement(RichText, {\n          onChange: onChangeContent,\n          value: attributes.content,\n          multiline: 'p'\n        })\n      )\n    );\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var content = attributes.content;\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(RichText.Content, {\n        value: attributes.content,\n        multiline: 'p'\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5mby1ib3gvYmxvY2suanM/ZTc4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIEJhc2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQmFzZUNvbnRyb2w7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xuXG52YXIgVEhFTUVfTkFNRSA9ICdjb2Nvb24nO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY29jb29uLWJsb2Nrcy9pbmZvLWJveCcsIHtcblxuICB0aXRsZTogX18oJ+ODnOODg+OCr+OCue+8iOahiOWGhe+8iScsIFRIRU1FX05BTUUpLFxuICBpY29uOiAnaW5mbycsXG4gIGNhdGVnb3J5OiAnY29jb29uJyxcblxuICBhdHRyaWJ1dGVzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzb3VyY2U6ICdodG1sJyxcbiAgICAgIHNlbGVjdG9yOiAnZGl2J1xuICAgIH0sXG4gICAgc3R5bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnktYm94J1xuICAgIH1cbiAgfSxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcbiAgICB2YXIgY29udGVudCA9IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgc3R5bGUgPSBhdHRyaWJ1dGVzLnN0eWxlLFxuICAgICAgICBhbGlnbm1lbnQgPSBhdHRyaWJ1dGVzLmFsaWdubWVudDtcblxuXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV3Q29udGVudCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgRnJhZ21lbnQsXG4gICAgICBudWxsLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICB7IHRpdGxlOiBfXygn44K544K/44Kk44Or6Kit5a6aJywgVEhFTUVfTkFNRSkgfSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICAgICAgbGFiZWw6IF9fKCfmoYjlhoXjgrnjgr/jgqTjg6snLCBUSEVNRV9OQU1FKSxcbiAgICAgICAgICAgIHZhbHVlOiBzdHlsZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgICAgICB2YWx1ZTogJ3ByaW1hcnktYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCfjg5fjg6njgqTjg57jg6rjg7zvvIjmv4PjgYTmsLToibLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB2YWx1ZTogJ3NlY29uZGFyeS1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+OCu+OCq+ODs+ODgOODquODvO+8iOa/g+OBhOeBsOiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnaW5mby1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+OCpOODs+ODleOCqe+8iOiWhOOBhOmdku+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnd2FybmluZy1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ODr+ODvOODi+ODs+OCsO+8iOiWhOOBhOm7hOiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnZGFuZ2VyLWJveCcsXG4gICAgICAgICAgICAgIGxhYmVsOiBfXygn44OH44Oz44K444Oj44O877yI6JaE44GE6LWk6Imy77yJJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICdsaWdodC1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ODqeOCpOODiO+8iOeZveiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnZGFyay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ODgOODvOOCr++8iOaal+OBhOeBsOiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgICAgbXVsdGlsaW5lOiAncCdcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuICAgIHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50O1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGF0dHJpYnV0ZXMuc3R5bGUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZm8tYm94L2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ })

/******/ });