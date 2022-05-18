import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('token')
  };

  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <NavLink  to="/">
            <h6 className="h1 font-style text-dark fw-bold">
              Todo<span className="text-warning">App</span>
            </h6>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/workToDo"
              >
                Work To Do
              </NavLink>
              
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/about"
              >
                About
              </NavLink>
            </Nav>
            <Nav>
              {user ? (
                <div>
            
                  <button
                    className="btn btn-danger ms-3 fw-bold"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/signUp"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
