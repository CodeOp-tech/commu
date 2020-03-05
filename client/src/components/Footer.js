import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div class="container-fluid">
        <ul>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div>
                <Link class="text-decoration-none text-dark" to="/home">
                  About
                </Link>
              </div>
            </div>

            <div class="col-md-4 col-md-offset-4">
              <Link class="text-decoration-none text-dark" to="/home">
                Guidelines
              </Link>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
