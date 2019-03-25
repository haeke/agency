import React from "react";
import PropTypes from "prop-types";

import "./ArticleCard.css";

const ArticleCard = ({ articleHeader, leftParagraph, rightParagraph }) => {
  return (
    <div className="articleCardContainer">
      <h1 className="articleCardHeader">{articleHeader}</h1>
      <div className="article">
        <div className="articleParagraph">
          <p className="paragraph">{leftParagraph}</p>
        </div>
        <div className="articleParagraph">
          <p className="paragraph">{rightParagraph}</p>
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  articleHeader: PropTypes.string,
  leftParagraph: PropTypes.string,
  rightParagraph: PropTypes.string
};

export default ArticleCard;
