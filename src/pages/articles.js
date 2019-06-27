import React from "react";
import { graphql } from "gatsby";

import Listing from "../components/listing";

const Articles = ({ data }) => (
  <Listing title="Articles" posts={data.allMdx.edges} />
);

export default Articles;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { listing: { eq: "articles" } } }
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
