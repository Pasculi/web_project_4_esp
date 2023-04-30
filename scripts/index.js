/*A */
const initialCards = [
  {
    name: "Ciudad de Arica",
    link: "https://q-xx.bstatic.com/xdata/images/city/600x480/671802.jpg?k=f2af7c265359c6bfef67dd8137aae05a987d3df4208c8423068a807acc405ad3&o="
  },
  {
    name: "Antofagasta",
    link: "https://visitchile.imgix.net/destinos/320_Antofagasta1.jpg?w=960&h=448&fit=crop&q=auto&auto=format"
  },
  {
    name: "Calama",
    link: "https://patrimonio.bienes.cl/wp-content/uploads/2020/05/ZCH3.jpg"
  },
  {
    name: "Puerto de Valparaíso",
    link: "https://media.istockphoto.com/id/827067390/es/foto/colorido-valparaiso.jpg?s=612x612&w=0&k=20&c=VsJWIW249JHwoSUfpIhCYjl7gELpdCLxa0trOo_nqjk="
  },
  {
    name: "Valdivia",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/07/Encantos_Valdivia-y-Corral_mercado-fluvialjpg-1024x683.jpg"
  },
  {
    name: "Santiago",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/santiago-portada.jpg"
  }
];

/*CARGA DE GALLERYA INICIAL*/
const containerCard = document.querySelector('.card-container');

const initialRender = initialCards.map((initialCard) => {
  const templateCard = document.querySelector('.card-container').content;
  const elementCard = templateCard.querySelector('.card').cloneNode(true);

  elementCard.querySelector('.card__name').textContent = initialCard.name;
  elementCard.querySelector('.card__image').setAttribute('src', `${initialCard.link}`);

  containerCard.append(elementCard);
});

/*ABRIR MODAL AÑADIR LUGAR*/

const addplace = document.querySelector('.btn__add');
const modalAdd = document.querySelector('.modal__add');
addplace.addEventListener('click', () => {
modalAdd.style.display='flex';
  console.log('Añadiendo')
});

/*CERRAR MODAL AÑADIR LUGAR*/
const placeClose = () => {
  modalAdd.style.display='none';
}
const placeCerrar = document.querySelector('.modal__close-place');
placeCerrar.addEventListener('click', placeClose);

/*AÑADIR UN LUGAR AL ARRAY */
const savePlace = document.querySelector('.save__place');
function savePlaces (e){
  e.preventDefault();
  const namePlace = document.querySelector('.name__place').value;
  const urlPlace = document.querySelector('.url__place').value;
 console.log(namePlace, urlPlace);


}
savePlace.addEventListener('click', savePlaces);




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
function editarPerfil() {
  modal.style.display = 'flex';
  const valorNombre = nameInput.innerText;
  const valorAcerca = jobInput.innerText;
  console.log(valorNombre);
  inputNombre.setAttribute('placeholder', valorNombre);
  inputAcerca.setAttribute('placeholder', valorAcerca);

}
const btn__editar = document.querySelector('.btn__edit');
btn__editar.addEventListener('click', editarPerfil);


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

function addOpacidad() {
  add.style.opacity = '0.6';
}
function removeAddOpacidad() {
  add.style.opacity = '1';
}
function editOpacidad() {
  edit.style.opacity = '0.6';
}
function removeEditOpacidad() {
  edit.style.opacity = '1';
}
function closeOpacidad() {
  close.style.opacity = '0.6';
}
function removeCloseOpacidad() {
  close.style.opacity = '1';
}

edit.addEventListener('mouseover', editOpacidad);
edit.addEventListener('mouseout', removeEditOpacidad);
add.addEventListener('mouseover', addOpacidad);
add.addEventListener('mouseout', removeAddOpacidad);
close.addEventListener('mouseover', closeOpacidad);
close.addEventListener('mouseout', removeCloseOpacidad);

