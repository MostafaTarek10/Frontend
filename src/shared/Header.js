import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "../Style/Header.css"

const Header = () => {
  return <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
          <Link to={"/"} className="nav-link">MedsCat</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/ManageMedicines"} className="nav-link">Medicines</Link>
            <Link to={"/login"} className="nav-link">Login</Link>
            <Link to={"/register"} className="nav-link">Register</Link>
            <Link to={"/MedDetails"} className="nav-link">Med-Details</Link>
            <Link to={"/Manage-Cat"} className="nav-link">ManageCategories</Link>

          </Nav>
          <Link to={"/test"} className="sign-in">Log out</Link>
        </Container>
      </Navbar>
  </>;
};

export default Header;
