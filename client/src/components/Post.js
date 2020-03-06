import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Post extends Component {
  render() {
    return (
      <div class="container py-4">
        <div>
          <Link class="text-decoration-none text-dark" to="/post"></Link>
          POST JOBS
        </div>
        <div class="d-flex p-2 bd-highlight"></div>
      </div>
    );
  }
}
