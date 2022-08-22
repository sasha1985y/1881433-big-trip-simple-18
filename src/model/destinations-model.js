import { createDestination } from '../mock/fish-data';

export default class DestinationsModel {
  destinationsArray = Array.from({length: 3}, createDestination);

  getDestinations = () => this.destinationsArray;
}
