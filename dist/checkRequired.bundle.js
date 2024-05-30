"use strict";
(self["webpackChunkform_validation"] = self["webpackChunkform_validation"] || []).push([["checkRequired"],{

/***/ "./src/components/requiredValidation.js":
/*!**********************************************!*\
  !*** ./src/components/requiredValidation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkRequired)
/* harmony export */ });
/* harmony import */ var _showError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showError */ "./src/components/showError.js");


function checkRequired(arg) {
let message = 'You need to enter a value for this field.';
  // Functions for validation
  if (arg.validity.valueMissing===true) {
    (0,_showError__WEBPACK_IMPORTED_MODULE_0__["default"])(arg,message);
  }
return  arg.validity.valueMissing;
}

/***/ }),

/***/ "./src/components/showError.js":
/*!*************************************!*\
  !*** ./src/components/showError.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showError)
/* harmony export */ });
function showError(arg1,arg2) {
        // arg1 is the input field - arg2 is the message for the type of error
       // create an element for display the error message
       
       let id = arg1.getAttribute('id');
       
       const inputError = document.createElement('p');
       inputError.classList.add('error');
       inputError.classList.add('active');
       inputError.setAttribute('id',`${id}error`);
       inputError.setAttribute( 'aria-live','polite');
       inputError.textContent = arg2;
    
       const parentElement = arg1.parentNode;
       parentElement.appendChild(inputError);  
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/requiredValidation.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tSZXF1aXJlZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVM7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEdBQUc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvcmVxdWlyZWRWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL3Nob3dFcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvd0Vycm9yIGZyb20gJy4vc2hvd0Vycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrUmVxdWlyZWQoYXJnKSB7XHJcbmxldCBtZXNzYWdlID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgdmFsdWUgZm9yIHRoaXMgZmllbGQuJztcclxuICAvLyBGdW5jdGlvbnMgZm9yIHZhbGlkYXRpb25cclxuICBpZiAoYXJnLnZhbGlkaXR5LnZhbHVlTWlzc2luZz09PXRydWUpIHtcclxuICAgIHNob3dFcnJvcihhcmcsbWVzc2FnZSk7XHJcbiAgfVxyXG5yZXR1cm4gIGFyZy52YWxpZGl0eS52YWx1ZU1pc3Npbmc7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93RXJyb3IoYXJnMSxhcmcyKSB7XHJcbiAgICAgICAgLy8gYXJnMSBpcyB0aGUgaW5wdXQgZmllbGQgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICAgLy8gY3JlYXRlIGFuIGVsZW1lbnQgZm9yIGRpc3BsYXkgdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgIFxyXG4gICAgICAgbGV0IGlkID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IGlucHV0RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpZH1lcnJvcmApO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCdwb2xpdGUnKTtcclxuICAgICAgIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPSBhcmcyO1xyXG4gICAgXHJcbiAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gYXJnMS5wYXJlbnROb2RlO1xyXG4gICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVycm9yKTsgIFxyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=