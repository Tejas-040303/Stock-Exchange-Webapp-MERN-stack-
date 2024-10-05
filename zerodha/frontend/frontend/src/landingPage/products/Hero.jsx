import React from "react";
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="container border-bottom mt-5 p-3">
      <div className="row mb-5">
        <div className="col text-center mt-4 mb-5 text-muted">
          <h1 style={{fontSize:"45px", Color:"#424242"}}>Technology</h1>
          <p style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
          <p>
            Check out our <Link to="/" style={{textDecoration:"none", fontSize:"18px"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
