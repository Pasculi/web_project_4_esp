import { closePopupPlace, opacityButtons } from "./utils.js";
import Card from "./Card.js"
opacityButtons()

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
    link: "https://cdnx.jumpseller.com/ad-toma-aerea-banco-de-im/image/21301255/Captura_de_Pantalla_2021-12-17_a_la_s__19.49.20.jpg?1639781545",
  },
  {
    name: "Antofagasta",
    link: "https://www.holidayinnexpress.cl/wp-content/uploads/2017/08/destacada_antofagasta.jpg",
  },
  {
    name: "Ciudad de Arica",
    link: "https://q-xx.bstatic.com/xdata/images/city/600x480/671802.jpg?k=f2af7c265359c6bfef67dd8137aae05a987d3df4208c8423068a807acc405ad3&o=",
  },
];

const cardElement = document.querySelector('.container-card');
initialCards.forEach(initialCard => {
  const card = new Card('.card', initialCard)
  cardElement.appendChild(card.render())
})


/*Función para Guardar una Imagen*/
const savePlace = document.querySelector(".popup__button-place");
function savePlaces() {
  const name = document.querySelector("#popup__input-place").value;
  const link = document.querySelector("#popup__input-url").value;
  const cardNueva = new Card('.card', { name, link });
  cardElement.prepend(cardNueva.render());
  closePopupPlace();
  render(initialCards);
}

savePlace.addEventListener("click", savePlaces);

export { initialCards }