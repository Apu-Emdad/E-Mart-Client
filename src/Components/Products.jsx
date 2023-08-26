import { useEffect, useState } from 'react';
import Product from './Product';

import '../Assets/CSS/Product.css';

import { publicRequest } from '../requestMethods';
import { Grid } from '@mui/material';

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  /* main code using aborcontroller*/
  useEffect(() => {
    const abortController = new AbortController();
    const getProdcuts = async () => {
      try {
        const res = await publicRequest.get(
          category ? `products?category=${category}` : `products`,
          { signal: abortController.signal } // Notice this line here
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProdcuts();

    return () => {
      // Function returned from useEffect is called on unmount
      // Here it'll abort the fetch
      console.log('unmounted');
      abortController.abort();
    };
  }, [category]);

  useEffect(() => {
    if (filters) {
      const filterArray = Object.entries(filters);
      const handleProducts = (array, product) =>
        array.every(([key, value]) => product[key].includes(value));

      setFilteredProducts(
        products.filter((product) => handleProducts(filterArray, product))
      );
    }
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === 'desc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    }
  }, [sort]);
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ padding: { md: '100px 10px', sm: '10px 0px' } }}
      >
        {filters
          ? filteredProducts.map((product) => (
              <Product product={product} key={product._id} />
            ))
          : products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
      </Grid>
    </div>
  );
};

export default Products;
