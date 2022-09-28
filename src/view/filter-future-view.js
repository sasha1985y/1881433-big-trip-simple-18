import AbstractView from '../framework/view/abstract-view';

const createHeaderFilterFutureTemplate = () => `<div class="trip-filters__filter">
<input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
<label class="trip-filters__filter-label" for="filter-future">Future</label>
</div>`;

export default class HeaderFilterButtonFuture extends AbstractView {
  constructor () {
    super();
  }

  get template() {
    return createHeaderFilterFutureTemplate();
  }

  setClickFutureHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('#filter-future').addEventListener('click', this.#clickFutureHandler);
  };

  #clickFutureHandler = () => {
    this._callback.click();
  };
}
