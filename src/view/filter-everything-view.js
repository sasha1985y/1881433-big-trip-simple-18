import AbstractView from '../framework/view/abstract-view';

const createHeaderFilterEverythingTemplate = () => `<form class="trip-filters" action="#" method="get">
<div class="trip-filters__filter">
  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
</div>
<button class="visually-hidden" type="submit">Accept filter</button>
</form>`;

export default class HeaderFilterButtonEverything extends AbstractView {
  constructor () {
    super();
  }

  get template() {
    return createHeaderFilterEverythingTemplate();
  }

  setClickEverythingHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('#filter-everything').addEventListener('click', this.#clickEverythingHandler);
  };

  #clickEverythingHandler = () => {
    this._callback.click();
  };
}
