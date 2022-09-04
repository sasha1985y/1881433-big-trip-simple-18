import MainTripSortItems from '../view/sorting.js';
import UserViewContainer from '../view/user-view-container.js';
import TripPoint from '../view/trip-point.js';
import FormEdit from '../view/form-edit.js';
import {render} from '../render.js';

export default class ContentPresenter {

  #appContainer = null;
  #destinationsModel = null;
  #offersTypeModel = null;
  #pointModel = null;

  #mainTripSortItems = new MainTripSortItems();
  #userViewContainer = new UserViewContainer();

  #destinations = [];
  #offersDetails = [];
  #points = [];

  init = (appContainer, destinationsModel, offersTypeModel, pointModel) => {
    this.#appContainer = appContainer;

    this.#destinationsModel = destinationsModel;
    this.#destinations = [...this.#destinationsModel.destinations];

    this.#offersTypeModel = offersTypeModel;
    this.#offersDetails = [...this.#offersTypeModel.offersType];

    this.#pointModel = pointModel;
    this.#points = [...this.#pointModel.points];

    render(this.#mainTripSortItems, this.#appContainer);
    render(this.#userViewContainer, this.#appContainer);

    //render(new FormEdit(this.#destinations, this.#offersDetails, this.#points[0]), this.#userViewContainer.element);

    for (let i = 0; i < this.#points.length; i++) {
      //render(new TripPoint(this.#destinations[i], this.#offersDetails[i], this.#points[i]), this.#userViewContainer.element);
      this.#renderPoint(this.#destinations[i], this.#offersDetails[i], this.#points[i]);
    }

  };

  #renderPoint = (destination, offerDetails, point) => {
    const pointComponent = new TripPoint(destination, offerDetails, point);
    const pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, this.#points[0]);
    const replacePointToForm = () => {
      this.#userViewContainer.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#userViewContainer.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__save-btn').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
    });

    render(pointComponent, this.#userViewContainer.element);
  };

}
