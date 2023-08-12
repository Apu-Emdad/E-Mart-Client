import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
