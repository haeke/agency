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
      <div className="publicationsContainer">
        <div className="publications">
          <div className="publicationsHeader">
            <h1 className="publicationsHeader">Our Publications</h1>
          </div>
          <div className="publicationsParagraphContainer">
            <div className="publicationParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ducimus, dolorem quam velit, itaque placeat odio architecto
              exercitationem quae in, sequi reiciendis rem esse quis nobis.
              Nulla, repudiandae! Officiis ipsum aliquid quidem labore ullam
              aperiam aliquam fugit. Nemo ex impedit voluptatum? Odio illum rem
              quod, laboriosam voluptates porro magni quam blanditiis sapiente,
              necessitatibus nobis modi minus et quaerat eligendi. Unde!
            </div>
            <div className="publicationParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              distinctio magni ipsum dolore eius excepturi, quo harum ad ut nisi
              optio. Dolorum quasi dolore suscipit incidunt voluptate cumque
              aliquid rem eum quia magnam similique exercitationem deleniti, eos
              veniam repellendus voluptatum accusamus sequi id harum accusantium
              blanditiis? Numquam natus ipsam, earum mollitia illum eum repellat
              maxime cumque hic tempore sunt! Ab, iusto, cum nostrum, error ipsa
              quidem pariatur sint consequatur rerum soluta mollitia voluptas
              numquam ullam eligendi quaerat? Quasi, distinctio dolorum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
