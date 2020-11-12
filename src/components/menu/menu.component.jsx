import React from "react";

import { Col } from "react-bootstrap";
import MenuLink from "../menu-link/menu-link.component";
import ProjectItem from "../project-item/project-item.component";

import profile from "../../assets/profile.jpg";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./menu.styles.scss";

const Menu = () => (
  <Col className="menu">
    <img width="120" height="120" src={profile} alt="profile" />
    <div className="links">
      <MenuLink to="/" content="Home" />
      <div>Projects</div>
      <ProjectItem name="Tic-Tac-Toe Online" to="tic-tac-toe-online" site={null} />
      <ProjectItem name="Shop with Starlet" to="e-commerce" site="https://starletclothing.co.uk/" />
      <ProjectItem
        name="Dijkstra's Algorithm Visualizer"
        to="dijkstra"
        site="/#/dijkstras-algorithm-visualizer"
      />
      <MenuLink to="/cv/eng" content="CV (Curriculum Vitae)" />
      <MenuLink to="/cv/kor" content="이력서" />
    </div>

    <div className="icon-container">
      <MenuLink href="https://github.com/jjyyoon" icon={faGithubSquare} />
      <MenuLink href="https://www.linkedin.com/in/jjyyoon" icon={faLinkedin} />
    </div>
  </Col>
);

export default Menu;
