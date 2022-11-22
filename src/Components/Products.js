import React, { useEffect, useState } from "react";
import { popularProduct } from "../Assets/data";
import Product from "./Product";

import "../Assets/CSS/Product.css";
import axios from "axios";
import { publicRequest } from "../requestMethods";

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
      console.log("unmounted");
      abortController.abort();
    };
  }, [category]);
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
      console.log("unmounted");
      abortController.abort();
    };
  }, [category]); */

  /* test code using boolean*/
  /* useEffect(() => {
    let isSet = true;
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/e-mart/products?category=${category}`
            : `http://localhost:5000/e-mart/products`
        );
        isSet && setProducts(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProducts();
    return () => {
      isSet = false;
    };
  }, [category]); */

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
  /*   console.log(filters);
  console.log(filteredProducts);
  console.log(sort); */
  // console.log("category:", category);
  console.log(filters);
  console.log(products);

  return (
    <div>
      <div className="container-fluid row justify-content-around g-0  ">
        {filters
          ? filteredProducts.map((product) => (
              <Product product={product} key={product._id} />
            ))
          : products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
      </div>
    </div>
  );
};

export default Products;
