import React, { useState } from "react";
import styles from "../styles.module.css";

function ProductPage() {
  return (
    <div className={styles.product_page}>
      <div className={styles.product_info}></div>
      <div className={styles.product_page_image}></div>
      <div className={styles.product_page_title}>Macbook</div>
      <div className={styles.product_page_review}></div>
    </div>
  );
}

export default ProductPage;
