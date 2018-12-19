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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_box_block_js__ = __webpack_require__(/*! ./icon-box/block.js */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_box_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icon_box_block_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_box_block_js__ = __webpack_require__(/*! ./info-box/block.js */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_box_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__info_box_block_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_box_block_js__ = __webpack_require__(/*! ./blank-box/block.js */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_box_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__blank_box_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//const THEME_NAME = 'cocoon';\n// import './block/block.js';\n// import './edit-block/block.js';\n//import './define.js';\n// import './hello-world-step-03/block.js';\n// import './hello-world-step-04/block.js';\n// import './latest-post/block.js';\n//import './info-block/block.js';\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vY29uc3QgVEhFTUVfTkFNRSA9ICdjb2Nvb24nO1xuLy8gaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrLmpzJztcbi8vIGltcG9ydCAnLi9lZGl0LWJsb2NrL2Jsb2NrLmpzJztcbi8vaW1wb3J0ICcuL2RlZmluZS5qcyc7XG4vLyBpbXBvcnQgJy4vaGVsbG8td29ybGQtc3RlcC0wMy9ibG9jay5qcyc7XG4vLyBpbXBvcnQgJy4vaGVsbG8td29ybGQtc3RlcC0wNC9ibG9jay5qcyc7XG4vLyBpbXBvcnQgJy4vbGF0ZXN0LXBvc3QvYmxvY2suanMnO1xuLy9pbXBvcnQgJy4vaW5mby1ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vaWNvbi1ib3gvYmxvY2suanMnO1xuaW1wb3J0ICcuL2luZm8tYm94L2Jsb2NrLmpzJztcbmltcG9ydCAnLi9ibGFuay1ib3gvYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 13:
/*!*******************************!*\
  !*** ./src/info-box/block.js ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl;\nvar Fragment = wp.element.Fragment;\n\nvar THEME_NAME = 'cocoon';\n\nregisterBlockType('cocoon-blocks/info-box', {\n\n  title: __('ボックス（案内）', THEME_NAME),\n  icon: 'info',\n  category: 'cocoon',\n\n  attributes: {\n    content: {\n      type: 'string',\n      source: 'html',\n      selector: 'div'\n    },\n    style: {\n      type: 'string',\n      default: 'primary-box block-box'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var content = attributes.content,\n        style = attributes.style,\n        alignment = attributes.alignment;\n\n\n    function onChange(event) {\n      setAttributes({ style: event.target.value });\n    }\n\n    function onChangeContent(newContent) {\n      setAttributes({ content: newContent });\n    }\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          { title: __('スタイル設定', THEME_NAME) },\n          wp.element.createElement(SelectControl, {\n            label: __('タイプ', THEME_NAME),\n            value: style,\n            onChange: function onChange(value) {\n              return setAttributes({ style: value });\n            },\n            options: [{\n              value: 'primary-box block-box',\n              label: __('プライマリー（濃い水色）', THEME_NAME)\n            }, {\n              value: 'secondary-box block-box',\n              label: __('セカンダリー（濃い灰色）', THEME_NAME)\n            }, {\n              value: 'info-box block-box',\n              label: __('インフォ（薄い青）', THEME_NAME)\n            }, {\n              value: 'warning-box block-box',\n              label: __('ワーニング（薄い黄色）', THEME_NAME)\n            }, {\n              value: 'danger-box block-box',\n              label: __('デンジャー（薄い赤色）', THEME_NAME)\n            }, {\n              value: 'light-box block-box',\n              label: __('ライト（白色）', THEME_NAME)\n            }, {\n              value: 'dark-box block-box',\n              label: __('ダーク（暗い灰色）', THEME_NAME)\n            }]\n          })\n        )\n      ),\n      wp.element.createElement(\n        'div',\n        { className: attributes.style },\n        wp.element.createElement(RichText, {\n          onChange: onChangeContent,\n          value: attributes.content,\n          multiline: 'p'\n        })\n      )\n    );\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var content = attributes.content;\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(RichText.Content, {\n        value: attributes.content,\n        multiline: 'p'\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5mby1ib3gvYmxvY2suanM/ZTc4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIEJhc2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQmFzZUNvbnRyb2w7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xuXG52YXIgVEhFTUVfTkFNRSA9ICdjb2Nvb24nO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY29jb29uLWJsb2Nrcy9pbmZvLWJveCcsIHtcblxuICB0aXRsZTogX18oJ+ODnOODg+OCr+OCue+8iOahiOWGhe+8iScsIFRIRU1FX05BTUUpLFxuICBpY29uOiAnaW5mbycsXG4gIGNhdGVnb3J5OiAnY29jb29uJyxcblxuICBhdHRyaWJ1dGVzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzb3VyY2U6ICdodG1sJyxcbiAgICAgIHNlbGVjdG9yOiAnZGl2J1xuICAgIH0sXG4gICAgc3R5bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnktYm94IGJsb2NrLWJveCdcbiAgICB9XG4gIH0sXG5cbiAgZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG4gICAgdmFyIGNvbnRlbnQgPSBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgIHN0eWxlID0gYXR0cmlidXRlcy5zdHlsZSxcbiAgICAgICAgYWxpZ25tZW50ID0gYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IG5ld0NvbnRlbnQgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbEJvZHksXG4gICAgICAgICAgeyB0aXRsZTogX18oJ+OCueOCv+OCpOODq+ioreWumicsIFRIRU1FX05BTUUpIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgICAgICAgIGxhYmVsOiBfXygn44K/44Kk44OXJywgVEhFTUVfTkFNRSksXG4gICAgICAgICAgICB2YWx1ZTogc3R5bGUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogW3tcbiAgICAgICAgICAgICAgdmFsdWU6ICdwcmltYXJ5LWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ODl+ODqeOCpOODnuODquODvO+8iOa/g+OBhOawtOiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnc2Vjb25kYXJ5LWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+OCu+OCq+ODs+ODgOODquODvO+8iOa/g+OBhOeBsOiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnaW5mby1ib3ggYmxvY2stYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCfjgqTjg7Pjg5XjgqnvvIjoloTjgYTpnZLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB2YWx1ZTogJ3dhcm5pbmctYm94IGJsb2NrLWJveCcsXG4gICAgICAgICAgICAgIGxhYmVsOiBfXygn44Ov44O844OL44Oz44Kw77yI6JaE44GE6buE6Imy77yJJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICdkYW5nZXItYm94IGJsb2NrLWJveCcsXG4gICAgICAgICAgICAgIGxhYmVsOiBfXygn44OH44Oz44K444Oj44O877yI6JaE44GE6LWk6Imy77yJJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICdsaWdodC1ib3ggYmxvY2stYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCfjg6njgqTjg4jvvIjnmb3oibLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB2YWx1ZTogJ2RhcmstYm94IGJsb2NrLWJveCcsXG4gICAgICAgICAgICAgIGxhYmVsOiBfXygn44OA44O844Kv77yI5pqX44GE54Gw6Imy77yJJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBhdHRyaWJ1dGVzLnN0eWxlIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG4gICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgICBtdWx0aWxpbmU6ICdwJ1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGNvbnRlbnQgPSBhdHRyaWJ1dGVzLmNvbnRlbnQ7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgbXVsdGlsaW5lOiAncCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5mby1ib3gvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),

/***/ 14:
/*!*******************************!*\
  !*** ./src/icon-box/block.js ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl;\nvar Fragment = wp.element.Fragment;\n\nvar THEME_NAME = 'cocoon';\n\nregisterBlockType('cocoon-blocks/icon-box', {\n\n  title: __('ボックス（アイコン）', THEME_NAME),\n  icon: 'art',\n  category: 'cocoon',\n\n  attributes: {\n    content: {\n      type: 'string',\n      source: 'html',\n      selector: 'div'\n    },\n    style: {\n      type: 'string',\n      default: 'information-box common-icon-box block-box'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var content = attributes.content,\n        style = attributes.style,\n        alignment = attributes.alignment;\n\n\n    function onChange(event) {\n      setAttributes({ style: event.target.value });\n    }\n\n    function onChangeContent(newContent) {\n      setAttributes({ content: newContent });\n    }\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          { title: __('スタイル設定', THEME_NAME) },\n          wp.element.createElement(SelectControl, {\n            label: __('タイプ', THEME_NAME),\n            value: style,\n            onChange: function onChange(value) {\n              return setAttributes({ style: value });\n            },\n            options: [{\n              value: 'information-box common-icon-box block-box',\n              label: __('補足情報(i)', THEME_NAME)\n            }, {\n              value: 'question-box common-icon-box block-box',\n              label: __('補足情報(?)', THEME_NAME)\n            }, {\n              value: 'alert-box common-icon-box block-box',\n              label: __('補足情報(!)', THEME_NAME)\n            }, {\n              value: 'memo-box common-icon-box block-box',\n              label: __('メモ', THEME_NAME)\n            }, {\n              value: 'comment-box common-icon-box block-box',\n              label: __('コメント', THEME_NAME)\n            }, {\n              value: 'ok-box common-icon-box block-box',\n              label: __('OK', THEME_NAME)\n            }, {\n              value: 'ng-box common-icon-box block-box',\n              label: __('NG', THEME_NAME)\n            }, {\n              value: 'good-box common-icon-box block-box',\n              label: __('GOOD', THEME_NAME)\n            }, {\n              value: 'bad-box common-icon-box block-box',\n              label: __('BAD', THEME_NAME)\n            }, {\n              value: 'profile-box common-icon-box block-box',\n              label: __('プロフィール', THEME_NAME)\n            }]\n          })\n        )\n      ),\n      wp.element.createElement(\n        'div',\n        { className: attributes.style },\n        wp.element.createElement(RichText, {\n          onChange: onChangeContent,\n          value: attributes.content,\n          multiline: 'p'\n        })\n      )\n    );\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var content = attributes.content;\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(RichText.Content, {\n        value: attributes.content,\n        multiline: 'p'\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi1ib3gvYmxvY2suanM/MjVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIEJhc2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQmFzZUNvbnRyb2w7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xuXG52YXIgVEhFTUVfTkFNRSA9ICdjb2Nvb24nO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY29jb29uLWJsb2Nrcy9pY29uLWJveCcsIHtcblxuICB0aXRsZTogX18oJ+ODnOODg+OCr+OCue+8iOOCouOCpOOCs+ODs++8iScsIFRIRU1FX05BTUUpLFxuICBpY29uOiAnYXJ0JyxcbiAgY2F0ZWdvcnk6ICdjb2Nvb24nLFxuXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZTogJ2h0bWwnLFxuICAgICAgc2VsZWN0b3I6ICdkaXYnXG4gICAgfSxcbiAgICBzdHlsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaW5mb3JtYXRpb24tYm94IGNvbW1vbi1pY29uLWJveCBibG9jay1ib3gnXG4gICAgfVxuICB9LFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuICAgIHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50LFxuICAgICAgICBzdHlsZSA9IGF0dHJpYnV0ZXMuc3R5bGUsXG4gICAgICAgIGFsaWdubWVudCA9IGF0dHJpYnV0ZXMuYWxpZ25tZW50O1xuXG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXdDb250ZW50IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBGcmFnbWVudCxcbiAgICAgIG51bGwsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuICAgICAgICBudWxsLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUGFuZWxCb2R5LFxuICAgICAgICAgIHsgdGl0bGU6IF9fKCfjgrnjgr/jgqTjg6voqK3lrponLCBUSEVNRV9OQU1FKSB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG4gICAgICAgICAgICBsYWJlbDogX18oJ+OCv+OCpOODlycsIFRIRU1FX05BTUUpLFxuICAgICAgICAgICAgdmFsdWU6IHN0eWxlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgICAgIHZhbHVlOiAnaW5mb3JtYXRpb24tYm94IGNvbW1vbi1pY29uLWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ijnOi2s+aDheWgsShpKScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAncXVlc3Rpb24tYm94IGNvbW1vbi1pY29uLWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ijnOi2s+aDheWgsSg/KScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnYWxlcnQtYm94IGNvbW1vbi1pY29uLWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+ijnOi2s+aDheWgsSghKScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnbWVtby1ib3ggY29tbW9uLWljb24tYm94IGJsb2NrLWJveCcsXG4gICAgICAgICAgICAgIGxhYmVsOiBfXygn44Oh44OiJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICdjb21tZW50LWJveCBjb21tb24taWNvbi1ib3ggYmxvY2stYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCfjgrPjg6Hjg7Pjg4gnLCBUSEVNRV9OQU1FKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB2YWx1ZTogJ29rLWJveCBjb21tb24taWNvbi1ib3ggYmxvY2stYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCdPSycsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnbmctYm94IGNvbW1vbi1pY29uLWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ05HJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICdnb29kLWJveCBjb21tb24taWNvbi1ib3ggYmxvY2stYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCdHT09EJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICdiYWQtYm94IGNvbW1vbi1pY29uLWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ0JBRCcsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAncHJvZmlsZS1ib3ggY29tbW9uLWljb24tYm94IGJsb2NrLWJveCcsXG4gICAgICAgICAgICAgIGxhYmVsOiBfXygn44OX44Ot44OV44Kj44O844OrJywgVEhFTUVfTkFNRSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBhdHRyaWJ1dGVzLnN0eWxlIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG4gICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgICBtdWx0aWxpbmU6ICdwJ1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGNvbnRlbnQgPSBhdHRyaWJ1dGVzLmNvbnRlbnQ7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgbXVsdGlsaW5lOiAncCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNvbi1ib3gvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),

/***/ 15:
/*!********************************!*\
  !*** ./src/blank-box/block.js ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl;\nvar Fragment = wp.element.Fragment;\n\nvar THEME_NAME = 'cocoon';\n\nregisterBlockType('cocoon-blocks/blank-box', {\n\n  title: __('ボックス（白抜き）', THEME_NAME),\n  icon: 'tablet',\n  category: 'cocoon',\n\n  attributes: {\n    content: {\n      type: 'string',\n      source: 'html',\n      selector: 'div'\n    },\n    style: {\n      type: 'string',\n      default: 'blank-box block-box'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var content = attributes.content,\n        style = attributes.style,\n        alignment = attributes.alignment;\n\n\n    function onChange(event) {\n      setAttributes({ style: event.target.value });\n    }\n\n    function onChangeContent(newContent) {\n      setAttributes({ content: newContent });\n    }\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          { title: __('スタイル設定', THEME_NAME) },\n          wp.element.createElement(SelectControl, {\n            label: __('タイプ', THEME_NAME),\n            value: style,\n            onChange: function onChange(value) {\n              return setAttributes({ style: value });\n            },\n            options: [{\n              value: 'blank-box block-box',\n              label: __('灰色', THEME_NAME)\n            }, {\n              value: 'blank-box bb-yellow block-box',\n              label: __('黄色', THEME_NAME)\n            }, {\n              value: 'blank-box bb-red block-box',\n              label: __('赤色', THEME_NAME)\n            }, {\n              value: 'blank-box bb-blue block-box',\n              label: __('青色', THEME_NAME)\n            }, {\n              value: 'blank-box bb-green block-box',\n              label: __('緑色）', THEME_NAME)\n            }]\n          })\n        )\n      ),\n      wp.element.createElement(\n        'div',\n        { className: attributes.style },\n        wp.element.createElement(RichText, {\n          onChange: onChangeContent,\n          value: attributes.content,\n          multiline: 'p'\n        })\n      )\n    );\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var content = attributes.content;\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(RichText.Content, {\n        value: attributes.content,\n        multiline: 'p'\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxhbmstYm94L2Jsb2NrLmpzPzExZWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbCxcbiAgICBCYXNlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLkJhc2VDb250cm9sO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxudmFyIFRIRU1FX05BTUUgPSAnY29jb29uJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvY29vbi1ibG9ja3MvYmxhbmstYm94Jywge1xuXG4gIHRpdGxlOiBfXygn44Oc44OD44Kv44K577yI55m95oqc44GN77yJJywgVEhFTUVfTkFNRSksXG4gIGljb246ICd0YWJsZXQnLFxuICBjYXRlZ29yeTogJ2NvY29vbicsXG5cbiAgYXR0cmlidXRlczoge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc291cmNlOiAnaHRtbCcsXG4gICAgICBzZWxlY3RvcjogJ2RpdidcbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdibGFuay1ib3ggYmxvY2stYm94J1xuICAgIH1cbiAgfSxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcbiAgICB2YXIgY29udGVudCA9IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgc3R5bGUgPSBhdHRyaWJ1dGVzLnN0eWxlLFxuICAgICAgICBhbGlnbm1lbnQgPSBhdHRyaWJ1dGVzLmFsaWdubWVudDtcblxuXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV3Q29udGVudCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgRnJhZ21lbnQsXG4gICAgICBudWxsLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICB7IHRpdGxlOiBfXygn44K544K/44Kk44Or6Kit5a6aJywgVEhFTUVfTkFNRSkgfSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICAgICAgbGFiZWw6IF9fKCfjgr/jgqTjg5cnLCBUSEVNRV9OQU1FKSxcbiAgICAgICAgICAgIHZhbHVlOiBzdHlsZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgICAgICB2YWx1ZTogJ2JsYW5rLWJveCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+eBsOiJsicsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnYmxhbmstYm94IGJiLXllbGxvdyBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+m7hOiJsicsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnYmxhbmstYm94IGJiLXJlZCBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+i1pOiJsicsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiAnYmxhbmstYm94IGJiLWJsdWUgYmxvY2stYm94JyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCfpnZLoibInLCBUSEVNRV9OQU1FKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB2YWx1ZTogJ2JsYW5rLWJveCBiYi1ncmVlbiBibG9jay1ib3gnLFxuICAgICAgICAgICAgICBsYWJlbDogX18oJ+e3keiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgICAgbXVsdGlsaW5lOiAncCdcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuICAgIHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50O1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGF0dHJpYnV0ZXMuc3R5bGUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JsYW5rLWJveC9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ })

/******/ });