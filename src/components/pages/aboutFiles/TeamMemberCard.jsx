import React from "react";

const TeamMemberCard = ({ name, title, bio, image }) => {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default TeamMemberCard;