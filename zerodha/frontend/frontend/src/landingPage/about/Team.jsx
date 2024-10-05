import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-4 mx-4">
        <h1 className="text-muted text-center mb-4">People</h1>
        <div className="col-4 mx-5 mt-3">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Founder"
            className=""
            style={{ borderRadius: "50%", width: "100%" }}
          />
          <h4 className="test-muted text-center fw-light mt-3">Nithin Kamath</h4>
          <p className="text-muted text-center mt-3">Founder, CEO</p>
        </div>
        <div className="col-6 mx-3 mt-4 text-muted" style={{ fontSize: "17.5px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <p>Playing basketball is his zen. </p>
          <p>Connect on Homepage / TradingQnA / Twitter. </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
