import React from "react";

import styles from './PortfolioWorkItem.module.css';


const PortfolioWorkItem = ({ work }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon} />
            <span className={styles.title}>{ work.title }</span>
        </div>
    )
};

export default PortfolioWorkItem;
