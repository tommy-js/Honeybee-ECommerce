import React, { Component } from "react";
import styles from "./styles.module.css";

function Product(props) {
  return (
    <div className={styles.product_body}>
      <p>{props.name}</p>
    </div>
  );
}

export default Product;
