import showError from './showError';

export default function checkRequired(arg) {
let message = 'You need to enter a value for this field.';
  // Functions for validation
  if (arg.validity.valueMissing===true) {
    showError(arg,message);
  }
return  arg.validity.valueMissing;
}