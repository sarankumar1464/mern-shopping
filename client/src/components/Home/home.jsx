import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header.jsx";
import HeroBanner from "../HeroBanner/herobanner.jsx";
import Products from "../Products/products.jsx";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroBanner />
      <div className="home-content">
        <Products />
      </div>
    </div>
  );
};

export default Home;
