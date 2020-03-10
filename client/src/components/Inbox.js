import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";
import "./Footer.css";

export default class Inbox extends Component {
  render() {
    return (
      <div className="container py-4">
        <h3>
          <Header />
        </h3>
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>
              <Link className="text-decoration-none text-dark" to="/inbox">
                <button
                  type="button"
                  class="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  POSTBOX
                </button>
              </Link>
            </h3>
          </div>

          <ul className="list-unstyled components">
            <p>
              <Link className="text-decoration-none text-dark" to="/inbox">
                <button
                  type="button"
                  className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  MESSAGES
                </button>
              </Link>
            </p>
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <li className="active">
                  <a
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                  >
                    <div
                      type="button"
                      className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                    >
                      <img
                        src="https://i.imgur.com/DPtqACQ.png"
                        className="d-inline-block align-top"
                        alt=""
                      />
                    </div>
                  </a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                      <div
                        type="button"
                        className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                      >
                        Received
                      </div>
                    </li>
                    <li>
                      <div
                        type="button"
                        className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                      >
                        Sent
                      </div>
                    </li>
                    <li>
                      <div
                        type="button"
                        className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                      >
                        Write
                      </div>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </ul>
        </nav>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
