import React from "react"

import mail from '../../images/icons/mail.svg';
import linkedin from '../../images/icons/linkedin.svg';
import instagram from '../../images/icons/instagram.svg';
import facebook from '../../images/icons/facebook.svg';
import styles from './footer.module.css';

const Footer = () => (
    <footer>
        <div className={styles.wrapper}>
            <div className={styles.mailWrapper}>
                <img src={mail} alt="mail"/>
                <div className={styles.smallDivider}>....</div>
                <a className={styles.mailLink} href='mailto:vector@mail.com'>vector@mail.com</a>
            </div>

            <span className={styles.divider}>........................</span>

            <div className={styles.socialsWrapper}>
                <span>follow us</span>
                <div className={styles.smallDivider}>....</div>
                <img src={linkedin} className={styles.icon} alt="linkedin"/>
                <img src={facebook} className={styles.icon} alt="facebook"/>
                <img src={instagram} className={styles.icon} alt="instagram"/>
            </div>
        </div>
    </footer>
);

export default Footer
