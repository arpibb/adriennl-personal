import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="img-main-container">
        <img class="img-main" src={"https://timelinecovers.pro/facebook-cover/download/yoga-bohemian-colorful-mandala-facebook-cover.jpg"} alt={"There is nothing to see here."} />
    </div>
  </Layout>
)

export default IndexPage
