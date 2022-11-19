import "./App.css";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

function App() {
  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/*" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>

      {/* <ProductList /> */}
      {/* <SingleProduct /> */}
      {/* <Register /> */}
      {/* <Login /> */}

      {/* <Cart /> */}
    </div>
  );
}

export default App;
