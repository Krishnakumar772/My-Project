import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./navigation.module.css";
import PabayLogo from "../../static/images/pabay-logo.png";

export default () => (
  <nav role="navigation">
    <div className={styles.topNav}>
      <a href="mailto:support@pabay.in">
        <FontAwesomeIcon icon={faEnvelope} />
        support@pabay.in
      </a>
      <a href="tel:0120-4263915">
        <FontAwesomeIcon icon={faPhoneAlt} />
        0120-4263915
      </a>
    </div>
    <div className={styles.navContainer}>
      <div >
        <img src={PabayLogo} alt="pabay software" style={{paddingLeft:"250px"}}/>
      </div>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName={styles.active}>
            Blog
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/" activeClassName={styles.active}>
            About
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/contanct/" activeClassName={styles.active}>
            Contact US
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
