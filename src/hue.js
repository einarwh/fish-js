// @ts-check
//

export const createHue = (color) => {
  return ({
    what: "hue",
    color: color,
    next: () => {
      switch (color) {
        case "black": createHue("grey"); break;
        case "grey": createHue("white"); break;
        case "white": createHue("black"); break;
        default: createHue(color);
      }
    }
  });
};
