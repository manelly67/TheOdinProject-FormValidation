"use strict";
(self["webpackChunkform_validation"] = self["webpackChunkform_validation"] || []).push([["printEmoji"],{

/***/ "./src/components/printEmoji.js":
/*!**************************************!*\
  !*** ./src/components/printEmoji.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printEmoji)
/* harmony export */ });
/* harmony import */ var _img_thumb_up_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/thumb-up.png */ "./src/img/thumb-up.png");


function printEmoji(arg) {

    // Add the image to our existing div.
    const myEmoji = new Image();
    myEmoji.src = _img_thumb_up_png__WEBPACK_IMPORTED_MODULE_0__;
    myEmoji.setAttribute('style','width:25%;height:30%;padding:5%');
    
    const parentElement = arg.parentNode;
    parentElement.appendChild(myEmoji);  

}

/***/ }),

/***/ "./src/img/thumb-up.png":
/*!******************************!*\
  !*** ./src/img/thumb-up.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "533ae83dcefdc53fd116.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/printEmoji.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRFbW9qaS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBSztBQUN2Qiw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvcHJpbnRFbW9qaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1vamkgZnJvbSAnLi4vaW1nL3RodW1iLXVwLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludEVtb2ppKGFyZykge1xyXG5cclxuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cclxuICAgIGNvbnN0IG15RW1vamkgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG15RW1vamkuc3JjID0gRW1vamk7XHJcbiAgICBteUVtb2ppLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDoyNSU7aGVpZ2h0OjMwJTtwYWRkaW5nOjUlJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcucGFyZW50Tm9kZTtcclxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobXlFbW9qaSk7ICBcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=