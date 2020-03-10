import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import "./Header.css";
import "./Footer.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container py-4">
          <h3>
            <Header />
          </h3>
          <p className="coverImage"></p>

          <div className="row"></div>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
