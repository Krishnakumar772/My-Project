import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faCog,
  faUser,
  faGlobe,
  faSun,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./servicecard.module.css";

const selectIcon = (iconName) => {
  let icon;
  switch (iconName) {
    case "fa-microchip":
      icon = faMicrochip;
      break;
    case "fa-cog":
      icon = faCog;
      break;
    case "fa-user":
      icon = faUser;
      break;
    case "fa-globe":
      icon = faGlobe;
      break;
    case "fa-sun-o":
      icon = faSun;
      break;
    case "fa-bolt":
      icon = faBolt;
      break;
    default:
      icon = faMicrochip;
  }
  return icon;
};
export default ({ services }) => (
  <div className={styles.container}>
    {services.map(({ node }, index) => {
      return (
        <div className={styles.card} key={`card-${index}`}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={selectIcon(node.imageClass)} />
          </div>
          <h4>{node.title}</h4>
          <p className={styles.p3}>{node.description}</p>
          <button className={styles.btn}>
            <Link to={`/services/${node.url}`}>Read More</Link>
          </button>
        </div>
      );
    })}
  </div>
);
