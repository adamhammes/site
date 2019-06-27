import React from "react";
import { Link, graphql } from "gatsby";

import DateTime from "../components/DateTime";
import Layout from "../components/Layout";

const Listing = ({ title, posts }) => (
  <Layout title={title} bioInHeader={true}>
    <main>
      <h1>{title}</h1>
      {posts
        .filter(post => post.node.frontmatter.draft !== true)
        .map(({ node }) => {
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

export default Listing;
