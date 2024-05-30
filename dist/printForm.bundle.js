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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRGb3JtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLFdBQVcsR0FBRztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUMzR3dDO0FBQ3hDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOENBQUs7QUFDdkIsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWm9DO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFTO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDNEQ7QUFDSDtBQUNFO0FBQ087QUFDakI7QUFDRjtBQUNZO0FBQzNEO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBYyxjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0saUVBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksc0VBQWMsZ0JBQWdCO0FBQ2xDO0FBQ0Esc0JBQXNCLHlFQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNLGlFQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHNFQUFjLGlCQUFpQjtBQUNuQztBQUNBLHdCQUF3QiwyRUFBa0I7QUFDMUMsMEJBQTBCLDJFQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSxpRUFBUztBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxzRUFBYyw2QkFBNkI7QUFDL0M7QUFDQSx3QkFBd0IsMkVBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNLGlFQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlFQUFhO0FBQ3hDLDRCQUE0QiwyRUFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNFQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQixRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLCtEQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFjLGVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLE1BQU0sMEVBQWE7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQjtBQUNBLFFBQVE7QUFDUixRQUFRLGtFQUFVO0FBQ2xCO0FBQ0EseUJBQXlCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvY29tcG9uZW50cy9kZWxldGVEaXZFcnJvci5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvY29tcG9uZW50cy9kZWxldGVFcnJvci5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvY29tcG9uZW50cy9wYXNzd29yZC12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL3ByaW50RW1vamkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvcmVxdWlyZWRWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9jb21wb25lbnRzL3Nob3dFcnJvci5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvY29tcG9uZW50cy96aXBDb2RlVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlRGl2RXJyb3IoYXJnKSB7XHJcblxyXG4gICAgbGV0IGlkID0gYXJnLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1lcnJvcmApO1xyXG4gICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gbnVsbCl7XHJcbiAgICAgICAgbGV0IHggPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgeC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHgpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUVycm9yTWVzc2FnZXMoKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJyk7XHJcbiAgICAvKiBwYXJhIGNyZWFyIHVuIGFycmF5IGRlc2RlIGVsIE5vZGVMaXN0ICovXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzQXJyYXkgPSBbLi4uZXJyb3JNZXNzYWdlc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGVycm9yTWVzc2FnZXNBcnJheS5lbnRyaWVzKCk7XHJcbiAgICBlcnJvck1lc3NhZ2VzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAvKiAgIGNvbnNvbGUubG9nKGluZGV4WzBdKTtcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXhbMV0pOyAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICB4LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeCk7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhc3N3b3JkVmFsaWRhdGlvbihhcmcpIHtcclxuICAgIC8qIFRISVMgUEFSVCBDSEVDSyBQQVJUIEJZIFBBUlQgKi9cclxuICBcclxuICAgIGxldCBsb3dlckNhc2VWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgdXBwZXJDYXNlVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IG51bWJlcnNWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgc3BlY2lhbENoYXJWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgbm90U3BhY2VWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgbGVuZ3RoVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gIFxyXG4gICAgbGV0IGxvd2VyQ2FzZUxldHRlcnMgPSAvW2Etel0vZztcclxuICAgIGlmIChhcmcudmFsdWUubWF0Y2gobG93ZXJDYXNlTGV0dGVycykpIHtcclxuICAgICAgbG93ZXJDYXNlVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb3dlckNhc2VWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXQgdXBwZXJDYXNlTGV0dGVycyA9IC9bQS1aXS9nO1xyXG4gICAgaWYgKGFyZy52YWx1ZS5tYXRjaCh1cHBlckNhc2VMZXR0ZXJzKSkge1xyXG4gICAgICB1cHBlckNhc2VWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwcGVyQ2FzZVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCBudW1iZXJzID0gL1swLTldL2c7XHJcbiAgICBpZiAoYXJnLnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgIG51bWJlcnNWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG51bWJlcnNWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXQgc3BlY2lhbENoYXIgPSAvWypAISMlJigpXn57fS4rXS9nO1xyXG4gICAgaWYgKGFyZy52YWx1ZS5tYXRjaChzcGVjaWFsQ2hhcikpIHtcclxuICAgICAgc3BlY2lhbENoYXJWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNwZWNpYWxDaGFyVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IHNwYWNlTm90QWxsb3dlZCA9IC9eXFxTKyQvO1xyXG4gICAgaWYgKGFyZy52YWx1ZS5tYXRjaChzcGFjZU5vdEFsbG93ZWQpKSB7XHJcbiAgICAgIG5vdFNwYWNlVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub3RTcGFjZVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICAgIGlmIChhcmcudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgICAgbGVuZ3RoVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZW5ndGhWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKiBFc3RhIHZhbGlkYWNpb24gZXMgaGVjaGEgZW4gdW4gc29sbyBibG9xdWUgUEFSQSBFU1RFIEVKRVJDSUNJTyBTRSBVVElMSVpBUkEgVkFMSURBQ0lPTiBQT1IgUEFSVEVTKi9cclxuICBcclxuICAgIC8qICBsZXQgdmFsdWVUb1ZhbGlkYXRlID0gLyg/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlsqQCEjJSYoKV5+e30uK10pKF5cXFMpLns4LH0vO1xyXG4gICAgICBpZihhcmcudmFsdWUubWF0Y2godmFsdWVUb1ZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJyk7XHJcbiAgICAgICAgICBsZXQgdmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhcmcudmFsdWUubWF0Y2godmFsdWVUb1ZhbGlkYXRlKSx2YWxpZGF0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdubyB2YWxpZCcpO1xyXG4gICAgICAgICAgbGV0IHZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFyZy52YWx1ZS5tYXRjaCh2YWx1ZVRvVmFsaWRhdGUpLHZhbGlkYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgICovXHJcbiAgXHJcbiAgICBsZXQgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgbGV0IGZpbmFsVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgc3dpdGNoIChsb3dlckNhc2VWYWxpZGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN3aXRjaCAodXBwZXJDYXNlVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHN3aXRjaCAobnVtYmVyc1ZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3BlY2lhbENoYXJWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobm90U3BhY2VWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChsZW5ndGhWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFZhbHVlID0gYXJnLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWxpZGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7IHBhc3N3b3JkVmFsdWUsIGZpbmFsVmFsaWRhdGlvbiB9O1xyXG59ICAiLCJpbXBvcnQgRW1vamkgZnJvbSAnLi4vaW1nL3RodW1iLXVwLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludEVtb2ppKGFyZykge1xyXG5cclxuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cclxuICAgIGNvbnN0IG15RW1vamkgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG15RW1vamkuc3JjID0gRW1vamk7XHJcbiAgICBteUVtb2ppLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDoyNSU7aGVpZ2h0OjMwJTtwYWRkaW5nOjUlJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcucGFyZW50Tm9kZTtcclxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobXlFbW9qaSk7ICBcclxuXHJcbn0iLCJpbXBvcnQgc2hvd0Vycm9yIGZyb20gJy4vc2hvd0Vycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrUmVxdWlyZWQoYXJnKSB7XHJcbmxldCBtZXNzYWdlID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgdmFsdWUgZm9yIHRoaXMgZmllbGQuJztcclxuICAvLyBGdW5jdGlvbnMgZm9yIHZhbGlkYXRpb25cclxuICBpZiAoYXJnLnZhbGlkaXR5LnZhbHVlTWlzc2luZz09PXRydWUpIHtcclxuICAgIHNob3dFcnJvcihhcmcsbWVzc2FnZSk7XHJcbiAgfVxyXG5yZXR1cm4gIGFyZy52YWxpZGl0eS52YWx1ZU1pc3Npbmc7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93RXJyb3IoYXJnMSxhcmcyKSB7XHJcbiAgICAgICAgLy8gYXJnMSBpcyB0aGUgaW5wdXQgZmllbGQgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICAgLy8gY3JlYXRlIGFuIGVsZW1lbnQgZm9yIGRpc3BsYXkgdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgIFxyXG4gICAgICAgbGV0IGlkID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IGlucHV0RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpZH1lcnJvcmApO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCdwb2xpdGUnKTtcclxuICAgICAgIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPSBhcmcyO1xyXG4gICAgXHJcbiAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gYXJnMS5wYXJlbnROb2RlO1xyXG4gICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVycm9yKTsgIFxyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB6aXBWYWxpZGF0aW9uKGFyZykge1xyXG4gICBcclxuICAgIGxldCBudW1iZXJzVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGxlbmd0aFZhbGlkYXRpb24gPSBmYWxzZTtcclxuICAgIGxldCBmaW5hbFZhbGlkYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgbnVtYmVycyA9IC9bMC05XXs1fS9nO1xyXG4gICAgXHJcbiAgICBpZihhcmcudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBudW1iZXJzVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bWJlcnNWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYXJnLnZhbHVlLmxlbmd0aCA9PT0gNSkge1xyXG4gICAgICAgIGxlbmd0aFZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZW5ndGhWYWxpZGF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChudW1iZXJzVmFsaWRhdGlvbikge1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAgXHJcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICBcclxuICAgICAgICAgICAgICBmaW5hbFZhbGlkYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgIH07XHJcbnJldHVybiBmaW5hbFZhbGlkYXRpb247ICAgIFxyXG59IiwiaW1wb3J0IGNoZWNrUmVxdWlyZWQgZnJvbSAnLi9jb21wb25lbnRzL3JlcXVpcmVkVmFsaWRhdGlvbic7XHJcbmltcG9ydCBkZWxldGVEaXZFcnJvciBmcm9tICcuL2NvbXBvbmVudHMvZGVsZXRlRGl2RXJyb3InO1xyXG5pbXBvcnQgZGVsZXRlRXJyb3JNZXNzYWdlcyBmcm9tICcuL2NvbXBvbmVudHMvZGVsZXRlRXJyb3InO1xyXG5pbXBvcnQgcGFzc3dvcmRWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wYXNzd29yZC12YWxpZGF0aW9uJztcclxuaW1wb3J0IHByaW50RW1vamkgZnJvbSAnLi9jb21wb25lbnRzL3ByaW50RW1vamknO1xyXG5pbXBvcnQgc2hvd0Vycm9yIGZyb20gJy4vY29tcG9uZW50cy9zaG93RXJyb3InO1xyXG5pbXBvcnQgemlwVmFsaWRhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvemlwQ29kZVZhbGlkYXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50Rm9ybShhcmcpIHtcclxuICBsZXQgcGFzc3dvcmRSZXF1aXJlbWVudHMgPVxyXG4gICAgJ011c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbnVtYmVyLCBvbmUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIsIGFuZCBhdCBsZWFzdCA4IG9yIG1vcmUgY2hhcmFjdGVycyc7XHJcbiAgLyogY3JlYXIgbGEgZm9ybWEgKi9cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCBmb3JtQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRpdkVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWxGb3JFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgZGl2Q291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxhYmVsRm9yQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29uc3QgY291bnRyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBkaXZaaXBDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWxGb3JaaXBDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCB6aXBDb2RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHBhc3N3b3JkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcGFzc3dvcmRTdWJEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcGFzc3dvcmRTdWJEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWxGb3JQYXNzd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgbGFiZWxGb3JQYXNzd29yZENvbmZpcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29uc3QgcGFzc3dvcmRDb25maXJtYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgbGFzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gIGxldCBpbnB1dHNBcnJheSA9IFtdOyAvKiBkZWZpbmUgdW4gYXJyYXkgcGFyYSBpbmNsdWlyIHRvZG9zIGxvcyBpbnB1dHMgKi9cclxuICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAnJyk7XHJcblxyXG4gIGxhYmVsRm9yRW1haWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcclxuICBsYWJlbEZvckNvdW50cnkuc2V0QXR0cmlidXRlKCdmb3InLCAnY291bnRyeScpO1xyXG4gIGxhYmVsRm9yWmlwQ29kZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd6aXAtY29kZScpO1xyXG4gIGxhYmVsRm9yUGFzc3dvcmQuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlci1wYXNzd29yZCcpO1xyXG4gIGxhYmVsRm9yUGFzc3dvcmRDb25maXJtYXRpb24uc2V0QXR0cmlidXRlKCdmb3InLCAnY29uZmlybS1wYXNzd29yZCcpO1xyXG5cclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbWFpbCcpO1xyXG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xyXG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb24nKTtcclxuICBpbnB1dHNBcnJheS5wdXNoKGVtYWlsSW5wdXQpO1xyXG5cclxuICBjb3VudHJ5SW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICBjb3VudHJ5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBjb3VudHJ5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvdW50cnknKTtcclxuICBjb3VudHJ5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjb3VudHJ5Jyk7XHJcbiAgY291bnRyeUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29uJyk7XHJcbiAgaW5wdXRzQXJyYXkucHVzaChjb3VudHJ5SW5wdXQpO1xyXG5cclxuICB6aXBDb2RlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICB6aXBDb2RlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB6aXBDb2RlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ppcC1jb2RlJyk7XHJcbiAgemlwQ29kZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnemlwLWNvZGUnKTtcclxuICB6aXBDb2RlSW5wdXQuc2V0QXR0cmlidXRlKCd0aXRsZScsICdNdXN0IGNvbnRhaW4gZml2ZSBmb2xsb3dpbmcgbnVtYmVycycpO1xyXG4gIHppcENvZGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJzU0MzIxJyk7XHJcbiAgaW5wdXRzQXJyYXkucHVzaCh6aXBDb2RlSW5wdXQpO1xyXG5cclxuICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcclxuICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyLXBhc3N3b3JkJyk7XHJcbiAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItcGFzc3dvcmQnKTtcclxuICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHBhc3N3b3JkUmVxdWlyZW1lbnRzKTtcclxuICBpbnB1dHNBcnJheS5wdXNoKHBhc3N3b3JkSW5wdXQpO1xyXG5cclxuICBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgcGFzc3dvcmRDb25maXJtYXRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcclxuICBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb25maXJtLXBhc3N3b3JkJyk7XHJcbiAgcGFzc3dvcmRDb25maXJtYXRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmZpcm0tcGFzc3dvcmQnKTtcclxuICBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gIGlucHV0c0FycmF5LnB1c2gocGFzc3dvcmRDb25maXJtYXRpb25JbnB1dCk7XHJcblxyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcblxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcclxuICBmb3JtQm9keS5jbGFzc0xpc3QuYWRkKCdmb3JtQm9keScpO1xyXG4gIHBhc3N3b3JkU3ViRGl2MS5jbGFzc0xpc3QuYWRkKCdwYXNzd29yZERpdicpO1xyXG4gIHBhc3N3b3JkU3ViRGl2Mi5jbGFzc0xpc3QuYWRkKCdwYXNzd29yZERpdicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHJcbiAgbGFiZWxGb3JFbWFpbC5pbm5lclRleHQgPSAnUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3M6JztcclxuICBsYWJlbEZvckNvdW50cnkuaW5uZXJUZXh0ID0gJ1BsZWFzZSBlbnRlciBhIGNvdW50cnkgbmFtZTonO1xyXG4gIGxhYmVsRm9yWmlwQ29kZS5pbm5lclRleHQgPSAnUGxlYXNlIGVudGVyIGEgemlwIGNvZGU6JztcclxuICBsYWJlbEZvclBhc3N3b3JkLmlubmVyVGV4dCA9ICdFbnRlciBhIHBhc3N3b3JkJztcclxuICBsYWJlbEZvclBhc3N3b3JkQ29uZmlybWF0aW9uLmlubmVyVGV4dCA9ICdFbnRlciBhIHBhc3N3b3JkIGNvbmZpcm1hdGlvbic7XHJcblxyXG4gIGFyZy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Cb2R5KTtcclxuICBmb3JtQm9keS5hcHBlbmRDaGlsZChkaXZFbWFpbCk7XHJcbiAgZGl2RW1haWwuYXBwZW5kQ2hpbGQobGFiZWxGb3JFbWFpbCk7XHJcbiAgZGl2RW1haWwuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcbiAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoZGl2Q291bnRyeSk7XHJcbiAgZGl2Q291bnRyeS5hcHBlbmRDaGlsZChsYWJlbEZvckNvdW50cnkpO1xyXG4gIGRpdkNvdW50cnkuYXBwZW5kQ2hpbGQoY291bnRyeUlucHV0KTtcclxuICBmb3JtQm9keS5hcHBlbmRDaGlsZChkaXZaaXBDb2RlKTtcclxuICBkaXZaaXBDb2RlLmFwcGVuZENoaWxkKGxhYmVsRm9yWmlwQ29kZSk7XHJcbiAgZGl2WmlwQ29kZS5hcHBlbmRDaGlsZCh6aXBDb2RlSW5wdXQpO1xyXG4gIGZvcm1Cb2R5LmFwcGVuZENoaWxkKHBhc3N3b3JkRGl2KTtcclxuICBwYXNzd29yZERpdi5hcHBlbmRDaGlsZChwYXNzd29yZFN1YkRpdjEpO1xyXG4gIHBhc3N3b3JkU3ViRGl2MS5hcHBlbmRDaGlsZChsYWJlbEZvclBhc3N3b3JkKTtcclxuICBwYXNzd29yZFN1YkRpdjEuYXBwZW5kQ2hpbGQocGFzc3dvcmRJbnB1dCk7XHJcbiAgcGFzc3dvcmREaXYuYXBwZW5kQ2hpbGQocGFzc3dvcmRTdWJEaXYyKTtcclxuICBwYXNzd29yZFN1YkRpdjIuYXBwZW5kQ2hpbGQobGFiZWxGb3JQYXNzd29yZENvbmZpcm1hdGlvbik7XHJcbiAgcGFzc3dvcmRTdWJEaXYyLmFwcGVuZENoaWxkKHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQpO1xyXG4gIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGxhc3RNZXNzYWdlKTtcclxuICBmb3JtQm9keS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAvKiBGT1JNIFZBTElEQVRJT05TIGxpdmUgaW5saW5lIHZhbGlkYXRpb24gKi9cclxuICBsZXQgZW1haWxWYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcbiAgbGV0IGNvdW50cnlWYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcbiAgbGV0IHppcENvZGVWYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcbiAgbGV0IHBhc3N3b3JkVmFsaWRpdHlTdGF0ZSA9IGZhbHNlO1xyXG4gIGxldCBjb25maXJtVmFsaWRpdHlTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBkZWxldGVEaXZFcnJvcihlbWFpbElucHV0KTsgLy8gUmVtb3ZlIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcbiAgICBsZXQgbWVzc2FnZSA9ICdZb3UgbmVlZCB0byBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgaWYgKGVtYWlsSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgbWVzc2FnZSA9ICcnO1xyXG4gICAgICBlbWFpbFZhbGlkaXR5U3RhdGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0Vycm9yKGVtYWlsSW5wdXQsIG1lc3NhZ2UpO1xyXG4gICAgICBlbWFpbFZhbGlkaXR5U3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhbGlkYXRlQWxsSW5wdXRzKCk7XHJcbiAgfSk7XHJcblxyXG4gIHppcENvZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xyXG4gICAgZGVsZXRlRGl2RXJyb3IoemlwQ29kZUlucHV0KTsgLy8gUmVtb3ZlIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcbiAgICBsZXQgbWVzc2FnZSA9ICdUaGlzIGlzIG5vdCBhIHZhbGlkIFpJUCBDT0RFJztcclxuICAgIGxldCB6aXBWYWxpZGl0eSA9IHppcFZhbGlkYXRpb24oemlwQ29kZUlucHV0KTtcclxuICAgIGlmICh6aXBWYWxpZGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICBtZXNzYWdlID0gJyc7XHJcbiAgICAgIHppcENvZGVWYWxpZGl0eVN0YXRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dFcnJvcih6aXBDb2RlSW5wdXQsIG1lc3NhZ2UpO1xyXG4gICAgICB6aXBDb2RlVmFsaWRpdHlTdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVBbGxJbnB1dHMoKTtcclxuICB9KTtcclxuXHJcbiAgcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xyXG4gICAgZGVsZXRlRGl2RXJyb3IocGFzc3dvcmRJbnB1dCk7IC8vIFJlbW92ZSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBwYXNzd29yZFJlcXVpcmVtZW50cztcclxuICAgIGxldCBwYXNzd29yZFZhbHVlID0gcGFzc3dvcmRWYWxpZGF0aW9uKHBhc3N3b3JkSW5wdXQpLnBhc3N3b3JkVmFsdWU7XHJcbiAgICBsZXQgZmluYWxWYWxpZGF0aW9uID0gcGFzc3dvcmRWYWxpZGF0aW9uKHBhc3N3b3JkSW5wdXQpLmZpbmFsVmFsaWRhdGlvbjtcclxuICAgIGlmIChmaW5hbFZhbGlkYXRpb24gPT09IHRydWUpIHtcclxuICAgICAgbWVzc2FnZSA9ICcnO1xyXG4gICAgICBwYXNzd29yZFZhbGlkaXR5U3RhdGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0Vycm9yKHBhc3N3b3JkSW5wdXQsIG1lc3NhZ2UpO1xyXG4gICAgICBwYXNzd29yZFZhbGlkaXR5U3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhbGlkYXRlQWxsSW5wdXRzKCk7XHJcbiAgfSk7XHJcblxyXG4gIHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGRlbGV0ZURpdkVycm9yKHBhc3N3b3JkQ29uZmlybWF0aW9uSW5wdXQpOyAvLyBSZW1vdmUgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcclxuICAgIGxldCBtZXNzYWdlID0gJ011c3QgbWF0Y2ggd2l0aCB0aGUgcGFzc3dvcmQnO1xyXG4gICAgbGV0IHBhc3N3b3JkVmFsdWUgPSBwYXNzd29yZFZhbGlkYXRpb24ocGFzc3dvcmRJbnB1dCkucGFzc3dvcmRWYWx1ZTtcclxuICAgIGxldCBjb25maXJtVmFsdWUgPSBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnZhbHVlO1xyXG4gICAgaWYgKHBhc3N3b3JkVmFsdWUgPT09IGNvbmZpcm1WYWx1ZSkge1xyXG4gICAgICBjb25maXJtVmFsaWRpdHlTdGF0ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93RXJyb3IocGFzc3dvcmRDb25maXJtYXRpb25JbnB1dCwgbWVzc2FnZSk7XHJcbiAgICAgIGNvbmZpcm1WYWxpZGl0eVN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZUFsbElucHV0cygpO1xyXG4gICAgcmV0dXJuIGNvbmZpcm1WYWxpZGl0eVN0YXRlO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgdmFsaWRpdHlTdGF0ZUFycmF5ID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQWxsSW5wdXRzKCkge1xyXG4gICAgZW1haWxWYWxpZGl0eVN0YXRlID0gZW1haWxJbnB1dC52YWxpZGl0eS52YWxpZDtcclxuICAgIGNvdW50cnlWYWxpZGl0eVN0YXRlID0gY291bnRyeUlucHV0LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgemlwQ29kZVZhbGlkaXR5U3RhdGUgPSB6aXBWYWxpZGF0aW9uKHppcENvZGVJbnB1dCk7XHJcbiAgICBwYXNzd29yZFZhbGlkaXR5U3RhdGUgPSBwYXNzd29yZFZhbGlkYXRpb24ocGFzc3dvcmRJbnB1dCkuZmluYWxWYWxpZGF0aW9uO1xyXG4gICAgY29uZmlybVZhbGlkaXR5U3RhdGUgPSBjb25maXJtVmFsaWRpdHlTdGF0ZTtcclxuXHJcbiAgICB2YWxpZGl0eVN0YXRlQXJyYXkgPSBbXHJcbiAgICAgIGVtYWlsVmFsaWRpdHlTdGF0ZSxcclxuICAgICAgY291bnRyeVZhbGlkaXR5U3RhdGUsXHJcbiAgICAgIHppcENvZGVWYWxpZGl0eVN0YXRlLFxyXG4gICAgICBwYXNzd29yZFZhbGlkaXR5U3RhdGUsXHJcbiAgICAgIGNvbmZpcm1WYWxpZGl0eVN0YXRlLFxyXG4gICAgXTtcclxuICAgIGlmICghdmFsaWRpdHlTdGF0ZUFycmF5LmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICBkZWxldGVEaXZFcnJvcihsYXN0TWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWRpdHlTdGF0ZUFycmF5O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0Vycm9yQnlGaWVsZChhcmcxLCBhcmcyKSB7XHJcbiAgICAvKiBhcmcxIGlzIHRoZSBhcnJheSB3aXRoIGlucHV0cyB2YWxpZGF0aW9ucyAtIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggdGhlIGlucHV0cyBmaWVsZHMgKi9cclxuICAgIGxldCBpID0gMDtcclxuICAgIGFyZzEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgaW5wdXREaXYgPSBhcmcyW2ldO1xyXG4gICAgICAgIHNob3dFcnJvcihpbnB1dERpdiwgJ0ZpeCB0aGlzIGZpZWxkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIH1cclxuICAgICAgaSsrO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0ZPUk0gU1VCTUlTU0lPTiBBTkQgRklOQUwgVkFMSURBVElPTlxyXG4gIGxldCB2YWxpZGF0aW9uQXJyYXkgPSBbXTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBkZWxldGVFcnJvck1lc3NhZ2VzKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBkZWxldGVEaXZFcnJvcihsYXN0TWVzc2FnZSk7IC8vIFJlbW92ZSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xyXG5cclxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xyXG5cclxuICAgIGxldCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKS52YWx1ZTtcclxuXHJcbiAgICBsZXQgemlwQ29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6aXAtY29kZScpLnZhbHVlO1xyXG5cclxuICAgIGxldCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpLnZhbHVlO1xyXG5cclxuICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1wYXNzd29yZCcpLnZhbHVlO1xyXG5cclxuICAgIHZhbGlkYXRpb25BcnJheSA9IFtdOyAvKiBjbGVhbiB0aGUgcHJldmlvdXMgdmFsaWRhdGlvbiAqL1xyXG4gICAgaW5wdXRzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjaGVja1JlcXVpcmVkKGVsZW1lbnQpO1xyXG4gICAgICB2YWxpZGF0aW9uQXJyYXkucHVzaChlbGVtZW50LnZhbGlkaXR5LnZhbHVlTWlzc2luZyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb25BcnJheSk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRpb25BcnJheS5pbmNsdWRlcyh0cnVlKSkge1xyXG4gICAgICAvKiBoZXJlIGNoZWNrIHRoZSB2YWxpZGl0eSBvZiByZXF1aXJlZCAqL1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsaWRhdGVBbGxJbnB1dHMoKTtcclxuICAgICAgY29uc29sZS5sb2codmFsaWRpdHlTdGF0ZUFycmF5KTtcclxuICAgICAgaWYgKHZhbGlkaXR5U3RhdGVBcnJheS5pbmNsdWRlcyhmYWxzZSkpIHtcclxuICAgICAgICAvKiBoZXJlIGNoZWNrIGVhY2ggaW5wdXQgc3BlY2lmaWMgdmFsaWRpdHkgKi9cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNob3dFcnJvcihsYXN0TWVzc2FnZSwgJ1NvbWUgZGF0YSBpbnB1dCBpcyBpbmNvcnJlY3QnKTtcclxuICAgICAgICBzaG93RXJyb3JCeUZpZWxkKHZhbGlkaXR5U3RhdGVBcnJheSwgaW5wdXRzQXJyYXkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByaW50RW1vamkobGFzdE1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgYGZvcm0gdXBkYXRlICR7ZW1haWx9ICR7Y291bnRyeX0gJHt6aXBDb2RlfSAke3VzZXJQYXNzd29yZH0gJHtjb25maXJtUGFzc3dvcmR9YCxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8qIGhlcmUgaW5jbHVkZSB0aGUgY29kZSB0byBzYXZlIHRoZSBkYXRhIGlucHV0IGFuZCBzZW50IHRvIHN0b3JhZ2UgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9