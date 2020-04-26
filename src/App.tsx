import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GettingStarted from "./pages/GettingStarted";
import AboutYou from "./pages/onboarding/AboutYou";
import ConfirmLocation from "./pages/onboarding/ConfirmLocation";
import Home from "./pages/Home";
import News from "./pages/News";
import Board from "./pages/Board";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GettingStarted />
        </Route>
        <Route path="/about-you">
          <AboutYou />
        </Route>
        <Route path="/confirm-location">
          <ConfirmLocation />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
