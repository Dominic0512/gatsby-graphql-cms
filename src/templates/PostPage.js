import React from "react"
import { graphql } from "gatsby"

const PostPage = ({
  data: {
    gcms: { post },
  },
}) => (
  <React.Fragment>
    <h1>{post.name}</h1>
    <p>{post.description.text}</p>
  </React.Fragment>
)

export const pageQuery = graphql`
  query PostPageQuery($id: ID!) {
    gcms {
      post(where: { id: $id }) {
        id
        name
        description {
          text
        }
      }
    }
  }
`

export default PostPage
