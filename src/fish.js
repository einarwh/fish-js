// @ts-check
//
import { createPath, createCurveToCommand, createMoveToCommand } from "./path";
import { createPoint } from "./point";

let M = (x, y) => {
  return createMoveToCommand(createPoint(x, y));  
};

let C = (x1, y1, x2, y2, x3, y3) => {
  return createCurveToCommand(createPoint(x1, y1), createPoint(x2, y2), createPoint(x3, y3));
};

export const fish = () => {

  let paths = 
    [ 
      createPath(
        M(0.116, 0.702), 
        C(0.260, 0.295, 0.330, 0.258, 0.815, 0.078)),
      createPath(
        M(0.564, 0.032),
        C(0.730, 0.056, 0.834, 0.042, 1.000, 0.000)),
      createPath(
        M(0.250, 0.250), 
        C(0.372, 0.194, 0.452, 0.132, 0.564, 0.032)),
      createPath(
        M(0.000, 0.000), 
        C(0.110, 0.110, 0.175, 0.175, 0.250, 0.250)),
      createPath(
        M(-0.250, 0.250),
        C(-0.150, 0.150, -0.090, 0.090, 0.000, 0.000)),
      createPath(
        M(-0.250, 0.250),
        C(-0.194, 0.372, -0.132, 0.452, -0.032, 0.564)),
      createPath(
        M(-0.032, 0.564),
        C(0.055, 0.355, 0.080, 0.330, 0.250, 0.250)),
      createPath(
        M(-0.032, 0.564),
        C(-0.056, 0.730, -0.042, 0.834, 0.000, 1.000)),    
      createPath(M(0.000, 1.000), C(0.104, 0.938, 0.163, 0.893, 0.234, 0.798)),
      createPath(M(0.234, 0.798), C(0.368, 0.650, 0.232, 0.540, 0.377, 0.377)),
      createPath(M(0.377, 0.377), C(0.400, 0.350, 0.450, 0.300, 0.500, 0.250)),
      createPath(M(0.500, 0.250), C(0.589, 0.217, 0.660, 0.208, 0.766, 0.202)),
      createPath(M(0.766, 0.202), C(0.837, 0.107, 0.896, 0.062, 1.000, 0.000)),
      createPath(M(0.234, 0.798), C(0.340, 0.792, 0.411, 0.783, 0.500, 0.750)),
      createPath(M(0.500, 0.750), C(0.500, 0.625, 0.500, 0.575, 0.500, 0.500)),
      createPath(M(0.500, 0.500), C(0.460, 0.460, 0.410, 0.410, 0.377, 0.377)),
      createPath(M(0.315, 0.710), C(0.378, 0.732, 0.426, 0.726, 0.487, 0.692)),
      createPath(M(0.340, 0.605), C(0.400, 0.642, 0.435, 0.647, 0.489, 0.626)),
      createPath(M(0.348, 0.502), C(0.400, 0.564, 0.422, 0.568, 0.489, 0.563)),
      createPath(M(0.451, 0.418), C(0.465, 0.400, 0.480, 0.385, 0.490, 0.381)),
      createPath(M(0.421, 0.388), C(0.440, 0.350, 0.455, 0.335, 0.492, 0.325)),
      createPath(
        M(-0.170, 0.237),
        C(-0.125, 0.355, -0.065, 0.405, 0.002, 0.436)),
      createPath(
        M(-0.121, 0.188),
        C(-0.060, 0.300, -0.030, 0.330, 0.040, 0.375)),
      createPath(
        M(-0.058, 0.125),
        C(-0.010, 0.240, 0.030, 0.280, 0.100, 0.321)),
      createPath(
        M(-0.022, 0.063),
        C(0.060, 0.200, 0.100, 0.240, 0.160, 0.282)),
      createPath(M(0.053, 0.658), C(0.075, 0.677, 0.085, 0.687, 0.098, 0.700)),
      createPath(M(0.053, 0.658), C(0.042, 0.710, 0.042, 0.760, 0.053, 0.819)),
      createPath(M(0.053, 0.819), C(0.085, 0.812, 0.092, 0.752, 0.098, 0.700)),
      createPath(M(0.130, 0.718), C(0.150, 0.730, 0.175, 0.745, 0.187, 0.752)),
      createPath(M(0.130, 0.718), C(0.110, 0.795, 0.110, 0.810, 0.112, 0.845)),
      createPath(M(0.112, 0.845), C(0.150, 0.805, 0.172, 0.780, 0.187, 0.752)) ];
  
  return paths;
};


/**
 * 
 * type pair = (float, float);

let fish: list(Shape.shape) = {
  let curves = [
    curve(
      ((-0.170), 0.237),
      ((-0.125), 0.355),
      ((-0.065), 0.405),
      (0.002, 0.436),
    ),
    curve(
      ((-0.121), 0.188),
      ((-0.060), 0.300),
      ((-0.030), 0.330),
      (0.040, 0.375),
    ),
    curve(
      ((-0.058), 0.125),
      ((-0.010), 0.240),
      (0.030, 0.280),
      (0.100, 0.321),
    ),
    curve(
      ((-0.022), 0.063),
      (0.060, 0.200),
      (0.100, 0.240),
      (0.160, 0.282),
    ),
  ];
  curves |> List.map(c => Shape.CurveShape(c));
};
 */