import { fLetter } from "./letter";

const render = (() => {
  // create the svg element
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // set width and height
  svg1.setAttribute("width", "600");
  svg1.setAttribute("height", "600");

  // create a circle
  const cir1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  cir1.setAttribute("cx", "80");
  cir1.setAttribute("cy", "80");
  cir1.setAttribute("r", "30");
  cir1.setAttribute("fill", "red");

  // attach it to the container
  svg1.appendChild(cir1);

  let f = fLetter();
  let fElement = f.toSvgElement();
  svg1.appendChild(fElement);

  // attach container to document
  document.getElementById("fungeo").appendChild(svg1);
});
