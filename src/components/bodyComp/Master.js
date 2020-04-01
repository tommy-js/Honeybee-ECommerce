import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NavComp/Navbar";
import Body from "./Body";
import About from "./About";
import Profile from "../profileComp/Profile";
import PowerNode from "./PowerNode";
import Footer from "./Footer";
import Blog from "../blogComp/Blog";
import ProductPage from "./products/ProductPage";
import styles from "./styles.module.css";

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
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route exact path="/Account">
              <Profile />
            </Route>
            <Route exact path="/Macbook Pro">
              <ProductPage />
            </Route>
            <Footer className={styles.footer} />
          </div>
        </Switch>
      </Router>
    );
  }
}
