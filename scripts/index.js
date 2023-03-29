/*Función para Editar y cerrar Modal*/
/* ============================== */
const modal = document.querySelector('.modal');
const nameInput = document.querySelector('.profile__author');
const jobInput = document.querySelector('.profile__activit');
const inputNombre = document.querySelector('.modal__formulario-name');
const inputAcerca = document.querySelector('.modal__formulario-description');
const btn_guardar = document.querySelector('.modal__btn-guardar');


/***************************************** */
function editarPerfil(){
  modal.style.display = 'flex';
  const valorNombre = nameInput.innerText;
  const valorAcerca = jobInput.innerText;

  inputNombre.setAttribute('placeholder', valorNombre);
  inputAcerca.setAttribute('placeholder', valorAcerca);

  console.log(valorNombre);
  console.log(valorAcerca);
  console.log('Abierto...');
}
const btn__editar = document.querySelector('.btn__edit');
btn__editar.addEventListener('click' , editarPerfil);

/* ========== */

function closeModal() {
  modal.style.display = 'none';
  console.log('Cerrado..');
}
const btn__cerrar = document.querySelector('.modal__btn-close');
btn__cerrar.addEventListener('click', closeModal);

/* ============================== */
/*Botón Guardar Perfil*/

function guardarPerfil(e) {
  e.preventDefault();
  nameInput.innerText = `${inputNombre.value}`;
  jobInput.innerText = `${inputAcerca.value}`;
  closeModal();

}
btn_guardar.addEventListener('click', guardarPerfil);

/* ============================== */
/*Cambiar like a Black*/



const like = [...document.querySelectorAll('.btn__like')];

const meGusta = like.map(function(e){
  
  e.style.backgroundImage = 'url("../../../../images/vector__like-black.svg")';
  console.log('Cambiar corazón')
  console.log(e);
}

)
e.addEventListener('click', meGusta);


/* function likeBlack(){
  like.style.backgroundImage = 'url("../../../../images/vector__like-black.svg")';
  console.log('Cambiar corazón')
}
like.addEventListener('click', likeBlack);
 */


















/* ============================== */

/*Boton de Me gusta*/
/* ============================== */
/* const meGusta = document.querySelector('.btn__like-image');
function darMegusta() {
  meGusta.style.fillCurrentColor="#000"
  meGusta.style.overflow = 'hidden';
}
meGusta.addEventListener('click', darMegusta); */
/* ============================== */

/*Activar boton guardar al escribir*/


