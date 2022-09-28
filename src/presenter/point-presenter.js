import {render, replace, remove} from '../framework/render.js';
import FormEdit from '../view/form-edit';
import TripPoint from '../view/trip-point';
import dayjs from 'dayjs';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #mode = Mode.DEFAULT;


  #destinations = null;
  #offersDetails = null;
  #destination = null;
  #offerDetails = null;
  #userViewContainer = null;
  #futureViewContainer = null;

  #pointComponent = null;
  #pointEditComponent = null;
  #prevPointComponent = null;
  #prevPointEditComponent = null;

  constructor (destination, offerDetails, destinations, offersDetails, userViewContainer, futureViewContainer) {
    this.#destination = destination;
    this.#offerDetails = offerDetails;

    this.#destinations = destinations;
    this.#offersDetails = offersDetails;
    this.#userViewContainer = userViewContainer;
    this.#futureViewContainer = futureViewContainer;
  }

  init (point) {
    this.point = point;

    this.#prevPointComponent = this.#pointComponent;
    this.#prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new TripPoint(this.#destination, this.#offerDetails, this.point);
    this.#pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, this.point);

    this.#pointComponent.setClickHandler(this.#setClickHandler);
    this.#pointEditComponent.setEditClickHandler(this.#setEditClickHandler);


    if (this.#prevPointComponent === null || this.#prevPointEditComponent === null) {
      render(this.#pointComponent, this.#userViewContainer.element);
      if (dayjs(point.dateFrom) < dayjs()) {
        render(this.#pointComponent, this.#futureViewContainer.element);
        return;
      }
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
