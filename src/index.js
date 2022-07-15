import { fLetter, hLetter, eLetter, nLetter, dLetter, rLetter, sLetter, oLetter } from "./letter";
import { george } from "./figure";
import { simpleFish } from "./fish";
import { fancyFish } from "./fish3";
import { createPicture } from "./magic";
import { createBox } from "./box";
import { createLens } from "./lens";
import { createHue } from "./hue";
import { createVector } from "./vector";
import { mirrorShapes } from "./mirror";
import { blank, turn, flip, toss, above, beside, quartet, row, column, nonet, over, ttile, utile, side, corner, squareLimit, ttileColor1, ttileColor2, utileColor1, utileColor2, utileColor3, sideColorNS, sideColorWE, cornerColorNESW, cornerColorNWSE, squareLimitColor } from "./picture";

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
    
    let picture = createPicture(george());
    let nw = picture;
    let ne = turn(turn(flip(picture)));
    let sw = turn(turn(picture));
    let se = flip(picture);
    // let fPict = createPicture(fLetter());
    let hPict = createPicture(hLetter());
    let ePict = createPicture(eLetter());
    let nPict = createPicture(nLetter());
    let dPict = createPicture(dLetter());
    let rPict = createPicture(rLetter());
    let sPict = createPicture(sLetter());
    let oPict = createPicture(oLetter());
    let fishPict = createPicture(simpleFish());
    let fish3Pict = createPicture(fancyFish());
    let henderson = nonet(hPict, ePict, nPict, dPict, ePict, rPict, sPict, oPict, nPict);
    let georgePict = createPicture(george());
    //let rendering = column(row(hPict, ePict, nPict), row(dPict, ePict, rPict), row(sPict, oPict, nPict))(box);
    let hue = createHue("black");
    let lens = createLens(box, hue);
    let rendering = ttileColor2(fish3Pict)(lens);
    let mirrored = mirrorShapes(600, rendering);
    let childElements = mirrored.map(r => r.shape.toSvgElement(r.style));
    for (let child of childElements) {
        svgElement.appendChild(child);
    }
  
    return svgElement;
  }
  
  document.body.appendChild(component());
