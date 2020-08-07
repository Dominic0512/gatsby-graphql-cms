exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { posts },
    },
  } = await graphql(`
    {
      gcms {
        posts {
          id
          name
          description {
            text
          }
        }
      }
    }
  `)

  posts.forEach(({ id }) =>
    createPage({
      path: `/posts/${id}`,
      component: require.resolve(`./src/templates/PostPage.js`),
      context: {
        id,
      },
    })
  )
}
