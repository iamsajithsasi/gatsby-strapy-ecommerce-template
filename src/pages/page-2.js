import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Image from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import ReactMarkdown from "react-markdown"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Layout>
  )
}

export default SecondPage
