import React, { Component } from "react";
import Product from "./Product";
import NewProduct from "./NewProduct";
import styles from "./styles.module.css";
import "../../main.css";
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
        <div className="new_product_container">
          <NewProduct />
        </div>
        {products.map(elements => (
          <Product
            key={elements.productKey}
            stateAge={elements.stateAge}
            name={elements.name}
          />
        ))}
      </div>
    );
  }
}
