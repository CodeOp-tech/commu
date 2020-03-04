import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Community from "./components/Community";
import Jobs from "./components/Jobs";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/community">
            <Community />
          </Route>

          <Route path="/jobs">
            <Jobs />
          </Route>

          <Route path="/">
            <ul>
              <div class="container">
                <div>
                  <div
                    type="button"
                    class="btn btn-light shadow p-3 mb-5 bg-white rounded"
                  >
                    <img
                      src="https://i.imgur.com/InarIgK.png"
                      width="200"
                      height="200"
                      class="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-9">
                    <Link class="text-decoration-none text-dark" to="/signIn">
                      Sign in
                    </Link>
                  </div>
                  <div class="col-sm-9">
                    <Link class="text-decoration-none text-dark" to="/signUp">
                      Join the community!
                    </Link>
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
