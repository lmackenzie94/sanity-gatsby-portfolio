import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My Portfolio</h1>
    {/* below we are renaming "node" to "project" */}
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        alignItems: `space-between`,
      }}
    >
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li
          key={project.slug.current}
          style={{ flex: `1 50%`, maxWidth: `50%`, margin: `1rem` }}
        >
          <h2 style={{ fontSize: `24px` }}>
            <Link to={project.slug.current}>{project.title}</Link>
          </h2>

          <Image fluid={project.image.asset.fluid} alt={project.title} />
          <p style={{ marginTop: `1rem` }}>{project.description}</p>
          <Link to={project.slug.current}>See project details</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
