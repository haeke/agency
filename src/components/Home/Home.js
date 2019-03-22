import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <section className="homeContainer">
      <article className="landing">
        <h1 className="landingHeader">news. quotes. analytics</h1>
      </article>
      <article className="news">
        <div className="leftContent">
          <h1 className="newsHeader">news.</h1>
        </div>
        <div className="rightContent">
          <p className="newsParagraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores molestiae corrupti facere. Ad amet est quam magnam maxime
            eum rerum debitis maiores ratione? Fugit consequuntur asperiores
            iste officiis reiciendis?
          </p>
        </div>
      </article>
      <article className="news">
        <div className="leftContent">
          <h1 className="newsHeader">quotes.</h1>
        </div>
        <div className="rightContent">
          <p className="newsParagraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores molestiae corrupti facere. Ad amet est quam magnam maxime
            eum rerum debitis maiores ratione? Fugit consequuntur asperiores
            iste officiis reiciendis?
          </p>
        </div>
      </article>
      <article className="news">
        <div className="leftContent">
          <h1 className="newsHeader">analytics.</h1>
        </div>
        <div className="rightContent">
          <p className="newsParagraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores molestiae corrupti facere. Ad amet est quam magnam maxime
            eum rerum debitis maiores ratione? Fugit consequuntur asperiores
            iste officiis reiciendis?
          </p>
        </div>
      </article>
    </section>
  );
};

export default Home;
