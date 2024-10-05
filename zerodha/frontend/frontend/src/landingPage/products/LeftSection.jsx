import React from "react";

function LeftSection({
  imageUrl,
  productTopic,
  productDesr,
  tryDemo,
  leftText,
  learnMore,
  rightText,
  googleStore,
  appStore,
  hideIcon1,
  hideIcon2
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-1">
          <img src={imageUrl} />
        </div>
        <div className="col-6 mt-4">
          <div
            className="mt-3 text-muted"
            style={{ width: "325px", marginLeft: "150px" }}
          >
            <h2 className="mb-4 fs-1">{productTopic}</h2>
            <p className="fw-normal fs-6 mb-4">{productDesr}</p>
            <div className="mb-4">
              <a
                href={tryDemo}
                style={{ textDecoration: "none" }}
                className="me-5"
              >
                {leftText} &ensp; {!hideIcon1 && <i class="fa-solid fa-arrow-right-long"></i>}
              </a>
              <a
                href={learnMore}
                style={{ textDecoration: "none" }}
                className="ms-4"
              >
                {rightText} &ensp; {!hideIcon2 && <i class="fa-solid fa-arrow-right-long"></i>}
              </a>
              <br />
            </div>
            <div>
              <a href={googleStore}>
                <img src="media/images/googlePlayBadge.svg" />
              </a>
              <a href={appStore} className="ms-4">
                <img src="media/images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
