import React from "react";

import "./About.css";

const About = () => {
  return (
    <section className="aboutContainer">
      <div className="aboutHeaderContainer">
        <h1 className="aboutHeader">Our Agency</h1>
        <div className="aboutSubHeaderContainer">
          <h4 className="aboutSubHeader">
            Learn why we're the best at what we do and why we're regarded as one
            of the best in the creative industry today.
          </h4>
        </div>
      </div>
      <div className="clientsContainer">
        <div className="clientsWrapper">
          <h4 className="clientHeader">Clients we worked for</h4>
          <div className="clientLogo">
            <img
              src="/images/client4.png"
              alt="Client 1"
              style={{ width: "33.33%" }}
            />
            <img
              src="/images/client7.png"
              alt="Client 1"
              style={{ width: "33.33%" }}
            />
            <img
              src="/images/client4.png"
              alt="Client 1"
              style={{ width: "33.33%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
