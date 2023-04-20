import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Style/Header.css";

const Header = () => {
  let Logout=()=>{
    <div>
      Logout
    </div>
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              Medicine categorize
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              Medicine list
            </Link>
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
            <Link to={"/manage-medicine"} className="nav-link">
              Manage Medicine
            </Link>
          </Nav>
          <Nav className="logout">
            <Nav.Link onClick={Logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
