import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./BlogPage.css";

class BlogPage extends React.Component {
  render() {
    return (
      <div className="blog-page-cont">
        <Header />
        <section className="blog-page">
          <h2>Blog</h2>
          <h3>Blog Post</h3>
        </section>
        <Footer />
      </div>
    );
  }
}

export default BlogPage;
