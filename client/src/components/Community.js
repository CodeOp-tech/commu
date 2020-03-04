import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Community extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            Community members:
            <div class="card text-center">
              <img
                src="https://i.imgur.com/eQXVxYR.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Member</h5>
                <p class="card-text">Member name</p>
                <button
                  type="button"
                  class="btn btn-light shadow p-3 mb-5 bg-white rounded"
                >
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
