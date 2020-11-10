import React from "react";

import styles from './ThanksPopup.module.css';
import logo from "../../images/logo.svg";
import headerStyles from "../header/Header.module.css";

const header = {
    title: 'Hi [Name] \n' +
        'thanks for your message!',
    description: 'Our specialist will get back to you within 24h'
};

const ThanksPopup = ({ close }) => (
    <div className={styles.wrapper}>
        <div className={styles.closeBtnWrapper}>
            <span className={styles.closeBtn} onClick={close}>X</span>
        </div>

        <div className={ styles.header }>
            <h2 className={ styles.title }>
                { header.title }
            </h2>
            <span className='accent-text'>
                { header.description }
            </span>
        </div>

        <div className={styles.logo}>
            <img src={logo} className={headerStyles.logo} alt="Vector"/>
        </div>

        <div className={styles.backBtn}>
            <button className={styles.backBtn} onClick={close}>BACK TO THE SITE</button>
        </div>

    </div>
);

export default ThanksPopup;
