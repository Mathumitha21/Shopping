import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home-container">
      <div className="home-content text-center">
        <h1 className="home-title">Welcome to Shopping</h1>
        <p className="home-subtitle">
          Shop mobiles, electronics, fashion & more
        </p>

        <Link to="/products">
          <button className="btn btn-primary btn-lg home-btn">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
