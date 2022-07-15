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

export const createPicture = (shapes) => {
  return (lens) => {
    let box = lens.box;
    let hue = lens.hue;
    let mapper = createMapper(box);
    let styled = shapes.map(s => { 
      return { style: s.styleFn(lens), shape: s.shape.transpose(mapper) };
    });
    return styled;
  };
};
