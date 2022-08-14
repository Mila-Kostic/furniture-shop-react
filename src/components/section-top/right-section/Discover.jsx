import React from "react";

function Discover() {
  return (
    <div className="discover">
      <div className="info-discover">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem
          perspiciatis nihil, nesciunt nulla voluptatibus at totam eligendi
          quidem culpa, adipisci quis, iste voluptatem deleniti exercitationem
          odit. Eius a, exercitationem nisi ipsa, quam, assumenda error beatae
          numquam nobis ad iusto!
        </p>
        <h2>S H O P N O W -----></h2>
      </div>
      <div className="slider">
        <div className="arrowIconLeft">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="arrowIconsRight">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Discover;
