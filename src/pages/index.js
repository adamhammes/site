import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

class BlogIndex extends React.Component {
  render() {
    const title = "Home";

    return (
      <Layout location={this.props.location} title={title}>
        <main>
          <h1>Hi! I'm Adam Hammes.</h1>
          <p>
            I'm an American software developer, currently living in Quebec City.
            I graduated Cum Laude from Iowa State University with a Bachelor of
            Science in Computer Science. My professional experience includes
            working at <a href="https://www.workiva.com/">Workiva</a> and{" "}
            <a href="https://cortexstudio.com/en/">Cortex</a>; I led the
            frontend redesign of the{" "}
            <a href="https://www.alfaromeo.ca/en/build-and-price/">
              Alfa Romeo Build &amp; Price.
            </a>
          </p>
          <p>In my free time, I enjoy playing piano and swing dancing.</p>
          <h2>Links:</h2>
          <ul>
            <li>
              <Link to="/blog">My written articles</Link>
            </li>
            <li>
              <Link to="/recipes">All the recipes</Link> I've cared to save on
              my site.
            </li>
            <li>
              <a to="https://alacarte.hammes.io">À la carte</a>, a tool for
              searching for apartments in Québec
            </li>
          </ul>
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
