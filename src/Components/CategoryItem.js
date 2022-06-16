import React from "react";

const CategoryItem = ({ data }) => {
  const { title, img } = data;
  return (
    <div className="col-sm-4    p-1 category-item">
      <img src={img} alt="" className="" />
      <div className="category-info">
        <h1>{title}</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
