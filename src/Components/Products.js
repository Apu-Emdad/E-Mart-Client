import React from "react";
import { popularProduct } from "../Assets/data";
import Product from "./Product";

import "../Assets/CSS/Product.css";

const Products = () => {
  return (
    <div>
      <div className="container-fluid row justify-content-around g-0  ">
        {popularProduct.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
