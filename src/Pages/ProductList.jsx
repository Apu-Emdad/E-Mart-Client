import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Assets/CSS/ProductList.css";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import HeaderSpace from "../Components/HeaderSpace";
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="productList">
      <Header />
      <HeaderSpace />
      <h1 className="productList-title">
        {category ? category.toUpperCase() : "Products"}
      </h1>
      <div className="productList-filter-container">
        {/* ==== Filter ===== */}
        <div className="productList-filter">
          <span className="productList-filter-text">Filter Products</span>
          <select
            name="color"
            id=""
            className="productList-filter-select"
            onChange={handleFilters}
          >
            <option value="All" selected>
              Color
            </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
          </select>
          <select
            name="size"
            id=""
            className="productList-filter-select"
            onChange={handleFilters}
          >
            <option value="ALL" selected>
              Size
            </option>
            <option value="XSM">XS</option>
            <option value="SM">SM</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        {/* ==== Sort ==== */}
        <div className="productList-filter productList-sort">
          <span className="productList-filter-text">Sort Products</span>
          <select
            name=""
            id=""
            className="productList-filter-select"
            onChange={handleSort}
          >
            <option value="newest">Newest</option>

            <option value="asc">Price(Low to high)</option>
            <option value="desc">Price(High to low)</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <NewsLetter />
    </div>
  );
};

export default ProductList;
