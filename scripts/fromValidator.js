export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const inputError = formElement.querySelector(`.${inputElement.id}_error`);
  inputElement.classList.add(config.inputErrorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(config.errorClass);
}

const hideInputError = (formElement, inputElement, config) => {

  const inputError = formElement.querySelector(`.${inputElement.id}_error`);
  inputElement.classList.remove(config.inputErrorClass);
  inputError.textContent = '';
  inputError.classList.add(config.errorClass)
}
const checkValidityInput = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {

    showInputError(formElement, inputElement, inputElement.validationMessage, config)
  } else {

    hideInputError(formElement, inputElement, config)
  }
}

const hasInvalidInput = (inputs) => {
  return inputs.some(inputElement => {
    return !inputElement.validity.valid;
  })
}
const toggleButtonState = (inputs, buttonElement, config) => {
  if (hasInvalidInput(inputs)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement, config) => {
  const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));

  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputs, buttonElement, config)
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkValidityInput(formElement, inputElement, config);
      toggleButtonState(inputs, buttonElement, config)
    })
  })
}

export const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    });
    setEventListeners(formElement, config);
  })

}