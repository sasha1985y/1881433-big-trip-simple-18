import { render } from './render.js';
import ContentPresenter from './presenter/content-presenter.js';

import HeaderFilterButtons from './view/filters.js';

import DestinationsModel from './model/destinations-model.js';
import OffersTypeModel from './model/offers-type-model.js';
import PointModel from './model/point-model.js';

const appHeaderElement = document.querySelector('.trip-controls__filters');
const appMainElement = document.querySelector('.trip-events');

render(new HeaderFilterButtons(), appHeaderElement);

const contentPresenter = new ContentPresenter();

const destinationsModel = new DestinationsModel();
const offersTypeModel = new OffersTypeModel();
const pointModel = new PointModel();

contentPresenter.init(appMainElement, destinationsModel, offersTypeModel, pointModel);
