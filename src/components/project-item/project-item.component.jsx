import React from "react";
import MenuLink from "../menu-link/menu-link.component";
import "./project-item.styles.scss";

const ProjectItem = ({ name, to, site }) => (
  <div>
    <MenuLink to={"/projects/" + to} content={"　· " + name} />
    <p>
      <MenuLink href={"https://github.com/jjyyoon/" + to} content="View code" />
      {"｜"}
      <MenuLink href={site} content={!site ? "Online soon" : "View online"} />
    </p>
  </div>
);

export default ProjectItem;
