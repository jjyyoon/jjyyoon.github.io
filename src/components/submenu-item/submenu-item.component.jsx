import React from "react";
import MenuLink from "../menu-link/menu-link.component";
import "./submenu-item.styles.scss";

const SubmenuItem = ({ parent, name, to, site }) => (
  <div>
    <MenuLink to={`/${parent}/` + to} content={"　· " + name} />
    {parent === "project" ? (
      <p>
        <MenuLink href={"https://github.com/jjyyoon/" + to} content="Source code" />
        <MenuLink href={site} content={site ? "｜View online" : null} />
      </p>
    ) : null}
  </div>
);

export default SubmenuItem;
