import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryItem = ({ data }) => {
  const { title, img, category } = data;
  return (
    <Grid item xs={6} sm={3} className="category-item">
      <Link to={`/products/${category}`}>
        <img src={img} alt="" className="" />
        <div className="category-info">
          <h1>{title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </Grid>
  );
};

export default CategoryItem;
