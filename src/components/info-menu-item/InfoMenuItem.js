import React from "react";

import styles from './InfoMenuItem.module.css';

const InfoMenuItem = ({ toggleInfoBlock, item, activeItem, options }) => (
    <div className={styles.wrapper}>
        <div className={ styles.infoItem }
             role = "button"
             onClick={(e) => toggleInfoBlock(e, item)}>

            <span>{ item.title }</span>

        </div>
    </div>

);

export default InfoMenuItem