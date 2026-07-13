import React from "react";
import ProductCard from "../ProductCard/productcard.jsx";
import "./products.css";

const products = [
  {
    id: 1,
    name: "A5 Spiral Notebook",
    price: 199,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    category: "Notebooks",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Ball Pen Set",
    price: 99,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    category: "Pens",
    rating: 4.3,
  },
];

const Products = () => {
  return (
    <div className="products-section">
      <div className="products-heading">
        <h2>Featured Products</h2>
        <p>Discover our best picks for everyday essentials.</p>
      </div>
      <ul className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;