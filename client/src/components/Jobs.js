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
      jobs:[]
    };
  }


  componentDidMount() {
    fetch("/jobs")
      .then(res => res.json())
      //   console.log(res)
      .then(json => {
        console.log(json);
        this.setState({
          jobs: json
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container py-4">
        <h3>
          <Header />
        </h3>
        <p className="coverImage">
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
