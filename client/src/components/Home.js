import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <h1>
            <Header />
          </h1>

          <div class="row"></div>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
