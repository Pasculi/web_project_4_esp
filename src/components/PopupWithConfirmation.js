import { api } from '../components/Api.js'
import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup, callback) {
    super(selectorPopup);
    this._handelConfirm = this._handelConfirm.bind(this);
    this._handleClickConfirm = this._handleClickConfirm.bind(this)
    this._callback = callback;
  }
  _handelConfirm(evt) {
    evt.preventDefault();
  }
  _handleClickConfirm(){
    api.deleteCard(this._idCard)
    .then(() =>{
      this.closePopUp()
      this._callback()
    })
  }
  openPopUp(idCard, callback){
    super.openPopUp()
    this._idCard = idCard;
    this._callback = callback;
  }

  setEventListeners() {
    super.setEventListeners(); 
    this.popup.querySelector('form').addEventListener('submit', this._handelConfirm)
    this._buttonDelete = document.querySelector('.popup__button--delete-confirm');
    this._buttonDelete.addEventListener('click', this._handleClickConfirm)
  }
}
