import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";

describe("TestimonialCard component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <TestimonialCard />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
