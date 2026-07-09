import React from "react";
import "./herobanner.css";


const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dch6u5tnb/image/upload/v1783513164/Screenshot_2026-07-08_172206_z58nec.png" className="d-block w-100" alt="Banner 1" />
          </div>

          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dch6u5tnb/image/upload/v1783513587/Screenshot_2026-07-08_175548_rjoeyk.png" className="d-block w-100" alt="Banner 2" />
          </div>

          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dch6u5tnb/image/upload/v1783513698/Screenshot_2026-07-08_175753_rvxqh9.png" className="d-block w-100" alt="Banner 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;