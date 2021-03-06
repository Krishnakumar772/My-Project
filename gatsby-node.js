const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    const serviceDetail = path.resolve("./src/templates/service-detail.js");

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulServices {
              edges {
                node {
                  title
                  url
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });

        const services = result.data.allContentfulServices.edges;
        services.forEach((service) => {
          createPage({
            path: `/services/${service.node.url}/`,
            component: serviceDetail,
            context: {
              url: service.node.url,
            },
          });
        });
      })
    );
  });
};
