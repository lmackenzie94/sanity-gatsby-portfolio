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

  return (
    <section sx={{ my: 75 }}>
      <h2 sx={{ pb: 10, borderBottom: `2px solid`, borderColor: `primary` }}>
        My Work
      </h2>
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
            sx={{
              bg: `faded`,
              border: `3px solid`,
              borderColor: `greenDark`,
            }}
            style={{
              flex: `0 1 45%`,
              padding: 20,
            }}
          >
            <h2 sx={{ variant: "text.subheading" }}>{project.title}</h2>
            <Link to={project.slug.current}>
              <Image
                fluid={project.image.asset.fluid}
                alt={project.title}
                sx={{ border: `10px solid`, borderColor: `background` }}
              />
            </Link>
            <p style={{ marginTop: `1rem` }}>{project.description}</p>
            <Link
              sx={{ variant: `buttons.primary`, textDecoration: `none` }}
              to={project.slug.current}
            >
              Source
            </Link>
            <Link
              sx={{
                variant: `buttons.primary`,
                textDecoration: `none`,
                ml: 15,
              }}
              to={project.slug.current}
            >
              Live
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Projects
