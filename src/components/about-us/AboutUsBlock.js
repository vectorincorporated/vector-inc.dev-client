import React from "react"
import classNames from "classnames"

import styles from "./AboutUsBlock.module.css"
import BlockHeader from "../block-header/BlockHeader"
import BigVLogo from "../big-v-logo/BigVLogo"

const header = {
    title: "About Us",
};

const AboutUsBlock = ({data}) => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.header}>
                <BlockHeader header={header}/>
            </div>

            <div className={styles.content}>
                <div className={styles.aboutInfo}>
                    <div className={styles.infoTitle}>{data?.title?.toUpperCase()}</div>
                    <div className={styles.divider}>
                        ••••••••••••••••••••••••••••••••••••••
                    </div>
                    <div className={classNames("regular-text")}>{data?.description}</div>
                    <div className={styles.qoutation}>{data?.motivation}</div>
                    <div className={styles.author}>{data?.motivationAutor}</div>
                </div>

                <div className={styles.logoAnimation}>
                    <BigVLogo/>
                </div>
            </div>
        </div>
    )
};

export default AboutUsBlock
