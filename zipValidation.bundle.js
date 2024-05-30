"use strict";
(self["webpackChunkform_validation"] = self["webpackChunkform_validation"] || []).push([["zipValidation"],{

/***/ "./src/components/zipCodeValidation.js":
/*!*********************************************!*\
  !*** ./src/components/zipCodeValidation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ zipValidation)
/* harmony export */ });
function zipValidation(arg) {
   
    let numbersValidation = false;
    let lengthValidation = false;
    let finalValidation = false;

    let numbers = /[0-9]{5}/g;
    
    if(arg.value.match(numbers)) {
        numbersValidation = true;
    } else {
        numbersValidation = false;
    }

    if(arg.value.length === 5) {
        lengthValidation = true;
    } else {
        lengthValidation = false;
    }

    switch (numbersValidation) {
        case false:

          break;
          default:  
            switch (lengthValidation) {
            case false:
              
              break;
              default:  
              finalValidation = true;
            };
     };
return finalValidation;    
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/zipCodeValidation.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwVmFsaWRhdGlvbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL3ppcENvZGVWYWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHppcFZhbGlkYXRpb24oYXJnKSB7XHJcbiAgIFxyXG4gICAgbGV0IG51bWJlcnNWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgbGVuZ3RoVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGZpbmFsVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBudW1iZXJzID0gL1swLTldezV9L2c7XHJcbiAgICBcclxuICAgIGlmKGFyZy52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIG51bWJlcnNWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVtYmVyc1ZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZihhcmcudmFsdWUubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgbGVuZ3RoVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxlbmd0aFZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG51bWJlcnNWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6ICBcclxuICAgICAgICAgICAgc3dpdGNoIChsZW5ndGhWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogIFxyXG4gICAgICAgICAgICAgIGZpbmFsVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgfTtcclxucmV0dXJuIGZpbmFsVmFsaWRhdGlvbjsgICAgXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=