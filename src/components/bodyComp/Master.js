import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NavComp/Navbar";
import Body from "./Body";
import About from "./About";
import Profile from "../profileComp/Profile";
import PowerNode from "./PowerNode";
import Footer from "./Footer";
import Blog from "../blogComp/Blog";
import ProductPage from "./ProductPage";
import styles from "./styles.module.css";

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callLog = this.callLog.bind(this);
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
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route exact path="/Account">
              <Profile />
            </Route>
            <Route exact path="/Product">
              <ProductPage />
            </Route>
            <Footer className={styles.footer} />
          </div>
        </Switch>
      </Router>
    );
  }
}
