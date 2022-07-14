// @ts-check
//

import { createSvgElement } from "./svg";

export const createPolygon = (points) => {
  return ({
    what: "polygon",
    shape: "polygon",
    points: () => points,
    transpose: (mapper) => {
      console.log("transpose polygon...");
      let transposed = points.map(mapper);
      return createPolygon(transposed);
    },
    toSvgElement: (style) => {
      const el = createSvgElement("polygon");
      let strPoints = points.map(p => p.toString());
      let pointsStr = strPoints.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("points", pointsStr);
      for (const prop in style) {
        el.setAttribute(prop, style[prop]);
      }
      return el;
    }
  });
};
