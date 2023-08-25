import styled from '@emotion/styled';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { title, img, price, colors, _id } = product;

  const Image = styled('img')({
    width: '100%',
    display: 'block'
  });

  return (
    <Grid item lg={4} md={6} xs={12} className="product-container ">
      <div className="product-content">
        <div className="product-image-container">
          <div className="product-img">
            <Image src={img} alt="" />
          </div>
          <div className="product-square"></div>
          <div className="product-info">
            <div className="product-icon">
              <ShoppingCartOutlined />
            </div>
            <Link
              to={`/product/${_id}`}
              style={{ textDecoration: 'none', color: 'black' }}
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
      </div>
      <div className="product-title">
        <p className="title">{title}</p>
        <p className="price">${price}</p>
      </div>
    </Grid>
  );
};

export default Product;
