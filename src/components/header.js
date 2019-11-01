import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="header-container1">
        <ul className="nav-list">
          <li className="nav-item"><Link className="nav-link" to='/projects'>Projects</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/yoga'>Yoga</Link></li>
        </ul>
      </div>
      <div className="header-container2">
        <img className="img-logo" src={"https://png.pngtree.com/templates/md/20180713/md_5b4926ffdfb64.jpg"} alt={"Nothing here :("} />
      </div>
      <div className="header-container3">
        <ul className="nav-list">
          <li className="nav-item"><Link className="nav-link" to='/personal'>Personal</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
