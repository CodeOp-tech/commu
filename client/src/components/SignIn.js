import React, { Component } from "react";
import "./SignIn.css";
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
       
      <div className="row no-gutters">
        <div className="col no-gutters">
          <div className="leftside"></div>
        </div>
        <div className="col no-gutters">
        <div className="rightside">
        <div className="card">
      <h1>Welcome back!</h1>
      <form onSubmit={this.handleSubmit} method="POST">
        <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="text"
          onChange={this.handleInput}
          value={this.state.email}
          className="form-control"
        />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        <label for="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          onChange={this.handleInput}
          value={this.state.password}
          className="form-control"
        />
        <button class="btn" onClick={this.attemptLogin}>Login</button>
        </div>
      </form>
      
      </div>
        </div>
        </div>
      
      </div>
      </div>
    );
  }
}
