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
    toSvgElement: () => {
      const el = createSvgElement("polygon");
      let strPoints = points.map(p => p.toString());
      let pointsStr = strPoints.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("points", pointsStr);
      el.setAttribute("stroke", "black");
      el.setAttribute("fill", "none");
      return el;
    }
  });
};
