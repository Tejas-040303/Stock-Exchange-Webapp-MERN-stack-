import React from "react";
import {Link} from 'react-router-dom'
function Universe() {
  return (
    <div className="container text-center mt-5">
      <p className="mb-5 fs-4">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <h1 className="mt-5 mb-4">The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mx-5 p-5">
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" style={{width:"75%"}} />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="sensibullLoga" style={{width:"75%"}} />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"75%"}} />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mx-5 px-5">
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" style={{width:"75%"}} />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="sensibullLoga" style={{width:"75%"}} />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"75%"}} />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <Link to="/signup"><button className="btn btn-primary p-2 fs-5" style={{width:"200px"}}>Sign up for free</button></Link>
    </div>
  );
}

export default Universe;
