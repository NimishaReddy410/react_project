import React, { useState } from "react";
import "./UserCard.css";
import userIcon from "./assets/user.svg";
import expandMoreIcon from "./assets/expand_more.svg";
import expandLessIcon from "./assets/expand_less.svg";

const UserCard = ({ userData }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getIconColor = () => {
    switch (userData.role) {
      case "Administrator":
        return "blue";
      case "User":
        return "green";
      case "Viewer":
        return "grey";
      default:
        return "";
    }
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };

  return (
    <div className="card">
      <div className="card__body">
        <div className={`card__icon ${getIconColor()}`}>
          <img src={userIcon} alt="User Icon" className="card__image" />
        </div>
        <div className="card__content">
          <div className="card__name">
            {userData.firstName} {userData.lastName}
          </div>
          <div className="card__role">{userData.role}</div>
          <div className="card__email">{userData.email}</div>
          {expanded && (
            <div className="card__details">
              <div className="card__detail-header">Address:</div>
              <div className="card__detail-item">
                {userData.street}, {userData.city}, {userData.state} {userData.zip}
              </div>
              <div className="card__detail-header">Phone:</div>
              <div className="card__detail-item">
                {formatPhoneNumber(userData.phone)}
              </div>
              <div className="card__detail-header">Created At:</div>
              <div className="card__detail-item">
                {new Date(userData.createdAt).toLocaleDateString()}{" "}
                {new Date(userData.createdAt).toLocaleTimeString()}
              </div>
              <div className="card__detail-header">Last Logged In:</div>
              <div className="card__detail-item">
                {new Date(userData.lastLoggedIn).toLocaleDateString()}{" "}
                {new Date(userData.lastLoggedIn).toLocaleTimeString()}
              </div>
            </div>
          )}
        </div>
        <span
          className={`expand-icon ${expanded ? "expanded" : ""}`}
          onClick={toggleExpand}
        >
          {expanded ? (
            <img src={expandLessIcon} alt="Expand Less Icon" />
          ) : (
            <img src={expandMoreIcon} alt="Expand More Icon" />
          )}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
