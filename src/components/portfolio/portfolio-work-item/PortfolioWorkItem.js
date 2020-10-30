import React from "react";
import classNames from 'classnames';

import styles from './PortfolioWorkItem.module.css';


const PortfolioWorkItem = ({ work, toggleInfoBlock, activeItem }) => {
    return (
        <div className={styles.wrapper} onClick={(e) => toggleInfoBlock(e, work)}>
            <div className={work === activeItem ? styles.iconActive : styles.icon} />
            <span className={classNames(styles.title, 'accent-text')}>{ work.title }</span>
        </div>
    )
};

export default PortfolioWorkItem;
