import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Image from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import BlogBox from "../components/blog"

const imgStyle = {
  width: "100%",
  display: "block",
}

const SecondPage = () => {
  const Data = useStaticQuery(
    graphql`
      query {
        allStrapiBlogs {
          nodes {
            Title
            RichText
            BlogImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 300, placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo title="Blog" />
      <Link to="/">Go back to the homepage</Link>
      <br /> <br />
      <h1 style={{ textAlign: "center" }}>Blog</h1>
      {/* <pre>{JSON.stringify(Data.allStrapiBlogs.nodes, null, 2)}</pre> */}
      <BlogBox />
    </Layout>
  )
}

export default SecondPage
