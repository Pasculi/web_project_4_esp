

/*ARRAY DE OBJETOS INICIAL */
const initialCards = [
  {
    name: "Santiago",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/santiago-portada.jpg",
  },
  {
    name: "Valdivia",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/07/Encantos_Valdivia-y-Corral_mercado-fluvialjpg-1024x683.jpg",
  },
  {
    name: "Puerto de Valparaíso",
    link: "https://media.istockphoto.com/id/827067390/es/foto/colorido-valparaiso.jpg?s=612x612&w=0&k=20&c=VsJWIW249JHwoSUfpIhCYjl7gELpdCLxa0trOo_nqjk=",
  },
  {
    name: "Calama",
    link: "https://patrimonio.bienes.cl/wp-content/uploads/2020/05/ZCH3.jpg",
  },
  {
    name: "Antofagasta",
    link: "https://visitchile.imgix.net/destinos/320_Antofagasta1.jpg?w=960&h=448&fit=crop&q=auto&auto=format",
  },
  {
    name: "Ciudad de Arica",
    link: "https://q-xx.bstatic.com/xdata/images/city/600x480/671802.jpg?k=f2af7c265359c6bfef67dd8137aae05a987d3df4208c8423068a807acc405ad3&o=",
  },
];

/*CARGA DE GALLERIA INICIAL*/
renderCardsInitial(initialCards);
function renderCardsInitial(initialCards) {
  initialCards.map((card) => {
    functionCards(card);
  });
}
const imagenDisplay = document.querySelector('.modal-image');


function closeImage(e) {
  imagenDisplay.classList.remove('modal-image--show')
}

imagenDisplay.addEventListener('click', closeImage);

/*ABRIR MODAL AÑADIR LUGAR*/

const addplace = document.querySelector(".btn-add");
const modalAdd = document.querySelector(".modal-add");
addplace.addEventListener("click", (e) => {

  modalAdd.classList.add('modal--show');
});

/*CERRAR MODAL AÑADIR LUGAR*/
const placeClose = (e) => {

  modalAdd.classList.remove('modal--show');
};
const placeCerrar = document.querySelector(".modal__btn-close-place");
placeCerrar.addEventListener("click", placeClose);

/*AÑADIR UN LUGAR AL ARRAY */

const savePlace = document.querySelector(".modal__btn-guardar-place");
function savePlaces(evt) {
  evt.preventDefault();
  const name = document.querySelector(".modal__formulario-name-place").value;
  const link = document.querySelector(".modal__formulario-description-url-place").value;

  const card = { name: name, link: link };

  initialCards.unshift(card);

  functionCards(card);


  closeModalPlace();
  renderCardsInitial(card);
}


function closeModalPlace() {
  modalAdd.classList.remove('modal--show');
}
savePlace.addEventListener("submit", savePlaces);

/*Declaración de variables*/
/* ============================== */
const modal = document.querySelector(".modal");
const nameInput = document.querySelector(".profile__author");
const jobInput = document.querySelector(".profile__activit");
const inputNombre = document.querySelector(".modal__formulario-name");
const inputAcerca = document.querySelector(".modal__formulario-description");
const btn_guardar = document.querySelector(".modal__btn-guardar");


/**EDITAR PERFIL Y CERRAR MODAL**/
function editarPerfil() {
  modal.classList.add('modal--show')

  const valorNombre = nameInput.innerText;
  const valorAcerca = jobInput.innerText;

  inputNombre.setAttribute("placeholder", valorNombre);
  inputAcerca.setAttribute("placeholder", valorAcerca);

}

const btn__editar = document.querySelector(".btn-edit");
btn__editar.addEventListener("click", editarPerfil);

/* ========== */

function closeModal() {
  modal.classList.remove('modal--show');
}
const btn__cerrar = document.querySelector(".modal__btn-close-perfil");
btn__cerrar.addEventListener("click", closeModal);

/* ============================== */
/*/*BOTON SUBMIT EDITAR PERFIL*/
const form = document.querySelector(".modal__formulario");
function guardarPerfil(e) {
  e.preventDefault();
  nameInput.textContent = `${inputNombre.value}`;
  jobInput.textContent = `${inputAcerca.value}`;
  closeModal();
}
form.addEventListener("submit", guardarPerfil);

/* ============================== */

/*Aplicar Opacidad a Botones de Editar (edit) y Añadir (add)*/

const edit = document.querySelector(".btn-edit");
const add = document.querySelector(".btn-add");
const close = document.querySelector(".modal__btn-close");
const closePlace = document.querySelector(".modal__btn-close-place");
const closeImagen = document.querySelector(".modal-image__close-image");

/* add.style.opacity = '0.8' */

function addOpacidad() {
  add.style.opacity = "0.6";
}
function removeAddOpacidad() {
  add.style.opacity = "1";
}
function editOpacidad() {
  edit.style.opacity = "0.6";
}
function removeEditOpacidad() {
  edit.style.opacity = "1";
}
function closeOpacidad() {
  close.style.opacity = "0.6";
}
function removeCloseOpacidad() {
  close.style.opacity = "1";
}
function closePlaceOpacidad() {
  closePlace.style.opacity = "0.6";
}
function removeClosePlaceOpacidad() {
  closePlace.style.opacity = "1";
}
function closeImageOpacidad() {
  closeImagen.style.opacity = "0.6";
}
function removeCloseImageOpacidad() {
  closeImagen.style.opacity = "1";
}


edit.addEventListener("mouseover", editOpacidad);
edit.addEventListener("mouseout", removeEditOpacidad);
add.addEventListener("mouseover", addOpacidad);
add.addEventListener("mouseout", removeAddOpacidad);
close.addEventListener("mouseover", closeOpacidad);
close.addEventListener("mouseout", removeCloseOpacidad);
closePlace.addEventListener("mouseover", closePlaceOpacidad);
closePlace.addEventListener("mouseout", removeClosePlaceOpacidad);
closeImagen.addEventListener("mouseover", closeImageOpacidad);
closeImagen.addEventListener("mouseout", removeCloseImageOpacidad);

/*FUNCION CARDS */
function functionCards(card) {
  /******************************************* */
  const containerCard = document.querySelector(".card-container");
  const templateCard = document.querySelector(".card-container").content;
  const elementCard = templateCard.querySelector(".card").cloneNode(true);
  elementCard.querySelector(".card__name").textContent = `${card.name}`;
  elementCard
    .querySelector(".card__image")
    .setAttribute("src", `${card.link}`);
  elementCard
    .querySelector(".card__image")
    .setAttribute("alt", `${card.name}`);
  elementCard
    .querySelector(".btn__delete")
    .addEventListener("click", function (evt) {
      evt.target.parentNode.parentNode.remove();
    });
  /**CLICK EN IMAGEN */
  elementCard.querySelector('.card__image').addEventListener("click", function (evt) {

    const imagenPlace = document.querySelector('.modal-image__place');
    const namePlace = document.querySelector('.modal-image__name-place');
    imagenPlace.setAttribute("src", evt.target.src);
    imagenPlace.setAttribute("alt", evt.target.alt);

    namePlace.textContent = card.name;

    const modalImagen = document.querySelector('.modal-image');
    modalImagen.classList.add('modal-image--show')
  });
  /**CLICK EN IMAGEN */
  elementCard
    .querySelector(".btn__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("btn__like-active");
    });

  containerCard.prepend(elementCard);
  /******************************************* */
}