import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Image from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import ReactMarkdown from "react-markdown"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ImageGalleryBox from "../components/imagegallery"
import { Col, Row } from "react-bootstrap"
import BlogBox from "../components/blog"

const imgStyle = {
  width: "100%",
  display: "block",
}

const ProductPage = () => {
  const productDetails = {
    brand: "Original",
    product: {
      price: {
        mrp: "599.00",
        deal: "569.00",
        save: "30 (5%)",
      },
      delivery: {
        date: "Tuesday, June 15",
        type: "free",
      },
      stock: true,
      soldBy: "Company",
      variant: [
        { id: 1, name: "Variant 1" },
        { id: 2, name: "Variant 2" },
      ],
      detail: [
        { title: "Color", desc: "Silver" },
        { title: "Material", desc: "Plastic" },
        { title: "Dimensions", desc: "16 x 16 x 31" },
      ],
    },
    aboutList: [
      "Made in India, 16 spice jars with 120 ml capacity each",
      "Carousel design for easy access to spice collection",
      "Made from food-grade, BPA free plastic",
      "Country of Origin: India",
    ],
  }

  return (
    <Layout>
      <Seo title="Product Page" />
      <h1 className="text-center mt-3 mb-4">Product Page</h1>
      <Row className="product-box">
        <Col sm="12" lg="6">
          <ImageGalleryBox />
        </Col>
        <Col sm="12" lg="6">
          <h4>Amazon Brand</h4>

          {productDetails?.product && (
            <>
              <div className="priceBox">
                <div>MRP: {productDetails?.product.price.mrp}</div>
                <div>Deal: {productDetails?.product.price.deal}</div>
                <div>Save: {productDetails?.product.price.save}</div>
                <div>
                  Delivery:{" "}
                  {productDetails?.product.delivery.type == "free"
                    ? "Free Delivery"
                    : "Premium"}{" "}
                  {productDetails?.product.delivery.date}
                </div>
                <div>
                  {productDetails?.product.stock ? (
                    <div>
                      <hr />
                      <div className="stockTag">In Stock</div>
                      <select>
                        {productDetails?.product.variant.map(item => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="mt-3">
                        {productDetails?.product.detail.map((item, index) => (
                          <div key={index}>
                            {item.title}: {item.desc}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
                <div>Sold By: {productDetails?.product.soldBy}</div>
              </div>
            </>
          )}

          {productDetails?.aboutList?.length > 0 && (
            <div>
              <hr />
              <p>
                <b>About this item</b>
              </p>
              <ul>
                {productDetails?.aboutList?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
      <br />
      <hr />
      <h1 className="text-center mt-3 mb-4">Blog</h1>
      <BlogBox />
    </Layout>
  )
}

export default ProductPage
