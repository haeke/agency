import React from "react";

import TeamMember from "../TeamMember/TeamMember";

import "./Team.css";

const Team = () => {
  return (
    <article className="teamContainer">
      <div className="teamHeaderContainer">
        <h1 className="teamHeader">OUR TEAM</h1>
      </div>
      <div className="teamMembers">
        <TeamMember
          imageSrc="https://randomuser.me/api/portraits/men/49.jpg"
          imageName="John Anthony"
          teamMemberName="John Anthony"
          teamMemberDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa!"
        />
        <TeamMember
          imageSrc="https://randomuser.me/api/portraits/men/48.jpg"
          imageName="Timmothy Martinez"
          teamMemberName="Timmothy Martinez"
          teamMemberDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa!"
        />
        <TeamMember
          imageSrc="https://randomuser.me/api/portraits/men/47.jpg"
          imageName="Andrew Alvarez"
          teamMemberName="Andrew Alvarez"
          teamMemberDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa!"
        />
      </div>
    </article>
  );
};

export default Team;
