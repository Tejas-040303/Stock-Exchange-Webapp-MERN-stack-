import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5">
          <h1 className="mb-5">Unbeatable pricing</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            quaerat voluptate ratione tempore cum, ducimus odit doloribus
            aperiam velit deserunt?
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 ">
          <div className="row text-center mx-auto">
            <div className="col border p-4">
              <h1 className="mb-4">
                <i class="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col border p-4">
              <h1 className="mb-4">
                <i class="fa-solid fa-indian-rupee-sign"></i>20
              </h1>
              <p>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
