import React from "react";
import "./NotFoundPage.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found-cont">
        <section className="not-found-page">
          <h2>The page you've requested doesn't exist.</h2>
        </section>
      </div>
    );
  }
}

export default NotFoundPage;
