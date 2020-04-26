import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GettingStarted from "./pages/GettingStarted";
import AboutYou from "./pages/onboarding/AboutYou";
import ConfirmLocation from "./pages/onboarding/ConfirmLocation";
import Home from "./pages/Home";
import News from "./pages/News";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import AddBoardPost from "./pages/AddBoardPost";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GettingStarted}></Route>
        <Route path="/about-you" component={AboutYou}></Route>
        <Route path="/confirm-location" component={ConfirmLocation}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/board" component={Board}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/add-board-post" component={AddBoardPost}></Route>
      </Switch>
    </Router>
  );
};

export default App;
