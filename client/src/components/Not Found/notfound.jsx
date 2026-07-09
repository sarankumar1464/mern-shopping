import React from "react";
import "./notfound.css";
import Header from "../Header/header.jsx";

const NotFound = () => {
  return (
    <div className="not-found">
      <Header />
      <img
        src="https://res.cloudinary.com/dch6u5tnb/image/upload/v1783599802/ChatGPT_Image_Jul_9_2026_05_51_53_PM_zbzbgq.png"
        alt="NotFound"
      />
    </div>
  );
};

export default NotFound;
