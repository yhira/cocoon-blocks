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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_block_block_js__ = __webpack_require__(/*! ./info-block/block.js */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__info_block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//const THEME_NAME = 'cocoon';\n// import './block/block.js';\n// import './edit-block/block.js';\n//import './define.js';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vY29uc3QgVEhFTUVfTkFNRSA9ICdjb2Nvb24nO1xuLy8gaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrLmpzJztcbi8vIGltcG9ydCAnLi9lZGl0LWJsb2NrL2Jsb2NrLmpzJztcbi8vaW1wb3J0ICcuL2RlZmluZS5qcyc7XG5pbXBvcnQgJy4vaW5mby1ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** ./src/info-block/block.js ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\nvar RichText = wp.editor.RichText;\nvar THEME_NAME = 'cocoon';\n\nregisterBlockType('cocoon-blocks/info', {\n\n  title: __('ボックス（案内）', THEME_NAME),\n  icon: 'info',\n  category: 'cocoon',\n\n  attributes: {\n    style: {\n      type: 'string',\n      default: 'primary-box'\n    },\n    content: {\n      type: 'array',\n      source: 'children',\n      selector: 'div'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n\n\n    function onChange(event) {\n      setAttributes({ style: event.target.value });\n    }\n\n    function onChangeContent(newContent) {\n      setAttributes({ content: newContent });\n    }\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(\n        'select',\n        { onChange: onChange },\n        wp.element.createElement(\n          'option',\n          { value: 'primary-box' },\n          __('プライマリー（濃い水色）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'secondary-box' },\n          __('セカンダリー（濃い灰色）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'success-box' },\n          __('サクセス（薄い緑）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'info-box' },\n          __('インフォ（薄い青）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'warning-box' },\n          __('ワーニング（薄い黄色）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'danger-box' },\n          __('デンジャー（薄い赤色）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'light-box' },\n          __('ライト（白色）', THEME_NAME)\n        ),\n        wp.element.createElement(\n          'option',\n          { value: 'dark-box' },\n          __('ダーク（暗い灰色）', THEME_NAME)\n        )\n      ),\n      wp.element.createElement(RichText, {\n        onChange: onChangeContent,\n        value: attributes.content,\n        multiline: 'p'\n      })\n    );\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n\n    return wp.element.createElement(\n      'div',\n      { className: attributes.style },\n      wp.element.createElement(RichText.Content, {\n        value: attributes.content,\n        multiline: 'p'\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmZvLWJsb2NrL2Jsb2NrLmpzP2FhZGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxudmFyIFJpY2hUZXh0ID0gd3AuZWRpdG9yLlJpY2hUZXh0O1xudmFyIFRIRU1FX05BTUUgPSAnY29jb29uJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvY29vbi1ibG9ja3MvaW5mbycsIHtcblxuICB0aXRsZTogX18oJ+ODnOODg+OCr+OCue+8iOahiOWGhe+8iScsIFRIRU1FX05BTUUpLFxuICBpY29uOiAnaW5mbycsXG4gIGNhdGVnb3J5OiAnY29jb29uJyxcblxuICBhdHRyaWJ1dGVzOiB7XG4gICAgc3R5bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnktYm94J1xuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICAgIHNlbGVjdG9yOiAnZGl2J1xuICAgIH1cbiAgfSxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV3Q29udGVudCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgeyBvbkNoYW5nZTogb25DaGFuZ2UgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgIHsgdmFsdWU6ICdwcmltYXJ5LWJveCcgfSxcbiAgICAgICAgICBfXygn44OX44Op44Kk44Oe44Oq44O877yI5r+D44GE5rC06Imy77yJJywgVEhFTUVfTkFNRSlcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgIHsgdmFsdWU6ICdzZWNvbmRhcnktYm94JyB9LFxuICAgICAgICAgIF9fKCfjgrvjgqvjg7Pjg4Djg6rjg7zvvIjmv4PjgYTngbDoibLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgeyB2YWx1ZTogJ3N1Y2Nlc3MtYm94JyB9LFxuICAgICAgICAgIF9fKCfjgrXjgq/jgrvjgrnvvIjoloTjgYTnt5HvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgeyB2YWx1ZTogJ2luZm8tYm94JyB9LFxuICAgICAgICAgIF9fKCfjgqTjg7Pjg5XjgqnvvIjoloTjgYTpnZLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgeyB2YWx1ZTogJ3dhcm5pbmctYm94JyB9LFxuICAgICAgICAgIF9fKCfjg6/jg7zjg4vjg7PjgrDvvIjoloTjgYTpu4ToibLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgeyB2YWx1ZTogJ2Rhbmdlci1ib3gnIH0sXG4gICAgICAgICAgX18oJ+ODh+ODs+OCuOODo+ODvO+8iOiWhOOBhOi1pOiJsu+8iScsIFRIRU1FX05BTUUpXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICB7IHZhbHVlOiAnbGlnaHQtYm94JyB9LFxuICAgICAgICAgIF9fKCfjg6njgqTjg4jvvIjnmb3oibLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgeyB2YWx1ZTogJ2RhcmstYm94JyB9LFxuICAgICAgICAgIF9fKCfjg4Djg7zjgq/vvIjmmpfjgYTngbDoibLvvIknLCBUSEVNRV9OQU1FKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5zdHlsZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgbXVsdGlsaW5lOiAncCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5mby1ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });