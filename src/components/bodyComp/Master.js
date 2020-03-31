import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NavComp/Navbar";
import Body from "./Body";
import About from "./About";
import PowerNode from "./PowerNode";
import Footer from "./Footer";

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Navbar />
            <Route exact path="/">
              <PowerNode />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}
