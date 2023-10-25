export default class Card {
  constructor(selector, data) {
    this._selector = selector;
    this._name = data.name;
    this._link = data.link;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._selector).content;
    const cardElement = cardTemplate.querySelector('.card__place').cloneNode(true);
    return cardElement;

  }
  render() {
    this._node = this._getTemplate();
    this._setEventListeners();
    this._node.querySelector('.card__place-name').textContent = this._name;
    this._node.querySelector('.card__place-image-place').src = this._link;
    this._node.querySelector('.card__place-name').alt = this._name;
    return this._node;
  }
  _handleButtonLike(evt) {
    evt.target.classList.toggle('card__place-button--like-active')
  }
  _handleButtonDelete(evt) {
    evt.target.closest('.card__place').remove();
  }
  _handleOpenPopupImage() {
    const popupImage = document.querySelector('.popup-image');
    console.log(popupImage);
    popupImage.querySelector('.popup-image__url').setAttribute("src", this._link)
    popupImage.querySelector('.popup-image__name-place').setAttribute("src", this._name);
    popupImage.querySelector('.popup-image__name-place').textContent = this._name;
    popupImage.classList.add('popup-image--show');
  }
  _setEventListeners() {
    this._node.querySelector(".card__place-button--like").addEventListener("click", (evt) => this._handleButtonLike(evt));
    this._node.querySelector('.card__place-button--delete').addEventListener('click', (evt) => this._handleButtonDelete(evt));
    this._node.querySelector('.card__place-image-place').addEventListener('click', () => this._handleOpenPopupImage());
  }

}