import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Favourites extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div>
          <Link class="text-decoration-none text-dark" to="/profile">
            <button
              type="button"
              class="btn btn-light shadow p-3 mb-5 bg-white rounded"
            >
              <img
                src="https://i.imgur.com/ux2D9Tu.png"
                class="d-inline-block align-top"
                alt=""
              />
            </button>
          </Link>
          ADD PROFILE
        </div>
      </div>
    );
  }
}
