import React from "react";
import { Link } from "react-router-dom";
import NavbarStyles from "../css/navbar.module.css";
const Navbar = ({ data }) => {
  return (
    <nav className={NavbarStyles.navbar}>
      {data.map(({ key, url }, index) => {
        return (
          <Link key={index} to={url}>
            {key}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
