import React from "react";
import styles from "./styles.module.css";
import star from "../../images/star.png";

function Product(props) {
  let value;
  if (props.stateAge) {
    value = star;
  } else {
    value = "";
  }
  return (
    <div className={styles.product_body}>
      <div className={styles.product_image}></div>
      <p>{props.name}</p>
      <img className={styles.image_new} src={value} />
      <button>Wishlist</button>
    </div>
  );
}

export default Product;
