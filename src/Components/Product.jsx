import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, img, price, colors, _id } = product;

  return (
    <div className="col-md-6 col-lg-4 col-sm-6  product-container  ">
      <div className="product-content">
        <div className="product-image-container">
          <div className="product-img">
            <img src={img} alt="" className="img-fluid d-block  " />
          </div>
          <div className="product-square"></div>

          <div className="product-info">
            <div className="product-icon">
              <ShoppingCartOutlined />
            </div>
            <Link
              to={`/product/${_id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="product-icon">
                <SearchOutlined />
              </div>
            </Link>
            <div className="product-icon">
              <FavoriteBorderOutlined />
            </div>
          </div>
        </div>
        <div className="product-title">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
