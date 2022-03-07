import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.home.jpg";
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Marina's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <Button>ORDER NOW</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
