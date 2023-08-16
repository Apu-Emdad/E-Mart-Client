import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import Header from "../Components/Header";
import HeaderSpace from "../Components/HeaderSpace";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderSpace />
      <Banner />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
