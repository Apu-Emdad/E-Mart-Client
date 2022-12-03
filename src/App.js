import "./App.css";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Success from "./Pages/Success";
import Dasboard from "./Pages/Dashboard/Dasboard";
import DashboardHome from "./Pages/Dashboard/Dashboard-Pages/DashboardHome";
import UserList from "./Pages/Dashboard/Dashboard-Pages/UserList";
import User from "./Pages/Dashboard/Dashboard-Pages/User";

function App() {
  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/*" element={<ProductList />}>
            <Route path=":category " element={<ProductList />} />
          </Route>
          {/* <Route path="/products/:category" element={<ProductList />} /> */}
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/dashboard/*" element={<Dasboard />}>
            <Route path="" element={<DashboardHome />} />
            <Route path="home" element={<DashboardHome />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:id" element={<User />} />
          </Route>
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
