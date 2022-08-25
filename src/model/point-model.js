import { createPointIdPlus } from '../mock/fish-data';

export default class PointModel {
  pointsArray = Array.from(createPointIdPlus());

  getPoints = () => this.pointsArray;
}
