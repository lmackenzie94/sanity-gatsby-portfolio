/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Projects from "../components/Projects"
import Hero from "../components/Hero"
import BlogPostPreview from "../components/BlogPostPreview"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects projects={data.projects} />
    <BlogPostPreview posts={data.posts} />
  </Layout>
)

export const query = graphql`
  {
    projects: allSanityProject {
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
    posts: allSanityPost {
      edges {
        node {
          title
          published
          author {
            name
          }
          slug {
            current
          }
        }
      }
    }
  }
`

export default IndexPage
