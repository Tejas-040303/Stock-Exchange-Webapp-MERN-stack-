import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="border-bottom mt-5 mb-5 pt-5 text-center">
        <h1>Charges</h1>
        <p className="fs-5 mb-5 pb-5 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row mt-5 p-5 text-center">
        <div className="col-4">
            <img src="media/images/pricingEquity.svg" alt="" className="mb-5" style={{width:"80%"}}/>
            <h2 className="mb-4">Free equity delivery</h2>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
        <img src="media/images/intradayTrades.svg" alt="" className="mb-5" style={{width:"80%"}}/>
            <h2 className="mb-4">Intraday and F&O trades</h2>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
            <img src="media/images/pricingMF.svg" alt="" className="mb-5" style={{width:"80%"}}/>
            <h2 className="mb-4">Free direct MF</h2>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
