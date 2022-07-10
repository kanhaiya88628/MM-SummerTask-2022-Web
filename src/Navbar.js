import React from "react";
import logo from "./logo1.png";
import "./Navbar.css";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <Container>
      <div>
        <AppBar sx={{ background: "white", color: "black" }}>
          <Toolbar className="navbar">
            <div id="main-logo">
              <img src={logo} class="logo" alt="logo" />
            </div>
            <div className="header-middle">
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>

              <Button color="inherit" component={Link} to="/admin">
                Admin
              </Button>

            </div>
            <div className="login">
              <Button variant="contained" component={Link} to="/login">
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
};

export default Navbar;
