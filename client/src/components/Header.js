import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  logout = () => {};
  render() {
    return (
      <div className="container py-4">
        <ul className="backgroundHeader">
          <nav className="navbar-expand-lg row">
            <div className="nav-item mx-auto">
              <div
                type="button"
                className="btn btn-light shadow bg-white rounded max-auto"
              >
                <Link to="/home">
                  <p>
                    <img
                      src="https://i.imgur.com/HesQBDj.png"
                      className="d-inline-block align-top"
                      height="120"
                      alt=""
                    />
                  </p>
                </Link>
              </div>
            </div>
            <div className="nav-item mx-auto profile">
              <Link class="text-decoration-none text-dark" to="/profile">
                <div
                  type="button"
                  className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  Profile
                </div>
              </Link>
            </div>

            <div className="nav-item mx-auto community">
              <Link class="text-decoration-none text-dark" to="/community">
                <div
                  type="button"
                  className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  Community
                </div>
              </Link>
            </div>

            <div className="nav-item mx-auto jobs">
              <Link class="text-decoration-none text-dark" to="/jobs">
                <div
                  type="button"
                  className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  Jobs
                </div>
              </Link>
            </div>
          </nav>
        </ul>
      </div>
    );
  }
}
