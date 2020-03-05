import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyDetails extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div>
          <Link class="text-decoration-none text-dark" to="/mydetails"></Link>
          My Details
        </div>
      </div>
    );
  }
}
