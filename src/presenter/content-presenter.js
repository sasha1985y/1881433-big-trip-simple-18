import HeaderFilterButtons from '../view/filters.js';
import MainTripSortItems from '../view/sorting.js';
import UserViewContainer from '../view/user-view-container.js';
import FormEdit from '../view/form-edit.js';
import TripPoint from '../view/trip-point.js';
import {render} from '../render.js';

export default class ContentPresenter {

  headerFilterButtons = new HeaderFilterButtons();
  mainTripSortItems = new MainTripSortItems();
  formEdit = new FormEdit();
  userViewContainer = new UserViewContainer();

  init = (appContainer) => {
    this.appContainer = appContainer;
    this.appContainer.headerFilterButtons = document.querySelector('.trip-controls__filters');
    this.appContainer.mainTripSortItems = document.querySelector('.trip-events');

    render(this.headerFilterButtons, this.appContainer.headerFilterButtons);
    render(this.mainTripSortItems, this.appContainer.mainTripSortItems);
    render(this.userViewContainer, this.appContainer.mainTripSortItems);

    this.appContainer.userViewContainer = document.querySelector('.trip-events__list');

    render(this.formEdit, this.appContainer.userViewContainer);

    for (let i = 0; i < 3; i++) {
      render(new TripPoint(), this.appContainer.userViewContainer);
    }

  };

}
