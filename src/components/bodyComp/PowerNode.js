import React, { Component } from "react";
import "../../main.css";
import Body from "./Body";
import Sidebar from "./Sidebar";

function PowerNode() {
  return (
    <div className="power_node">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_body">
        <Body />
      </div>
    </div>
  );
}

export default PowerNode;
