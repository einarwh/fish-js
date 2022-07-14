// @ts-check
//

import { createPoint } from "./point";

let createMapper = (box) => {
  let a = box.a();
  let b = box.b();
  let c = box.c();
  return (pt) => {
    let v = a.add(b.scale(pt.x()).add(c.scale(pt.y())));
    return createPoint(v.x(), v.y());
  };
};

let getStrokeWidth = (box) => {
  let s = Math.max(box.b().len(), box.c().len());
  return s / 50.0;
};

let getStyle = (box) => {
  return {
    strokeWidth: getStrokeWidth(box),
    strokeColor: "black"
  };
};

export const createPicture = (shapes) => {
  return (box) => {
    let mapper = createMapper(box);
    let style = getStyle(box);
    let transposed = shapes.map(s => s.transpose(mapper));
    return transposed;
  };
};
