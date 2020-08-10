import React from "react";
import { NavLink } from "react-router-dom";

import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/profile.jpg";
import { pages, links } from "./menu-items";

import "./menu.styles.scss";

const Menu = () => (
  <Col className="menu">
    <img width="120" height="120" src={profile} alt="profile" />

    <div className="links">
      {pages.map((page, idx) => (
        <div key={idx} className={page.to && page.to !== "/" ? "project" : null}>
          {page.to ? (
            <NavLink exact={page.to === "/"} to={page.to} activeStyle={{ color: "black" }}>
              {page.name}
            </NavLink>
          ) : (
            page.name
          )}
          {page.href && (
            <a href={page.href} target="_blank" rel="noopener noreferrer" className="link-to-code">
              {" "}
              (See code <FontAwesomeIcon icon={faExternalLinkAlt} /> )
            </a>
          )}
        </div>
      ))}
    </div>

    <div className="icon-container">
      {links.map((link, idx) => (
        <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  </Col>
);

export default Menu;
