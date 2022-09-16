import { render, replace} from '../framework/render.js';
import MainTripSortItems from '../view/sorting.js';
import UserViewContainer from '../view/user-view-container.js';
import TripPoint from '../view/trip-point.js';
import FormEdit from '../view/form-edit.js';
import ListEmpty from '../view/list-empty-view.js';

export default class ContentPresenter {

  #appContainer = null;
  #destinationsModel = null;
  #offersTypeModel = null;
  #pointModel = null;

  #mainTripSortItems = new MainTripSortItems();
  #userViewContainer = new UserViewContainer();
  #listEmpty = new ListEmpty();

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


    if (this.#points.length === 0) {
      render(this.#listEmpty, this.#userViewContainer.element);
    } else {
      for (let i = 0; i < this.#points.length; i++) {
        this.#renderPoint(this.#destinations[i], this.#offersDetails[i], this.#points[i]);
      }
    }

  };

  #renderPoint = (destination, offerDetails, point) => {

    const pointComponent = new TripPoint(destination, offerDetails, point);
    const pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, point);

    const replacePointToForm = () => {
      replace(pointEditComponent, pointComponent);
    };

    const replaceFormToPoint = () => {
      replace(pointComponent, pointEditComponent);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.setClickHandler(() => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.setEditClickHandler(() => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.#userViewContainer.element);

  };

}

