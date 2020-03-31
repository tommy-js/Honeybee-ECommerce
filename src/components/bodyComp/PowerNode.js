import React, { Component } from "react";
import styles from "./styles.module.css";
import Body from "./Body";
import Sidebar from "./Sidebar";

function PowerNode() {
  return (
    <div className={styles.power_node}>
      <Body />
      <Sidebar />
    </div>
  );
}

export default PowerNode;
