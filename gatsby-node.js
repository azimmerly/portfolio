const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: path.resolve("./src/templates/blogPost/index.js"),
      context: { id: post.node.id },
    });
  });
};
