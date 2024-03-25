import { api } from '../components/Api.js'
import PopupWithConfirmation from './PopupWithConfirmation.js';

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
    this._counter = (Object.values(this._likes).length).toString()
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._selector).content;
    const cardElement = cardTemplate.querySelector('.card__place').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._node = this._getTemplate();
    this._setEventListeners();
    api.getUserInfo()
      .then((dataUser) => {
        const currentUser = dataUser._id
        if (currentUser !== this._owner._id) {
          this._node.querySelector('.card__place-button--delete').remove()
        }
      })
    this._node.querySelector('.card__place-name').textContent = this._name;
    this._node.querySelector('.card__place-image-place').src = this._link;
    this._node.querySelector('.card__place-image-place').alt = this._name;
    this._node.querySelector('.card__place-like-counter').textContent = this._counter;
    return this._node;
  }

  _handleButtonDelete() {
    this._handleDeleteCards(this._id)
  }
  hasOwnerLike() {
    return this._likes.some(item => {
      return item._id === this._owner._id;
    })
  }
  _setEventListeners() {
    const buttonLike = this._node.querySelector(".card__place-button--like");
    const counterLike = this._node.querySelector('.card__place-like-counter')
    buttonLike.addEventListener("click", () => {
      if (this.hasOwnerLike()) {
        this._handleRemoveLike(this._id, buttonLike)
        console.log(counterLike)
        counterLike.textContent = this._counter;
      } else {
        this._handleLike(this._id, buttonLike)
        console.log(counterLike)
        counterLike.textContent = this._counter;
      }
    })
    const popupConfirm = new PopupWithConfirmation('.popup__delete-card');
    this._node.querySelector('.card__place-imagen-trash').addEventListener("click", () => {
      popupConfirm.openPopUp();
    });
   
    this._node.querySelector('.card__place-image-place').addEventListener('click', this._handleCardClick);
  }


}

