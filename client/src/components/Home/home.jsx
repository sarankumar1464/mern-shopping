import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header.jsx";
import HeroBanner from "../HeroBanner/herobanner.jsx";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
    </div>
  );
};

export default Home;
