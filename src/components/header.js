import PropTypes from "prop-types";
import React, {Component} from "react";
import { Link } from "gatsby";


import "./header.scss"

class Header extends Component {
  constructor(props){ 
    super(props);
    this.state = { 
      currentScrollHeight: 0,
      opacity: 0 
    } 
  }
  componentDidMount () {      
    window.onscroll =()=>{
     const newScrollHeight = Math.ceil(window.scrollY / 10) *10;
     if (this.state.currentScrollHeight !== newScrollHeight){
         this.setState({currentScrollHeight: newScrollHeight})
     }
   }
  }
  render(){
    const opacity = Math.min(10 / this.state.currentScrollHeight  , 1);
    //console.log(this.state.currentScrollHeight);
    //console.log(opacity);
    return (
      <header>
        <nav>
        <div className="header-container1">
          <ul className="nav-list">
            <li className="nav-item"><Link className="nav-link" to='/projects'>Work</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/yoga'>Yoga</Link></li>
          </ul>
        </div>
        <div className="header-container2">
          <Link className="" to='/'><img id="img-logo" style={{opacity}} className="img-logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZOlS4Fg0ldQmqPYbJIN9t_ILYKjA79YFvtdv5krgKSQih1OiN"} alt={"Nothing here :("} /></Link>
        </div>
        <div className="header-container3">
          <ul className="nav-list">
            <li className="nav-item"><Link className="nav-link" to='/about'>About Me</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/personal'>Personal</Link></li>
          </ul>
        </div>
        </nav>
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
