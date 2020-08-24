
import {ERROR_MESAGES} from '../constants/constans.js';
export default class SearchInput {
  constructor(form) {
    this.form = form;
    this.button = this.form.querySelector('.search__button');
    this.span = this.form.querySelector('.error')
    this.isFieldValid = this.isFieldValid.bind(this);
  }

  _checkInputValidity(input) {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity(ERROR_MESAGES.errorEmpty);
      return false;
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(ERROR_MESAGES.errorLength);
      return false;
    }
   
    return input.checkValidity();
  }

  isFieldValid(event) {
    event.preventDefault();
    const input = event.target;
    const currentForm = event.currentTarget;

    const errorElem = input.parentNode.querySelector(`#${input.id}-error`);
    const valid = this._checkInputValidity(input);
    errorElem.textContent = input.validationMessage;
   
    const isFormValid = currentForm.checkValidity();
    this.setSubmitButtonState(isFormValid);
  
    return valid;
  }



  resetError() {
    const [...errors] = this.form.querySelectorAll('span.error');
    errors.forEach((error) => {
      error.textContent = '';
    });
  }

  setSubmitButtonState(state) {

    if (state) {
      this.button.classList.remove('search__button_invalid');
    } else {
      this.span.style.display = 'block';
      this.button.classList.add('search__button_invalid');
     
    }
  }
 
 
  setEventListenersValidation(){
    this.form.addEventListener('input', this.isFieldValid);
  }
}