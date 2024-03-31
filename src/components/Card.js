export default class Card {

  constructor(data, selector, handleCardClick, handleLike, handleRemoveLike,currentUserId, popupConfirm) {
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
    console.log(this._likes)
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

  hasOwnerLike() {
    return this._likes.some(item => {
      return item._id === this._currentUserId;
    })
  }
  deleteCard(){
    this._node.remove();
  }
  _setEventListeners() {
    const buttonLike = this._node.querySelector(".card__place-button--like");
    const counterLike = this._node.querySelector('.card__place-like-counter');
    console.log(counterLike)

    buttonLike.addEventListener("click", () => {
      if (this.hasOwnerLike()) {
        this._handleRemoveLike(this._idCard, buttonLike, (res) => {
          console.log(res.likes.length)
          buttonLike.classList.remove('card__place-button--like-active');
          counterLike.textContent = this._counter - 1;
          this._likes = res.likes
        })
      } else {
        this._handleLike(this._idCard, buttonLike, (res) => {
          console.log(res.likes.length)
          buttonLike.classList.add('card__place-button--like-active');
          counterLike.textContent = this._counter + 1;
          this._likes = res.likes
          console.log("🚀 ~ Card ~ this._handleLike ~ this._likes:", this._likes)
        })
        buttonLike.classList.add('card__place-button--like-active');
        counterLike.textContent = this._counter + 1;
      }
    })

    this._node.querySelector('.card__place-button--delete').addEventListener("click", () => {
      this._popupConfirm.openPopUp(this._idCard, this.deleteCard); 
    });    
    this._node.querySelector('.card__place-image-place').addEventListener('click', this._handleCardClick);
  }
}

 