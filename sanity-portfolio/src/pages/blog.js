/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>My Blog</h1>
  </Layout>
)

export default Blog
