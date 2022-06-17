import { Add, Remove } from "@material-ui/icons";
import React from "react";
import "../Assets/CSS/SingleProduct.css";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
const SingleProduct = () => {
  return (
    <div>
      <Header />
      <div className="singleProduct-container">
        <div className="singleProduct-image">
          <img
            src="https://i.ibb.co/mFcLG7Q/product4.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="singleProduct-info">
          <h1 className="singleProduct-title">Yellow Long Sleeve Shirt</h1>

          <p className="singleProduct-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            maiores magni accusantium perspiciatis, dolore eligendi suscipit
            porro a quasi atque est quaerat voluptatem eveniet eaque, itaque
            iusto, dolores rem rerum? Fuga omnis quaerat eveniet repellendus
            accusamus voluptatem reiciendis velit expedita quia provident,
            soluta corrupti dolore non perferendis facilis beatae. Dolore.
          </p>

          {/* ==== Price ==== */}
          <span className="singleProduct-price">$ 50</span>

          {/* === Filter ==== */}
          <div className="singleProduct-filter-container">
            {/* ==== Filter Color ==== */}
            <div className="singleProduct-filter">
              <span className="singleProduct-filter-title">Color</span>
              <div
                style={{ backgroundColor: "black" }}
                className="singleProduct-filter-color"
              />
              <div
                style={{ backgroundColor: "darkblue" }}
                className="singleProduct-filter-color"
              />
              <div
                style={{ backgroundColor: "gray" }}
                className="singleProduct-filter-color"
              />
            </div>
            {/* ==== Filter Size ==== */}
            <div className="singleProduct-filter">
              <span className="singleProduct-filter-title">Size</span>
              <select className="singleProduct-filter-size">
                <option className="singleProduct-filter-size-option">XS</option>
                <option className="singleProduct-filter-size-option">S</option>
                <option className="singleProduct-filter-size-option">M</option>
                <option className="singleProduct-filter-size-option">L</option>
                <option className="singleProduct-filter-size-option">XL</option>
              </select>
            </div>
          </div>
          {/* ==== Amount  ==== */}
          <div className="singleProduct-add-container">
            <div className="singleProduct-amount-container">
              <Remove />
              <span className="singleProduct-amount">1</span>
              <Add />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default SingleProduct;
