import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuLink = ({ to, href, content, icon }) => {
  if (to) {
    return (
      <NavLink exact={to === "/"} to={to} activeStyle={{ color: "black" }}>
        {content}
      </NavLink>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon ? <FontAwesomeIcon icon={icon} /> : content}
    </a>
  );
};

export default MenuLink;
