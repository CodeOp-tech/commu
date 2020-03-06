import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyDetails extends Component {
  render() {
    return (
      <div className="container py-4">
        <div className="card">
          <div className="card-img-right">
            <button
              type="button"
              className="btn btn-light shadow p-3 mb-5 bg-white rounded"
            >
              <img
                className="d-inline-block align-top"
                src="https://i.imgur.com/V0t9CMx.png"
                alt="Card image cap"
              />
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              <Link className="text-decoration-none text-dark" to="/mydetails">
                About me
              </Link>
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                Name
              </button>
            </li>
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                Description
              </button>
            </li>
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-light shadow p-3 mb-5 bg-white rounded"
              >
                Skills
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
