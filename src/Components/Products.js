import React, { useEffect, useState } from "react";
import { popularProduct } from "../Assets/data";
import Product from "./Product";

import "../Assets/CSS/Product.css";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  /* main code */
  useEffect(() => {
    const getProdcuts = async () => {
      try {
        const res = await axios.get(
          category === "All"
            ? `http://localhost:5000/e-mart/products`
            : `http://localhost:5000/e-mart/products?category=${category}`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProdcuts();
  }, [category]);

  /* test code */
  /* useEffect(() => {
    const abortController = new AbortController();
    const getProdcuts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/e-mart/products?category=${category}`
            : `http://localhost:5000/e-mart/products`,
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
      abortController.abort();
    };
  }, [category]); */

  useEffect(() => {
    /*  if (category) {
      const filterArray = Object.entries(filters);

      const handleProducts = (array, product) =>
        array.every(([key, value]) => product[key].includes(value));

      setFilteredProducts(
        products.filter((product) => handleProducts(filterArray, product))
      );
    } */

    const filterArray = Object.entries(filters);

    const handleProducts = (array, product) =>
      array.every(([key, value]) => product[key].includes(value));

    setFilteredProducts(
      products.filter((product) => handleProducts(filterArray, product))
    );
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    }
  }, [sort]);
  console.log(filters);
  console.log(filteredProducts);
  console.log(sort);
  console.log("category:", category);

  return (
    <div>
      <div className="container-fluid row justify-content-around g-0  ">
        {filteredProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
