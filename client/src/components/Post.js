import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";
import "./Footer.css";

export default class Post extends Component {
  render() {
    return (
      <div class="container py-4">
        <h3>
          <Header />
        </h3>
        <div>
          <Link class="text-decoration-none text-dark" to="/post"></Link>
          POST JOBS
        </div>
        <div class="d-flex p-2 bd-highlight"></div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
