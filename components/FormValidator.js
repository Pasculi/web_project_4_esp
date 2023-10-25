const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input-type-error",
  errorClass: "popup__error-visible"
};

export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;


  }
  _showInputError(inputElement, errorMessage) {
    const inputError = this._inputError;
    inputElement.classList.add(this._config.inputErrorClass);
    inputError.textContent = errorMessage;
    inputError.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {

    const inputError = this._inputError;
    inputElement.classList.remove(config.inputErrorClass);
    inputError.classList.add(config.errorClass)
    inputError.textContent = '';
  }
  _checkValidityInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _hasInvalidInput(inputs) {
    return inputs.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }
  _toggleButtonState(inputs, buttonElement) {
    if (this._hasInvalidInput(inputs)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    inputs.forEach(inputElement => {
      this._inputError = this._formElement.querySelector(`.${inputElement.id}-error`);

      inputElement.addEventListener('input', () => {
        this._checkValidityInput(inputElement);
        this._toggleButtonState(inputs, buttonElement)
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    });
    this._setEventListeners();
  }
}

const formElements = document.querySelectorAll(".popup__form");
formElements.forEach((formElement) => {
  const formValidator = new FormValidator(config, formElement);
  formValidator.enableValidation();
});

export { config }