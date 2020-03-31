import React from "react";
import "../../main.css";
import macbook from "../../images/testing.jpg";

function NewProduct() {
  return (
    <div>
      <p>New Product</p>
      <img className="new_product_image" src={macbook} />
    </div>
  );
}

export default NewProduct;
