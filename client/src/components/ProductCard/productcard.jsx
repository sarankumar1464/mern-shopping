import React from "react";
import "./productcard.css";

const ProductCard = ({ product }) => {
  const { name, price, image, category, rating } = product || {};

  return (
    <li className="product-card">
      <img src={image} alt={name} className="product-card__image" />
      <div className="product-card__details">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__rating">⭐ {rating}</p>
        <p className="product-card__price">₹{price}</p>
      </div>
    </li>
  );
};

export default ProductCard;