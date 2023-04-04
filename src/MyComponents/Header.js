import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
             {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
Header.defaultProps = {
    title:"Your title here"
}

Header.protoTypes = {
    title: PropTypes.string
}
