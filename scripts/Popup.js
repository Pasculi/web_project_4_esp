class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector;  
    }
    open(){
        this._popupSelector.classList.add('popup_active');
        this.setEventListeners()
    }
    close(){
        this._popupSelector.classList.remove('popup_active')
    }
    _handleEscClose(evt){
        if (evt.key === "Escape") {
            this.close();
          }
    }
    setEventListeners(){
        this._popup.querySelector(".popup__close").addEventListener("click", () => {
            this.close();
          });
    }
}