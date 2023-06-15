enableValidations({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  console.log(formError);
  inputElement.classList.add('from__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('from__input-error_active');

}

const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  inputElement.classList.remove('from__input_type_error');
  formError.classList.remove('from__input-error_active');
  formError.textContent = "";
}

/* ************************************************ */

function isValid (paramsConfig) {
  if (!paramsConfig.inputSelector.validity.valid) {
    showInputError(paramsConfig.formSelector, paramsConfig.inputSelector, paramsConfig.formSelector.validationMessage);
  } else {
    hideInputError(paramsConfig.formSelector, paramsConfig.inputSelector);
  }
}

function setEventListeners(paramsConfig) {
  const inputList = Array.from(document.querySelectorAll(paramsConfig.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      console.log(evt.target.value);
      isValid(paramsConfig.formSelector, inputElement)
      toggleButtonState(paramsConfig.inputSelector, paramsConfig.inactiveButtonClass)
    })
  })
}


function enableValidations(paramsConfig) {
  const formList = Array.from(document.querySelectorAll(paramsConfig.formSelector));
  console.log(formList)
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form)
  })

}

const hasInvalidInput = (paramsConfig) => {
  return paramsConfig.inputSelector.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(paramsConfig) {
  if (hasInvalidInput(paramsConfig.inputSelector)) {
    buttonElement.classList.add(paramsConfig.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(paramsConfig.inactiveButtonClass);
  }
}
