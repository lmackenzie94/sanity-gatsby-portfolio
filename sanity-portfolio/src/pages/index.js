/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Projects from "../components/Projects"
import Hero from "../components/Hero"
import Blog from "../components/Blog"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects data={data} />
    <Blog />
  </Layout>
)

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
