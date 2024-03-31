
import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup, callback) {
    super(selectorPopup);
    this.callback = callback;
  }

  /* _confirmPopup(idCard) {
    api.deleteCard(idCard).then(() => {

    })
    console.log('Hola')
    this.closePopUp();

  } */
  _handelConfirm(evt) {
    evt.preventDefault();
   /*  this._confirmPopup(); */
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.querySelector('form').addEventListener('submit', this._handelConfirm)
    this._buttonDelete = document.querySelector('.popup__button--delete-confirm');
    /* this._buttonDelete.addEventListener('click', this._handelConfirm.bind(this)) */
    //this._buttonDelete.addEventListener('click', callback)
  }
}
