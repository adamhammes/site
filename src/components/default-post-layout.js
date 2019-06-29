import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Layout from "./Layout";
import Seo from "./seo";
import Bio from "./Bio";
import styles from "./post.module.scss";

export default function PostTemplate({ data }) {
  const mdx = data.allMdx.edges[0].node;
  let mainClass = mdx.fields.slug
    .split("/")
    .filter(Boolean)
    .join("-");

  if (mdx.frontmatter.skipLayout === true) {
    let className = mainClass;
    if (mdx.frontmatter.withMarkdown) {
      className += ` ${styles.markdown}`;
    }

    return (
      <main className={className}>
        <Seo
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.description}
        />
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </main>
    );
  }

  return (
    <Layout {...mdx.frontmatter}>
      <main className={`${styles.markdown} ${mainClass}`}>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </main>
      <hr />
      <Bio />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    allMdx(filter: { id: { eq: $id } }) {
      edges {
        node {
          frontmatter {
            description
            title
            skipLayout
            draft
            withMarkdown
          }
          fields {
            listing
            slug
          }
          id
          code {
            body
          }
        }
      }
    }
  }
`;
