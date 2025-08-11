import { render } from "@testing-library/react";
import DonutProgress from "./donut-progress";

function getDashoffset(el: SVGCircleElement) {
  return parseFloat(el.getAttribute("stroke-dashoffset") || "0");
}

test("вычисляет правильный strokeDashoffset для 50%", () => {
  const { container } = render(<DonutProgress value={50} thickness={10} showLabel={false} />);
  // второй circle внутри <g> — прогресс
  const circles = container.querySelectorAll("circle");
  const progress = circles[circles.length - 1] as SVGCircleElement;
  const r = parseFloat(progress.getAttribute("r")!);
  const c = 2 * Math.PI * r;
  expect(getDashoffset(progress)).toBeCloseTo(c * 0.5, 3);
});
