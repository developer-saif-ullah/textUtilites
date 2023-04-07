import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <a className="navbar-brand mx-4" href={props.titlehref}>
          {props.title}
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.home}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.about}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Set Title",
  home: "Set Home",
  about: "Set About",
  titlehref: "/",
};

export default NavBar;
