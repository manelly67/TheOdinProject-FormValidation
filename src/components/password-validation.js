export default function passwordValidation(arg) {
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