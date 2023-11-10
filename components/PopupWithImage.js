import PopUp from "../components/Popup.js";

export default class PopupWithImage extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
  }
  open(name, link) {
    const containerImage = document.querySelector(this.selectorPopup);

    const figCaption = containerImage.querySelector('.popup-image__name-place');
    const image = containerImage.querySelector('.popup-image__url');
    figCaption.textContent = name;
    image.src = link;
    image.alt = name;
    super.open();
  }
}
