import React from "react";
import classNames from 'classnames';

import styles from "./DottedItem.module.css";

const DottedItem = ({ item, isPink }) => {
    return (
        <div className={classNames(styles.item, isPink ? styles.itemPink : '')}>
            <div className={ isPink ? styles.circleLeftPink: styles.circleLeft }/>
            <div className={ classNames(styles.itemText, 'regular-text') }>
                { item }
            </div>
        </div>
    )
};

export default DottedItem;