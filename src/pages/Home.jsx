// import React from "react";
// import { Link } from "react-router-dom";


// function Home() {
//   return (
//     <div className="home-container d-flex">
//       <div className="home-content text-center">
//         <h1 className="home-title">Welcome to Shopping</h1>
//         <p className="home-subtitle">
//           Shop mobiles, electronics, fashion & more
//         </p>

//         <Link to="/products">
//           <button className="btn btn-primary btn-lg home-btn">
//             Shop Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h1 className="home-title">Discover Your Style</h1>
          <p className="home-subtitle">
            Trending fashion, mobiles & electronics at best prices
          </p>

          <div className="home-buttons">
            <Link to="/products">
              <button className="shop-btn">Shop Now</button>
            </Link>

            <Link to="/explore">
              <button className="fashion-btn">Explore Fashion</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
