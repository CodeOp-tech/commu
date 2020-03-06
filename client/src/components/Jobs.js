import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Jobs extends Component {
  render() {
    return (
      <div class="container py-4">
        <ul>
          <div>
            <Link class="text-decoration-none text-dark" to="/post">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/iDv7mXC.png"
                  class="d-inline-block align-top"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div>
            <Link class="text-decoration-none text-dark" to="/search">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/fgnMByB.png"
                  class="d-inline-block align-top"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}
