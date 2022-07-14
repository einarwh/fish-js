// @ts-check
//

export const blank = (_) => { return []; }

export const turn = (picture) => {
  return (box) => {
    return picture(box.turn());
  };
};

export const flip = (picture) => {
  return (box) => {
    return picture(box.flip());
  };
};

export const toss = (picture) => {
  return (box) => {
    return picture(box.toss());
  };
};

export const aboveRatio = (m, n, p1, p2) => {
  return (box) => {
    let f = m / (m + n);
    let [top, bot] = box.splitVertically(f);
    return p1(top).concat(p2(bot));
  };
};

export const above = (p1, p2) => {
  return aboveRatio(1, 1, p1, p2);
};

export const besideRatio = (m, n, p1, p2) => {
  return (box) => {
    let f = m / (m + n);
    let [left, right] = box.splitHorizontally(f);
    return p1(left).concat(p2(right));
  };
};

export const beside = (p1, p2) => {
  return besideRatio(1, 1, p1, p2);
};

export const quartet = (nw, ne, sw, se) => {
  return above(beside(nw, ne || nw), beside(sw || nw, se || nw));
};

export const row = (...ps) => {
  let [h, ...t] = ps;
  if (t.length == 0) {
    return h;
  }
  else {
    return besideRatio(1, t.length, h, row.apply(this, t));
  }
}

export const column = (...ps) => {
    let [h, ...t] = ps;
    if (t.length == 0) {
        return h;
    }
    else {
        return aboveRatio(1, t.length, h, column.apply(this, t));
    }
}

export const nonet = (nw, nm, ne, mw, mm, me, sw, sm, se) => {
    return column(
        row(nw, nm, ne),
        row(mw, mm, me),
        row(sw, sm, se));
}

export const over = (p1, p2) => {
    return (box) => {
        return p1(box).concat(p2(box));
    };
};

export const ttile = (p) => {
    let pn = flip(toss(p));
    let pe = turn(turn(turn(pn)));
    return over(pe, over(pn, p));
};

export const utile = (p) => {
    let pn = flip(toss(p));
    let pw = turn(pn);
    let ps = turn(pw);
    let pe = turn(ps);
    return over(pe, over(ps, over(pw, pn)));
};

export const side = (n, p) => {
    if (n == 0) {
        return blank;
      } else {
        let s = side(n - 1, p);
        let t = ttile(p);
        return quartet(s, s, turn(t), t);
      };
};

export const corner = (n, p) => {
    if (n == 0) {
        return blank;
      } else {
        let c = corner(n - 1, p);
        let s = side(n - 1, p);
        return quartet(c, s, turn(s), utile(p));
      };  
};

export const squareLimit = (n, p) => {
    let nw = corner(n, p);
    let sw = turn(nw);
    let se = turn(sw);
    let ne = turn(se);
    let nm = side(n, p);
    let mw = turn(nm);
    let sm = turn(mw);
    let me = turn(sm);
    let mm = utile(p);
    return nonet(nw, nm, ne, mw, mm, me, sw, sm, se);
};
