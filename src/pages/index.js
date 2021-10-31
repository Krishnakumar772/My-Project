import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Services from "../components/servicecard/servicecard";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const services = get(this, "props.data.allContentfulServices.edges");
    return (
      <>
      <Layout location={this.props.location}>
        <div >
          <Helmet title={siteTitle}>
            <meta
              name="keywords"
              content="Oracle Content & Experience Cloud, Oracle Marketing Cloud, Oracle Web Center Sites, Oracle Java Cloud Service, Oracle Web Center Content"
            />
            <meta
              name="description"
              content="Pabay is a service provider on Oracle cloud and Amazon cloud.  Pabay is specialized in Oracle Content and Experience, Oracle Marketing Cloud, Visual Builder Cloud Service and Oracle Java Cloud Service (PAAS).    Pabay has extensive expertise in Amazon cloud (S3, EC2, Server Less applications, ElasticBean and AI model/training)"
            />
          </Helmet>
          <div class="wrapper" >
            <h2 class="section-headline">Our Services</h2>
            <Services services={services} />
          </div>
          <div class="wrapper">
            <h2 class="section-headline">Recent Blogs</h2>
            <ul class="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
          <section class="section-home">
                <div class="servies-contents">
                   <div class="about-main-heading"><h2>About Us</h2></div>
                    <div class="container">
                        <div class="row">
                              <div class="about-contents">
                                  <p class="about-p">Pabay Software, founded in 2008 is a IT service provider with expertise in Oracle Cloud and Amazon Cloud.  Pabay software was previously operated on the name of Karma Technologies.  Currently we are located in Greater Noida, India but providing services to various customers around the globe.</p>
                                  <p class="btn-service"><a href="/about.html">Read More</a></p>
                                </div></div>
                        </div>
                    </div>
            </section>  
        </div>

      </Layout>
      
      </>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulServices {
      edges {
        node {
          title
          url
          description
          imageClass
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
