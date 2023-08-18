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
  Avatar,
  ListItemIcon,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close,
  ShoppingCartOutlined,
  LineStyle,
  ListAltOutlined,
  Storefront,
  AccountCircleOutlined,
  ExitToApp,
} from "@material-ui/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/Slices/userSlice";

const Header = () => {
  const totalOrders = useSelector((state) => state.cart.totalOrders);
  const user = useSelector((state) => state.user.currentUser);
  const isAdmin = user?.isAdmin || false;
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const open = Boolean(anchorElUser);
  const isWideScreen = useMediaQuery("(min-width: 960px)");
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  console.log("open:", open);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const noUserDrawerItems = [
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

  const userDrawerItems = [
    {
      name: "Products",
      route: "/products",
    },
    {
      name: "Casual",
      route: "/products/casual",
    },
    {
      name: "Warm",
      route: "/products/warm",
    },
    {
      name: "Formal",
      route: "/products/formal",
    },
  ];

  /* ==== Styled Component Starts ==== */
  const TitleContainer = styled(Box)({
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
  });
  const Title = styled(Typography)({
    fontSize: isWideScreen ? "2.5rem" : "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    // paddingRight: !isWideScreen && "10px",
    paddingLeft: isWideScreen ? "8rem" : "0rem",
  });

  const WideScreenProducts = styled(Box)({
    display: isWideScreen ? "block" : "none",
  });

  const DrawerItemsContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
  });
  /* ==== Styled Component Ends ==== */

  const NoUserDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <DrawerItemsContainer>
        <Link to="/home">
          <Typography variant="h6" sx={{ my: 2, fontWeight: "Bold" }}>
            E-mart
          </Typography>
        </Link>
        <IconButton>
          <Close />
        </IconButton>
      </DrawerItemsContainer>
      <Divider />
      <List>
        {noUserDrawerItems.map((item) => (
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

  const UserDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <DrawerItemsContainer>
        <Link to="/cart">
          <ShoppingCartOutlined fontSize="large" />
        </Link>
        <IconButton>
          <Close />
        </IconButton>
      </DrawerItemsContainer>
      <Divider />
      <List>
        {userDrawerItems.map((item) => (
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

  const NoUserNavbar = () => (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "rgba(248, 249, 250, 1)", color: "black" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
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
          <WideScreenProducts sx={{ paddingRight: "5rem" }}>
            {noUserDrawerItems.map((item) => (
              <Link key={item.name} to={item.route}>
                <Button sx={{ color: "rgba(0, 0, 0, 0.55)" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </WideScreenProducts>
          {/* ==== Nav Item Ends ==== */}
        </Toolbar>
      </AppBar>
      {/* ==== Drawer starts ==== */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
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
      {/* ==== Drawer Ends ==== */}
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
            onClick={handleDrawerToggle}
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
          <WideScreenProducts>
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
          </WideScreenProducts>
          {/* ==== Nav Item Ends ==== */}
          {/* ==== userMenu starts ====*/}
          <Box sx={{ paddingRight: isWideScreen ? "5rem" : "0rem" }}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ paddingRight: "0px", marginLeft: "20px" }}
            >
              <Typography variant="span" fontWeight="bold">
                {user.username}
              </Typography>
            </Button>
            <Button onClick={handleOpenUserMenu}>
              <Avatar src="https://i.ibb.co/sRr8kWj/avatar.png" />
            </Button>
            <Menu
              sx={{
                mt: "45px",
                left: isWideScreen
                  ? "calc(100vw - 20rem) !important"
                  : "calc(100vw - 14rem) !important",
              }}
              anchorEl={anchorElUser}
              open={open}
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
                  onClick={handleLogOut}
                >
                  <ExitToApp />
                  &nbsp;Log Out
                </Button>
              </MenuItem>
            </Menu>
            {/* ==== userMenu ends ====*/}
          </Box>
        </Toolbar>
      </AppBar>
      {/* ==== Drawer starts ==== */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
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
        {UserDrawer}
      </Drawer>
      {/* ==== Drawer ends ==== */}
    </Box>
  );

  return <>{user ? <UserNavbar /> : <NoUserNavbar />}</>;
};

export default Header;
