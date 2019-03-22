import React from "react";
import PropTypes from "prop-types";

import "./StatCard.css";

const StatCard = ({ statNumber, statDescription }) => {
  return (
    <div className="statCardContainer">
      <h1 className="statHeader">{statNumber}</h1>
      <h2 className="statDescription">{statDescription}</h2>
    </div>
  );
};

StatCard.propTypes = {
  statNumber: PropTypes.string,
  statDescription: PropTypes.string
};

export default StatCard;
