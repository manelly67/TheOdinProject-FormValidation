"use strict";
(self["webpackChunkform_validation"] = self["webpackChunkform_validation"] || []).push([["printForm"],{

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

/***/ }),

/***/ "./src/components/deleteError.js":
/*!***************************************!*\
  !*** ./src/components/deleteError.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteErrorMessages)
/* harmony export */ });
function deleteErrorMessages() {
    const errorMessages = document.querySelectorAll('.error');
    /* para crear un array desde el NodeList */
    const errorMessagesArray = [...errorMessages];
    const iterator = errorMessagesArray.entries();
    errorMessagesArray.forEach((element) => {
      let index = iterator.next().value;
    /*   console.log(index[0]);
         console.log(index[1]); */
      let x = index[1];  /* para leer el node dentro del nodeList */
      x.parentNode.removeChild(x);
    });
}

/***/ }),

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

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printForm)
/* harmony export */ });
/* harmony import */ var _components_requiredValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/requiredValidation */ "./src/components/requiredValidation.js");
/* harmony import */ var _components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/deleteDivError */ "./src/components/deleteDivError.js");
/* harmony import */ var _components_deleteError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/deleteError */ "./src/components/deleteError.js");
/* harmony import */ var _components_password_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/password-validation */ "./src/components/password-validation.js");
/* harmony import */ var _components_printEmoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/printEmoji */ "./src/components/printEmoji.js");
/* harmony import */ var _components_showError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/showError */ "./src/components/showError.js");
/* harmony import */ var _components_zipCodeValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/zipCodeValidation */ "./src/components/zipCodeValidation.js");









