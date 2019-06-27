const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const siteListings = ["articles", "recipes"];

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/default-post-layout.js`),
            context: { id: node.id },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });

    const listing =
      siteListings.find(listing => slug.includes(`/${listing}/`)) || "";
    console.log(slug);
    console.log(listing);

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });

    createNodeField({
      name: "listing",
      node,
      value: listing,
    });
  }
};
