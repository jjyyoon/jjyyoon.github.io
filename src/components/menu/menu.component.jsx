import React from "react";

import { Col } from "react-bootstrap";
import MenuLink from "../menu-link/menu-link.component";
import SubmenuItem from "../submenu-item/submenu-item.component";

import profile from "../../assets/profile.jpg";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./menu.styles.scss";

const Menu = () => (
  <Col className="menu">
    <img width="120" height="120" src={profile} alt="profile" />
    <div className="links">
      <MenuLink className="menu-item" to="/" content="Home" />
      <div className="menu-item">
        Projects
        <SubmenuItem parent="project" name="Tic-Tac-Toe Online" to="tic-tac-toe-online" />
        <SubmenuItem parent="project" name="Shop with Starlet" to="e-commerce" />
        <SubmenuItem
          parent="project"
          name="Dijkstra's Algorithm Visualizer"
          to="dijkstra"
          site="/#/dijkstras-algorithm-visualizer"
        />
      </div>
      <div className="menu-item">
        CVs (Curricula Vitae)
        <SubmenuItem parent="cv" name="Engish ver" to="eng" />
        <SubmenuItem parent="cv" name="Korean ver" to="kor" />
      </div>
    </div>

    <div className="icon-container">
      <MenuLink href="https://github.com/jjyyoon" icon={faGithubSquare} />
      <MenuLink href="https://www.linkedin.com/in/jjyyoon" icon={faLinkedin} />
    </div>
  </Col>
);

export default Menu;
