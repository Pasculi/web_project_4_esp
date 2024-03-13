import { getCardInitials } from '../pages/index.js';
export default class Card {

  constructor(data, selector, handleCardClick, handleLike, handleRemoveLike, handleDeleteCards) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteCards = handleDeleteCards;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._createdAt = data.createdAt;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._selector).content;
    const cardElement = cardTemplate.querySelector('.card__place').cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._node = this._getTemplate();
    this._setEventListeners();
    this._node.querySelector('.card__place-name').textContent = this._name;
    this._node.querySelector('.card__place-image-place').src = this._link;
    this._node.querySelector('.card__place-image-place').alt = this._name;
    return this._node;
  }
  _handleButtonLike(evt) {
    evt.target.classList.toggle('card__place-button--like-active')
  }
  _handleButtonDelete() {
    this._handleDeleteCards(this._id)
  }
  _setEventListeners() {
    this._node.querySelector(".card__place-button--like").addEventListener("click", (evt) => this._handleButtonLike(evt));
    this._node.querySelector('.card__place-button--delete').addEventListener('click', (evt) => this._handleButtonDelete(evt));
    this._node.querySelector('.card__place-image-place').addEventListener('click', this._handleCardClick);
  }
}