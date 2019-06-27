import React from "react";
import { graphql } from "gatsby";

import Listing from "../components/listing";

const Recipes = ({ location, data }) => (
  <Listing title="Recipes" posts={data.allMdx.edges} location={location} />
);

export default Recipes;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { listing: { eq: "recipes" } } }
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
