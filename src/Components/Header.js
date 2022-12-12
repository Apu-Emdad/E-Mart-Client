import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import "../Assets/CSS/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../Redux/Slices/userSlice";

import {
  LineStyle,
  ListAltOutlined,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PersonAddOutlined,
  AddCircleOutline,
  AccountCircleOutlined,
} from "@material-ui/icons";

const Header = () => {
  const totalOrders = useSelector((state) => state.cart.totalOrders);
  const user = useSelector((state) => state.user.currentUser);
  const isAdmin = user?.isAdmin || false;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/home">
          <b>E-Mart</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            {!user && <Nav.Link href="/register">Register</Nav.Link>}
            {!user && <Nav.Link href="/login">Sign In</Nav.Link>}
            {user && (
              <button
                style={{ border: "none", background: "none" }}
                className="mx-2 Header-Cart-Button"
              >
                <Link to="/cart">
                  <Badge
                    badgeContent={totalOrders}
                    color="primary"
                    overlap="rectangular"
                  >
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </button>
            )}
            {/*  <Navbar.Text className="user-name" style={{ color: "black" }}>
              Modric&nbsp;
            </Navbar.Text> */}
            {user && (
              <NavDropdown
                title={
                  <div className="nav-dropodown-title">
                    <img src="https://i.ibb.co/sRr8kWj/avatar.png" alt="" />
                    <p>{user.username}</p>
                  </div>
                }
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  className="Header-avatar-item"
                  href="/dashboard"
                >
                  <LineStyle /> <span>My Dashboard</span>
                </NavDropdown.Item>

                {isAdmin ? (
                  <NavDropdown.Item
                    className="Header-avatar-item"
                    href="dashboard/orders"
                  >
                    <ListAltOutlined /> <span>Orders</span>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item
                    className="Header-avatar-item"
                    href="dashboard/myorders"
                  >
                    <ListAltOutlined /> <span>My Orders</span>
                  </NavDropdown.Item>
                )}
                {isAdmin ? (
                  <NavDropdown.Item
                    className="Header-avatar-item"
                    href={`dashboard/productTable`}
                  >
                    <Storefront /> <span>Products</span>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item
                    className="Header-avatar-item"
                    href={`dashboard/user/${user._id}`}
                  >
                    <AccountCircleOutlined /> <span>Edit Profile</span>
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item
                  href="#action/3.4"
                  id="logOut"
                  onClick={handleLogOut}
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {/* https://getcssscan.com/css-buttons-examples */}
            {/*    <button className="button-5" title="Log Out" onClick={handleLogOut}>
              Log Out
            </button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
