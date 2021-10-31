import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import styles from "./about.module.css";

const About = () => {
  return (
    <Layout>
      <div style={{ background: "acuablue" }}>
        <Helmet title={"test"} />
        <div className="wrapper">
          <h1 className={styles.pageHeading}>PABAY SOFTWARE</h1>
          <p className={styles.description}>
            Pabay Software, founded in 2008 is a IT service provider with
            expertise in Oracle Cloud and Amazon Cloud. Pabay software was
            previously operated on the name of Karma Technologies. Currently we
            are located in Greater Noida, India but providing services to
            various customers around the globe.
          </p>
          <div className={styles.row}>
            <div className={styles.leftContent}>
              <h4 className={styles.subHeading}>OUR APPROACH</h4>
              <p>
                We believe in delivering tangible results for our customers in a
                cost-effective manner. We do this through a consultative,
                solution-based approach wherein we gather in-depth understanding
                of the customer’s requirements and facilitate customized
                solutions (cloud or on premise) In the process, we ensure
                greater efficiency and predictability in businesses through a
                dependable IT infrastructure. Our process-based approach towards
                project execution and infrastructure support is among the best
                in the industry. Our delivery model is structured around
                customer needs to ensure flawless execution. We have also
                introduced dedicated practices Enterprise business solutions on
                Oracle Cloud to deliver innovative solutions for new age
                businesses
              </p>
            </div>
            <div className={styles.rightContent}>
              <h4 className={styles.subHeading}>SERVICE OFFERING</h4>
              <p>
                <ol>
                  <li>Oracle Content and Experience Cloud</li>
                  <li> Oracle Marketing Cloud</li>
                  <li>Oracle PAAS (Java Cloud Service)</li>
                  <li>Oracle Web Center Sites/ Content</li>
                  <li>Visual Builder Cloud Service </li>
                  <li>Chatbot</li>
                </ol>
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.leftContent}>
              <h4 className={styles.subHeading}>WHY US?</h4>
              <p>
                Having served clients for more than one decade, we have reached
                a point where we can humbly claim to understand how to inspire
                trust. Our success is rooted in our firm belief and ideology
                that creating value for the client is the quintessence of all
                our engagements.
              </p>
            </div>
            <div className={styles.rightContent}>
              <h4 className={styles.subHeading}>OUR BELIEF</h4>
              <p>
                At Pabay Software (Karma Technologies), we endeavor to add value
                to our customers by working in a consultative manner. Our focus
                is on eliminating challenges through the requisite processes and
                technologies. Hence, we help our clients adapt to the needs of
                the ever changing marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;