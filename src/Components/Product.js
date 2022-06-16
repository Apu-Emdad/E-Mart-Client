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
        <div className="square"></div>

        <div className="product-info">
          <div className="icon">
            <ShoppingCartOutlined />
          </div>
          <div className="icon">
            <SearchOutlined />
          </div>
          <div className="icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
