// allows us to get absolute paths
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // returns an array of just our nodes
  const projects = result.data.allSanityProject.edges.map(({ node }) => node)

  projects.forEach(project => {
    actions.createPage({
      path: project.slug.current,
      component: path.resolve("./src/templates/project.js"),
      // anything passed to 'context' becomes available to the graphql query in project.js template
      context: {
        slug: project.slug.current,
      },
    })
  })
}
