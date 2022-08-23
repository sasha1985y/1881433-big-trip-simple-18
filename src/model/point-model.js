import { createPoint } from "../mock/fish-data";

export default class PointModel {
  pointsArray = Array.from({length: 3}, createPoint);

  getPoints = () => this.pointsArray;
}
