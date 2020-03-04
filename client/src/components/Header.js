import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div class="container-fluid">
        <ul>
          <div>
            <div
              type="button"
              class="btn btn-light shadow p-3 mb-5 bg-white rounded"
            >
              <img
                src="https://i.imgur.com/InarIgK.png"
                width="100"
                height="100"
                class="d-inline-block align-top"
                alt=""
              />
            </div>
          </div>
          <div>
            <Link class="text-decoration-none text-dark" to="/profile">
              Profile
            </Link>
          </div>

          <div>
            <Link class="text-decoration-none text-dark" to="/community">
              Community
            </Link>
          </div>

          <div>
            <Link class="text-decoration-none text-dark" to="/jobs">
              Jobs
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}
