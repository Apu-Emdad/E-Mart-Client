import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import MuiHeader from "../Components/MuiHeader";

const Home = () => {
  return (
    <div>
      <Header />
      <MuiHeader />
      <Banner />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
