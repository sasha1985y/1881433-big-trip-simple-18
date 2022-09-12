import MainTripSortItems from '../view/sorting.js';
import UserViewContainer from '../view/user-view-container.js';
import TripPoint from '../view/trip-point.js';
import FormEdit from '../view/form-edit.js';
import ListEmpty from '../view/list-empty-view.js';
import {render} from '../render.js';

export default class ContentPresenter {

  #appContainer = null;
  #destinationsModel = null;
  #offersTypeModel = null;
  #pointModel = null;
  #pointComponent = null;
  #pointEditComponent = null;

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

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#destinations[i], this.#offersDetails[i], this.#points[i]);
    }

    if (this.#points.length === 0) {
      render(this.#listEmpty, this.#userViewContainer.element);
    }

  };

  #renderPoint = (destination, offerDetails, point) => {
    const pointComponent = new TripPoint(destination, offerDetails, point);
    const pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, point);

    //this.#pointComponent = new TripPoint(destination, offerDetails, point);
    //this.#pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, this.#points[0]);

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#pointEditComponent;


    const replacePointToForm = () => {
      this.#userViewContainer.element.replaceChild(pointEditComponent.element, pointComponent.element);
    }

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



    //if (prevPointComponent === null || prevEditPointComponent === null) {
      //render( this.#pointComponent, this.#userViewContainer.element, RenderPosition.BEFOREEND);
    //}

    render(pointComponent, this.#userViewContainer.element);

    //remove(prevPointComponent);

  };

}
