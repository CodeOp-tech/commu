import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import "./Header.css";
import "./Footer.css";

//
export default class Community extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  //
  componentDidMount = () => {
    fetch(`/users`)
      // fetch(`/:area_id/users`) should work when we got the token that states the viewer's area
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response });
      });
  };
  //
  render() {
    return (
      <div class="container-fluid p-5">
        <div class="row pb-5">
          <div
            type="button"
            className="btn btn-light shadow p-3 mb-5 bg-white rounded mt-auto"
          >
            Community members:
          </div>
          <div className="row py-5">
            {this.state.users.map((user, i) => {
              return (
                <div
                  key={i}
                  class="col-lg-2 col-md-3 col-sm-4 col-6 d-flex align-items-stretch pb-5"
                >
                  <div class="card text-center shadow">
                    <img src={user.img} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{user.full_name}</h5>
                      <p class="card-text">
                        <span>Skills: </span>
                        {user.skills}
                      </p>
                      <button
                        type="button"
                        class="btn btn-light shadow p-3 mb-5 bg-white rounded mt-auto"
                      >
                        Profile
                      </button>
                      {/* we need a modal window that shows the profile here */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
