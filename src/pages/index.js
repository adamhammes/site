import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    const bio = (
      <>
        <strong>Adam Hammes</strong> is a developer, dancer, and extremely
        amateur cook.
      </>
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <Bio text={bio} />
        <h2>Links:</h2>
        <ul>
          <li>
            <a href="/blog">My written articles</a>
          </li>
          <li>
            <a href="/recipes">All the recipes</a> I've cared to save on my
            site.
          </li>
          <li>
            <a href="https://alacarte.hammes.io">À la carte</a>, a tool for
            searching for apartments in Québec
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
