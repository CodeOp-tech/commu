import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import "./Header.css";
import "./Footer.css";
import Chat from "./Chat";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container py-4">
          <h3>
            <Header />
          </h3>
          <p className="coverImage">
            <Link to="/chat/1/2" className="btn btn-info">
              Open chat window
            </Link>
          </p>

          <div className="row"></div>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
