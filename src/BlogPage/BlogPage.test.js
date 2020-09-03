import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BlogPage from "./BlogPage";

describe("BlogPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <BlogPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
