export default function zipValidation(arg) {
   
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