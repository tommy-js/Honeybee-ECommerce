import React, { Component } from "react";
import Navbar from "../NavComp/Navbar";
import Body from "./Body";

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
}
