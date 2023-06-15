/* const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  console.log(formError);
  inputElement.classList.add('from__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('from__input-error_active');

<<<<<<< HEAD
enableValidation({
  formSelector: ".modal__formulario",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".form__input-error",
  errorClass: ".popup__error_visible"
}); 



=======
}

const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  inputElement.classList.remove('from__input_type_error');
  formError.classList.remove('from__input-error_active');
  formError.textContent = "";
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, formElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('form__input'));
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      console.log('Hola')
      toggleButtonState(inputList, buttonElement)
    })
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.modal__formulario'));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit_inactive');
  } else {
    buttonElement.classList.remove('form__submit_inactive');
  }
}
enableValidation();


/* export { FromValidator }; */
>>>>>>> 98ccfbee16836cbbe9c26fed10e687369978ca14
