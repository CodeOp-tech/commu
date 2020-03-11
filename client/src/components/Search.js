import React, { Component } from "react";


export default class Search extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      jobs: [],
      users: []
    };
  }
  //
  componentDidMount = () => {
    fetch(`/jobs`, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ jobs: response });
      })
    .then (function(data) {
    fetch(`/users/profile`, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response });
      });
    })
  }
//
  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }
//
  searchJobs = () => {
  fetch(`/jobs/search?q=${this.state.input}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      this.setState({jobs: res, input: "" });
    })
    .catch(error => {
      console.log(error);
    });
  }
  //
  render() {
    return (
      <div class="container-fluid p-5">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <h1>Jobs in your area:</h1>
          </div>
          <div class="col-md-6 col-sm-12">
            <div
                  type="button"
                  class="btn btn-light shadow p-3 mr-5 bg-white rounded input-group-prepend"
                >
                  <img
                    src="https://i.imgur.com/fgnMByB.png"
                    class="d-inline-block align-top p-2 pr-4"
                    alt=""
                  />
                  <input type="text" class="form-control" placeholder="Search..."
                  onChange={e => this.updateInput(e)}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.searchJobs()}}}
                  value={this.state.input}></input>
                  <button type="button" class="btn btn-primary shadow ml-3"
                  onClick={e => this.searchJobs()}>
                    SEARCH
                  </button>
            </div>
          </div>
          <div class="row mx-auto text-center w-100">
            {this.state.jobs.map((job, i) => {
              return (
                <div
                  key={i}
                  class="col-12 col-md-6 d-flex align-items-stretch pt-4 mx-auto text-center w-100"
                >
                  <div class="card text-center shadow">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{job.title}</h5>
                      <div class="card-text">
                        <p>{job.description}</p>
                        <div class="row p-3">
                          <div class="col-6">
                            <span class="p-3">{job.price}</span>
                          </div>
                          <div class="col-6">{job.date_time}</div>
                        </div>
                      </div>
                      <div class="card-footer p-3">
                        <div class="row">
                          <div class="col-6">
{/* MODAL ------------------------------------------------------------------------------------------------ */}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Profile
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
{/* INSERT PROFILE CARD HERE ---------------------------------------------------------------------- */}
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
                  onClick={this.submitChanges}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
{/* END OF MODAL ---------------------------------------------------------------------------------------- */}
                          </div>
                          <div class="col-6">
                            <button type="button" class="btn btn-light shadow bg-white rounded mt-auto">
                                Message
                            </button>
                              {/* we need to conect the Pusher chatApp to this button*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
