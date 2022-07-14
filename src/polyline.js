// @ts-check
//

import { createSvgElement } from "./svg";

export const createPolyline = (points) => {
  return ({
    what: "polyline",
    shape: "polyline",
    points: () => points,
    transpose: (mapper) => {
      console.log("transpose polyline...");
      let transposed = points.map(mapper);
      return createPolyline(transposed);
    },
    toSvgElement: () => {
      const el = createSvgElement("polyline");
      let strPoints = points.map(p => p.toString());
      let pointsStr = strPoints.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("points", pointsStr);
      el.setAttribute("stroke", "black");
      el.setAttribute("fill", "none");
      return el;
    }
  });
};
