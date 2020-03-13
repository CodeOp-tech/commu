import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import "./Header.css";
import "./Footer.css";
import "./Jobs.css";

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentDidMount = () => {
    fetch(`/jobs`, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response });
      });
  };
  //

  render() {
    return (
      <div className="container py-4">
        <h3>
          <Header />
        </h3>
        <p className="heroJobs">
          <div className="post">
            <Link className="text-decoration-none text-dark" to="/post">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/iDv7mXC.png"
                  class="d-inline-block align-top"
                  alt=""
                />
                POST
              </div>
            </Link>
          </div>

          <div className="search">
            <Link className="text-decoration-none text-dark" to="/search">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/fgnMByB.png"
                  class="d-inline-block align-top"
                  alt=""
                />
                SEARCH
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
