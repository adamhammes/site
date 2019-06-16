import React from "react";
import { graphql } from "gatsby";

import styles from "./post.module.scss";
import Layout from "../components/Layout";

const DefaultMarkdownTemplate = props => {
  const { html, htmlAst } = props.data.markdownRemark;
  const title = findTitle(htmlAst);

  return (
    <Layout title={title}>
      <main
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

const findTitle = markdownAst => {
  const h1 = markdownAst.children.find(child => child.tagName === "h1");
  if (!h1) {
    return "";
  }

  return h1.children.find(child => child.type == "text").value;
};

export const pageQuery = graphql`
  query MarkdownBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
    }
  }
`;

export default DefaultMarkdownTemplate;
