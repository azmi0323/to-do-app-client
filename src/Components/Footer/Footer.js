import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark mt-auto">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
            <h6 className="h1 font-style text-white fw-bold">
              Todo<span className="text-warning">App</span>
            </h6>
              <p className="small text-muted">
                In this app you can make todo list of your daily work. Our chairman
                sir{" "}
                <Link className="footer-style" to="/about">
                  Mr. Aazmi Habib
                </Link>{" "}
                Try to make a simple todo app for people. So that people can note down their activities of daily life.
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Todo App Features</h5>
              <ul className="list-unstyled ">
                <li>
                  <Link className=" footer-style  mb-0" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/workToDo">
                    Work To Do
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">More Features to Come</h5>
              <ul className="list-unstyled ">
                <li>
                  <Link className=" footer-style  mb-0" to="/manageTodo">
                    Manage Todo
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/addTodo">
                    Add Todo
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/myTodo">
                    My Todo
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/logIn">
                    LogIn
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3 ">Contact Us</h5>
              
              <h6 className="text-white mt-5">
                Email:{" "}
                <span className="text-info">azmihabib0323@gmail.com</span>
              </h6>
              <h6 className="text-white mt-3">
                Phone:{" "}
                <span className="text-info">
                  +8801303823282, +00801765479719
                </span>
              </h6>
            </div>
          </div>
          <p className="small my-5 text-center text-muted mb-0">
            &copy; Copyrights. All rights reserved 2022 by{" "}
            <Link className="footer-style" to="/about">
              Aazmi Habib
            </Link>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
