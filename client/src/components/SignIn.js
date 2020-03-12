import React, { Component } from "react";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  attemptLogin = () => {
    axios("/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      data: { email: this.state.email, password: this.state.password }
    })
      .then(results => {
        localStorage.setItem("token", results.data.token);
        localStorage.setItem("user_id", results.data.user_id);
        //redirect after successful login
        this.props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.attemptLogin();
  };

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <input
            name="email"
            type="text"
            onChange={this.handleInput}
            value={this.state.email}
            className="form-control"
          />
          <input
            name="password"
            type="password"
            onChange={this.handleInput}
            value={this.state.password}
            className="form-control"
          />
          <button onClick={this.attemptLogin}>Login</button>
        </form>
        {/* <Link to="/home" >Login</Link> */}
      </div>
    );
  }
}
