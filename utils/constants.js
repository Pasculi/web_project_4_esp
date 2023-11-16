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




/*Función que aplica opacidad a los botones editar, añadir lugar y a las X de cerrar */
const btns = Array.from(document.querySelectorAll('.btn'));
const opacityButtons = () => {
  btns.forEach(btn => {
    function addOpacidad() {
      btn.style.opacity = "0.6";
    }
    function removeAddOpacidad() {
      btn.style.opacity = "1";
    }
    btn.addEventListener("mouseover", addOpacidad);
    btn.addEventListener("mouseout", removeAddOpacidad);
  })

}

/*Funcion para dar like al corazón*/
const buttonLike = (evt) => {
  evt.target.classList.toggle("card__place-button--like-active");
}

/*Función para eliminar una card*/
const buttonDeleteCard = (evt) => {
  evt.target.parentNode.parentNode.remove();
}


/* function showPopupProfile() {
  popupProfile.classList.add('popup--show');
}
function closePopupProfile() {
  popupProfile.classList.remove('popup--show');
  document.querySelector("#popup__input-profile").value = "";
  document.querySelector("#popup__input-about").value = "";
}
function showPopupPlace() {
  popupPlace.classList.add('popup--show');
}
function closePopupPlace() {
  popupPlace.classList.remove('popup--show');
  document.querySelector("#popup__input-place").value = "";
  document.querySelector("#popup__input-url").value = "";
}
editProfile.addEventListener('click', showPopupProfile);
editPlace.addEventListener('click', showPopupPlace);
popupCloseProfile.addEventListener('click', closePopupProfile);
popupClosePlace.addEventListener('click', closePopupPlace);
popupCloseImage.addEventListener('click', closePopupImage);
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closePopup()
  }
}); */



/* const popupEditProfile = () => {
  const inputsElements = Array.from(document.querySelectorAll(config.inputSelector))
  inputsElements.forEach(inputElement => {
    inputElement.addEventListener('input', evt => {
      if (evt.target.id === 'popup__input-profile') {
        nameProfile.textContent = evt.target.value.trim();
      }
      else if (evt.target.id === 'popup__input-about') {
        activitProfile.textContent = evt.target.value.trim();
      }
    })
  })
}
popupEditProfile()
buttonProfile.addEventListener('click', closePopupProfile) */
/*Abrir y cerrar Popup_Form*/




export { initialCards, opacityButtons, buttonLike, buttonDeleteCard };
