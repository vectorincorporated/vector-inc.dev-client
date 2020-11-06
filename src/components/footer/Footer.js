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
                <a className='link' href='mailto:vector@mail.com'>vector@mail.com</a>
            </div>

            <span className={styles.divider}>........................</span>

            <div className={styles.socialsWrapper}>
                <span>follow us</span>
                <div className={styles.smallDivider}>....</div>
                <a href='#' className={classNames(styles.linkedin, styles.icon)} />
                <a href='#' className={classNames(styles.facebook, styles.icon)} />
                <a href='#' className={classNames(styles.instagram, styles.icon)} />
            </div>
        </div>
    </footer>
);

export default Footer
