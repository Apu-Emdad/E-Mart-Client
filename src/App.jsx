import "./App.css";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Success from "./Pages/Success";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/Dashboard-Pages/DashboardHome";
import UserList from "./Pages/Dashboard/Dashboard-Pages/UserList";
import User from "./Pages/Dashboard/Dashboard-Pages/User";
import NewUser from "./Pages/Dashboard/Dashboard-Pages/NewUser";
import ProductTable from "./Pages/Dashboard/Dashboard-Pages/ProductTable";
import ProductDetails from "./Pages/Dashboard/Dashboard-Pages/ProductDetails";
import NewProduct from "./Pages/Dashboard/Dashboard-Pages/NewProduct";
import { useSelector } from "react-redux";
import OrderList from "./Pages/Dashboard/Dashboard-Pages/OrderList";
import MyOrders from "./Pages/Dashboard/Dashboard-Pages/MyOrders";
import UserRoute from "./Components/UserRoute";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/*" element={<ProductList />}>
            <Route path=":category " element={<ProductList />} />
          </Route>

          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route
            path="/cart"
            element={
              <UserRoute>
                <Cart />
              </UserRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />

          <Route path="success" element={<Success />} />

          <Route
            path="/dashboard/*"
            element={
              <UserRoute>
                <Dashboard />
              </UserRoute>
            }
          >
            <Route path="*" element={<DashboardHome />} />
            <Route path="home" element={<DashboardHome />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:id" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="productTable" element={<ProductTable />} />

            <Route
              path="productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="newProduct" element={<NewProduct />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="MyOrders" element={<MyOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
