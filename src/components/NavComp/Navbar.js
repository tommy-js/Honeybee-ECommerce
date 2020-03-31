import React, { Component } from "react";
import styles from "./styles.module.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.main_navbar}>
        <p className={styles.navbar_item}>Home</p>
        <p className={styles.navbar_item}>about</p>
        <p className={styles.navbar_item}>blog</p>
        <p className={styles.navbar_item}>create account</p>
        <input
          type="text"
          className={styles.navbar_item}
          placeholder="search"
        />
      </div>
    );
  }
}
