import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import styles from "./service-detail.module.css";

class ServiceDetail extends React.Component {
  renderMetaTags(metadata) {
    if (metadata) {
      return Object.keys(metadata).map((key, index) => {
        return (
          <meta key={`meta-${index}`} name={key} content={metadata[key]} />
        );
      });
    }
  }
  render() {
    const serviceDetail = get(this, "props.data.contentfulServices");
    console.log(serviceDetail);   
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          
          <Helmet title={serviceDetail.title}>
            {this.renderMetaTags(serviceDetail.metadata)}
          </Helmet>
          <div className="wrapper">
            <h2 className={styles.sectionHeadline}>{serviceDetail.title}</h2>
            
            <div>
            <div  
              dangerouslySetInnerHTML={{
                
                __html: serviceDetail.body.childMarkdownRemark.html,
              }}
              
            />
     
            <div>

            </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ServiceDetail;

export const pageQuery = graphql`
  query ServiceByUrl($url: String!) {
    contentfulServices(url: { eq: $url }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      
     
      metadata {
        title
        description
      }
    }
  }
`;
