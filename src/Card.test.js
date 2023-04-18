import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption="caption" src="img.png" currNum={1} totalNum={3} />);
});
// end

it("has the correct alt text & src", function () {
  const { container, debug } = render(
    <Card caption="caption" src="img.png" currNum={1} totalNum={3} />
  );
  const img = container.querySelector("img");
  debug(img);

  expect(img.getAttribute("alt")).toEqual("caption");
  expect(img.getAttribute("src")).toContain("img.png");
  //FIXME: checking whole dom object....
  // expect(container.querySelector(".Card-small")).toContain("1 of 3");
});
// end

it("matches snapshot", function () {
  const { container } = render(
    <Card caption="caption" src="img.png" currNum={1} totalNum={3} />
    );
  expect(container).toMatchSnapshot();
});