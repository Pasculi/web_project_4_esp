import PopUp from "./Popup.js"



const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value

export default class PopupWithForm extends PopUp {
  constructor({selectorPopup}) {
    super(selectorPopup)
    

  }
  setEventListeners(){
    /* console.log ("Hola desde PopUpForm") */

    console.log()

  }
}
