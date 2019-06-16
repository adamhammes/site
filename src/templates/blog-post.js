import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import DateTime from "../components/DateTime";
import Layout from "../components/Layout";

import styles from "./post.module.scss";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const publishDate = post.frontmatter.date;
    const title = post.frontmatter.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout
        title={title}
        location={this.props.location}
        description={post.frontmatter.description}
      >
        <main>
          <h1>{post.frontmatter.title}</h1>
          <DateTime dateString={publishDate} />
          <p>{post.frontmatter.description}</p>
          <article
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </main>
        <hr />
        <footer>
          <Bio />

          {(previous || next) && (
            <ul className={styles.extraLinks}>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          )}
        </footer>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