function printForm(arg) {
  let passwordRequirements =
    'Must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters';
  /* crear la forma */
  const container = document.createElement('div');
  let form = document.createElement('form');
  const formBody = document.createElement('div');
  const divEmail = document.createElement('div');
  const labelForEmail = document.createElement('label');
  const emailInput = document.createElement('input');
  const divCountry = document.createElement('div');
  const labelForCountry = document.createElement('label');
  const countryInput = document.createElement('input');
  const divZipCode = document.createElement('div');
  const labelForZipCode = document.createElement('label');
  const zipCodeInput = document.createElement('input');
  const passwordDiv = document.createElement('div');
  const passwordSubDiv1 = document.createElement('div');
  const passwordSubDiv2 = document.createElement('div');
  const labelForPassword = document.createElement('label');
  const passwordInput = document.createElement('input');
  const labelForPasswordConfirmation = document.createElement('label');
  const passwordConfirmationInput = document.createElement('input');
  const lastMessage = document.createElement('div');

  const submitButton = document.createElement('button');

  let inputsArray = []; /* define un array para incluir todos los inputs */
  form.setAttribute('id', 'form');
  form.setAttribute('autocomplete', 'off');
  form.setAttribute('novalidate', '');

  labelForEmail.setAttribute('for', 'email');
  labelForCountry.setAttribute('for', 'country');
  labelForZipCode.setAttribute('for', 'zip-code');
  labelForPassword.setAttribute('for', 'user-password');
  labelForPasswordConfirmation.setAttribute('for', 'confirm-password');

  emailInput.setAttribute('required', '');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('autocomplete', 'on');
  inputsArray.push(emailInput);

  countryInput.setAttribute('required', '');
  countryInput.setAttribute('type', 'text');
  countryInput.setAttribute('name', 'country');
  countryInput.setAttribute('id', 'country');
  countryInput.setAttribute('autocomplete', 'on');
  inputsArray.push(countryInput);

  zipCodeInput.setAttribute('required', '');
  zipCodeInput.setAttribute('type', 'text');
  zipCodeInput.setAttribute('name', 'zip-code');
  zipCodeInput.setAttribute('id', 'zip-code');
  zipCodeInput.setAttribute('title', 'Must contain five following numbers');
  zipCodeInput.setAttribute('placeholder', '54321');
  inputsArray.push(zipCodeInput);

  passwordInput.setAttribute('required', '');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'user-password');
  passwordInput.setAttribute('id', 'user-password');
  passwordInput.setAttribute('autocomplete', 'off');
  passwordInput.setAttribute('title', passwordRequirements);
  inputsArray.push(passwordInput);

  passwordConfirmationInput.setAttribute('required', '');
  passwordConfirmationInput.setAttribute('type', 'password');
  passwordConfirmationInput.setAttribute('name', 'confirm-password');
  passwordConfirmationInput.setAttribute('id', 'confirm-password');
  passwordConfirmationInput.setAttribute('autocomplete', 'off');
  inputsArray.push(passwordConfirmationInput);

  submitButton.textContent = 'SUBMIT';
  submitButton.setAttribute('type', 'submit');

  container.classList.add('container');
  form.classList.add('form');
  formBody.classList.add('formBody');
  passwordSubDiv1.classList.add('passwordDiv');
  passwordSubDiv2.classList.add('passwordDiv');
  submitButton.classList.add('btn');

  labelForEmail.innerText = 'Please enter an email address:';
  labelForCountry.innerText = 'Please enter a country name:';
  labelForZipCode.innerText = 'Please enter a zip code:';
  labelForPassword.innerText = 'Enter a password';
  labelForPasswordConfirmation.innerText = 'Enter a password confirmation';

  arg.appendChild(container);
  container.appendChild(form);
  form.appendChild(formBody);
  formBody.appendChild(divEmail);
  divEmail.appendChild(labelForEmail);
  divEmail.appendChild(emailInput);
  formBody.appendChild(divCountry);
  divCountry.appendChild(labelForCountry);
  divCountry.appendChild(countryInput);
  formBody.appendChild(divZipCode);
  divZipCode.appendChild(labelForZipCode);
  divZipCode.appendChild(zipCodeInput);
  formBody.appendChild(passwordDiv);
  passwordDiv.appendChild(passwordSubDiv1);
  passwordSubDiv1.appendChild(labelForPassword);
  passwordSubDiv1.appendChild(passwordInput);
  passwordDiv.appendChild(passwordSubDiv2);
  passwordSubDiv2.appendChild(labelForPasswordConfirmation);
  passwordSubDiv2.appendChild(passwordConfirmationInput);
  formBody.appendChild(lastMessage);
  formBody.appendChild(submitButton);

  /* FORM VALIDATIONS live inline validation */
  let emailValidityState = false;
  let countryValidityState = false;
  let zipCodeValidityState = false;
  let passwordValidityState = false;
  let confirmValidityState = false;

  emailInput.addEventListener('input', (event) => {
    (0,_components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__["default"])(emailInput); // Remove previous error messages
    let message = 'You need to enter a valid email address';
    if (emailInput.validity.valid) {
      message = '';
      emailValidityState = true;
    } else {
      (0,_components_showError__WEBPACK_IMPORTED_MODULE_5__["default"])(emailInput, message);
      emailValidityState = false;
    }
    validateAllInputs();
  });

  zipCodeInput.addEventListener('input', (event) => {
    (0,_components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__["default"])(zipCodeInput); // Remove previous error messages
    let message = 'This is not a valid ZIP CODE';
    let zipValidity = (0,_components_zipCodeValidation__WEBPACK_IMPORTED_MODULE_6__["default"])(zipCodeInput);
    if (zipValidity === true) {
      message = '';
      zipCodeValidityState = true;
    } else {
      (0,_components_showError__WEBPACK_IMPORTED_MODULE_5__["default"])(zipCodeInput, message);
      zipCodeValidityState = false;
    }
    validateAllInputs();
  });

  passwordInput.addEventListener('input', (event) => {
    (0,_components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__["default"])(passwordInput); // Remove previous error messages
    let message = passwordRequirements;
    let passwordValue = (0,_components_password_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(passwordInput).passwordValue;
    let finalValidation = (0,_components_password_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(passwordInput).finalValidation;
    if (finalValidation === true) {
      message = '';
      passwordValidityState = true;
    } else {
      (0,_components_showError__WEBPACK_IMPORTED_MODULE_5__["default"])(passwordInput, message);
      passwordValidityState = false;
    }
    validateAllInputs();
  });

  passwordConfirmationInput.addEventListener('input', (event) => {
    (0,_components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__["default"])(passwordConfirmationInput); // Remove previous error messages
    let message = 'Must match with the password';
    let passwordValue = (0,_components_password_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(passwordInput).passwordValue;
    let confirmValue = passwordConfirmationInput.value;
    if (passwordValue === confirmValue) {
      confirmValidityState = true;
    } else {
      (0,_components_showError__WEBPACK_IMPORTED_MODULE_5__["default"])(passwordConfirmationInput, message);
      confirmValidityState = false;
    }
    validateAllInputs();
    return confirmValidityState;
  });

  let validityStateArray = [];

  function validateAllInputs() {
    emailValidityState = emailInput.validity.valid;
    countryValidityState = countryInput.validity.valid;
    zipCodeValidityState = (0,_components_zipCodeValidation__WEBPACK_IMPORTED_MODULE_6__["default"])(zipCodeInput);
    passwordValidityState = (0,_components_password_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(passwordInput).finalValidation;
    confirmValidityState = confirmValidityState;

    validityStateArray = [
      emailValidityState,
      countryValidityState,
      zipCodeValidityState,
      passwordValidityState,
      confirmValidityState,
    ];
    if (!validityStateArray.includes(false)) {
      (0,_components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__["default"])(lastMessage);
    }
    return validityStateArray;
  }

  function showErrorByField(arg1, arg2) {
    /* arg1 is the array with inputs validations - arg2 is the array with the inputs fields */
    let i = 0;
    arg1.forEach((element) => {
      if (element === false) {
        let inputDiv = arg2[i];
        (0,_components_showError__WEBPACK_IMPORTED_MODULE_5__["default"])(inputDiv, 'Fix this field');
      } else {
      }
      i++;
    });
  }

  //FORM SUBMISSION AND FINAL VALIDATION
  let validationArray = [];

  form.addEventListener('submit', _components_deleteError__WEBPACK_IMPORTED_MODULE_2__["default"]);
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    (0,_components_deleteDivError__WEBPACK_IMPORTED_MODULE_1__["default"])(lastMessage); // Remove previous error messages

    let email = document.getElementById('email').value;

    let country = document.getElementById('country').value;

    let zipCode = document.getElementById('zip-code').value;

    let userPassword = document.getElementById('user-password').value;

    let confirmPassword = document.getElementById('confirm-password').value;

    validationArray = []; /* clean the previous validation */
    inputsArray.forEach((element) => {
      (0,_components_requiredValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
      validationArray.push(element.validity.valueMissing);
    });
    console.log(validationArray);

    if (validationArray.includes(true)) {
      /* here check the validity of required */
      event.preventDefault();
    } else {
      validateAllInputs();
      console.log(validityStateArray);
      if (validityStateArray.includes(false)) {
        /* here check each input specific validity */
        event.preventDefault();
        (0,_components_showError__WEBPACK_IMPORTED_MODULE_5__["default"])(lastMessage, 'Some data input is incorrect');
        showErrorByField(validityStateArray, inputsArray);
      } else {
        (0,_components_printEmoji__WEBPACK_IMPORTED_MODULE_4__["default"])(lastMessage);
        console.log(
          `form update ${email} ${country} ${zipCode} ${userPassword} ${confirmPassword}`,
        );
        /* here include the code to save the data input and sent to storage */
        document.getElementById('form').reset();
      }
    }
  });
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQixRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLCtEQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFjLGVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLE1BQU0sMEVBQWE7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQjtBQUNBLFFBQVE7QUFDUixRQUFRLGtFQUFVO0FBQ2xCO0FBQ0EseUJBQXlCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZURpdkVycm9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZUVycm9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvcHJpbnRFbW9qaS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvY29tcG9uZW50cy9yZXF1aXJlZFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvc2hvd0Vycm9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL3ppcENvZGVWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVEaXZFcnJvcihhcmcpIHtcclxuXHJcbiAgICBsZXQgaWQgPSBhcmcuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICBcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWVycm9yYCk7XHJcbiAgICBpZiAoZXJyb3JNZXNzYWdlICE9PSBudWxsKXtcclxuICAgICAgICBsZXQgeCA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICB4LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeCk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlRXJyb3JNZXNzYWdlcygpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcclxuICAgIC8qIHBhcmEgY3JlYXIgdW4gYXJyYXkgZGVzZGUgZWwgTm9kZUxpc3QgKi9cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXNBcnJheSA9IFsuLi5lcnJvck1lc3NhZ2VzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gZXJyb3JNZXNzYWdlc0FycmF5LmVudHJpZXMoKTtcclxuICAgIGVycm9yTWVzc2FnZXNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgIC8qICAgY29uc29sZS5sb2coaW5kZXhbMF0pO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhpbmRleFsxXSk7ICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIHgucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4KTtcclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFzc3dvcmRWYWxpZGF0aW9uKGFyZykge1xyXG4gICAgLyogVEhJUyBQQVJUIENIRUNLIFBBUlQgQlkgUEFSVCAqL1xyXG4gIFxyXG4gICAgbGV0IGxvd2VyQ2FzZVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIGxldCB1cHBlckNhc2VWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgbnVtYmVyc1ZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIGxldCBzcGVjaWFsQ2hhclZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIGxldCBub3RTcGFjZVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIGxldCBsZW5ndGhWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgXHJcbiAgICBsZXQgbG93ZXJDYXNlTGV0dGVycyA9IC9bYS16XS9nO1xyXG4gICAgaWYgKGFyZy52YWx1ZS5tYXRjaChsb3dlckNhc2VMZXR0ZXJzKSkge1xyXG4gICAgICBsb3dlckNhc2VWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvd2VyQ2FzZVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCB1cHBlckNhc2VMZXR0ZXJzID0gL1tBLVpdL2c7XHJcbiAgICBpZiAoYXJnLnZhbHVlLm1hdGNoKHVwcGVyQ2FzZUxldHRlcnMpKSB7XHJcbiAgICAgIHVwcGVyQ2FzZVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXBwZXJDYXNlVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IG51bWJlcnMgPSAvWzAtOV0vZztcclxuICAgIGlmIChhcmcudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgbnVtYmVyc1ZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbnVtYmVyc1ZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCBzcGVjaWFsQ2hhciA9IC9bKkAhIyUmKClefnt9LitdL2c7XHJcbiAgICBpZiAoYXJnLnZhbHVlLm1hdGNoKHNwZWNpYWxDaGFyKSkge1xyXG4gICAgICBzcGVjaWFsQ2hhclZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3BlY2lhbENoYXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXQgc3BhY2VOb3RBbGxvd2VkID0gL15cXFMrJC87XHJcbiAgICBpZiAoYXJnLnZhbHVlLm1hdGNoKHNwYWNlTm90QWxsb3dlZCkpIHtcclxuICAgICAgbm90U3BhY2VWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vdFNwYWNlVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKGFyZy52YWx1ZS5sZW5ndGggPj0gOCkge1xyXG4gICAgICBsZW5ndGhWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxlbmd0aFZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICAgIC8qIEVzdGEgdmFsaWRhY2lvbiBlcyBoZWNoYSBlbiB1biBzb2xvIGJsb3F1ZSBQQVJBIEVTVEUgRUpFUkNJQ0lPIFNFIFVUSUxJWkFSQSBWQUxJREFDSU9OIFBPUiBQQVJURVMqL1xyXG4gIFxyXG4gICAgLyogIGxldCB2YWx1ZVRvVmFsaWRhdGUgPSAvKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWypAISMlJigpXn57fS4rXSkoXlxcUykuezgsfS87XHJcbiAgICAgIGlmKGFyZy52YWx1ZS5tYXRjaCh2YWx1ZVRvVmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWQnKTtcclxuICAgICAgICAgIGxldCB2YWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFyZy52YWx1ZS5tYXRjaCh2YWx1ZVRvVmFsaWRhdGUpLHZhbGlkYXRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIHZhbGlkJyk7XHJcbiAgICAgICAgICBsZXQgdmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlLm1hdGNoKHZhbHVlVG9WYWxpZGF0ZSksdmFsaWRhdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgKi9cclxuICBcclxuICAgIGxldCBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICBsZXQgZmluYWxWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKGxvd2VyQ2FzZVZhbGlkYXRpb24pIHtcclxuICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3dpdGNoICh1cHBlckNhc2VWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc3dpdGNoIChudW1iZXJzVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzcGVjaWFsQ2hhclZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChub3RTcGFjZVZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGxlbmd0aFZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkVmFsdWUgPSBhcmcudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHsgcGFzc3dvcmRWYWx1ZSwgZmluYWxWYWxpZGF0aW9uIH07XHJcbn0gICIsImltcG9ydCBFbW9qaSBmcm9tICcuLi9pbWcvdGh1bWItdXAucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50RW1vamkoYXJnKSB7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxyXG4gICAgY29uc3QgbXlFbW9qaSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlFbW9qaS5zcmMgPSBFbW9qaTtcclxuICAgIG15RW1vamkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3dpZHRoOjI1JTtoZWlnaHQ6MzAlO3BhZGRpbmc6NSUnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGFyZy5wYXJlbnROb2RlO1xyXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChteUVtb2ppKTsgIFxyXG5cclxufSIsImltcG9ydCBzaG93RXJyb3IgZnJvbSAnLi9zaG93RXJyb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tSZXF1aXJlZChhcmcpIHtcclxubGV0IG1lc3NhZ2UgPSAnWW91IG5lZWQgdG8gZW50ZXIgYSB2YWx1ZSBmb3IgdGhpcyBmaWVsZC4nO1xyXG4gIC8vIEZ1bmN0aW9ucyBmb3IgdmFsaWRhdGlvblxyXG4gIGlmIChhcmcudmFsaWRpdHkudmFsdWVNaXNzaW5nPT09dHJ1ZSkge1xyXG4gICAgc2hvd0Vycm9yKGFyZyxtZXNzYWdlKTtcclxuICB9XHJcbnJldHVybiAgYXJnLnZhbGlkaXR5LnZhbHVlTWlzc2luZztcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLGFyZzIpIHtcclxuICAgICAgICAvLyBhcmcxIGlzIHRoZSBpbnB1dCBmaWVsZCAtIGFyZzIgaXMgdGhlIG1lc3NhZ2UgZm9yIHRoZSB0eXBlIG9mIGVycm9yXHJcbiAgICAgICAvLyBjcmVhdGUgYW4gZWxlbWVudCBmb3IgZGlzcGxheSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgXHJcbiAgICAgICBsZXQgaWQgPSBhcmcxLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLGAke2lkfWVycm9yYCk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsJ3BvbGl0ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci50ZXh0Q29udGVudCA9IGFyZzI7XHJcbiAgICBcclxuICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcxLnBhcmVudE5vZGU7XHJcbiAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpOyAgXHJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHppcFZhbGlkYXRpb24oYXJnKSB7XHJcbiAgIFxyXG4gICAgbGV0IG51bWJlcnNWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgbGVuZ3RoVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGZpbmFsVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBudW1iZXJzID0gL1swLTldezV9L2c7XHJcbiAgICBcclxuICAgIGlmKGFyZy52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIG51bWJlcnNWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVtYmVyc1ZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZihhcmcudmFsdWUubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgbGVuZ3RoVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxlbmd0aFZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG51bWJlcnNWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6ICBcclxuICAgICAgICAgICAgc3dpdGNoIChsZW5ndGhWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogIFxyXG4gICAgICAgICAgICAgIGZpbmFsVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgfTtcclxucmV0dXJuIGZpbmFsVmFsaWRhdGlvbjsgICAgXHJcbn0iLCJpbXBvcnQgY2hlY2tSZXF1aXJlZCBmcm9tICcuL2NvbXBvbmVudHMvcmVxdWlyZWRWYWxpZGF0aW9uJztcclxuaW1wb3J0IGRlbGV0ZURpdkVycm9yIGZyb20gJy4vY29tcG9uZW50cy9kZWxldGVEaXZFcnJvcic7XHJcbmltcG9ydCBkZWxldGVFcnJvck1lc3NhZ2VzIGZyb20gJy4vY29tcG9uZW50cy9kZWxldGVFcnJvcic7XHJcbmltcG9ydCBwYXNzd29yZFZhbGlkYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgcHJpbnRFbW9qaSBmcm9tICcuL2NvbXBvbmVudHMvcHJpbnRFbW9qaSc7XHJcbmltcG9ydCBzaG93RXJyb3IgZnJvbSAnLi9jb21wb25lbnRzL3Nob3dFcnJvcic7XHJcbmltcG9ydCB6aXBWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy96aXBDb2RlVmFsaWRhdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRGb3JtKGFyZykge1xyXG4gIGxldCBwYXNzd29yZFJlcXVpcmVtZW50cyA9XHJcbiAgICAnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBudW1iZXIsIG9uZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSBzcGVjaWFsIGNoYXJhY3RlciwgYW5kIGF0IGxlYXN0IDggb3IgbW9yZSBjaGFyYWN0ZXJzJztcclxuICAvKiBjcmVhciBsYSBmb3JtYSAqL1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IGZvcm1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGl2RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsYWJlbEZvckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBkaXZDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWxGb3JDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBjb3VudHJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGRpdlppcENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsYWJlbEZvclppcENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGNvbnN0IHppcENvZGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgcGFzc3dvcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwYXNzd29yZFN1YkRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwYXNzd29yZFN1YkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsYWJlbEZvclBhc3N3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBsYWJlbEZvclBhc3N3b3JkQ29uZmlybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBsYXN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgbGV0IGlucHV0c0FycmF5ID0gW107IC8qIGRlZmluZSB1biBhcnJheSBwYXJhIGluY2x1aXIgdG9kb3MgbG9zIGlucHV0cyAqL1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcclxuICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICcnKTtcclxuXHJcbiAgbGFiZWxGb3JFbWFpbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xyXG4gIGxhYmVsRm9yQ291bnRyeS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb3VudHJ5Jyk7XHJcbiAgbGFiZWxGb3JaaXBDb2RlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ppcC1jb2RlJyk7XHJcbiAgbGFiZWxGb3JQYXNzd29yZC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyLXBhc3N3b3JkJyk7XHJcbiAgbGFiZWxGb3JQYXNzd29yZENvbmZpcm1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb25maXJtLXBhc3N3b3JkJyk7XHJcblxyXG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xyXG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XHJcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XHJcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvbicpO1xyXG4gIGlucHV0c0FycmF5LnB1c2goZW1haWxJbnB1dCk7XHJcblxyXG4gIGNvdW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gIGNvdW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGNvdW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY291bnRyeScpO1xyXG4gIGNvdW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvdW50cnknKTtcclxuICBjb3VudHJ5SW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb24nKTtcclxuICBpbnB1dHNBcnJheS5wdXNoKGNvdW50cnlJbnB1dCk7XHJcblxyXG4gIHppcENvZGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gIHppcENvZGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHppcENvZGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnemlwLWNvZGUnKTtcclxuICB6aXBDb2RlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd6aXAtY29kZScpO1xyXG4gIHppcENvZGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ011c3QgY29udGFpbiBmaXZlIGZvbGxvd2luZyBudW1iZXJzJyk7XHJcbiAgemlwQ29kZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnNTQzMjEnKTtcclxuICBpbnB1dHNBcnJheS5wdXNoKHppcENvZGVJbnB1dCk7XHJcblxyXG4gIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXItcGFzc3dvcmQnKTtcclxuICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1wYXNzd29yZCcpO1xyXG4gIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XHJcbiAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcGFzc3dvcmRSZXF1aXJlbWVudHMpO1xyXG4gIGlucHV0c0FycmF5LnB1c2gocGFzc3dvcmRJbnB1dCk7XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gIHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbmZpcm0tcGFzc3dvcmQnKTtcclxuICBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29uZmlybS1wYXNzd29yZCcpO1xyXG4gIHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XHJcbiAgaW5wdXRzQXJyYXkucHVzaChwYXNzd29yZENvbmZpcm1hdGlvbklucHV0KTtcclxuXHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuXHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xyXG4gIGZvcm1Cb2R5LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Cb2R5Jyk7XHJcbiAgcGFzc3dvcmRTdWJEaXYxLmNsYXNzTGlzdC5hZGQoJ3Bhc3N3b3JkRGl2Jyk7XHJcbiAgcGFzc3dvcmRTdWJEaXYyLmNsYXNzTGlzdC5hZGQoJ3Bhc3N3b3JkRGl2Jyk7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cclxuICBsYWJlbEZvckVtYWlsLmlubmVyVGV4dCA9ICdQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzczonO1xyXG4gIGxhYmVsRm9yQ291bnRyeS5pbm5lclRleHQgPSAnUGxlYXNlIGVudGVyIGEgY291bnRyeSBuYW1lOic7XHJcbiAgbGFiZWxGb3JaaXBDb2RlLmlubmVyVGV4dCA9ICdQbGVhc2UgZW50ZXIgYSB6aXAgY29kZTonO1xyXG4gIGxhYmVsRm9yUGFzc3dvcmQuaW5uZXJUZXh0ID0gJ0VudGVyIGEgcGFzc3dvcmQnO1xyXG4gIGxhYmVsRm9yUGFzc3dvcmRDb25maXJtYXRpb24uaW5uZXJUZXh0ID0gJ0VudGVyIGEgcGFzc3dvcmQgY29uZmlybWF0aW9uJztcclxuXHJcbiAgYXJnLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJvZHkpO1xyXG4gIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGRpdkVtYWlsKTtcclxuICBkaXZFbWFpbC5hcHBlbmRDaGlsZChsYWJlbEZvckVtYWlsKTtcclxuICBkaXZFbWFpbC5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuICBmb3JtQm9keS5hcHBlbmRDaGlsZChkaXZDb3VudHJ5KTtcclxuICBkaXZDb3VudHJ5LmFwcGVuZENoaWxkKGxhYmVsRm9yQ291bnRyeSk7XHJcbiAgZGl2Q291bnRyeS5hcHBlbmRDaGlsZChjb3VudHJ5SW5wdXQpO1xyXG4gIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGRpdlppcENvZGUpO1xyXG4gIGRpdlppcENvZGUuYXBwZW5kQ2hpbGQobGFiZWxGb3JaaXBDb2RlKTtcclxuICBkaXZaaXBDb2RlLmFwcGVuZENoaWxkKHppcENvZGVJbnB1dCk7XHJcbiAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQocGFzc3dvcmREaXYpO1xyXG4gIHBhc3N3b3JkRGl2LmFwcGVuZENoaWxkKHBhc3N3b3JkU3ViRGl2MSk7XHJcbiAgcGFzc3dvcmRTdWJEaXYxLmFwcGVuZENoaWxkKGxhYmVsRm9yUGFzc3dvcmQpO1xyXG4gIHBhc3N3b3JkU3ViRGl2MS5hcHBlbmRDaGlsZChwYXNzd29yZElucHV0KTtcclxuICBwYXNzd29yZERpdi5hcHBlbmRDaGlsZChwYXNzd29yZFN1YkRpdjIpO1xyXG4gIHBhc3N3b3JkU3ViRGl2Mi5hcHBlbmRDaGlsZChsYWJlbEZvclBhc3N3b3JkQ29uZmlybWF0aW9uKTtcclxuICBwYXNzd29yZFN1YkRpdjIuYXBwZW5kQ2hpbGQocGFzc3dvcmRDb25maXJtYXRpb25JbnB1dCk7XHJcbiAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQobGFzdE1lc3NhZ2UpO1xyXG4gIGZvcm1Cb2R5LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8qIEZPUk0gVkFMSURBVElPTlMgbGl2ZSBpbmxpbmUgdmFsaWRhdGlvbiAqL1xyXG4gIGxldCBlbWFpbFZhbGlkaXR5U3RhdGUgPSBmYWxzZTtcclxuICBsZXQgY291bnRyeVZhbGlkaXR5U3RhdGUgPSBmYWxzZTtcclxuICBsZXQgemlwQ29kZVZhbGlkaXR5U3RhdGUgPSBmYWxzZTtcclxuICBsZXQgcGFzc3dvcmRWYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcbiAgbGV0IGNvbmZpcm1WYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcblxyXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGRlbGV0ZURpdkVycm9yKGVtYWlsSW5wdXQpOyAvLyBSZW1vdmUgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcclxuICAgIGxldCBtZXNzYWdlID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XHJcbiAgICBpZiAoZW1haWxJbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICBtZXNzYWdlID0gJyc7XHJcbiAgICAgIGVtYWlsVmFsaWRpdHlTdGF0ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93RXJyb3IoZW1haWxJbnB1dCwgbWVzc2FnZSk7XHJcbiAgICAgIGVtYWlsVmFsaWRpdHlTdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVBbGxJbnB1dHMoKTtcclxuICB9KTtcclxuXHJcbiAgemlwQ29kZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBkZWxldGVEaXZFcnJvcih6aXBDb2RlSW5wdXQpOyAvLyBSZW1vdmUgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcclxuICAgIGxldCBtZXNzYWdlID0gJ1RoaXMgaXMgbm90IGEgdmFsaWQgWklQIENPREUnO1xyXG4gICAgbGV0IHppcFZhbGlkaXR5ID0gemlwVmFsaWRhdGlvbih6aXBDb2RlSW5wdXQpO1xyXG4gICAgaWYgKHppcFZhbGlkaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnJztcclxuICAgICAgemlwQ29kZVZhbGlkaXR5U3RhdGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0Vycm9yKHppcENvZGVJbnB1dCwgbWVzc2FnZSk7XHJcbiAgICAgIHppcENvZGVWYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZUFsbElucHV0cygpO1xyXG4gIH0pO1xyXG5cclxuICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBkZWxldGVEaXZFcnJvcihwYXNzd29yZElucHV0KTsgLy8gUmVtb3ZlIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcbiAgICBsZXQgbWVzc2FnZSA9IHBhc3N3b3JkUmVxdWlyZW1lbnRzO1xyXG4gICAgbGV0IHBhc3N3b3JkVmFsdWUgPSBwYXNzd29yZFZhbGlkYXRpb24ocGFzc3dvcmRJbnB1dCkucGFzc3dvcmRWYWx1ZTtcclxuICAgIGxldCBmaW5hbFZhbGlkYXRpb24gPSBwYXNzd29yZFZhbGlkYXRpb24ocGFzc3dvcmRJbnB1dCkuZmluYWxWYWxpZGF0aW9uO1xyXG4gICAgaWYgKGZpbmFsVmFsaWRhdGlvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICBtZXNzYWdlID0gJyc7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRpdHlTdGF0ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93RXJyb3IocGFzc3dvcmRJbnB1dCwgbWVzc2FnZSk7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRpdHlTdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVBbGxJbnB1dHMoKTtcclxuICB9KTtcclxuXHJcbiAgcGFzc3dvcmRDb25maXJtYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xyXG4gICAgZGVsZXRlRGl2RXJyb3IocGFzc3dvcmRDb25maXJtYXRpb25JbnB1dCk7IC8vIFJlbW92ZSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xyXG4gICAgbGV0IG1lc3NhZ2UgPSAnTXVzdCBtYXRjaCB3aXRoIHRoZSBwYXNzd29yZCc7XHJcbiAgICBsZXQgcGFzc3dvcmRWYWx1ZSA9IHBhc3N3b3JkVmFsaWRhdGlvbihwYXNzd29yZElucHV0KS5wYXNzd29yZFZhbHVlO1xyXG4gICAgbGV0IGNvbmZpcm1WYWx1ZSA9IHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQudmFsdWU7XHJcbiAgICBpZiAocGFzc3dvcmRWYWx1ZSA9PT0gY29uZmlybVZhbHVlKSB7XHJcbiAgICAgIGNvbmZpcm1WYWxpZGl0eVN0YXRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dFcnJvcihwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LCBtZXNzYWdlKTtcclxuICAgICAgY29uZmlybVZhbGlkaXR5U3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhbGlkYXRlQWxsSW5wdXRzKCk7XHJcbiAgICByZXR1cm4gY29uZmlybVZhbGlkaXR5U3RhdGU7XHJcbiAgfSk7XHJcblxyXG4gIGxldCB2YWxpZGl0eVN0YXRlQXJyYXkgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVBbGxJbnB1dHMoKSB7XHJcbiAgICBlbWFpbFZhbGlkaXR5U3RhdGUgPSBlbWFpbElucHV0LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgY291bnRyeVZhbGlkaXR5U3RhdGUgPSBjb3VudHJ5SW5wdXQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB6aXBDb2RlVmFsaWRpdHlTdGF0ZSA9IHppcFZhbGlkYXRpb24oemlwQ29kZUlucHV0KTtcclxuICAgIHBhc3N3b3JkVmFsaWRpdHlTdGF0ZSA9IHBhc3N3b3JkVmFsaWRhdGlvbihwYXNzd29yZElucHV0KS5maW5hbFZhbGlkYXRpb247XHJcbiAgICBjb25maXJtVmFsaWRpdHlTdGF0ZSA9IGNvbmZpcm1WYWxpZGl0eVN0YXRlO1xyXG5cclxuICAgIHZhbGlkaXR5U3RhdGVBcnJheSA9IFtcclxuICAgICAgZW1haWxWYWxpZGl0eVN0YXRlLFxyXG4gICAgICBjb3VudHJ5VmFsaWRpdHlTdGF0ZSxcclxuICAgICAgemlwQ29kZVZhbGlkaXR5U3RhdGUsXHJcbiAgICAgIHBhc3N3b3JkVmFsaWRpdHlTdGF0ZSxcclxuICAgICAgY29uZmlybVZhbGlkaXR5U3RhdGUsXHJcbiAgICBdO1xyXG4gICAgaWYgKCF2YWxpZGl0eVN0YXRlQXJyYXkuaW5jbHVkZXMoZmFsc2UpKSB7XHJcbiAgICAgIGRlbGV0ZURpdkVycm9yKGxhc3RNZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZGl0eVN0YXRlQXJyYXk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93RXJyb3JCeUZpZWxkKGFyZzEsIGFyZzIpIHtcclxuICAgIC8qIGFyZzEgaXMgdGhlIGFycmF5IHdpdGggaW5wdXRzIHZhbGlkYXRpb25zIC0gYXJnMiBpcyB0aGUgYXJyYXkgd2l0aCB0aGUgaW5wdXRzIGZpZWxkcyAqL1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgYXJnMS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50ID09PSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBpbnB1dERpdiA9IGFyZzJbaV07XHJcbiAgICAgICAgc2hvd0Vycm9yKGlucHV0RGl2LCAnRml4IHRoaXMgZmllbGQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgICBpKys7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vRk9STSBTVUJNSVNTSU9OIEFORCBGSU5BTCBWQUxJREFUSU9OXHJcbiAgbGV0IHZhbGlkYXRpb25BcnJheSA9IFtdO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGRlbGV0ZUVycm9yTWVzc2FnZXMpO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGRlbGV0ZURpdkVycm9yKGxhc3RNZXNzYWdlKTsgLy8gUmVtb3ZlIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcblxyXG4gICAgbGV0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XHJcblxyXG4gICAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpLnZhbHVlO1xyXG5cclxuICAgIGxldCB6aXBDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcC1jb2RlJykudmFsdWU7XHJcblxyXG4gICAgbGV0IHVzZXJQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykudmFsdWU7XHJcblxyXG4gICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLXBhc3N3b3JkJykudmFsdWU7XHJcblxyXG4gICAgdmFsaWRhdGlvbkFycmF5ID0gW107IC8qIGNsZWFuIHRoZSBwcmV2aW91cyB2YWxpZGF0aW9uICovXHJcbiAgICBpbnB1dHNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNoZWNrUmVxdWlyZWQoZWxlbWVudCk7XHJcbiAgICAgIHZhbGlkYXRpb25BcnJheS5wdXNoKGVsZW1lbnQudmFsaWRpdHkudmFsdWVNaXNzaW5nKTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codmFsaWRhdGlvbkFycmF5KTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGlvbkFycmF5LmluY2x1ZGVzKHRydWUpKSB7XHJcbiAgICAgIC8qIGhlcmUgY2hlY2sgdGhlIHZhbGlkaXR5IG9mIHJlcXVpcmVkICovXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWxpZGF0ZUFsbElucHV0cygpO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWxpZGl0eVN0YXRlQXJyYXkpO1xyXG4gICAgICBpZiAodmFsaWRpdHlTdGF0ZUFycmF5LmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICAgIC8qIGhlcmUgY2hlY2sgZWFjaCBpbnB1dCBzcGVjaWZpYyB2YWxpZGl0eSAqL1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2hvd0Vycm9yKGxhc3RNZXNzYWdlLCAnU29tZSBkYXRhIGlucHV0IGlzIGluY29ycmVjdCcpO1xyXG4gICAgICAgIHNob3dFcnJvckJ5RmllbGQodmFsaWRpdHlTdGF0ZUFycmF5LCBpbnB1dHNBcnJheSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJpbnRFbW9qaShsYXN0TWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgZm9ybSB1cGRhdGUgJHtlbWFpbH0gJHtjb3VudHJ5fSAke3ppcENvZGV9ICR7dXNlclBhc3N3b3JkfSAke2NvbmZpcm1QYXNzd29yZH1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLyogaGVyZSBpbmNsdWRlIHRoZSBjb2RlIHRvIHNhdmUgdGhlIGRhdGEgaW5wdXQgYW5kIHNlbnQgdG8gc3RvcmFnZSAqL1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9