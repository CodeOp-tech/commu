import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Post extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div>
          <Link class="text-decoration-none text-dark" to="/post"></Link>
          POST JOBS
        </div>
      </div>
    );
  }
}
