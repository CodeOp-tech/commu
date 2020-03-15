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
      <div>
      
        <div className="inProfile">
          <Header />
        </div>
        <div class="container py-4 containerProfile">
        <div className="heroProfile">
          <div className="profileBar">
          <div className="mydetails">
            <Link class="text-decoration-none text-dark" to="/mydetails">
              <div
                type="button"
                class="btn"
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
            <Link class="text-decoration-none text-dark" to="/profile">
              <div
                type="button"
                class="btn"
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
            <Link class="text-decoration-none text-dark" to="/profile">
              <div
                type="button"
                class="btn"
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
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
      </div>
      
    );
  }
}
