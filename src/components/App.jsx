import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components:
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Login from "./Login";

const App = props => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />

      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
