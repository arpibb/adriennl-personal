import React from 'react'
import "./footer.scss"
import Img from "gatsby-image"

const Footer = (props) => {
  return (
    <footer>
      <div className="footer">
        <div className="icons">
          {/* <Img className="social-media" fluid={props.linkedinLogo}  alt="linkedin-logo"/>
          <Img className="social-media" fluid={props.instagramLogo}  alt="instagram-logo"/> */}
        </div>
        <p className="copy">Copyright &copy; {new Date().getFullYear()} Adrienn Lestyan</p>
        <p className="creator">Created by .</p>
      </div>
    </footer>
  )
}

export default Footer
