import React from "react";

import styles from './InfoMenuItemMobile.module.css';

const InfoMenuItemMobile = ({ toggleInfoBlock, item }) => (
    <div className={ styles.infoItem }
         role = "button"
         onClick={(e) => toggleInfoBlock(e, item)}>

        <span>{ item.title }</span>

        <span className={styles.pinkArrow}> > </span>

    </div>
);

export default InfoMenuItemMobile;
