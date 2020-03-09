import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container py-4 text-center">
        <ul className="backgroundStyle">
          <div className="row text-center">
            <div className="footerDesign mx-auto">
              <Link className="text-decoration-none text-dark" to="/home">
                <div
                  type="button"
                  className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  About
                </div>
              </Link>
            </div>

            <div className="footerDesign mx-auto">
              <Link className="text-decoration-none text-dark" to="/home">
                <div
                  type="button"
                  className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  Guidelines
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
