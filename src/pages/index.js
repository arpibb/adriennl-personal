import React from "react"
import { graphql ,Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = props => (
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
                    <Link className="image-link" to='projects'><span className="img-text"><h1>Projects</h1></span>
                    <Img className="img-main" fluid={props.data.imageOne.childImageSharp.fluid} />
                    </Link>
                </div>
                <div className="img-main-container overlay">
                    <Link className="image-link" to='yoga'><span className="img-text"><h1>Yoga</h1></span>
                    <Img className="img-main" fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </Link>
                </div>
            {/* </div>
            <div className="image-menu-bottom"> */}
                <div className="img-main-container overlay">
                    <Link className="" to='personal'><span className="img-text"><h1>Personal</h1></span>
                    <Img className="img-main" fluid={props.data.imageThree.childImageSharp.fluid} />
                    </Link>
                </div>
                <div className="img-main-container overlay">
                    <Link className="" to='about'><span className="img-text"><h1>About</h1></span>
                    <Img className="img-main" fluid={props.data.imageFour.childImageSharp.fluid} />
                    </Link>
                </div>
            </div>
        </div>    
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`query{
    imageOne: file(relativePath: { eq: "imageOne.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "imageTwo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "imageThree.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "imageFour.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`