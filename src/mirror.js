// @ts-check
//

import { createPoint } from "./point";

let createMapper = (height) => {
  return (pt) => {
    return createPoint(pt.x(), height - pt.y());
  };
};

export const mirrorShapes = (height, styledShapes) => {
  let mapper = createMapper(height);
  let mirroredShapes = styledShapes.map(s => { 
    console.log("mirroring...");
    console.log(s);
    return { style : s.style, shape: s.shape.transpose(mapper) }; 
  });
  return mirroredShapes;
};
