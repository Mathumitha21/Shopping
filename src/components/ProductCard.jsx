import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card d-flex">
      
      <img className="product-img" src={product.image} alt={product.title} />

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">₹{product.price}</p>

        <Link to={`/product/${product.id}`}>
          <button className="view-btn">View</button>
        </Link>
      </div>

    </div>
  );
}

export default ProductCard;
