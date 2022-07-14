// @ts-check
//

import { createPoint } from "./point";

let createMapper = (height) => {
  return (pt) => {
    return createPoint(pt.x(), height - pt.y());
  };
};

export const mirrorShapes = (height, shapes) => {
  let mapper = createMapper(height);
  return shapes.map(s => s.transpose(mapper));
};
