import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div class="container py-4">
        <div>
          <Link class="text-decoration-none text-dark" to="/search"></Link>
          SEARCH JOBS
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
