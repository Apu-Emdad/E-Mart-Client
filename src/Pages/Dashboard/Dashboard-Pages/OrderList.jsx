import React from "react";
import "../../../Assets/CSS/Dashboard-CSS/OrderList.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { userRequest } from "../../../requestMethods";
import { useState } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders");
        console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const updateOrders = async () => {
      try {
        const res = await userRequest.put(`/orders/${orderId}`, {
          status: status,
        });
        console.log(res.data);
        getOrders();
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
    updateOrders();
  }, [orderId, status]);

  const handleOrderStatus = (e, id) => {
    setStatus(e.target.value);
    setOrderId(id);
  };

  /*   
  useEffect(() => {
    const updateOrders = async () => {
      try {
        const res = await userRequest.put(`/orders/${orderId}`, {
          status: status,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    updateOrders();
  }, [orderId, status]);


 */
  console.log(orderId, status);
  return (
    <div className="OrderList">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>OrderId</TableCell>
              <TableCell align="center">Customer</TableCell>
              <TableCell align="center">Total Orders</TableCell>
              <TableCell align="center">Products</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell align="center">
                  <div className="orderList-customer">
                    <img src="https://i.ibb.co/sRr8kWj/avatar.png" alt="" />
                    <p>{order.userName}</p>
                  </div>
                </TableCell>
                <TableCell align="center">{order.totalOrders}</TableCell>
                <TableCell align="center">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Unit Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Subtotal</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.products.map((product) => (
                        <TableRow key={product._id}>
                          <TableCell>{product.title}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.productQuantity}</TableCell>
                          <TableCell>{product.subtotal}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
                <TableCell align="center">{order.total}</TableCell>
                <TableCell align="center">{order.status}</TableCell>
                <TableCell align="center">
                  <select
                    name="color"
                    id=""
                    className="orderlist-update"
                    onChange={(e) => handleOrderStatus(e, order._id)}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="shipped">Shipped</option>
                  </select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderList;
