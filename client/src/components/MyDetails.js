import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";
import "./Footer.css";
import axios from "axios";

export default class MyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      selectedId: 0,
      users: [],
      areas: []
    };
  }
  //
  getProfile = () => {
    fetch(`/users/profile`, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
      // fetch(`/:area_id/users`) should work when we got the token that states the viewer's area
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response });
      });
  };

  getAreas = () => {
    axios("/areas")
      .then(results => {
        console.log(results);
        this.setState({
          areas: [...this.state.areas, ...results.data]
        });
        // console.log("this is where we are checking", this.state.areas[0].id);
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getProfile();
    this.getAreas();
  };

  getAreaId = e => {
    this.setState({
      selectedId: e.target.value
    });
  };
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

  submitChanges = () => {};

  render() {
    return (
      <div className="container py-4">
        <header>
          <Header />
        </header>

        <div className="card">
          {this.state.users.map((user, i) => {
            return (
              <div>
                <div className="card-img-right" key={i}>
                  <img
                    className="d-inline-block align-top"
                    src={user.img}
                    alt="Card image cap"
                  />
                </div>

                <div className="list-group-item">{user.full_name}</div>

                <div className="list-group-item">{user.description}</div>

                <div className="list-group-item">{user.skills}</div>
              </div>
            );
          })}
        </div>

        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Edit profile
        </button>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Your details
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
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
                  <label for="exampleFormControlInput1">Description</label>
                  <input
                    onChange={this.handleDescription}
                    value={this.state.description}
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="******"
                  />
                </div>
                <div class="form-group">
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    onChange={this.getAreas}
                  >
                    <option>Choose an area</option>
                    {this.state.areas.map((area, i) => {
                      return (
                        <option key={i} value={area.id}>
                          {area.hood}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.submitProfile}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
