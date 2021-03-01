import React from 'react';
import styles from "../AboutUsBlock.module.css";
import classNames from "classnames";
import BigVLogo from "../../big-v-logo/BigVLogo";

const AboutUsContent = ({aboutUsPage}) => {

    return (
        <>
            <div className={styles.aboutInfo}>
                <div className={styles.infoTitle}>{aboutUsPage?.title?.toUpperCase()}</div>
                <div className={styles.divider}>
                    ••••••••••••••••••••••••••••••••••••••
                </div>
                <div className={classNames("regular-text")}>{aboutUsPage?.description}</div>
                <div className={styles.qoutation}>{aboutUsPage?.motivation}</div>
                <div className={styles.author}>{aboutUsPage?.motivationAutor}</div>
            </div>

            <div className={styles.logoAnimation}>
                <BigVLogo/>
            </div>
        </>
    );
};

export default AboutUsContent;