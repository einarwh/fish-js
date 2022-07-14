// @ts-check
//

export const createCurve = (startPoint, controlPoint1, controlPoint2, endPoint) => {
  return ({
    shape: "curve",
    startPoint: startPoint,
    controlPoint1: controlPoint1, 
    controlPoint2: controlPoint2,
    endPoint: endPoint
  });
};
