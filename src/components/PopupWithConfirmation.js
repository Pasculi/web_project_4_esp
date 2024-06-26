import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup, apiInstance, callback) {
    super(selectorPopup);
    this._handelConfirm = this._handelConfirm.bind(this);
    this._handleClickConfirm = this._handleClickConfirm.bind(this)
    this._api = apiInstance;
    this._buttonDelete = document.querySelector('.popup-confirm-button-delete');
    this._callback = callback;
  }
  _handelConfirm(evt) {
    evt.preventDefault();
  }
  _handleClickConfirm(){
    this._api.deleteCard(this._idCard)
    .then(() =>{
      this._buttonDelete.textContent = 'Eliminando...'
      this.closePopUp()
      this._callback()
    })
  }
  openPopUp(idCard, callback){
    super.openPopUp()
    this._buttonDelete.textContent = 'Sí'
    this._idCard = idCard;
    this._callback = callback;
  }
  setEventListeners() {
    super.setEventListeners();
    this.popup.querySelector('form').addEventListener('submit', this._handelConfirm)
    this._buttonDelete.addEventListener('click', this._handleClickConfirm)
  }
}
