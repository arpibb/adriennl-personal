import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="welcome-text">
        <p>Hello, you landed at Adrienn’s!<br/>
            I am a cultural project coordinator, 
            independent curator <br/> and creative communications manager based currently in Budapest.<br/>
             You will find here selected projects and my personal objectives as a Yoga and meditation teacher.</p>
    </div>
    <div className="image-menu">
        <div className="image-menu-top">
            <div className="img-main-container">
                <Link className="image-link" to='projects'><img className="img-main" src={"https://timelinecovers.pro/facebook-cover/download/yoga-bohemian-colorful-mandala-facebook-cover.jpg"} alt={"There is nothing to see here."} /></Link>
            </div>
            <div className="img-main-container overlay">
                <Link className="image-link" to='personal'><img className="img-main" src={"https://timelinecovers.pro/facebook-cover/download/yoga-bohemian-colorful-mandala-facebook-cover.jpg"} alt={"There is nothing to see here."} /></Link>
            </div>
        </div>
        <div className="image-menu-bottom">
            <div className="img-main-container overlay">
                <Link className="" to='yoga'><img className="img-main" src={"https://timelinecovers.pro/facebook-cover/download/yoga-bohemian-colorful-mandala-facebook-cover.jpg"} alt={"There is nothing to see here."} /></Link>
            </div>
            <div className="img-main-container overlay">
                <Link className="" to='about'><img className="img-main" src={"https://timelinecovers.pro/facebook-cover/download/yoga-bohemian-colorful-mandala-facebook-cover.jpg"} alt={"There is nothing to see here."} /></Link>
            </div>
        </div>
    </div>
    
    
  </Layout>
)

export default IndexPage
