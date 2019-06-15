import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";

class RecipesIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark ? data.allMarkdownRemark.edges : [];

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        bioInHeader={true}
      >
        <SEO title="All posts" />
        <main>
          <h1>Blog Posts</h1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                {node.frontmatter.date}
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
