import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

export const query = graphql`
  query ProjectTemplateQuery($slug: String) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      title
      description
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Image fluid={data.project.image.asset.fluid} alt={data.project.title} />
    <h1>{data.project.title}</h1>
    <p>{data.project.description}</p>
    <Link to="/">Back to home</Link>
  </Layout>
)
