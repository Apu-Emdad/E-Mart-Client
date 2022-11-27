import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, ExitToApp } from "@material-ui/icons";

import "../Assets/CSS/Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalOrders = useSelector((state) => state.cart.totalOrders);

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
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>

            <button
              style={{ border: "none", background: "none" }}
              className="mx-2"
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
            <Navbar.Text>Signed in as:</Navbar.Text>
            <button className="button-5">
              Log out &nbsp;
              {/* https://getcssscan.com/css-buttons-examples */}
              <ExitToApp />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
