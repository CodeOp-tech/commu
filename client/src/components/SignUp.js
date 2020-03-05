import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      users: []
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleName = e => {
    this.setState({
      full_name: e.target.value
    });
  };

  addUser() {
    axios("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      data: {
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password
      }
    }).then(results => {
      this.setState({
        users: results
      }).catch(err => console.log(err));
    });
  }

  render() {
    return (
      <div>
        <h1>Join commu today !</h1>

        <label>Full name</label>
        <input
          name="fullName"
          type="text"
          onChange={this.handleName}
          value={this.state.full_name}
          className="form-control"
        />

        <label>Email</label>
        <input
          name="email"
          type="text"
          onChange={this.handleInput}
          value={this.state.email}
          className="form-control"
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={this.handleInput}
          value={this.state.password}
          className="form-control"
        />

        <button onClick={e => this.addUser()}>Join</button>
      </div>
    );
  }
}
