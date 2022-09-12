/*import FormEdit from '../view/form-edit';
import TripPoint from '../view/trip-point';
import UserViewContainer from '../view/user-view-container';


export default class PointPresenter {
  #destinationsModel = null;
  #offersTypeModel = null;
  #pointModel = null;
  #pointComponent = null;
  #pointEditComponent = null;

  #destinations = [];
  #offersDetails = [];
  #points = [];

  #userViewContainer = new UserViewContainer();

  init = (destinationsModel, offersTypeModel, pointModel) => {

    this.#destinationsModel = destinationsModel;
    this.#destinations = [...this.#destinationsModel.destinations];

    this.#offersTypeModel = offersTypeModel;
    this.#offersDetails = [...this.#offersTypeModel.offersType];

    this.#pointModel = pointModel;
    this.#points = [...this.#pointModel.points];

    const pointComponent = new TripPoint(destination, offerDetails, point);
   const pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, this.#points[0]);


    //this.#pointComponent = new TripPoint(destination, offerDetails, point);
    //this.#pointEditComponent = new FormEdit(this.#destinations, this.#offersDetails, this.#points[0]);

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

    //const prevPointComponent = this.#pointComponent;
    //const prevEditPointComponent = this.#pointEditComponent;

    //if (prevPointComponent === null || prevEditPointComponent === null) {
    //render(this.#userViewContainer, this.#pointComponent, RenderPosition.BEFOREEND)
    //return;
    //}

    //remove(prevPointComponent);
    //remove(prevEditPointComponent);
  };
}*/
