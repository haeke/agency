import React from "react";
import PropTypes from "prop-types";

import "./TeamMember.css";

const TeamMember = ({
  imageSrc,
  imageName,
  teamMemberName,
  teamMemberDescription
}) => {
  return (
    <div className="teamMemberContainer">
      <div className="memberImageContainer">
        <img src={imageSrc} alt={imageName} className="teamImage" />
      </div>
      <div className="teamMemberInfo">
        <h2 className="teamMemberHeader">{teamMemberName}</h2>
        <p className="teamMemberDescription">{teamMemberDescription}</p>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageSrc: PropTypes.string,
  imageName: PropTypes.string,
  teamMemberName: PropTypes.string,
  teamMemberDescription: PropTypes.string
};

export default TeamMember;
