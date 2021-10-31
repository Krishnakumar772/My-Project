import React from 'react'

import Layout from "../components/layout";
import styles from './contanct.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee, faPhone, faClock, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Contanct = () => {
    return (
        <Layout>
           <div className={styles.wrap}>
            <img src='/images/Colla.jpg' style={{width:"1580px",}}/>
         </div>
         <p style={{paddingTop:"10px"}}>Oracle WebCenter Portal Cloud Oracle WebCenter Portal Cloud can easily and quickly build engaging, integrated and dynamic portal for every part of your business and it is a cloud base platform too. Oracle WebCenter Portal Cloud makes developing portals very efficient so that you can set up your portal cloud environment within minutes. We will handle the installation, configuration and infrastructure for you and you can rapidly focus on rapidly designing and deploying portal and on innovative business solutions saving your time and money. You can add capacity, schedule automated backups or restore from any point of time with just a few clicks. You have full monitoring and administrative control.

Oracle WebCenter Site: Using OWCS customers can easily create and manage social and interactive digital experiences. It gives the power to organizations to deliver an unusual digital experience to customers through providing ability to quickly and easily creating content, longer visitor engagement with easy to market. Features like drag and drop style page building, A/B testing, enhanced content analytics, visitor profile management, targeting and mobile delivery  - A WebCenter expert team with hands-on experience of having developed websites and intranet portals for leading companies • A robust portal technologies unit with expertise across various technologies including Java, REACT, Spring framework etc. • Excellent understanding of the digital landscape, comprehensive website creation capabilities and experience in building mission critical mobility solutions • Deep understanding of content management systems (CMS) and integration of various content sources to enables seamless information management • Strong domain expertise and in-house experts in digital marketing and analytics to augment the usefulness of the platform and enable contextual targeting.</p>
         <div  className={styles.wrapper}>
       
             <div > 
                    <div >
                    <FontAwesomeIcon icon={faCoffee} /*--style={{fontSize:"34px",paddingLeft:"75px"}}  --*/ className={ styles.fants}/>
                      <h4 > ADDRESS</h4>
                        <p >F-205, Krishna Apra's Plaza,<br /> Alpha-II Commercial Belt,<br /> Greater Noida G.B Nagar,<br /> UP 201308</p>
                    </div>
                </div>
                
                <div>
                    <div>
                    <FontAwesomeIcon icon={faPhone}  className={ styles.fants}/>
                         <h4>PHONES</h4>
                        <p>Phone: +0120-4263915</p>
                    </div>
                </div>
                
                <div>
                    <div>
                    <FontAwesomeIcon icon={faEnvelope} className={ styles.fants}/>
                         <h4>EMAIL US</h4>
                        <p>support@paybay.in</p>
                    </div>
                </div>


                <div>
                    <div>
                    <FontAwesomeIcon icon={faClock} className={ styles.fants}/>
                        <h4>WORKING HOURS</h4>
                        <p>24/7 Hours</p>
                    </div>
                </div>
                </div>
              
       </Layout> 
    )
}

export default Contanct;