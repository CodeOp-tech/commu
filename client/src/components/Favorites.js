import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Favourites extends Component {
  render() {
    return (
      <div className="container py-4">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <Link className="text-decoration-none text-dark" to="/favorites">
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
        </div>
      </div>
    );
  }
}
