/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Projects from "../components/Projects"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Projects data={data} />
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
