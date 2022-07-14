// @ts-check
//

import { createSvgElement } from "./svg";

export const createMoveToCommand = (point) => {
  return ({
    what: "moveTo",
    command: "moveTo",
    transpose: (mapper) => {
      return createMoveToCommand(mapper(point));
    },
    toString: () => {      
      return `M${point.x()} ${point.y()}`;
    }
  });
};

export const createCurveToCommand = (cp1, cp2, ep) => {
  return ({
    what: "curveTo",
    command: "curveTo",
    transpose: (mapper) => {
      return createCurveToCommand(mapper(cp1), mapper(cp2), mapper(ep));
    },
    toString: () => {
      return `C ${cp1.x()} ${cp1.y()}, ${cp2.x()} ${cp2.y()}, ${ep.x()} ${ep.y()}`;
    }
  });
};

export const createPath = (...commands) => {
  return ({
    what: "path",
    shape: "path",
    commands: () => commands,
    transpose: (mapper) => {
      let transposed = commands.map(c => c.transpose(mapper));
      return createPath.apply(null, transposed);
    },
    toSvgElement: () => {
      const el = createSvgElement("path");
      let strs = commands.map(cmd => cmd.toString());
      let d = strs.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("d", d);
      el.setAttribute("stroke", "black");
      el.setAttribute("fill", "none");
      return el;
    }
  });
};
