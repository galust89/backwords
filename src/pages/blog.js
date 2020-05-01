import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const blog = props => {
  console.log(props)
  return (
    <Layout>
      <div>Blog page</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`

export default blog
