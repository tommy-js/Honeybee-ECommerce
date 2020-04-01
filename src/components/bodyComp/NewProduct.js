import React from "react";
import "../../main.css";
import macbook from "../../images/products/testing.jpg";

function NewProduct() {
  return (
    <div>
      <p>New Product</p>
      <img className="new_product_image" src={macbook} />
      <div className="new_product_button">
        <p className="button_span">Learn more</p>
      </div>
    </div>
  );
}

export default NewProduct;
