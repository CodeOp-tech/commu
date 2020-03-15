import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";
import "./Footer.css";
import "./MyDetails.css";
import axios from "axios";

export default class MyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      about: "",
      img: "",
      skills: "",
      area_id: 0,
      user: {},
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
        this.setState({ user: response });

        this.setState({ ...response });
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
  handleSkills = e => {
    this.setState({
      skills: e.target.value
    });
  };
  handleAbout = e => {
    this.setState({
      about: e.target.value
    });
  };

  handleName = e => {
    this.setState({
      full_name: e.target.value
    });
  };

  handleImg = e => {
    this.setState({
      img: e.target.value
    });
  };

  handleArea = e => {
    this.setState({
      area_id: e.target.value
    });
  };

  submitChanges = () => {
    axios
      .put(
        "/users/profile",
        {
          full_name: this.state.full_name,
          email: this.state.email,
          password: this.state.password,
          about: this.state.about,
          skills: this.state.skills,
          img: this.state.img,
          area_id: this.state.area_id
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        }
      )
      .then(results => {
        this.setState({
          user: results.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    let user = this.state.user;
    return (
      <div className="container py-4">
        <header>
          <Header />
        </header>
        <div class="row pb-5">
            <h1>My details:</h1>
          </div>
        <div
                  class="col-4
                  align-items-stretch pt-4 mx-auto text-center w-100 pb-5"
                >
                  <div class="card text-center shadow">
                    <img src={user.img} class="card-img-top img-fluid w-100" alt="..." />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{user.full_name}</h5>
                      <p class="card-text">
                        <span>Skills: </span>
                        {user.skills}
                      </p>
                      </div>
                      <div class="card-footer p-3">
                      <div class="row">
                        <div class="col-12 col-lg-6">
                        <button type="button" class="btn btn-light shadow bg-white rounded  "
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter">
                              Edit profile
                            </button>
                        </div>
                        
                      </div>
                    </div>

            </div>
            </div>

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
                  <label for="exampleFormControlInput2">Email address</label>
                  <input
                    onChange={this.handleEmail}
                    value={this.state.email}
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <label for="exampleFormControlInput3">Password</label>
                  <input
                    onChange={this.handlePassword}
                    value={this.state.password}
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="******"
                  />
                  <label for="exampleFormControlInput4">Image</label>
                  <input
                    onChange={this.handleImg}
                    value={this.state.img}
                    type="url"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="img.url"
                  />
                  <label for="exampleFormControlInput5">About</label>
                  <textarea
                    onChange={this.handleAbout}
                    value={this.state.about}
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="about you"
                  />
                  <label for="exampleFormControlInput6">Skills</label>
                  <textarea
                    onChange={this.handleSkills}
                    value={this.state.skills}
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="skills"
                  />
                </div>
                <div class="form-group">
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    onChange={this.handleArea}
                    value={this.state.area_id}
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
                  class="btn btn-primary"
                  onClick={this.submitChanges}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
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
