import React from "react";
import "./CharacterCard.css";



const FriendCard = ({name, image, occupation, quote}) => (
  <div className="card">
    <div className="img-container">
      <img
        alt={name}
        src={image}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Occupation:</strong> {occupation}
        </li>
        <li>
          <strong>Quote:</strong> {quote}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
