import uuid from "uuid";
export default class CircleModal {
  constructor(obj) {
    this.id = uuid.v4();
    this.x = (obj && obj.x && obj.x) || 60;
    this.y = (obj && obj.y && obj.y) || 60;
    this.r = (obj && obj.r && obj.r) || 10;
    this.stroke = (obj && obj.stroke && obj.stroke) || "black";
    this.strokeWidth = (obj && obj.strokeWidth && obj.strokeWidth) || 1;
    this.fill = (obj && obj.fill && obj.fill) || "red";
  }
}
