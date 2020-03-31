import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Home</p>
        <p>about</p>
        <p>blog</p>
        <p>create account</p>
        <input type="text" placeholder="search" />
      </div>
    );
  }
}
