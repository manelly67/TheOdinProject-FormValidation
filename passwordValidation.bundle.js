"use strict";
(self["webpackChunkform_validation"] = self["webpackChunkform_validation"] || []).push([["passwordValidation"],{

/***/ "./src/components/password-validation.js":
/*!***********************************************!*\
  !*** ./src/components/password-validation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ passwordValidation)
/* harmony export */ });
function passwordValidation(arg) {
    /* THIS PART CHECK PART BY PART */
  
    let lowerCaseValidation = false;
    let upperCaseValidation = false;
    let numbersValidation = false;
    let specialCharValidation = false;
    let notSpaceValidation = false;
    let lengthValidation = false;
  
    let lowerCaseLetters = /[a-z]/g;
    if (arg.value.match(lowerCaseLetters)) {
      lowerCaseValidation = true;
    } else {
      lowerCaseValidation = false;
    }
  
    let upperCaseLetters = /[A-Z]/g;
    if (arg.value.match(upperCaseLetters)) {
      upperCaseValidation = true;
    } else {
      upperCaseValidation = false;
    }
  
    let numbers = /[0-9]/g;
    if (arg.value.match(numbers)) {
      numbersValidation = true;
    } else {
      numbersValidation = false;
    }
  
    let specialChar = /[*@!#%&()^~{}.+]/g;
    if (arg.value.match(specialChar)) {
      specialCharValidation = true;
    } else {
      specialCharValidation = false;
    }
  
    let spaceNotAllowed = /^\S+$/;
    if (arg.value.match(spaceNotAllowed)) {
      notSpaceValidation = true;
    } else {
      notSpaceValidation = false;
    }
  
    if (arg.value.length >= 8) {
      lengthValidation = true;
    } else {
      lengthValidation = false;
    }
  
    /* Esta validacion es hecha en un solo bloque PARA ESTE EJERCICIO SE UTILIZARA VALIDACION POR PARTES*/
  
    /*  let valueToValidate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*@!#%&()^~{}.+])(^\S).{8,}/;
      if(arg.value.match(valueToValidate)) {
          console.log('valid');
          let validation = true;
          console.log(arg.value.match(valueToValidate),validation);
      } else {
          console.log('no valid');
          let validation = false;
          console.log(arg.value.match(valueToValidate),validation);
      }
      */
  
    let passwordValue = '';
    let finalValidation = false;
    switch (lowerCaseValidation) {
      case false:
        passwordValue = '';
        break;
      default:
        switch (upperCaseValidation) {
          case false:
            passwordValue = '';
            break;
          default:
            switch (numbersValidation) {
              case false:
                passwordValue = '';
                break;
              default:
                switch (specialCharValidation) {
                  case false:
                    passwordValue = '';
                    break;
                  default:
                    switch (notSpaceValidation) {
                      case false:
                        passwordValue = '';
                        break;
                      default:
                        switch (lengthValidation) {
                          case false:
                            passwordValue = '';
                            break;
                          default:
                            passwordValue = arg.value;
                            finalValidation = true;
                        }
                    }
                }
            }
        }
    }
  
    return { passwordValue, finalValidation };
}  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/password-validation.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmRWYWxpZGF0aW9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLFdBQVcsR0FBRztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvcGFzc3dvcmQtdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXNzd29yZFZhbGlkYXRpb24oYXJnKSB7XHJcbiAgICAvKiBUSElTIFBBUlQgQ0hFQ0sgUEFSVCBCWSBQQVJUICovXHJcbiAgXHJcbiAgICBsZXQgbG93ZXJDYXNlVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IHVwcGVyQ2FzZVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIGxldCBudW1iZXJzVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IHNwZWNpYWxDaGFyVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IG5vdFNwYWNlVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGxlbmd0aFZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBcclxuICAgIGxldCBsb3dlckNhc2VMZXR0ZXJzID0gL1thLXpdL2c7XHJcbiAgICBpZiAoYXJnLnZhbHVlLm1hdGNoKGxvd2VyQ2FzZUxldHRlcnMpKSB7XHJcbiAgICAgIGxvd2VyQ2FzZVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG93ZXJDYXNlVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IHVwcGVyQ2FzZUxldHRlcnMgPSAvW0EtWl0vZztcclxuICAgIGlmIChhcmcudmFsdWUubWF0Y2godXBwZXJDYXNlTGV0dGVycykpIHtcclxuICAgICAgdXBwZXJDYXNlVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cHBlckNhc2VWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXQgbnVtYmVycyA9IC9bMC05XS9nO1xyXG4gICAgaWYgKGFyZy52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICBudW1iZXJzVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBudW1iZXJzVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IHNwZWNpYWxDaGFyID0gL1sqQCEjJSYoKV5+e30uK10vZztcclxuICAgIGlmIChhcmcudmFsdWUubWF0Y2goc3BlY2lhbENoYXIpKSB7XHJcbiAgICAgIHNwZWNpYWxDaGFyVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzcGVjaWFsQ2hhclZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCBzcGFjZU5vdEFsbG93ZWQgPSAvXlxcUyskLztcclxuICAgIGlmIChhcmcudmFsdWUubWF0Y2goc3BhY2VOb3RBbGxvd2VkKSkge1xyXG4gICAgICBub3RTcGFjZVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm90U3BhY2VWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAoYXJnLnZhbHVlLmxlbmd0aCA+PSA4KSB7XHJcbiAgICAgIGxlbmd0aFZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGVuZ3RoVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyogRXN0YSB2YWxpZGFjaW9uIGVzIGhlY2hhIGVuIHVuIHNvbG8gYmxvcXVlIFBBUkEgRVNURSBFSkVSQ0lDSU8gU0UgVVRJTElaQVJBIFZBTElEQUNJT04gUE9SIFBBUlRFUyovXHJcbiAgXHJcbiAgICAvKiAgbGV0IHZhbHVlVG9WYWxpZGF0ZSA9IC8oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbKkAhIyUmKClefnt9LitdKSheXFxTKS57OCx9LztcclxuICAgICAgaWYoYXJnLnZhbHVlLm1hdGNoKHZhbHVlVG9WYWxpZGF0ZSkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpO1xyXG4gICAgICAgICAgbGV0IHZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlLm1hdGNoKHZhbHVlVG9WYWxpZGF0ZSksdmFsaWRhdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbm8gdmFsaWQnKTtcclxuICAgICAgICAgIGxldCB2YWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhcmcudmFsdWUubWF0Y2godmFsdWVUb1ZhbGlkYXRlKSx2YWxpZGF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICAqL1xyXG4gIFxyXG4gICAgbGV0IHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgIGxldCBmaW5hbFZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIHN3aXRjaCAobG93ZXJDYXNlVmFsaWRhdGlvbikge1xyXG4gICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgIHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzd2l0Y2ggKHVwcGVyQ2FzZVZhbGlkYXRpb24pIHtcclxuICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzd2l0Y2ggKG51bWJlcnNWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNwZWNpYWxDaGFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdFNwYWNlVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZSA9IGFyZy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4geyBwYXNzd29yZFZhbHVlLCBmaW5hbFZhbGlkYXRpb24gfTtcclxufSAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9