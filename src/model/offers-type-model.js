import { createOffersByType } from '../mock/fish-data';
import { GLOBAL_INTEGER } from '../mock/fish-data';

export default class OffersTypeModel {
  offersTypeArray = Array.from({length: GLOBAL_INTEGER}, createOffersByType);

  getOffersType = () => this.offersTypeArray;
}
