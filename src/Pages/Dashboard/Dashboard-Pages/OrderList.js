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
    getOrders();
  }, []);

  const handleOrderStatus = () => {};
  return (
    <div className="OrderList">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>OrderId</TableCell>
              <TableCell align="center">Customer</TableCell>
              <TableCell align="center">Total Order</TableCell>
              <TableCell align="center">Products</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>123</TableCell>
              <TableCell align="center">abujar</TableCell>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Subtotal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Shirt</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
              <TableCell align="center">100</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">
                <select
                  name="color"
                  id=""
                  className="orderlist-update"
                  onChange={handleOrderStatus}
                >
                  <option value="approved">Approved</option>
                  <option value="shipped">Shipped</option>
                </select>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderList;
