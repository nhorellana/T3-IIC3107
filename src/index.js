import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import Map from "./Map/index";
import Chat from "./Chat/index";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <ThemeProvider>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={App} />
      </div>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
