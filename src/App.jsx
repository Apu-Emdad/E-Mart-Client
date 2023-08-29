import './App.css';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import SingleProduct from './Pages/SingleProduct';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Navigate, Route, useLocation } from 'react-router-dom';
import Success from './Pages/Success';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/Dashboard-Pages/DashboardHome';
import UserList from './Pages/Dashboard/Dashboard-Pages/UserList';
import User from './Pages/Dashboard/Dashboard-Pages/User';
import NewUser from './Pages/Dashboard/Dashboard-Pages/NewUser';
import ProductTable from './Pages/Dashboard/Dashboard-Pages/ProductTable';
import ProductDetails from './Pages/Dashboard/Dashboard-Pages/ProductDetails';
import NewProduct from './Pages/Dashboard/Dashboard-Pages/NewProduct';
import { useSelector } from 'react-redux';
import OrderList from './Pages/Dashboard/Dashboard-Pages/OrderList';
import MyOrders from './Pages/Dashboard/Dashboard-Pages/MyOrders';
import UserRoute from './Components/UserRoute';
import { useEffect } from 'react';
import AdminRoute from './Components/Dashboard-Components/AdminRoute';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products/*" element={<ProductList />}>
              <Route path=":category " element={<ProductList />} />
            </Route>

            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/cart" element={<UserRoute> <Cart /> </UserRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="success" element={<UserRoute><Success /></UserRoute>} />



            <Route path="/dashboard/*" element={<UserRoute> <Dashboard /> </UserRoute>} >
              <Route path="*" element={<DashboardHome />} />
              <Route path="home" element={<DashboardHome />} />
              <Route path="user/:id" element={<User />} />
              <Route path="MyOrders" element={<MyOrders />} />
              {/* ====Admin Route starts ==== */}
              <Route path="users" element={<AdminRoute> <UserList /> </AdminRoute>} />
              <Route path="orders" element={<AdminRoute><OrderList /></AdminRoute>} />
              <Route path="productTable" element={<AdminRoute><ProductTable /></AdminRoute>} />
              <Route path="newUser" element={<AdminRoute><NewUser /></AdminRoute>} />
              <Route path="productDetails/:productId" element={<AdminRoute><ProductDetails /></AdminRoute>} />
              <Route path="newProduct" element={<AdminRoute><NewProduct /></AdminRoute>} />


              {/* ====Admin Route ends ==== */}

            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
