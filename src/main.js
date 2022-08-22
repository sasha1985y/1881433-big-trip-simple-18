import ContentPresenter from './presenter/content-presenter.js';

import DestinationsModel from './model/destinations-model.js';

import OffersTypeModel from './model/offers-type-model.js';

const appMainElement = document.querySelector('.trip-events');

const contentPresenter = new ContentPresenter();

const destinationsModel = new DestinationsModel();

const offersTypeModel = new OffersTypeModel();

contentPresenter.init(appMainElement, destinationsModel, offersTypeModel);
