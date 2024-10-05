import React from "react";

function RightSection({
  imageUrl,
  productTopic,
  productDesr,
  tryDemo,
  leftText
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-4">
          <div
            className="mt-3 text-muted"
            style={{ width: "325px", marginLeft: "15px" }}
          >
            <h2 className="mb-4 fs-1">{productTopic}</h2>
            <p className="fw-normal fs-6 mb-4">{productDesr}</p>
            <div className="mb-4">
              <a
                href={tryDemo}
                style={{ textDecoration: "none" }}
                className="me-5"
              >
                {leftText} &ensp;
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="col-6 p-1">
          <img src={imageUrl} style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
