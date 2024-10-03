import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-4">
          <img src="media/images/education.svg" alt="Education Image" />
        </div>
        <div className="col-6 p-4 mt-5 mb-4">
          <h2>Free and open market education</h2>
          <p className="text-muted mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odio nesciunt dolorum.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="text-muted mt-4">
            Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nam, minima illo.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
