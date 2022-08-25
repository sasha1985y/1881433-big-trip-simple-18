import { createDestinationIdPlus } from '../mock/fish-data';

export default class DestinationsModel {
  destinationsArray = Array.from(createDestinationIdPlus());

  getDestinations = () => this.destinationsArray;
}
