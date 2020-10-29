import React from "react";
import classNames from 'classnames';

import styles from "./ExpertiseSubItem.module.css";

const ExpertiseSubItem = ({ item }) => {
    return (
        <div className={ styles.item }>
            <div className={ styles.circleLeft } />
            <span className={classNames(styles.itemText, 'regular-text')}>
                { item }
            </span>
        </div>
    )
};

export default ExpertiseSubItem