/*Declaración de variables*/
/* ============================== */
const modal = document.querySelector('.modal');
const nameInput = document.querySelector('.profile__author');
const jobInput = document.querySelector('.profile__activit');
const inputNombre = document.querySelector('.modal__formulario-name');
const inputAcerca = document.querySelector('.modal__formulario-description');
const btn_guardar = document.querySelector('.modal__btn-guardar');

/*Función para Editar y cerrar Modal*/
/***************************************** */
function editarPerfil(){
  modal.style.display = 'flex';
  const valorNombre = nameInput.innerText;
  const valorAcerca = jobInput.innerText;
  console.log(valorNombre);
  inputNombre.setAttribute('placeholder', valorNombre);
  inputAcerca.setAttribute('placeholder', valorAcerca);

}
const btn__editar = document.querySelector('.btn__edit');
btn__editar.addEventListener('click' , editarPerfil);
/* window.onload = editarPerfil; */

/* ========== */

function closeModal() {
  modal.style.display = 'none';
}
const btn__cerrar = document.querySelector('.modal__btn-close');
btn__cerrar.addEventListener('click', closeModal);

/* ============================== */
/*Botón Guardar Perfil*/
const form = document.querySelector('.modal__formulario');
function guardarPerfil(e) {
  e.preventDefault();
  nameInput.textContent = `${inputNombre.value}`;
  jobInput.textContent = `${inputAcerca.value}`;
  closeModal();
}
form.addEventListener('submit', guardarPerfil);

/* ============================== */

/*Aplicar Opacidad a Botones de Editar (edit) y Añadir (add)*/

const edit = document.querySelector('.btn__edit');
const add = document.querySelector('.btn__add');
const close = document.querySelector('.modal__btn-close');
/* add.style.opacity = '0.8' */

function addOpacidad (){
  add.style.opacity = '0.6';
}
function removeAddOpacidad (){
  add.style.opacity = '1';
}
function editOpacidad(){
  edit.style.opacity = '0.6';
}
function removeEditOpacidad(){
  edit.style.opacity = '1';
}
function closeOpacidad (){
  close.style.opacity = '0.6';
}
function removeCloseOpacidad (){
  close.style.opacity = '1';
}

edit.addEventListener('mouseover', editOpacidad);
edit.addEventListener('mouseout', removeEditOpacidad);
add.addEventListener('mouseover', addOpacidad);
add.addEventListener('mouseout', removeAddOpacidad);
close.addEventListener('mouseover', closeOpacidad);
close.addEventListener('mouseout', removeCloseOpacidad);
