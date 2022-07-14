import { fLetter, hLetter, eLetter, nLetter, dLetter, rLetter, sLetter, oLetter } from "./letter";
import { george } from "./figure";
import { fish } from "./fish";
import { createPicture } from "./magic";
import { createBox } from "./box";
import { createVector } from "./vector";
import { mirrorShapes } from "./mirror";
import { blank, turn, flip, toss, above, beside, quartet, row, column, nonet, over, ttile, utile, side, corner, squareLimit } from "./picture";

function component() {
    //const element = document.createElement('div');
  
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // set width and height
    svgElement.setAttribute("width", "600");
    svgElement.setAttribute("height", "600");
    
    let a = createVector(100, 100);
    let b = createVector(300, 0);
    let c = createVector(0, 300);
    let box = createBox(a, b, c);
    
    // let nw = picture;
    // let ne = turn(turn(flip(picture)));
    // let sw = turn(turn(picture));
    // let se = flip(picture);
    let fPict = createPicture(fLetter());
    let hPict = createPicture(hLetter());
    let ePict = createPicture(eLetter());
    let nPict = createPicture(nLetter());
    let dPict = createPicture(dLetter());
    let rPict = createPicture(rLetter());
    let sPict = createPicture(sLetter());
    let oPict = createPicture(oLetter());
    let fishPict = createPicture(fish());
    let picture = nonet(hPict, ePict, nPict, dPict, ePict, rPict, sPict, oPict, nPict);
    //let rendering = column(row(hPict, ePict, nPict), row(dPict, ePict, rPict), row(sPict, oPict, nPict))(box);
    let rendering = squareLimit(3, fishPict)(box);
    let mirrored = mirrorShapes(600, rendering);
    let childElements = mirrored.map(r => r.toSvgElement());
    for (let child of childElements) {
        svgElement.appendChild(child);
    }
  
    return svgElement;
  }
  
  document.body.appendChild(component());