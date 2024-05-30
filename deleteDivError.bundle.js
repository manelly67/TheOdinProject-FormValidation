"use strict";
(self["webpackChunkform_validation"] = self["webpackChunkform_validation"] || []).push([["deleteDivError"],{

/***/ "./src/components/deleteDivError.js":
/*!******************************************!*\
  !*** ./src/components/deleteDivError.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteDivError)
/* harmony export */ });
function deleteDivError(arg) {

    let id = arg.getAttribute('id');
   
    const errorMessage = document.getElementById(`${id}error`);
    if (errorMessage !== null){
        let x = errorMessage;
        x.parentNode.removeChild(x);
    }

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/deleteDivError.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlRGl2RXJyb3IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxHQUFHO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZURpdkVycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZURpdkVycm9yKGFyZykge1xyXG5cclxuICAgIGxldCBpZCA9IGFyZy5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgIFxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9ZXJyb3JgKTtcclxuICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IG51bGwpe1xyXG4gICAgICAgIGxldCB4ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIHgucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4KTtcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=