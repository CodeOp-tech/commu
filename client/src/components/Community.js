import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Community extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div>
          <Link class="text-decoration-none text-dark" to="/community">
            <div
              type="button"
              class="btn btn-light shadow p-3 mb-5 bg-white rounded"
            >
              <img
                src="https://i.imgur.com/ux2D9Tu.png"
                class="d-inline-block align-top"
                alt=""
              />
            </div>
            <div class="row">Community members:</div>
          </Link>
        </div>
      </div>
    );
  }
}
