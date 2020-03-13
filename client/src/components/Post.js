import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";
import "./Footer.css";
//
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price:"",
      date_time:""
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
      this.setState({ users: response });
    });
};
//
updateInput(event) {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
          ...this.state,
          [name]: value
  });
}
//
  postJob() {
    fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        date_time: this.state.date_time
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          user_id: "",
          title: "",
          description: "",
          price:"",
          date_time:""
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
//
  render() {
    return (
      <div class="container py-4">
        <h3>
          <Header />
        </h3>
        <div class="row pb-5">
            <h1>Post jobs:</h1>
          </div>
        <div class="mx-auto pb-5 bd-highlight text-center w-100 pb-5">
          <div class="card text-center shadow">
            <div class="card-body d-flex flex-column">
              <div class="card-title">
                <input name="title" type="text" class="form-control"
                placeholder="Title (Máx 50 characters)"
                onChange={e => this.updateInput(e)}
                value={this.state.title}></input>
              </div>
              <div class="card-text">
                <textarea name="description" type="text" class="form-control"
                placeholder="Description (Máx 500 characters)"
                onChange={e => this.updateInput(e)}
                value={this.state.description}></textarea>
                <div class="row p-3">
                  <div class="col-12 col-md-6">
                    <input name="price" type="text" class="form-control"
                    placeholder="Price (Máx 50 characters)"
                    onChange={e => this.updateInput(e)}
                    value={this.state.price}></input>
                  </div>
                  <div class="col-12 col-md-6">
                    <input name="date_time" type="text" class="form-control"
                    placeholder="Availability (Máx 50 characters)"
                    onChange={e => this.updateInput(e)}
                    value={this.state.date_time}></input>
                  </div>
                </div>
              </div>
              <div class="card-footer p-3">
                <button type="button" class="btn btn-light shadow bg-white rounded mt-auto"
                onClick={e => this.postJob()}>
                  SUBMIT
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
