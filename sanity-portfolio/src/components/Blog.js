/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Blog = () => {
  return (
    <section sx={{ my: 75 }}>
      <h2 sx={{ pb: 10, borderBottom: `2px solid`, borderColor: `primary` }}>
        Blog
      </h2>
    </section>
  )
}
export default Blog
