export default class Card {

  constructor(data, selector, handleCardClick, handleLike, handleRemoveLike, currentUserId, popupConfirm) {
    this.data = data;
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._idCard = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._counter = this._likes.length;
    this._currentUserId = currentUserId;
    this._popupConfirm = popupConfirm;
    this.deleteCard = this.deleteCard.bind(this)
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

  deleteCard(){
    this._node.remove();
  }
  hasOwnerLike() {
    console.log(this._currentUserId)
    return this._likes.some(item => {
      return item._id === this._currentUserId;
    });
  }

  _setEventListeners() {
    const buttonLike = this._node.querySelector(".card__place-button--like");
    const counterLike = this._node.querySelector('.card__place-like-counter');

    buttonLike.addEventListener("click", () => {
      if (this.hasOwnerLike()) {
        console.log(this.hasOwnerLike());
        this._handleRemoveLike(this._idCard, buttonLike, (res) => {
          buttonLike.classList.remove('card__place-button--like-active');
          this._likes = res.likes;
          counterLike.textContent = this._counter; // Disminuir el contador
          console.log(this._likes);

        });
      } else {
        console.log(this.hasOwnerLike());
        this._handleLike(this._idCard, this.hasOwnerLike(), buttonLike, (res) => {
          buttonLike.classList.add('card__place-button--like-active');
          this._likes = res.likes;
          counterLike.textContent = this._counter + 1; // Aumentar el contador
          console.log(this._likes);

        });
      }
    });

    this._node.querySelector('.card__place-button--delete').addEventListener("click", () => {
      this._popupConfirm.openPopUp(this._idCard, this.deleteCard);
    });
    this._node.querySelector('.card__place-image-place').addEventListener('click', this._handleCardClick);
  }
}


