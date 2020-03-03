import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Look through your community!</h1>
        <Link to="/home">Join</Link>
      </div>
    );
  }
}
