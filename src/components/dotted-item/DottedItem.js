import React from "react";
import classNames from 'classnames';

import styles from "./DottedItem.module.css";

const DottedItem = ({ item }) => {
    return (
        <div className={ styles.item }>
            <div className={ styles.circleLeft } />
            <div className={ classNames(styles.itemText, 'regular-text') }>
                { item }
            </div>
        </div>
    )
};

export default DottedItem;