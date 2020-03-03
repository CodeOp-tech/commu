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
              <li>
                <Link to="/signIn">Sign in</Link>
              </li>
              <li>
                <Link to="/signUp">Join the community!</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
