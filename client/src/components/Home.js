import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import "./Header.css";
import "./Footer.css";
import Chat from "./Chat";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container py-4">
          <div>
            <Header />
          <p className="coverImage">
            <Link to="/chat/1/2" className="btn btn-info">
              Open chat window
            </Link>
          </p>
          </div>
          <div className="hero">
            <p>Hello Neighbour,</p> 
            <p>Come on in!</p>
          </div>
          <h2>Here are some of your neighbours' stories</h2>
          <div className="member1">
            <img src="https://i.imgur.com/IfRQ5qC.jpg"/>
          </div>
          <div className="member2">
          <img src="https://i.imgur.com/yIgUgxA.jpg"/>
          </div>
          <div className="member3">
          <img src="https://i.imgur.com/K1oLKaQ.jpg"/>
          </div>
          <div className="member4">
          <img src="https://i.imgur.com/3kBCVnt.jpg"/>
          </div>

          

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
