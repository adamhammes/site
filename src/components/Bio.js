import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import styles from "./bio.module.scss";

function Bio(props) {
  const tagline = props.text || (
    <>
      Written by <strong>Adam Hammes</strong>, a Yankee living and working in
      Québec.
    </>
  );

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div className={styles.bioContainer}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className={styles.profilePicture}
            />
            <p>{tagline}</p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
