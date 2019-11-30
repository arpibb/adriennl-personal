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
            <p>You landed at Adrienne’s!<br/>
            I am a cultural project coordinator, independent curator and  <br/>
            creative communications manager based currently in Budapest. Browse through <br/>
            the selected projects and my personal objectives as a Yoga and meditation instructor.</p>
        </div>
        <div className="image-menu">
            <div className="image-menu-top">
                <div className="img-main-container">
                    <Link className="image-link" to='projects'><span className="img-text"><h1>FRAME</h1></span>
                    <Img className="img-main" fluid={props.data.imageOne.childImageSharp.fluid} />
                    </Link>
                </div>
                <div className="img-main-container overlay">
                    <Link className="image-link" to='yoga'><span className="img-text"><h1>FLOW</h1></span>
                    <Img className="img-main" fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </Link>
                </div>
            {/* </div>
            <div className="image-menu-bottom"> */}
                <div className="img-main-container overlay">
                    <Link className="" to='personal'><span className="img-text"><h1>REFLECTION</h1></span>
                    <Img className="img-main" fluid={props.data.imageThree.childImageSharp.fluid} />
                    </Link>
                </div>
                <div className="img-main-container overlay">
                    <Link className="" to='about'><span className="img-text"><h1>WORDS</h1></span>
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