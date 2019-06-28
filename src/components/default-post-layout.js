import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Layout from "./Layout";
import Bio from "./Bio";
import styles from "./post.module.scss";

export default function PostTemplate({ data: { mdx } }) {
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
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </main>
    );
  }

  return (
    <Layout title={mdx.frontmatter.title}>
      <main className={styles.markdown}>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </main>
      <hr />
      <Bio />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        skipLayout
        withMarkdown
      }
      fields {
        slug
      }
      code {
        body
      }
    }
  }
`;
