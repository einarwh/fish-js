// @ts-check
//

export const blank = (_) => { return []; }

export const turn = (picture) => {
  return (lens) => {
    return picture(lens.turn());
  };
};

export const flip = (picture) => {
  return (lens) => {
    return picture(lens.flip());
  };
};

export const toss = (picture) => {
  return (lens) => {
    return picture(lens.toss());
  };
};

export const aboveRatio = (m, n, p1, p2) => {
  return (lens) => {
    let f = m / (m + n);
    let [top, bot] = lens.splitVertically(f);
    return p1(top).concat(p2(bot));
  };
};

export const above = (p1, p2) => {
  return aboveRatio(1, 1, p1, p2);
};

export const besideRatio = (m, n, p1, p2) => {
  return (lens) => {
    let f = m / (m + n);
    let [left, right] = lens.splitHorizontally(f);
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
    return (lens) => {
        return p1(lens).concat(p2(lens));
    };
};

export const rehue = (p) => {
    return (lens) => {
        return p(lens.change());
    };
}

export const ttile = (p) => {
    let pn = flip(toss(p));
    let pe = turn(turn(turn(pn)));
    return over(pe, over(pn, p));
};

let ttileColor = (p, rehueN, rehueE) => {
    let pn = flip(toss(p));
    let pe = turn(turn(turn(pn)));
    return over(rehueE(pe), over(rehueN(pn), p));
};

export const ttileColor1 = (p) => {
    let rehueN = (p) => rehue(p);
    let rehueE = (p) => rehue(rehue(p));
    return ttileColor(p, rehueN, rehueE);
};

export const ttileColor2 = (p) => {
    let rehueN = (p) => rehue(rehue(p));
    let rehueE = (p) => rehue(p);
    return ttileColor(p, rehueN, rehueE);
};

export const utile = (p) => {
    let pn = flip(toss(p));
    let pw = turn(pn);
    let ps = turn(pw);
    let pe = turn(ps);
    return over(pe, over(ps, over(pw, pn)));
};

let utileColor = (p, rehueN, rehueW, rehueS, rehueE) => {
    let pn = flip(toss(p));
    let pw = turn(pn);
    let ps = turn(pw);
    let pe = turn(ps);
    return over(rehueE(pe), over(rehueS(ps), over(rehueW(pw), rehueN(pn))));
};

export const utileColor1 = (p) => {
    let rehueNS = (p) => rehue(rehue(p));
    let rehueWE = (p) => p;
    return utileColor(p, rehueNS, rehueWE, rehueNS, rehueWE);
};

export const utileColor2 = (p) => {
    let rehueN = (p) => p;
    let rehueW = (p) => rehue(rehue(p));
    let rehueS = rehue;
    let rehueE = rehueW;
    return utileColor(p, rehueN, rehueW, rehueS, rehueE);
};

export const utileColor3 = (p) => {
    let rehueN = (p) => rehue(rehue(p));
    let rehueW = (p) => p;
    let rehueS = rehue;
    let rehueE = rehueW;
    return utileColor(p, rehueN, rehueW, rehueS, rehueE);
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

let sideColor = (tt, rehueSW, rehueSE, n, p) => {
    let aux = (n, p) => {
        let t = tt(p);
        let r = n == 1 ? blank : aux (n - 1, p);
        return quartet(r, r, rehueSW(turn(t)), rehueSE(t));
    } 
    return aux(n, p);
}; 

export const sideColorNS = (n, p) => {
    let rehueSW = (p) => p;
    let rehueSE = rehue; 
    return sideColor(ttileColor1, rehueSW, rehueSE, n, p);
};

export const sideColorWE = (n, p) => {
    let rehueSW = (p) => rehue(rehue(p));
    let rehueSE = rehue; 
    return sideColor(ttileColor2, rehueSW, rehueSE, n, p);
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

let cornerColor = (ut, side1, side2, n, p) => {
    let u = ut(p);
    let fn = (x) => {
        let [c, ne, sw] = x == 1 
            ? [ blank, blank, blank ] 
            : [ fn(x - 1), side1(x - 1, p), side2(x - 1, p)];
        return quartet(c, ne, turn(sw), u);
    };
    return fn(n);
};

export const cornerColorNWSE = (n, p) => {
    return cornerColor(utileColor3, sideColorNS, sideColorWE, n, p);
};

export const cornerColorNESW = (n, p) => {
    return cornerColor(utileColor2, sideColorWE, sideColorNS, n, p);
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

export const squareLimitColor = (n, p) => {    
    let nw = cornerColorNWSE(n, p);
    let sw = turn(cornerColorNESW(n, p));
    let se = turn(turn(nw));
    let ne = turn(turn(sw));
    let nm = sideColorNS(n, p);
    let mw = turn(sideColorWE(n, p));
    let sm = turn(turn(nm));
    let me = turn(turn(mw));
    let mm = utileColor1(p);
    return nonet(nw, nm, ne, mw, mm, me, sw, sm, se);
};

export const sedecim = (p00, p01, p02, p03, p10, p11, p12, p13, p20, p21, p22, p23, p30, p31, p32, p33) => {
  return column(
    row(p00, p01, p02, p03), 
    row(p10, p11, p12, p13), 
    row(p20, p21, p22, p23), 
    row(p30, p31, p32, p33)); 
};