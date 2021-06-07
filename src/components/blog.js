import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"

const imgStyle = {
  width: "100%",
  display: "block",
}

const BlogBox = () => {
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
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="alterNativeBlog">
      {Data.allStrapiBlogs.nodes.map((item, index) => (
        <div key={index} className="mb-3">
          <Row className="mb-3 align-items-center">
            <Col sm="6" className="imageFullHeight">
              <GatsbyImage
                image={getImage(item.BlogImage.localFile.childImageSharp)}
              />
              {/* <img src={item.BlogImage.localFile.publicURL} /> */}
              {/* <Image
            fluid={item.BlogImage.localFile.childImageSharp.fluid}
            style={imgStyle}
          /> */}
            </Col>
            <Col sm="6">
              <h3>{item.Title}</h3>
              <ReactMarkdown
                transformImageUri={uri =>
                  uri.startsWith("http")
                    ? uri
                    : `${process.env.STRAPI_URL}${uri}`
                }
              >
                {item.RichText}
              </ReactMarkdown>
            </Col>
          </Row>
          <hr />
        </div>
      ))}
    </div>
  )
}
export default BlogBox
