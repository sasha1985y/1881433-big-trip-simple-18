import { createElement } from '../render.js';

const createListEmptyViewTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class ListEmpty {
  #element = null;

  get template() {
    return createListEmptyViewTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
