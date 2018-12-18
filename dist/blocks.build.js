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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_block_block_js__ = __webpack_require__(/*! ./info-block/block.js */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__info_block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n// import './block/block.js';\n// import './edit-block/block.js';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vIGltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG4vLyBpbXBvcnQgJy4vZWRpdC1ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vaW5mby1ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** ./src/info-block/block.js ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\n\nvar RichText = wp.editor.RichText;\n\nregisterBlockType('cocoon-blocks/info', {\n\n  title: '案内ボックス',\n\n  icon: 'info',\n\n  category: 'cocoon',\n\n  attributes: {\n    style: {\n      type: 'string',\n      default: 'info-box'\n    },\n    content: {\n      type: 'array',\n      source: 'children',\n      selector: 'div'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n\n\n    function onChange(event) {\n      setAttributes({ style: event.target.value });\n    }\n\n    function onChangeContent(newContent) {\n      setAttributes({ content: newContent });\n    }\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(\n        'select',\n        { onChange: onChange },\n        wp.element.createElement(\n          'option',\n          { value: 'primary-box' },\n          '\\u30D7\\u30E9\\u30A4\\u30DE\\u30EA\\u30FC\\uFF08\\u6FC3\\u3044\\u6C34\\u8272\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'secondary-box' },\n          '\\u30BB\\u30AB\\u30F3\\u30C0\\u30EA\\u30FC\\uFF08\\u6FC3\\u3044\\u7070\\u8272\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'success-box' },\n          '\\u30B5\\u30AF\\u30BB\\u30B9\\uFF08\\u8584\\u3044\\u7DD1\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'info-box' },\n          '\\u30A4\\u30F3\\u30D5\\u30A9\\uFF08\\u8584\\u3044\\u9752\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'warning-box' },\n          '\\u30EF\\u30FC\\u30CB\\u30F3\\u30B0\\uFF08\\u8584\\u3044\\u9EC4\\u8272\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'danger-box' },\n          '\\u30C7\\u30F3\\u30B8\\u30E3\\u30FC\\uFF08\\u8584\\u3044\\u8D64\\u8272\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'light-box' },\n          '\\u30E9\\u30A4\\u30C8\\uFF08\\u767D\\u8272\\uFF09'\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'dark-box' },\n          '\\u30C0\\u30FC\\u30AF\\uFF08\\u6697\\u3044\\u7070\\u8272\\uFF09'\n        )\n      ),\n      wp.element.createElement(RichText, {\n        onChange: onChangeContent,\n        value: attributes.content\n      })\n    );\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(RichText.Content, {\n        value: attributes.content\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmZvLWJsb2NrL2Jsb2NrLmpzP2FhZGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG52YXIgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjb2Nvb24tYmxvY2tzL2luZm8nLCB7XG5cbiAgdGl0bGU6ICfmoYjlhoXjg5zjg4Pjgq/jgrknLFxuXG4gIGljb246ICdpbmZvJyxcblxuICBjYXRlZ29yeTogJ2NvY29vbicsXG5cbiAgYXR0cmlidXRlczoge1xuICAgIHN0eWxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdpbmZvLWJveCdcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICBzZWxlY3RvcjogJ2RpdidcbiAgICB9XG4gIH0sXG5cbiAgZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IG5ld0NvbnRlbnQgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGF0dHJpYnV0ZXMuc3R5bGUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgIHsgb25DaGFuZ2U6IG9uQ2hhbmdlIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICB7IHZhbHVlOiAncHJpbWFyeS1ib3gnIH0sXG4gICAgICAgICAgJ1xcdTMwRDdcXHUzMEU5XFx1MzBBNFxcdTMwREVcXHUzMEVBXFx1MzBGQ1xcdUZGMDhcXHU2RkMzXFx1MzA0NFxcdTZDMzRcXHU4MjcyXFx1RkYwOSdcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgIHsgdmFsdWU6ICdzZWNvbmRhcnktYm94JyB9LFxuICAgICAgICAgICdcXHUzMEJCXFx1MzBBQlxcdTMwRjNcXHUzMEMwXFx1MzBFQVxcdTMwRkNcXHVGRjA4XFx1NkZDM1xcdTMwNDRcXHU3MDcwXFx1ODI3MlxcdUZGMDknXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICB7IHZhbHVlOiAnc3VjY2Vzcy1ib3gnIH0sXG4gICAgICAgICAgJ1xcdTMwQjVcXHUzMEFGXFx1MzBCQlxcdTMwQjlcXHVGRjA4XFx1ODU4NFxcdTMwNDRcXHU3REQxXFx1RkYwOSdcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgIHsgdmFsdWU6ICdpbmZvLWJveCcgfSxcbiAgICAgICAgICAnXFx1MzBBNFxcdTMwRjNcXHUzMEQ1XFx1MzBBOVxcdUZGMDhcXHU4NTg0XFx1MzA0NFxcdTk3NTJcXHVGRjA5J1xuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgeyB2YWx1ZTogJ3dhcm5pbmctYm94JyB9LFxuICAgICAgICAgICdcXHUzMEVGXFx1MzBGQ1xcdTMwQ0JcXHUzMEYzXFx1MzBCMFxcdUZGMDhcXHU4NTg0XFx1MzA0NFxcdTlFQzRcXHU4MjcyXFx1RkYwOSdcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgIHsgdmFsdWU6ICdkYW5nZXItYm94JyB9LFxuICAgICAgICAgICdcXHUzMEM3XFx1MzBGM1xcdTMwQjhcXHUzMEUzXFx1MzBGQ1xcdUZGMDhcXHU4NTg0XFx1MzA0NFxcdThENjRcXHU4MjcyXFx1RkYwOSdcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgIHsgdmFsdWU6ICdsaWdodC1ib3gnIH0sXG4gICAgICAgICAgJ1xcdTMwRTlcXHUzMEE0XFx1MzBDOFxcdUZGMDhcXHU3NjdEXFx1ODI3MlxcdUZGMDknXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICB7IHZhbHVlOiAnZGFyay1ib3gnIH0sXG4gICAgICAgICAgJ1xcdTMwQzBcXHUzMEZDXFx1MzBBRlxcdUZGMDhcXHU2Njk3XFx1MzA0NFxcdTcwNzBcXHU4MjcyXFx1RkYwOSdcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5jb250ZW50XG4gICAgICB9KVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudFxuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmZvLWJsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });