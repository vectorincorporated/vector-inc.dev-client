import React from "react";
import classNames from 'classnames';

import mail from '../../images/icons/contacts/mail.svg';
import styles from './Footer.module.css';

const Footer = () => (
    <footer>
        <div className={styles.wrapper}>
            <div className={styles.mailWrapper}>
                <img src={mail} alt="mail"/>
                <div className={styles.smallDivider}>....</div>
                <a className='link' href='mailto:info@vector-inc.dev'>info@vector-inc.dev</a>
            </div>

            <span className={styles.divider}>........................</span>

            <div className={styles.socialsWrapper}>
                <span>follow us</span>
                <div className={styles.smallDivider}>....</div>
                <a href="https://www.linkedin.com/company/llc-vector-incorporated"
                   className={classNames(styles.linkedin, styles.icon)} />
                <a href="https://www.facebook.com/VectorIncorporated"
                   className={classNames(styles.facebook, styles.icon)} />
            </div>
        </div>
    </footer>
);

export default Footer
