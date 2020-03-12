import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Community from "./components/Community";
import Jobs from "./components/Jobs";
import MyDetails from "./components/MyDetails";
import Inbox from "./components/Inbox";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Post from "./components/Post";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signIn" component={SignIn} />

          <Route path="/signUp" component={SignUp} />

          <Route path="/home" component={Home}>
            <Home />
          </Route>

          <Route path="/profile" component={Profile}>
            <Profile />
          </Route>

          <Route path="/community" component={Community}>
            <Community />
          </Route>

          <Route path="/jobs" component={Jobs}>
            <Jobs />
          </Route>

          <Route path="/mydetails" component={MyDetails}>
            <MyDetails />
          </Route>

          <Route path="/inbox" component={Inbox}>
            <Inbox />
          </Route>

          <Route path="/favorites" component={Favorites}>
            <Favorites />
          </Route>

          <Route path="/search" component={Search}>
            <Search />
          </Route>

          <Route path="/post" component={Post}>
            <Post />
          </Route>

          <Route path="/chat" component={Chat}>
            <Chat />
          </Route>

          {/* <Route path="/">
            <Link to="/chat/1/2" className="btn btn-info">
              Open chat window
            </Link>
          </Route> */}

          <Route path="/">
            <ul class="backgroundImage">
              <div className="container py-4 text-center">
                <div>
                  <div
                    type="button"
                    className="btn btn-light shadow p-3 mb-5 bg-white rounded"
                  >
                    <img
                      src="https://i.imgur.com/InarIgK.png"
                      width="200"
                      height="200"
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                </div>
                <div className="enter">
                  <div className="row">
                    <div className="col-sm-12 text-center">
                      <Link
                        className="text-decoration-none text-dark"
                        to="/signIn"
                      >
                        <button
                          type="button"
                          class="btn btn-light shadow p-3 mb-5 bg-white rounded"
                        >
                          Sign in
                        </button>
                      </Link>
                    </div>
                    <div className="col-sm-12 text-center">
                      <Link
                        className="text-decoration-none text-dark"
                        to="/signUp"
                      >
                        <button
                          type="button"
                          class="btn btn-light shadow p-3 mb-5 bg-white rounded"
                        >
                          Join the community!
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
