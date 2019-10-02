/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Projects = ({ data }) => {
  // could also do:
  //   const data = useStaticQuery(graphql`
  //     query ProjectQuery {
  //       allSanityProject {
  //         edges {
  //           node {
  //             title
  //             description
  //             slug {
  //               current
  //             }
  //             image {
  //               asset {
  //                 fluid {
  //                   ...GatsbySanityImageFluid
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  console.log(data)
  return (
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        margin: 0,
        justifyContent: `space-between`,
      }}
    >
      {/* below we are renaming "node" to "project" */}
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li
          key={project.slug.current}
          sx={{ border: `3px solid`, borderColor: `greenDark` }}
          style={{
            flex: `0 1 45%`,
            padding: `2rem`,
          }}
        >
          <h2 sx={{ variant: "text.subheading" }}>{project.title}</h2>
          <Link to={project.slug.current}>
            <Image fluid={project.image.asset.fluid} alt={project.title} />
          </Link>
          <p style={{ marginTop: `1rem` }}>{project.description}</p>
          <Link to={project.slug.current}>See project details</Link>
        </li>
      ))}
    </ul>
  )
}
export default Projects
