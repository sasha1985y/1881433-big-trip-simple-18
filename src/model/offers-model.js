import { createOffer } from '../mock/fish-data';

export default class OffersModel {
  offersArray = Array.from({length: 3}, createOffer);

  getOffers = () => this.offersArray;
}
