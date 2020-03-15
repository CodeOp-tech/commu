import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./Header.css";
import "./Footer.css";
import "./Community.css";
//
export default class Community extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {}
    };
  }
  //
  componentDidMount = () => {
    fetch(`/users`, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response });
      });
  };
  //
  setCurrentUser = user => {
    this.setState({ user });
  };
  //
  render() {
    return (
      <div>
        
          <header>
            <Header />
            </header>
            <div class="container p-4">
          
          <div className="heroCommunity">
           
          </div>

          <div class="row py-5">
            {this.state.users.map((user, i) => {
              return (
                <div
                  key={i}
                  class="col-lg-4 col-md-3 col-sm-4 col-6 d-flex align-items-stretch pb-5"
                >
                  <div class="card text-center shadow cardCommu">
                    <img src={user.img} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{user.full_name}</h5>
                      {/* <p class="card-text">
                        <span>Skills: </span>
                        {user.skills}
                      </p> */}
                      <div class="card-footer p-3 ">
                        <div >
                          <div>
                            <button
                              type="button"
                              class="btn"
                            >
                              Message
                              {/* we need to connect the Pusher chatApp to this button*/}
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                              onClick={() => this.setCurrentUser(user)}
                            >
                              Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

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
                <div class="modal-content modalEdit">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      {this.state.user.full_name}
                    </h5>
                   
                  </div>
                  <div class="modal-body">
                    <img
                      className="img-responsive modal-portrait"
                      src={this.state.user.img}
                      alt="portrait"
                    />
                    <div className="list-group-item">
                      {this.state.user.about}
                    </div>
                    <div className="list-group-item">
                      <span>Skills: </span>
                      {this.state.user.skills}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <div class="row">
                      
                      <div class="col-6">
                        <button
                          type="button"
                          class="btn"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
