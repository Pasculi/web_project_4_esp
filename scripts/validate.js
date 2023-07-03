export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = config


const showInputError = (inputElement, errorMessage) => {
  const inputError = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(errorClass)
}

const hideInputError = (inputElement) => {
  const inputError = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  inputError.textContent = '';
  inputError.classList.add(errorClass)
}

const setEventListeners = () => {
  const inputs = Array.from(document.querySelectorAll(inputSelector));
  const buttonElement = document.querySelector(submitButtonSelector)
  console.log(buttonElement)
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkValidityInput(inputs);
    })
  })
}
const checkValidityInput = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage)
  } else {
    hideInputError(inputElement)
  }
}

export const enableValidation = (config) => {
  const forms = Array.from(document.querySelector(formSelector));
  forms.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
  })
  setEventListeners()

}
