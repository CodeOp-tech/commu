import React, { Component } from "react";


export default class Search extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      jobs: [],
      job: {}
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
      });
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

  setCurrentJob = (job) => {
    this.setState({job})
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
          <div class="row mx-auto text-center">
            {this.state.jobs.map((job, i) => {
              return (
                <div
                  key={i}
                  class="col-12 col-md-6 d-flex align-items-stretch pt-4 mx-auto text-center w-100"
                >
                  <div class="card text-center shadow w-100">
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
                    </div>
                    <div class="card-footer p-3">
                      <div class="row">
                        <div class="col-6">
                        <button type="button" class="btn btn-light shadow bg-white rounded mt-auto">
                              Message
                            {/* we need to connect the Pusher chatApp to this button*/}
                            </button>
                        </div>
                        <div class="col-6">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={() => this.setCurrentJob(job)}
                          >
                            Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            )})};
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
                            {this.state.job.full_name}
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
                        <img
                          className="img-responsive modal-portrait"
                          src={this.state.job.img}
                          alt="portrait"
                        />
                      <div className="list-group-item">
                        {this.state.job.about}
                      </div>
                      <div className="list-group-item">
                      <span>Skills: </span>{this.state.job.skills}</div>
                    </div>
                        <div class="modal-footer">
                          <div class="row">
                          <div class="col-6">
                          <button type="button" class="btn btn-light shadow bg-white rounded mt-auto">
                              Message
                            {/* we need to connect the Pusher chatApp to this button*/}
                            </button>
                          </div>
                          <div class="col-6">
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
                      </div>
                    </div>
        </div>
      </div>
    );
  }
}
