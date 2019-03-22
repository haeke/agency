import React from "react";

import Article from "../Article/Article";

const Services = () => {
  return (
    <section className="servicesContainer">
      <article className="services">
        <h1 className="servicesTitle">OUR SERVICES</h1>
      </article>
      <Article
        articleClass="services"
        imgSrc="/images/news.jpeg"
        imgName="News"
        articleHeaderClass="homeArticleHeader"
        articleHeader="news."
        articleParagraphClass="homeArticleParagraph"
        articleParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores molestiae corrupti facere. Ad amet est quam magnam maxime
            eum rerum debitis maiores ratione? Fugit consequuntur asperiores
            iste officiis reiciendis?"
      />
      <article className="services">
        <div className="leftContent">
          <img src="/images/news.jpeg" alt="news" />
        </div>
        <div className="rightContent">
          <div>
            <h1 className="servicesTitle">HOW DO WE WORK?</h1>
            <hr />
            <p className="servicesDescription">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              magnam sed possimus dolor illum quo assumenda. Eum, animi eligendi
              quod in omnis sapiente porro. Fuga sequi quae aliquam natus ex.
            </p>
            <p className="servicesDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              atque assumenda quod? Dolorem excepturi vitae libero
              necessitatibus dolore quisquam laboriosam?Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quibusdam, quae laudantium?
              Nihil ut ab aspernatur eligendi omnis natus doloribus enim
              voluptatum accusantium in.
            </p>
          </div>
        </div>
      </article>
      <article className="services" />
    </section>
  );
};

export default Services;
