import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  useMediaQuery,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close,
  ShoppingCartOutlined,
  LineStyle,
  ListAltOutlined,
  Storefront,
  AccountCircleOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, ListItemIcon, styled } from "@material-ui/core";
import { Logout } from "@mui/icons-material";
const MuiHeader = () => {
  const totalOrders = useSelector((state) => state.cart.totalOrders);
  const user = useSelector((state) => state.user.currentUser);
  const isAdmin = user?.isAdmin || false;
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isWideScreen = useMediaQuery("(min-width: 960px)");
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    console.log("handleOpenUserMenu");
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    console.log("handleCloseUserMenu");

    setAnchorElUser(null);
  };

  const noUserNavItems = [
    {
      name: "Products",
      route: "/products",
    },
    {
      name: "Register",
      route: "/register",
    },
    {
      name: "Sign In",
      route: "/login",
    },
  ];

  const handleNoUserDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const NoUserDrawer = (
    <Box onClick={handleNoUserDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <Typography variant="h6" sx={{ my: 2, fontWeight: "Bold" }}>
          E-mart
        </Typography>
        <IconButton>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {noUserNavItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.route)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  /* ==== Styled Component Starts ==== */
  const TitleContainer = styled(Box)({
    flexGrow: 1,
    display: "flex",
    justifyContent: isWideScreen ? "flex-start" : "center",
  });
  const Title = styled(Typography)({
    fontSize: "40px",
    fontWeight: "bold",
    cursor: "pointer",
    paddingRight: !isWideScreen && "70px",
    paddingLeft: isWideScreen && "8rem",
  });

  const NavItemContainer = styled(Box)({
    display: isWideScreen ? "block" : "none",
    paddingRight: "5rem",
  });

  /* ==== Styled Component Ends ==== */

  const NoUserNavbar = () => (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "rgba(248, 249, 250, 1)", color: "black" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleNoUserDrawerToggle}
            sx={{ mr: 2, display: isWideScreen && "none" }}
          >
            <MenuIcon />
          </IconButton>
          {/* ==== Title Starts ===== */}
          <TitleContainer>
            <Link to="/home">
              <Title variant="h6" component="span">
                E-Mart
              </Title>
            </Link>
          </TitleContainer>
          {/* ==== Title Ends ===== */}

          {/* ==== Nav Item starts ==== */}
          <NavItemContainer>
            {noUserNavItems.map((item) => (
              <Link key={item.name} to={item.route}>
                <Button sx={{ color: "rgba(0, 0, 0, 0.55)" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </NavItemContainer>
          {/* ==== Nav Item Ends ==== */}
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleNoUserDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              height: "fit-content",
            },
          }}
        >
          {NoUserDrawer}
        </Drawer>
      </Box>
    </Box>
  );

  const UserNavbar = () => (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "rgba(248, 249, 250, 1)", color: "black" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleNoUserDrawerToggle}
            sx={{ mr: 2, display: isWideScreen && "none" }}
          >
            <MenuIcon />
          </IconButton>
          {/* ==== Title Starts ===== */}
          <TitleContainer>
            <Link to="/home">
              <Title variant="h6" component="span">
                E-Mart
              </Title>
            </Link>
          </TitleContainer>
          {/* ==== Title Ends ===== */}

          {/* ==== Nav Item starts ==== */}
          <NavItemContainer>
            <Link to="/products">
              <Button sx={{ color: "rgba(0, 0, 0, 0.55)" }}>Products</Button>
            </Link>
            <Link to="/cart">
              <IconButton>
                <Badge
                  badgeContent={totalOrders}
                  color="primary"
                  overlap="rectangular"
                >
                  <ShoppingCartOutlined color="primary" />
                </Badge>
              </IconButton>
            </Link>
            <Button onClick={handleOpenUserMenu}>
              <Typography variant="span" fontWeight="bold">
                {user.username}
              </Typography>
            </Button>
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar src="https://i.ibb.co/sRr8kWj/avatar.png" alt="" />
              <Menu
                sx={{ mt: "45px", left: "calc(100vw - 18rem) !important" }}
                anchorEl={anchorElUser}
                // keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link to="/dashboard">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <LineStyle />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "black" }}>
                      My Dashboard
                    </ListItemText>
                  </MenuItem>
                </Link>
                {isAdmin ? (
                  <div>
                    <Link to="/dashboard/orders">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <ListAltOutlined />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "black" }}>
                          Orders
                        </ListItemText>
                      </MenuItem>
                    </Link>
                    <Link to="/dashboard/productTable">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <Storefront />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "black" }}>
                          Products
                        </ListItemText>
                      </MenuItem>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/dashboard/myorders">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <ListAltOutlined />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "black" }}>
                          My Orders
                        </ListItemText>
                      </MenuItem>
                    </Link>
                    <Link to={`/dashboard/user/${user._id}`}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <AccountCircleOutlined />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "black" }}>
                          Edit Profile
                        </ListItemText>
                      </MenuItem>
                    </Link>
                  </div>
                )}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ margin: "0 auto", fontWeight: "bold" }}
                  >
                    <Logout />
                    &nbsp;Log Out
                  </Button>
                </MenuItem>
              </Menu>
            </IconButton>
          </NavItemContainer>
          {/* ==== Nav Item Ends ==== */}
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleNoUserDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              height: "fit-content",
            },
          }}
        >
          {NoUserDrawer}
        </Drawer>
      </Box>
    </Box>
  );

  return <>{user ? <UserNavbar /> : <NoUserNavbar />}</>;
};

export default MuiHeader;
