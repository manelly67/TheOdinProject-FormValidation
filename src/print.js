import checkRequired from './components/requiredValidation';
import deleteDivError from './components/deleteDivError';
import deleteErrorMessages from './components/deleteError';
import passwordValidation from './components/password-validation';
import printEmoji from './components/printEmoji';
import showError from './components/showError';
import zipValidation from './components/zipCodeValidation';


export default function printForm(arg) {
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
    deleteDivError(emailInput); // Remove previous error messages
    let message = 'You need to enter a valid email address';
    if (emailInput.validity.valid) {
      message = '';
      emailValidityState = true;
    } else {
      showError(emailInput, message);
      emailValidityState = false;
    }
    validateAllInputs();
  });

  zipCodeInput.addEventListener('input', (event) => {
    deleteDivError(zipCodeInput); // Remove previous error messages
    let message = 'This is not a valid ZIP CODE';
    let zipValidity = zipValidation(zipCodeInput);
    if (zipValidity === true) {
      message = '';
      zipCodeValidityState = true;
    } else {
      showError(zipCodeInput, message);
      zipCodeValidityState = false;
    }
    validateAllInputs();
  });

  passwordInput.addEventListener('input', (event) => {
    deleteDivError(passwordInput); // Remove previous error messages
    let message = passwordRequirements;
    let passwordValue = passwordValidation(passwordInput).passwordValue;
    let finalValidation = passwordValidation(passwordInput).finalValidation;
    if (finalValidation === true) {
      message = '';
      passwordValidityState = true;
    } else {
      showError(passwordInput, message);
      passwordValidityState = false;
    }
    validateAllInputs();
  });

  passwordConfirmationInput.addEventListener('input', (event) => {
    deleteDivError(passwordConfirmationInput); // Remove previous error messages
    let message = 'Must match with the password';
    let passwordValue = passwordValidation(passwordInput).passwordValue;
    let confirmValue = passwordConfirmationInput.value;
    if (passwordValue === confirmValue) {
      confirmValidityState = true;
    } else {
      showError(passwordConfirmationInput, message);
      confirmValidityState = false;
    }
    validateAllInputs();
    return confirmValidityState;
  });

  let validityStateArray = [];

  function validateAllInputs() {
    emailValidityState = emailInput.validity.valid;
    countryValidityState = countryInput.validity.valid;
    zipCodeValidityState = zipValidation(zipCodeInput);
    passwordValidityState = passwordValidation(passwordInput).finalValidation;
    confirmValidityState = confirmValidityState;

    validityStateArray = [
      emailValidityState,
      countryValidityState,
      zipCodeValidityState,
      passwordValidityState,
      confirmValidityState,
    ];
    if (!validityStateArray.includes(false)) {
      deleteDivError(lastMessage);
    }
    return validityStateArray;
  }

  function showErrorByField(arg1, arg2) {
    /* arg1 is the array with inputs validations - arg2 is the array with the inputs fields */
    let i = 0;
    arg1.forEach((element) => {
      if (element === false) {
        let inputDiv = arg2[i];
        showError(inputDiv, 'Fix this field');
      } else {
      }
      i++;
    });
  }

  //FORM SUBMISSION AND FINAL VALIDATION
  let validationArray = [];

  form.addEventListener('submit', deleteErrorMessages);
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    deleteDivError(lastMessage); // Remove previous error messages

    let email = document.getElementById('email').value;

    let country = document.getElementById('country').value;

    let zipCode = document.getElementById('zip-code').value;

    let userPassword = document.getElementById('user-password').value;

    let confirmPassword = document.getElementById('confirm-password').value;

    validationArray = []; /* clean the previous validation */
    inputsArray.forEach((element) => {
      checkRequired(element);
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
        showError(lastMessage, 'Some data input is incorrect');
        showErrorByField(validityStateArray, inputsArray);
      } else {
        printEmoji(lastMessage);
        console.log(
          `form update ${email} ${country} ${zipCode} ${userPassword} ${confirmPassword}`,
        );
        /* here include the code to save the data input and sent to storage */
        document.getElementById('form').reset();
      }
    }
  });
}