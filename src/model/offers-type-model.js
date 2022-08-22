import { createOffersByType } from '../mock/fish-data';

export default class OffersTypeModel {
  offersTypeArray = Array.from({length: 3}, createOffersByType);

  getOffersType = () => this.offersTypeArray;
}
