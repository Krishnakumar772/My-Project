import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contactus}>
        <h4>CONTACT US</h4>
        <p>
          F-205, Krishna Apra's Plaza, Alpha-II <br />
          Commercial Belt, Greater Noida <br />
          G.B Nagar, UP 201308
        </p>
        <p>Phone: +0120-4263915</p>
      </div>
      <div className={styles.phoneinfo}>
        <h4>Call us:</h4> <p>0120-4263915</p>
        <h4> Send an email:</h4>
        <p> support@paybay.in</p>
        <div className={styles.fan}>
 
  
      </div>
    
</div>


             </div>

  
  );
};

export default Footer;
