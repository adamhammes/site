const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const defaultMarkdown = path.resolve(`./src/templates/default-markdown.js`);

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                    listing
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const allPosts = result.data.allMarkdownRemark.edges;
        const sections = ["recipes", "blog"];

        sections.forEach(sectionName => {
          const posts = allPosts.filter(
            post => post.node.fields && post.node.fields.listing === sectionName
          );

          posts.forEach((post, index) => {
            const previous =
              index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: blogPost,
              context: {
                slug: post.node.fields.slug,
                previous,
                next,
              },
            });
          });
        });

        // All other markdown pages
        allPosts
          .filter(p => p.node.fields.listing === "")
          .forEach(post => {
            createPage({
              path: post.node.fields.slug,
              component: defaultMarkdown,
              context: {
                slug: post.node.fields.slug,
              },
            });
          });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const relativePath = path.relative(__dirname, node.fileAbsolutePath);
    console.log(relativePath);

    let listing = "";
    if (relativePath.startsWith(path.join("content", "recipes"))) {
      listing = "recipes";
    } else if (relativePath.startsWith(path.join("content", "blog"))) {
      listing = "blog";
    }

    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    });

    createNodeField({
      name: `listing`,
      node,
      value: listing,
    });
  }
};
