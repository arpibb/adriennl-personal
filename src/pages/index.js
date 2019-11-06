import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="img-main-container">
        <img className="img-main" src={"https://timelinecovers.pro/facebook-cover/download/yoga-bohemian-colorful-mandala-facebook-cover.jpg"} alt={"There is nothing to see here."} />
    </div>
  </Layout>
)

export default IndexPage
