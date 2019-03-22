import React from "react";

import Article from "../Article/Article";

import "./Services.css";

const Services = () => {
  return (
    <section className="servicesContainer">
      <article className="servicesHeaderContainer">
        <h1 className="servicesHeader">OUR SERVICES</h1>
      </article>
      <Article
        articleClass="services"
        imgSrc="/images/services.jpg"
        imgName="News"
        articleHeaderClass="serviceArticleHeader"
        articleHeader="HOW DO WE WORK?"
        articleParagraphClass="serviceArticleParagraph"
        articleParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores molestiae corrupti facere. Ad amet est quam magnam maxime
            eum rerum debitis maiores ratione? Fugit consequuntur asperiores
            iste officiis reiciendis?"
      />
    </section>
  );
};

export default Services;
