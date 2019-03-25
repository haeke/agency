import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./ArticleCard.css";

const ArticleCard = ({
  articleCardStyle,
  articleHeader,
  leftParagraph,
  rightParagraph
}) => {
  return (
    <div className={classnames("articleCardContainer", articleCardStyle)}>
      <div className="articleWrapper">
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
    </div>
  );
};

ArticleCard.propTypes = {
  articleHeader: PropTypes.string,
  leftParagraph: PropTypes.string,
  rightParagraph: PropTypes.string
};

export default ArticleCard;
