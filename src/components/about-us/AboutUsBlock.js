import React, {} from "react";
import classNames from "classnames";

import styles from './AboutUsBlock.module.css';
import BlockHeader from "../block-header/BlockHeader";
import BigVLogo from "../big-v-logo/BigVLogo";

const info = {
    title: 'VECTOR incorporated',
    text:
        `We specialize in corporate portals development. 
        We help large and coming to large companies improve their business processes. 
        We know exactly how to leverage cutting-edge technology.`,
    quotation:
        `-“It ain’t about how hard you hit, it’s about how hard you can get hit and keep moving forward. 
        'How much you can take and keep moving forward. That’s how winning is done!”.`,
    author: 'Rocky',
};

const header = {
    title: 'About Us'
};

const AboutUsBlock = () => {
    return (
        <div className={ styles.aboutUs }>
            <div className={ styles.header }>
                <BlockHeader header={ header } />
            </div>

            <div className={styles.content}>
                <div className={ styles.aboutInfo }>
                    <div className={styles.infoTitle}>{ info.title }</div>
                    <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>
                    <div className={classNames('regular-text')}>{ info.text }</div>
                    <div className={styles.qoutation}>{ info.quotation }</div>
                    <div className={styles.author}>{ info.author }</div>
                </div>

                <div className={styles.logoAnimation}>
                    <BigVLogo />
                </div>
            </div>
        </div>
    )
};

export default AboutUsBlock;