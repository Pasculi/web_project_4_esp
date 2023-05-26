/* Validacion de formularios */

const formElement = document.querySelectorAll('.modal__formulario');
console.log(formElement);


/* formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();

}) */

formElement.addEventListener('submit', (evt) => {
  console.log
  const inputElement = document.querySelectorAll('.form__input');
  inputElement.forEach((inputformElement) => {
    if (!inputformElement.validity.valid) {
      console.log("Estoy vacio")
    } else {
      console.log("Estoy completo")
    }
  })
});


