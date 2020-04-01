import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NavComp/Navbar";
import Body from "./Body";
import About from "./About";
import AccountManager from "../profileComp/AccountManager";
import PowerNode from "./PowerNode";
import Footer from "./Footer";
import Blog from "../blogComp/Blog";
import ProductPage from "./products/ProductPage";
import BlogPage from "../blogComp/blogs/BlogPage";
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
              <AccountManager />
            </Route>
            <Route exact path="/Macbook Pro">
              <ProductPage />
            </Route>
            <Route exact path="/Blog1">
              <BlogPage />
            </Route>
            <Footer className={styles.footer} />
          </div>
        </Switch>
      </Router>
    );
  }
}
