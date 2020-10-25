import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UpdateHeroPage from "./UpdateHeroPage";

describe("UpdateHeroPage Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <UpdateHeroPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
