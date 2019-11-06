import PropTypes from "prop-types";
import React, {Component} from "react";
import { Link } from "gatsby";


import "./header.scss"
import "./animate.css"

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
  // componentDidMount () {      
  //   window.onscroll =()=>{
  //       this.setState({currentScrollHeight: window.scrollY})
  //  }
  // }

  render(){
    const opacity = Math.min(10 / this.state.currentScrollHeight  , 1);
    console.log(this.state.currentScrollHeight);
    console.log(opacity);
    return (
      <header>
        <nav>
        <div className="header-container1">
          <ul className="nav-list">
            <li className="nav-item"><Link className="nav-link" to='/projects'>Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/yoga'>Yoga</Link></li>
          </ul>
        </div>
        <div className="header-container2">
          <img id="img-logo" style={{opacity}} className="img-logo" src={"https://png.pngtree.com/templates/md/20180713/md_5b4926ffdfb64.jpg"} alt={"Nothing here :("} />
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
