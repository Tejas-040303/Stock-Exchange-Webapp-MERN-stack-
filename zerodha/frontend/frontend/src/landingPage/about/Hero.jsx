import React from "react";

function Hero() {
  return (
    <div className="container mb-5 mt-5 p-4 text-muted">
      <div className="row mb-5 border-bottom  mt-4">
        <div className="col-2 mb-5"></div>
        <div className="col-9 mb-5 p-5">
          <h2 className="text-muted">
            We pioneered the discount broking model in India.
          </h2>
          <h2 className="text-muted">
            {" "}
            Now, we are breaking ground with our technology.
          </h2>
        </div>
        <div className="col-1 mb-5"></div>
      </div>
      <div className="row mt-5 p-5">
        <div className="col-1"></div>
        <div className="col">
            <p className="mb-4">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p className="mb-4">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className="col">
            <p className="mb-4">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p className="mb-4">Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
            </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
