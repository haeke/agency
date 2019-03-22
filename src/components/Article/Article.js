import React from "react";
import PropTypes from "prop-types";

import "./Article.css";

const Article = ({
  articleClass,
  imgSrc,
  imgName,
  articleHeaderClass,
  articleHeader,
  articleParagraphClass,
  articleParagraph
}) => {
  return (
    <article className={articleClass}>
      <div className="leftContent">
        <img src={imgSrc} alt={imgName} style={{ width: "60%" }} />
      </div>
      <div className="rightContent">
        <h1 className={articleHeaderClass}>{articleHeader}</h1>
        <p className={articleParagraphClass}>{articleParagraph}</p>
      </div>
    </article>
  );
};

Article.propTypes = {
  articleClass: PropTypes.string,
  imgSrc: PropTypes.string,
  imgName: PropTypes.string,
  articleHeaderClass: PropTypes.string,
  articleHeader: PropTypes.string,
  articleParagraphClass: PropTypes.string,
  articleParagraph: PropTypes.string
};

export default Article;
