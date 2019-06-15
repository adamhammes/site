import React from "react";
import { graphql } from "gatsby";

import styles from "./post.module.scss";

const DefaultMarkdownTemplate = props => {
  const html = props.data.markdownRemark.html;
  return (
    <main
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
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
    }
  }
`;

export default DefaultMarkdownTemplate;
