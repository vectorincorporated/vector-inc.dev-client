import React from "react";

import styles from './ThanksPopup.module.css';
import logo from "../../images/logo.svg";
import headerStyles from "../../components/header/Header.module.css";


const ThanksPopup = ({ close, userName }) => {
    const name = userName || '[name]';
    const header = {
        greeting: `Hi ${name}`,
        title: `Thanks for your message!`,
        description: 'Our specialist will get back to you within 24h'
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.closeBtnWrapper}>
                <span className={styles.closeBtn} onClick={close}>X</span>
            </div>

            <div className={styles.popupContent}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {header.greeting}
                        <br/>
                        {header.title}
                    </h2>
                    <span className='accent-text'>
                {header.description}
            </span>
                </div>

                <div className={styles.logo}>
                    <img src={logo} className={headerStyles.logo} alt="Vector"/>
                </div>

                <div className={styles.backBtnWrapper}>
                    <button className={styles.backBtn} onClick={close}>BACK TO THE SITE</button>
                </div>
            </div>

        </div>
    )

};

export default ThanksPopup;
