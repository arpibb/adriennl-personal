import PropTypes from "prop-types";
import React, {Component} from "react";
import { Link } from "gatsby";


import "./header.scss"
import "./animate.css"

class Header extends Component {
  handleScroll() {
    document.getElementById(".img-logo").opacity(1 - window.scrollTop() / 250);
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render(){
    return (
      <header>
        <div className="header-container1">
          <ul className="nav-list">
            <li className="nav-item"><Link className="nav-link" to='/projects'>Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/yoga'>Yoga</Link></li>
          </ul>
        </div>
        <div className="header-container2" onScroll={this.handleScroll}>
          <img id="img-logo" className="img-logo" src={"https://png.pngtree.com/templates/md/20180713/md_5b4926ffdfb64.jpg"} alt={"Nothing here :("} />
        </div>
        <div className="header-container3">
          <ul className="nav-list">
            <li className="nav-item"><Link className="nav-link" to='/personal'>Personal</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
          </ul>
        </div>
    </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
