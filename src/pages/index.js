import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const pageQuery = graphql`
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
`

const IndexPage = () => {
  const {
    gcms: { posts },
  } = useStaticQuery(pageQuery)

  console.log(posts)

  return posts.map(({ id, ...post }) => (
    <Link key={id} to={`/posts/${id}`}>
      {post.name}
    </Link>
  ))
}

export default IndexPage
