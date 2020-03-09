import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
          jobs: []
    }
}
//
componentDidMount = () => {
    fetch(`/jobs`)
    // fetch(`/:area_id/jobs`) should work when we got the token that states the viewer's area
    .then(response => response.json())
    .then(response => {
        this.setState({ jobs: response });
    });
};
////
render() {
  return (
    <div class="container-fluid p-5">
      <div class="row">
          <h1>Jobs posted:</h1>
          <div class="row">
            {this.state.jobs.map((job, i) => {
              return (
                <div key={i} class="col-12 col-md-6 d-flex align-items-stretch pt-5">
                  <div class="card text-center shadow">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{job.title}</h5>
                      <div class="card-text">
                        <p>{job.description}</p>
                        <div class="row p-3">
                          <div class="col-6">
                            <span class="p-3">{job.price}</span>
                          </div>
                          <div class="col-6">
                          {job.date_time}
                          </div>
                        </div>
                        <div class="card-footer p-3">
                          <div class="row">
                            <div class="col-6">
                              <button
                              type="button"
                              class="btn btn-light shadow m-5 p-2 bg-white rounded mt-auto"
                              >
                              Profile
                              </button>
                              {/* we need a modal window that shows the profile here */}
                            </div>
                            <div class="col-6">
                              <button
                              type="button"
                              class="btn btn-light shadow m-5 p-2 bg-white rounded mt-auto"
                              >
                              Message
                              </button>
                              {/* we need to conect the Pusher chatApp to this button*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  );
}
}
