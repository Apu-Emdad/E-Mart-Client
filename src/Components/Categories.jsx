import { Grid } from "@mui/material";
import { categoryData } from "../Assets/data";
import CategoryItem from "./CategoryItem";

import "../Assets/CSS/Categories.css";

const Categories = () => {
  return (
    <Grid spacing={1} container className="categories-container">
      {categoryData.map((data) => (
        <CategoryItem data={data} key={data.id} />
      ))}
    </Grid>
  );
};

export default Categories;
