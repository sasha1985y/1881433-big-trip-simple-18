import HeaderFilterButtons from '../view/filters.js';
import MainTripSortItems from '../view/sorting.js';
import UserViewContainer from '../view/user-view-container.js';
import AddForm from '../view/add-form.js';
import FormEdit from '../view/form-edit.js';
import TripPoint from '../view/trip-point.js';
import {render} from '../render.js';

export default class ContentPresenter {

  headerFilterButtons = new HeaderFilterButtons();
  mainTripSortItems = new MainTripSortItems();
  addForm = new AddForm();

  userViewContainer = new UserViewContainer();

  init = (appContainer, destinationsModel, offersTypeModel) => {
    this.appContainer = appContainer;
    this.appContainer.headerFilterButtons = document.querySelector('.trip-controls__filters');
    this.appContainer.mainTripSortItems = document.querySelector('.trip-events');

    this.destinationsModel = destinationsModel;
    this.destinations = [...this.destinationsModel.getDestinations()];

    this.offersTypeModel = offersTypeModel;
    this.offersType = [...this.offersTypeModel.getOffersType()];


    render(this.headerFilterButtons, this.appContainer.headerFilterButtons);
    render(this.mainTripSortItems, this.appContainer.mainTripSortItems);

    render(this.userViewContainer, this.appContainer.mainTripSortItems);
    this.appContainer.userViewContainer = document.querySelector('.trip-events__list');


    for (let j = 0; j < 1; j++) {
      render(new FormEdit(this.destinations[j], this.offersType[j]), this.appContainer.userViewContainer);
    }


    for (let i = 0; i < this.destinations.length; i++) {
      render(new TripPoint(this.destinations[i], this.offersType[i]), this.appContainer.userViewContainer);
    }

  };

}
