import React from "react";
import { Link, graphql } from "gatsby";

import DateTime from "../components/DateTime";
import Layout from "../components/Layout";

class RecipesIndex extends React.Component {
  render() {
    const { data } = this.props;
    const title = "Blog Posts";
    const posts = data.allMarkdownRemark ? data.allMarkdownRemark.edges : [];

    return (
      <Layout location={this.props.location} title={title} bioInHeader={true}>
        <main>
          <h1>Blog Posts</h1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                <DateTime dateString={node.frontmatter.date} />
                <p>{node.frontmatter.description}</p>
              </article>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default RecipesIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { listing: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
            listing
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`;
