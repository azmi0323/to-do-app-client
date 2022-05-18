import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import carousel from '../../img/lg.png'
const Home = () => {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel} alt="First slide" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="bannerSecond text-white text-end my-5 py-5">
        <div className="container py-5">
          <h1 className="text-danger">We provide to do app <br /> for your personal use</h1>
          <p>
            This is very good quality app. <br /> This website is only for
            the todo list. <br /> Here the user can add todo list.
          </p>
          <Link to="/workToDo" className="btn btn-info text-white ">
            Add Some To Do
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
