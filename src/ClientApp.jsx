import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const ClientApp = () => <App />;

render(<ClientApp />, document.getElementById("app"));
