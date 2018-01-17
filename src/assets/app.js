import CircleModal from "./circleModal";
let dataSource = [];
const SVGElement = document.querySelector("svg");
class OeratSvg {
  handleSetAttribute(data, circleNode) {
    data.x && circleNode.setAttribute("cx", data.x);
    data.y && circleNode.setAttribute("cy", data.y);
    data.r && circleNode.setAttribute("r", data.r);
    data.stroke && circleNode.setAttribute("stroke", data.stroke);
    data.strokeWidth &&
      circleNode.setAttribute("stroke-width", data.strokeWidth);
    data.fill && circleNode.setAttribute("fill", data.fill);
  }
  create(obj) {
    let data = new CircleModal(obj);
    dataSource.push(data);
    const circleNode = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.handleSetAttribute(data, circleNode);
    circleNode.id = data.id;
    SVGElement.appendChild(circleNode);
  }
  read(id) {
    if (id) {
      for (let i in dataSource) {
        if (dataSource[i].id == id) {
          return dataSource[i];
        }
      }
    } else {
      return dataSource;
    }
  }
  update(obj) {
    if (obj) {
      for (let i in dataSource) {
        if (dataSource[i].id == obj.id) {
          dataSource[i].x = (obj.x && obj.x) || dataSource[i].x;
          dataSource[i].y = (obj.y && obj.y) || dataSource[i].y;
          dataSource[i].r = (obj.r && obj.r) || dataSource[i].r;
          dataSource[i].stroke =
            (obj.stroke && obj.stroke) || dataSource[i].stroke;
          dataSource[i].strokeWidth =
            (obj.strokeWidth && obj.strokeWidth) || dataSource[i].strokeWidth;
          dataSource[i].fill = (obj.fill && obj.fill) || dataSource[i].fill;
          const circleNode = document.querySelector(
            'circle[id="' + obj.id + '"]'
          );
          this.handleSetAttribute(dataSource[i], circleNode);
        }
      }
    }
  }
  delete(id) {
    if (id) {
      for (let i in dataSource) {
        if (dataSource[i].id == id) {
          let removeNode = document.querySelector('circle[id="' + id + '"]');
          SVGElement.removeChild(removeNode);
          dataSource.splice(i);
        }
      }
    } else {
      const SVGElement = document.querySelector("svg");
      dataSource = [];
      SVGElement.innerHTML = "";
    }
  }
}
window.operatSvg = new OeratSvg();
