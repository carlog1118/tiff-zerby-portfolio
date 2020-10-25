import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UpdateTestPage from "./UpdateTestPage";

describe("UpdateTestPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <UpdateTestPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
