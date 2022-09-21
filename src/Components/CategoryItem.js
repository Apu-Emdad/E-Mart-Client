import React from "react";
import { Link, Navigate } from "react-router-dom";

const CategoryItem = ({ data }) => {
  const { title, img, category } = data;
  return (
    <div className="col-sm-4    p-1 category-item">
      <Link to={`/products/${category}`}>
        <img src={img} alt="" className="" />
        <div className="category-info">
          <h1>{title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
