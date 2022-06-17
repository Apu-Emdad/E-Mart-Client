import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Product = ({ product }) => {
  const { name, img } = product;
  return (
    <div className="col-md-6 col-lg-4 col-sm-6  product-container  ">
      <div className="product-content">
        <div className="product-img">
          <img src={img} alt="" className="img-fluid  " />
        </div>
        <div className="product-square"></div>

        <div className="product-info">
          <div className="product-icon">
            <ShoppingCartOutlined />
          </div>
          <div className="product-icon">
            <SearchOutlined />
          </div>
          <div className="product-icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
