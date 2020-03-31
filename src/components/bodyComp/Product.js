import React from "react";
import styles from "./styles.module.css";

function Product(props) {
  return (
    <div className={styles.product_body}>
      <p>{props.name}</p>
      <p>{props.stateAge}</p>
      <button>Wishlist</button>
    </div>
  );
}

export default Product;
