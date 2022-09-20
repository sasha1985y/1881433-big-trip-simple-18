import {render, replace, remove} from '../framework/render.js';
import FormEdit from '../view/form-edit';
import TripPoint from '../view/trip-point';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #mode = Mode.DEFAULT;

  #destinations = null;
  #offerDetails = null;
  #userViewContainer = null;

  #pointComponent = null;
  #pointEditComponent = null;
  #prevPointComponent = null;
  #prevPointEditComponent = null;

  constructor (destinations, offerDetails, userViewContainer) {
    this.#destinations = destinations;
    this.#offerDetails = offerDetails;
    this.#userViewContainer = userViewContainer;
  }

  init (point) {
    this.point = point;

    this.#prevPointComponent = this.#pointComponent;
    this.#prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new TripPoint(this.#destinations, this.#offerDetails, this.point);
    this.#pointEditComponent = new FormEdit(this.#destinations, this.#offerDetails, this.point);

    this.#pointComponent.setClickHandler(this.#setClickHandler);
    this.#pointEditComponent.setEditClickHandler(this.#setEditClickHandler);


    if (this.#prevPointComponent === null || this.#prevPointEditComponent === null) {
      render(this.#pointComponent, this.#userViewContainer.element);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, this.#prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, this.#prevPointEditComponent);
      this.#mode = Mode.DEFAULT;
    }

    remove(this.#prevPointComponent);
    remove(this.#prevPointEditComponent);
  }

  #renderPoint = () => {
    render(this.#pointComponent, this.#userViewContainer.element);
  };

  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #setClickHandler = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #setEditClickHandler = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };
}
