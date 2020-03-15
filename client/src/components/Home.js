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
      <div className="home">
        
          <div className="header">
            <Header /></div>
            
          {/* <div className="coverImage">
            <Link to="/chat/1/2" className="btn btn-info">
              Open chat window
            </Link>
          </div> */}
         
          <div className="hero">
            <p>Hello Neighbour,</p> 
            <p>Come on in!</p>
          </div>
          <div className="container storyContainer">
          <h2>Your Neighbourhood storyboard</h2>
          <div className="member1">
            <div className="p1">
            <p>Marcel is your neighbour to go if your curious to know more about maps! Every month he organizes a cartagraphy workshop. </p>
            </div>
            <img src="https://i.imgur.com/IfRQ5qC.jpg"/>
          </div>
          <div className="member2">
            <div className="p2">
          <p> Ana loves to share her favorite recipes! Anna introduced her new neighbour, Adelina to her Grandma's empanadas! Best on the street!   </p>
          </div>
          <img src="https://i.imgur.com/yIgUgxA.jpg"/>
          </div>
          <div className="member3">
          <div className="p3">
          <p> Ian just moved in the neighbourhood  and needed extra help to plan his partner a surprise party. Your neighbour, Martin loves organizing parties and offer to help him. Best party they could have imagined!</p>
          </div>
          <img src="https://i.imgur.com/K1oLKaQ.jpg"/>
          </div>
          <div className="member4">
            <div className="p4">
          <p> Fiona always loved the idea of being a florist, but never followed her dream! Recentely, she decided to hold her first workshop and share her skills and passion with a crowd. A must if you are crazy about plants!   </p>
          </div>
          <img src="https://i.imgur.com/3kBCVnt.jpg"/>
          </div>
          </div>

          

          <footer>
            <Footer />
          </footer>
        </div>
       

      
    );
  }
}
