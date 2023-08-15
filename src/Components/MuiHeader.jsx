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
} from "@material-ui/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
const MuiHeader = () => {
  const totalOrders = useSelector((state) => state.cart.totalOrders);
  const user = useSelector((state) => state.user.currentUser);
  const isAdmin = user?.isAdmin || false;
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isWideScreen = useMediaQuery("(min-width: 960px)");
  const drawerWidth = 240;
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
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

  const NoUserNavbar = () => (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "rgba(248, 249, 250, 1)", color: "black" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleNoUserDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: isWideScreen ? "flex-start" : "center",
            }}
          >
            <Link to="/home">
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  paddingRight: !isWideScreen && "70px",
                  paddingLeft: isWideScreen && "8rem",
                }}
              >
                E-Mart
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {noUserNavItems.map((item) => (
              <Link key={item.name} to={item.route}>
                <Button sx={{ color: "rgba(0, 0, 0, 0.55)" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
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
              width: drawerWidth,
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
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: isWideScreen ? "flex-start" : "center",
            }}
          >
            <Link to="/home">
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  paddingRight: !isWideScreen && "70px",
                  paddingLeft: isWideScreen && "8rem",
                }}
              >
                E-Mart
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
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

            <IconButton>
              <Avatar
                src="https://i.ibb.co/sRr8kWj/avatar.png"
                alt=""
                onClick={handleOpenUserMenu}
              />
              <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">item 1</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">item 1</Typography>
                </MenuItem>
              </Menu>
            </IconButton>
          </Box>
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
              width: drawerWidth,
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
