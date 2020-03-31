import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import honeycomb from "../../images/honeycomb.png";
import honeycombfull from "../../images/honeycombfilled.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.main_navbar}>
        <Link exact to="/">
          <div className={styles.image_item}>
            <img className={styles.home_image} src={honeycombfull} />
            <div className={styles.image_cover}></div>
            <img className={styles.home_image} src={honeycomb} />
          </div>
        </Link>
        <Link exact to="/About">
          <div className={styles.navbar_item}>about</div>
        </Link>
        <Link exact to="/Blog">
          <div className={styles.navbar_item}>blog</div>
        </Link>
        <Link exact to="/Account">
          <div className={styles.navbar_item}>account</div>
        </Link>
        <input
          type="text"
          className={styles.navbar_search}
          placeholder="search"
        />
      </div>
    );
  }
}
