export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);

  }
  rendererItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  setItems(items) {
    this.clear();
    this._items = items;

  }
  clear() {
    this._container.innerHTML = '';
  }
  addItem(element) {
    this._container.prepend(element);

  }
}

