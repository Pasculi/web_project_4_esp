export default class Card {

  constructor(data, selector, handleCardClick, handleLike, handleRemoveLike, handleDeleteCards, { _id, likes, owner, createdAt }) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteCards = handleDeleteCards;
    this._id = _id;
    this._likes = likes;
    this._owner = owner;
    this._createdAt = createdAt;

  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._selector).content;
    const cardElement = cardTemplate.querySelector('.card__place').cloneNode(true);
    return cardElement;
  }
  hasOwnerLike() {
    return this._likes.some(item => {
      return item._id === this._owner._id;
    });
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
    this._node.querySelector(".card__place-button--like").addEventListener("click", () => {
      if (this.hasOwnerLike()) {
        this._handleButtonLike(this._id);
      } else {
        
      }
    });

    this._node.querySelector('.card__place-button--delete').addEventListener('click', (evt) => this._handleButtonDelete(evt));

    this._node.querySelector('.card__place-image-place').addEventListener('click', this._handleCardClick);
  }
}