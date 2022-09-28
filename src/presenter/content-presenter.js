import { render, replace} from '../framework/render.js';
import MainTripSortItems from '../view/sorting.js';
import UserViewContainer from '../view/user-view-container.js';
import FutureViewContainer from '../view/future-view-container.js';
import ListEmpty from '../view/list-empty-view.js';
import PointPresenter from './point-presenter.js';
import HeaderFilterButtonEverything from '../view/filter-everything-view.js';
import HeaderFilterButtonFuture from '../view/filter-future-view';

export default class ContentPresenter {
  #appHeaderElement = null;
  #appMainElement = null;
  #destinationsModel = null;
  #offersTypeModel = null;
  #pointModel = null;
  #filterEverythingComponent = null;
  #filterFutureComponent = null;

  #mainTripSortItems = new MainTripSortItems();
  #userViewContainer = new UserViewContainer();
  #futureViewContainer = new FutureViewContainer();
  #listEmpty = new ListEmpty();

  #destinations = [];
  #offersDetails = [];
  #points = [];

  init = (appHeaderElement, appMainElement, destinationsModel, offersTypeModel, pointModel) => {
    this.#appHeaderElement = appHeaderElement;
    this.#appMainElement = appMainElement;

    this.#destinationsModel = destinationsModel;
    this.#destinations = [...this.#destinationsModel.destinations];

    this.#offersTypeModel = offersTypeModel;
    this.#offersDetails = [...this.#offersTypeModel.offersType];

    this.#pointModel = pointModel;
    this.#points = [...this.#pointModel.points];

    this.#filterEverythingComponent = new HeaderFilterButtonEverything();
    this.#filterFutureComponent = new HeaderFilterButtonFuture();

    this.#filterEverythingComponent.setClickEverythingHandler(this.#setClickEverythingHandler);
    this.#filterFutureComponent.setClickFutureHandler(this.#setClickFutureHandler);

    render(this.#filterFutureComponent, this.#filterEverythingComponent.element);
    render(this.#filterEverythingComponent, this.#appHeaderElement);


    render(this.#mainTripSortItems, this.#appMainElement);
    render(this.#userViewContainer, this.#appMainElement);
    render(this.#futureViewContainer, this.#appMainElement);

    if (this.#points.length === 0) {
      render(this.#listEmpty, this.#userViewContainer.element);
    } else {
      this.#points.forEach((point) => {

        const destination = this.#destinations[0];
        const offerDetails = this.#offersDetails[0];


        const pointPresenter = new PointPresenter(destination, offerDetails, this.#destinations, this.#offersDetails, this.#userViewContainer, this.#futureViewContainer);
        pointPresenter.init(point);

        this.#destinations.shift();
        this.#offersDetails.shift();
      });

    }

  };

  #everything = () => {
    replace(this.#futureViewContainer, this.#userViewContainer);
  };

  #future = () => {
    replace(this.#userViewContainer, this.#futureViewContainer);
  };

  #setClickEverythingHandler = () => {
    this.#everything();
  };

  #setClickFutureHandler = () => {
    this.#future();
  };
}
