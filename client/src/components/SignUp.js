import React, { Component } from "react";

import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      users: [],
      areas: []
    };
  }
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleName = e => {
    this.setState({
      full_name: e.target.value
    });
  };

  addUser = () => {
    axios("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      data: {
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password,
        area_id: this.state.areas[3].id
      }
    })
      .then(results => {
        this.setState({
          users: results
        });
        // this.props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios("/areas")
      .then(results => {
        console.log(results);
        this.setState({
          areas: [...this.state.areas, ...results.data]
        });
        // console.log("this is where we are checking", this.state.areas[0].id);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Join commu today!</h1>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Full name</label>
            <input
              onChange={e => this.handleName(e)}
              value={this.state.full_name}
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="John Johnny"
            />
            <label for="exampleFormControlInput1">Email address</label>
            <input
              onChange={this.handleEmail}
              value={this.state.email}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <label for="exampleFormControlInput1">Password</label>
            <input
              onChange={this.handlePassword}
              value={this.state.password}
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="******"
            />
          </div>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Choose an area</option>
              {this.state.areas.map((area, index) => {
                return <option key={index}>{area.hood}</option>;
              })}
            </select>
          </div>

          <button
            type="button"
            class="btn btn-dark"
            onClick={e => this.addUser()}
          >
            Join
          </button>
        </form>
      </div>
    );
  }
}
