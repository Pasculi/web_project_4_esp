export default class PopUp{
  contructor(selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);


  }
  open() {
    this._selectorPopup.classList.add(`${this.popupClass}`)
    console.log(this._selectorPopup)
    console.log( `Holitas!! ${this.popupClass}`)
  }
  close() {
    this._selectorPopup.classList.remove()
  }
  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
  setEventListeners() {

  }
}



const popup = new PopUp('popup--show')
console.log(popup.open())
