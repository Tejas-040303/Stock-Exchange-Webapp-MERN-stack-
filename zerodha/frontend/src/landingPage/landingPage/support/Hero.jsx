import React from "react";

function Hero() {
  return (
    <div
      className="container-fuild mb-5"
      style={{ backgroundColor: "#387ED1", color: "#FFF", height: "75vh" }}
    >
      <div className="container p-4">
        <div className="row mt-4 p-3 px-1 mb-2">
          <div className="col-7"><h4>Support Portal</h4></div>
          <div className="col-5">
            <p className="text-end"><a href="" style={{color:"#FFF", fontSize:"17px"}}>Track tickets</a></p>
          </div>
        </div>

        <div className="row fw-normal">
          <div className="col-7 fw-light p-3">
            <h3 className="fw-light mb-4 ">
              Search for an answer or browse help topics to create a ticket
            </h3>
            <input type="text" placeholder="E.g. How to active my F&O account?" className="form-control mb-3"/>
            <p><a href="" className="" style={{color:"#FFF", fontSize:"17px", wordSpacing:"4px"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="" style={{color:"#FFF", fontSize:"17px", wordSpacing:"4px"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="" style={{color:"#FFF", fontSize:"17px",  wordSpacing:"4px"}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="" style={{color:"#FFF", fontSize:"17px",  wordSpacing:"4px"}}> Kite user manual</a></p>
          </div>
          <div className="col-1"></div>
          <div className="col-4 mt-5">
            <p>
              <h4 className="fw-light">Featured</h4>
              <ol style={{lineHeight:"2.5"}}>
                <li><a href="" className="" style={{color:"#FFF", fontSize:"17px"}}>Suspension of trading - IDFC Limited</a></li>
                <li><a href="" className="" style={{color:"#FFF", fontSize:"17px"}}>Rights Entitlements listing in October 2024</a></li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
