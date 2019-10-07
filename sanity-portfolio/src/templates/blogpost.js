import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import PortableText from "../components/PortableText"
import Image from "gatsby-image"

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      title
      published
      author {
        name
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

export default ({ data }) => {
  const { title, published, author, _rawBody } = data.post
  console.log(data)
  return (
    <Layout>
      {/* <Image
      fluid={data.sanityProject.image.asset.fluid}
      alt={data.sanityProject.title}
    /> */}
      <h1>{title}</h1>
      <h3>By: {author.name}</h3>
      {_rawBody && <PortableText blocks={_rawBody} />}
      {/* <p>{data.sanityProject.description}</p> */}
      <Link to="/">Back to home</Link>
    </Layout>
  )
}
