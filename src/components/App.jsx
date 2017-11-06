import React, { Component } from "react";

const App = props => (
  <div>
    <h1>Hello from {props.title}</h1>
  </div>
);

App.defaultProps = {
  title: "react"
};

export default App;
