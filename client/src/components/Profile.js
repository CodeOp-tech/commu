import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./Header.css";
import "./Footer.css";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div class="container py-4">
        <h3>
          <Header />
        </h3>
        <p className="heroProfile">
          <div className="mydetails">
            <Link class="text-decoration-none text-dark" to="/mydetails">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/A0gaL8t.png"
                  class="d-inline-block align-top"
                  alt=""
                />
                MY DETAILS
              </div>
            </Link>
          </div>

          <div className="inbox">
            <Link class="text-decoration-none text-dark" to="/inbox">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/DPtqACQ.png"
                  class="d-inline-block align-top"
                  alt=""
                />
                INBOX
              </div>
            </Link>
          </div>
          <div className="favorites">
            <Link class="text-decoration-none text-dark" to="/favorites">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/2v7CvJs.png"
                  class="d-inline-block align-top"
                  alt=""
                />
                FAVORITES
              </div>
            </Link>
          </div>
        </p>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
