import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker Image" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest Stock broke in India</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            tempore delectus corporis fuga error officiis ullam ad cumque porro
            qui?
          </p>
          <div className="row mt-5">
            <div className="col-5">
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>four</li>
                <li>five</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Press Logo Image" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
