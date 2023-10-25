import Card from "./card.js"

export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);

  }
  renderer() {
    this._container = '';
    this._renderer.forEach((item) => {
      this.renderer(item);
    });

  }
  addItem() {
    this._selectorContainer.prepend(element);

  }
}

const newCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card('.card', item);
    newCard.addItem(card);
  }
})

console.log("Section")