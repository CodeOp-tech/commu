import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <div class="container-fluid">
        <ul>
          <div>
            <Link class="text-decoration-none text-dark" to="/profile">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/A0gaL8t.png"
                  class="d-inline-block align-top"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div>
            <Link class="text-decoration-none text-dark" to="/profile">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/DPtqACQ.png"
                  class="d-inline-block align-top"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div>
            <Link class="text-decoration-none text-dark" to="/profile">
              <div
                type="button"
                class="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                <img
                  src="https://i.imgur.com/2v7CvJs.png"
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
