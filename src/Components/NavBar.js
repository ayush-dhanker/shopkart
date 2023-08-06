import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";

const pages = ["Categories", "Deals", "What's new", "Delivery"];
const pages2 = [
  "Categories",
  "Deals",
  "What's new",
  "Delivery",
  "Account",
  "Cart",
];

const NavBar = ({ shadow }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: shadow || 0 }}
      >
        <Container maxWidth="xl" sx={{ width: "95%", margin: "auto" }}>
          <Toolbar disableGutters>
            <StoreTwoToneIcon
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
                mr: 1,
                color: "green",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "green",
                textDecoration: "none",
              }}
            >
              Shopcart
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: 600,
                  }}
                >
                  {page}
                </Button>
              ))}
              <OutlinedInput
                id="outlined-search"
                placeholder="Search"
                type="search"
                sx={{
                  my: 2,
                  borderRadius: "16px",
                  border: "none",
                  background: "whitesmoke",
                  alignItems: "center",
                  height: "40px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: 600,
                  display: { xs: "none", lg: "flex" },
                }}
                startIcon={<PersonOutlineIcon />}
              >
                Account
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: 600,
                  display: { xs: "none", md: "flex", lg: "none" },
                }}
              >
                <PersonOutlineIcon />
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: 600,
                  display: { xs: "none", lg: "flex" },
                }}
                startIcon={<AddShoppingCartSharpIcon />}
              >
                Cart
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: 600,
                  display: { xs: "none", md: "flex", lg: "none" },
                }}
              >
                <AddShoppingCartSharpIcon />
              </Button>
            </Box>
            {/*//////////////////////////////////////////////////////////////////////////*/}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages2.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <StoreTwoToneIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "green",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "green",
                textDecoration: "none",
              }}
            >
              Shopcart
            </Typography>
            <OutlinedInput
              id="outlined-search"
              placeholder="Search"
              type="search"
              sx={{
                my: 2,
                borderRadius: "16px",
                display: { xs: "flex", md: "none" },
                border: "none",
                background: "whitesmoke",
                alignItems: "center",
                height: "40px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
