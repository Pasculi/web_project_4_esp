import { buttonLike } from '../utils/utils.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';

export default class Card {

  constructor(data, selector, handleCardClick, handleLike, handleRemoveLike, handleDeleteCards, currentUserId) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteCards = handleDeleteCards;
    this._idCrad = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._counter = this._likes.length;
    this._currentUserId = currentUserId;


  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._selector).content;
    const cardElement = cardTemplate.querySelector('.card__place').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._node = this._getTemplate();
    this._setEventListeners();
    if (this._currentUserId !== this._owner._id) {
      this._node.querySelector('.card__place-button--delete').remove();
    }
    if (this.hasOwnerLike()) {
      const buttonLike = this._node.querySelector(".card__place-button--like");
      buttonLike.classList.add('card__place-button--like-active');
    }
    this._node.querySelector('.card__place-name').textContent = this._name;
    this._node.querySelector('.card__place-image-place').src = this._link;
    this._node.querySelector('.card__place-image-place').alt = this._name;
    this._node.querySelector('.card__place-like-counter').textContent = this._counter;
    return this._node;
  }

  _handleButtonDelete() {
    this._handleDeleteCards(this._idCrad)
  }
  hasOwnerLike() {
    return this._likes.some(item => {
      return item._id === this._currentUserId;
    })
  }
  _setEventListeners() {
    const buttonLike = this._node.querySelector(".card__place-button--like");
    console.log(this.hasOwnerLike())
    const counterLike = this._node.querySelector('.card__place-like-counter')
    buttonLike.addEventListener("click", () => {
      if (this.hasOwnerLike()) {
        this._handleRemoveLike(this._idCrad, buttonLike, () => {
          buttonLike.classList.remove('card__place-button--like-active');
          counterLike.textContent = this._counter - 1;
        })
      } else {
        this._handleLike(this._idCrad, buttonLike)
        buttonLike.classList.add('card__place-button--like-active');
        counterLike.textContent = this._counter + 1;
      }
    })
    const popupConfirm = new PopupWithConfirmation('.popup__delete-card');
    this._node.querySelector('.card__place-imagen-trash').addEventListener("click", () => {
      popupConfirm.openPopUp();
    });

    this._node.querySelector('.card__place-image-place').addEventListener('click', this._handleCardClick);
  }


}

