import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar  bg="light" expand="lg">
        <Container className="container" fluid>
          <Navbar.Brand  href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/workToDo">Work To Do</Link>
              <Link to="/about">About</Link>
              
              
            </Nav>
            
            <Link to="/login" >
                Login
              </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
