export default class PopUp {
  constructor(selectorPopup) {
    this.selectorPopup = selectorPopup;
    this.popup = document.querySelector(`${this.selectorPopup}`);
    this._handleEscClose = this._handleEscClose.bind(this);
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
      this.closePopUp();
    }
  }
  setEventListeners() {
    const buttonClose = Array.from(document.querySelectorAll('.popup__image-close'))
    buttonClose.forEach((item) => {
      item.addEventListener("click", () => {
        this.closePopUp();
      });
    })
  }
}
