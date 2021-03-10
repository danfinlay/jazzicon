import Color from "color";
import MersenneTwister from "mersenne-twister";

import DEFAULT_COLORS from "./colors";

const SHAPE_COUNT = 4;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const WOBBLE = 30;

function hueShift(
  colors: readonly string[],
  generator: MersenneTwister
): string[] {
  const amount = generator.random() * 30 - WOBBLE / 2;
  return colors.map((hex) => {
    const color = Color(hex);
    color.rotate(amount);
    return color.hexString();
  });
}

function removeRandomColor(
  colors: string[],
  generator: MersenneTwister
): string {
  const idx = Math.floor(colors.length * generator.random());
  return colors.splice(idx, 1)[0];
}

function genShape(
  remainingColors: string[],
  diameter: number,
  i: number,
  total: number,
  svg: SVGElement,
  generator: MersenneTwister
) {
  const center = diameter / 2;

  const shape = document.createElementNS(SVG_NAMESPACE, "rect");
  shape.setAttributeNS(null, "x", "0");
  shape.setAttributeNS(null, "y", "0");
  shape.setAttributeNS(null, "width", `${diameter}`);
  shape.setAttributeNS(null, "height", `${diameter}`);

  const firstRot = generator.random();
  const angle = Math.PI * 2 * firstRot;
  const velocity =
    (diameter / total) * generator.random() + (i * diameter) / total;

  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity;

  const translate = `translate(${tx} ${ty})`;

  // Third random is a shape rotation on top of all of that.
  const secondRot = generator.random();

  const rot = firstRot * 360 + secondRot * 180;
  const rotate = `rotate(${rot.toFixed(1)} ${center} ${center})`;
  const transform = translate + " " + rotate;
  shape.setAttributeNS(null, "transform", transform);
  const fill = removeRandomColor(remainingColors, generator);
  shape.setAttributeNS(null, "fill", fill);

  svg.appendChild(shape);
}

function newContainer(diameter: number, color: string): HTMLDivElement {
  const container = document.createElement("div");
  container.style.borderRadius = "50px";
  container.style.overflow = "hidden";
  container.style.padding = "0px";
  container.style.margin = "0px";
  container.style.width = `${diameter}px`;
  container.style.height = `${diameter}px`;
  container.style.display = "inline-block";
  container.style.background = color;
  return container;
}

export default function generateIdenticon(
  diameter: number,
  seed: number
): HTMLDivElement {
  const generator = new MersenneTwister(seed);
  const remainingColors = hueShift(DEFAULT_COLORS, generator);

  const container = newContainer(
    diameter,
    removeRandomColor(remainingColors, generator)
  );

  const svg = document.createElementNS(SVG_NAMESPACE, "svg");
  svg.setAttributeNS(null, "x", "0");
  svg.setAttributeNS(null, "y", "0");
  svg.setAttributeNS(null, "width", `${diameter}`);
  svg.setAttributeNS(null, "height", `${diameter}`);

  container.appendChild(svg);

  for (let i = 0; i < SHAPE_COUNT - 1; i++) {
    genShape(remainingColors, diameter, i, SHAPE_COUNT - 1, svg, generator);
  }

  return container;
}
