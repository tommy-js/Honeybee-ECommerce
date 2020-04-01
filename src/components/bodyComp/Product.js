import React from "react";
import ProductPage from "./products/ProductPage";
import styles from "./styles.module.css";
import star from "../../images/star.png";
import { Link } from "react-router-dom";

function Product(props) {
  let url = "/" + props.name;
  let value;
  if (props.stateAge) {
    value = star;
  } else {
    value = "";
  }
  return (
    <Link to={url}>
      <div className={styles.product_body}>
        <div className={styles.product_image}></div>
        <p>{props.name}</p>
        <img className={styles.image_new} src={value} />
        <button>Wishlist</button>
      </div>
    </Link>
  );
}

export default Product;
