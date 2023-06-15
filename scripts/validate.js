// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

enableValidation({
  formSelector: ".modal__formulario",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".form__input-error",
  errorClass: ".popup__error_visible"
}); 



