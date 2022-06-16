import React from "react";
import { categoryData } from "../Assets/data";
import CategoryItem from "./CategoryItem";

import "../Assets/CSS/Categories.css";

const Categories = () => {
  return (
    <div className="categories-container container-fluid justify-content-around row g-0   ">
      {categoryData.map((data) => (
        <CategoryItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Categories;
