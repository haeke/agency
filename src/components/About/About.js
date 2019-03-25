import React from "react";

import ArticleCard from "../ArticleCard/ArticleCard";

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
          <ArticleCard
            articleHeader="Our Publications"
            leftParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              distinctio magni ipsum dolore eius excepturi, quo harum ad ut nisi
              optio. Dolorum quasi dolore suscipit incidunt voluptate cumque
              aliquid rem eum quia magnam similique exercitationem deleniti, eos
              veniam repellendus voluptatum accusamus sequi id harum accusantium
              blanditiis? Numquam natus ipsam, earum mollitia illum eum repellat
              maxime cumque hic tempore sunt! Ab, iusto, cum nostrum, error ipsa
              quidem pariatur sint consequatur rerum soluta mollitia voluptas
              numquam ullam eligendi quaerat? Quasi, distinctio dolorum."
            rightParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              distinctio magni ipsum dolore eius excepturi, quo harum ad ut nisi
              optio. Dolorum quasi dolore suscipit incidunt voluptate cumque
              aliquid rem eum quia magnam similique exercitationem deleniti, eos
              veniam repellendus voluptatum accusamus sequi id harum accusantium
              blanditiis? Numquam natus ipsam, earum mollitia illum eum repellat
              maxime cumque hic tempore sunt! Ab, iusto, cum nostrum, error ipsa
              quidem pariatur sint consequatur rerum soluta mollitia voluptas
              numquam ullam eligendi quaerat? Quasi, distinctio dolorum."
          />
          <div className="aboutImage">
            <img src="/images/publications.jpg" alt="publications" />
          </div>
        </div>
        <div className="publications">
          <div className="aboutImage">
            <img src="/images/about-news.jpg" alt="news" />
          </div>
          <ArticleCard
            articleHeader="News"
            leftParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo eius ut accusamus hic molestiae libero voluptates quae? Sunt distinctio quaerat in velit ducimus alias dolor totam obcaecati, doloremque officia!"
            rightParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo eius ut accusamus hic molestiae libero voluptates quae? Sunt distinctio quaerat in velit ducimus alias dolor totam obcaecati, doloremque officia!"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
