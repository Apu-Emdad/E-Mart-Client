import React from "react";
import "../Assets/CSS/ProductList.css";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
const ProductList = () => {
  return (
    <div className="productList">
      <Header />
      <h1 className="productList-title">Dresses</h1>
      <div className="productList-filter-container">
        <div className="productList-filter">
          <span className="productList-filter-text">Filter Products</span>
          <select name="" id="" className="productList-filter-select">
            <option value="" disabled selected>
              Color
            </option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
          <select name="" id="" className="productList-filter-select">
            <option value="" disabled selected>
              Size
            </option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="productList-filter productList-sort">
          <span className="productList-filter-text">Sort Products</span>
          <select name="" id="" className="productList-filter-select">
            <option value="" disabled selected>
              Newest
            </option>
            <option value="l2h">Price(Low to high)</option>
            <option value="h2l">Price(High to low)</option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
    </div>
  );
};

export default ProductList;
