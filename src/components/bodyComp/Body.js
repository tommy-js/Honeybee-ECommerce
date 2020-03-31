import React, { Component } from "react";
import Product from "./Product";
import styles from "./styles.module.css";
import productElements from "../bodyObs/obs";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productElements
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.main_body}>
        {products.map(elements => (
          <Product name={elements.name} />
        ))}
      </div>
    );
  }
}
