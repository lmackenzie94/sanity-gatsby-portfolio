/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const BlogPostPreview = ({ posts }) => {
  console.log(posts)
  return (
    <section sx={{ my: 75 }}>
      <ul
        sx={{
          m: 0,
          "& li": { listStyle: `none`, m: 0, mb: 40 },
          "& a": { textDecoration: `none`, color: `primary`, fontSize: 18 },
        }}
      >
        {posts.edges.map(({ node: post }) => (
          <li key={post.title}>
            <h2
              sx={{ pb: 10, borderBottom: `2px solid`, borderColor: `primary` }}
            >
              {post.title}
            </h2>
            <p>By: {post.author.name}</p>
            <p>{post.published}</p>
            <Link to={post.slug.current}>Read more</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default BlogPostPreview
