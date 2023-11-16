export default class PopUp{
  constructor(selectorPopup) {
    this.selectorPopup = selectorPopup;
    this.popupCloseImage = document.querySelector('.popup-image__close');
    this.popup = document.querySelector(this.selectorPopup);
  }
  openPopUp() {
    this.popup.classList.add('popup--show');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }
  closePopUp() {
        this.popup.classList.remove('popup--show');
        document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') { 
      this.closePopUp()
    }
  }
  setEventListeners() {    
    this.popupCloseImage.addEventListener('click', () =>{      
      this.closePopUp()
    })

  }
}

