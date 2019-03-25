import React from "react";

import Article from "../Article/Article";
import ArticleCard from "../ArticleCard/ArticleCard";

import "./Home.css";

const Home = () => {
  return (
    <section className="homeContainer">
      <article className="landing">
        <h1 className="landingHeader">news. quotes. analytics.</h1>
      </article>
      <Article
        articleClass="homeArticle"
        imgSrc="/images/news.jpg"
        imgName="News"
        articleHeaderClass="homeArticleHeader"
        articleHeader="news."
        articleParagraphClass="homeArticleParagraph"
        articleParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores molestiae corrupti facere. Ad amet est quam magnam maxime
            eum rerum debitis maiores ratione? Fugit consequuntur asperiores
            iste officiis reiciendis?"
      />
      <Article
        articleClass="homeArticle"
        imgSrc="/images/quotes.jpg"
        imgName="quotes"
        articleHeaderClass="homeArticleHeader"
        articleHeader="quotes."
        articleParagraphClass="homeArticleParagraph"
        articleParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        dolores molestiae corrupti facere. Ad amet est quam magnam maxime
        eum rerum debitis maiores ratione? Fugit consequuntur asperiores
        iste officiis reiciendis?"
      />
      <Article
        articleClass="homeArticle"
        imgSrc="/images/analytics.jpeg"
        imgName="analytics"
        articleHeaderClass="homeArticleHeader"
        articleHeader="analytics."
        articleParagraphClass="homeArticleParagraph"
        articleParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        dolores molestiae corrupti facere. Ad amet est quam magnam maxime
        eum rerum debitis maiores ratione? Fugit consequuntur asperiores
        iste officiis reiciendis?"
      />
    </section>
  );
};

export default Home;
