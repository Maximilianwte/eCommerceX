import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Elements.css"

import Context from "./Components/Context/Context";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header /> */}
          <Route exact path="/" component={Context} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
