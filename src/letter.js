// @ts-check
//

import { createPolygon } from "./polygon";
import { createPoint } from "./point";

let createStyledPolygon = (pts) => {
  let getStrokeWidth = (box) => {
    let s = Math.max(box.b().len(), box.c().len());
    return s / 80.0;
  };  

  let getStyle = (lens) => {
    return {
      'stroke-width': getStrokeWidth(lens.box),
      'stroke': "green",
      'fill': "none"
    };
  };  

  return {
    styleFn: getStyle,
    shape: createPolygon(pts)
  };
};

export const fLetter = () => {
  let points = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.40, 0.20)
    , createPoint(0.40, 0.45)
    , createPoint(0.60, 0.45)
    , createPoint(0.60, 0.55)
    , createPoint(0.40, 0.55)
    , createPoint(0.40, 0.70)
    , createPoint(0.70, 0.70)
    , createPoint(0.70, 0.80)
    , createPoint(0.30, 0.80) ];
  return [ createStyledPolygon(points) ];
};

export const hLetter = () => {
  let points = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.40, 0.20)
    , createPoint(0.40, 0.45)
    , createPoint(0.60, 0.45)
    , createPoint(0.60, 0.20)
    , createPoint(0.70, 0.20)
    , createPoint(0.70, 0.80)
    , createPoint(0.60, 0.80)
    , createPoint(0.60, 0.55)
    , createPoint(0.40, 0.55)
    , createPoint(0.40, 0.80)
    , createPoint(0.30, 0.80) ];
  return [ createStyledPolygon(points) ];
};

export const eLetter = () => {
  let points = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.70, 0.20)
    , createPoint(0.70, 0.30)
    , createPoint(0.40, 0.30)
    , createPoint(0.40, 0.45)
    , createPoint(0.60, 0.45)
    , createPoint(0.60, 0.55)
    , createPoint(0.40, 0.55)
    , createPoint(0.40, 0.70)
    , createPoint(0.70, 0.70)
    , createPoint(0.70, 0.80)
    , createPoint(0.30, 0.80) ];
  return [ createStyledPolygon(points) ];
};

export const nLetter = () => {
  let points = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.40, 0.20)
    , createPoint(0.40, 0.60)
    , createPoint(0.60, 0.20)
    , createPoint(0.70, 0.20)
    , createPoint(0.70, 0.80)
    , createPoint(0.60, 0.80)
    , createPoint(0.60, 0.40)
    , createPoint(0.40, 0.80)
    , createPoint(0.30, 0.80) ];
  return [ createStyledPolygon(points) ];
};

export const dLetter = () => {
  let pts1 = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.55, 0.20)
    , createPoint(0.70, 0.35)
    , createPoint(0.70, 0.65)
    , createPoint(0.55, 0.80)
    , createPoint(0.30, 0.80) ];
  let pts2 = 
    [ createPoint(0.40, 0.30)
    , createPoint(0.52, 0.30)
    , createPoint(0.60, 0.38)
    , createPoint(0.60, 0.62)
    , createPoint(0.52, 0.70)
    , createPoint(0.40, 0.70) ];
  let all = [ pts1, pts2 ];
  return all.map(createStyledPolygon);
};

export const rLetter = () => {
  let pts1 = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.40, 0.20)
    , createPoint(0.40, 0.45)
    , createPoint(0.45, 0.45)
    , createPoint(0.60, 0.20)
    , createPoint(0.70, 0.20)
    , createPoint(0.55, 0.45)
    , createPoint(0.70, 0.45)
    , createPoint(0.70, 0.80)
    , createPoint(0.30, 0.80) ];
  let pts2 = 
    [ createPoint(0.40, 0.55)
    , createPoint(0.60, 0.55)
    , createPoint(0.60, 0.70)
    , createPoint(0.40, 0.70) ];
  let all = [ pts1, pts2 ];
  return all.map(createStyledPolygon);  
};

export const sLetter = () => {
  let points = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.70, 0.20)
    , createPoint(0.70, 0.55)
    , createPoint(0.40, 0.55)
    , createPoint(0.40, 0.70)
    , createPoint(0.70, 0.70)
    , createPoint(0.70, 0.80)
    , createPoint(0.30, 0.80)
    , createPoint(0.30, 0.45)
    , createPoint(0.60, 0.45)
    , createPoint(0.60, 0.30)
    , createPoint(0.30, 0.30) ];
  return [ createStyledPolygon(points) ];
};

export const oLetter = () => {
  let pts1 = 
    [ createPoint(0.30, 0.20)
    , createPoint(0.70, 0.20)
    , createPoint(0.70, 0.80)
    , createPoint(0.30, 0.80) ];
  let pts2 = 
    [ createPoint(0.40, 0.30)
    , createPoint(0.60, 0.30)
    , createPoint(0.60, 0.70)
    , createPoint(0.40, 0.70) ];
  let all = [ pts1, pts2 ];
  return all.map(createStyledPolygon);  
};