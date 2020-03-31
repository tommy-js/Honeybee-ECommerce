import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.main_navbar}>
        <Link exact to="/">
          <p className={styles.navbar_item}>Home</p>
        </Link>
        <Link exact to="/About">
          <p className={styles.navbar_item}>about</p>
        </Link>
        <Link exact to="/Blog">
          <p className={styles.navbar_item}>blog</p>
        </Link>
        <Link exact to="/Account">
          <p className={styles.navbar_item}>create account</p>
        </Link>
        <input
          type="text"
          className={styles.navbar_item}
          placeholder="search"
        />
      </div>
    );
  }
}
