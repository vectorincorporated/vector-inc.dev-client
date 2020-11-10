import React from "react";

import styles from './InfoMenuItem.module.css';

const InfoMenuItem = ({ toggleInfoBlock, item, activeItem, options }) => (
    <div className={ styles.infoItem }
         role = "button"
         onClick={(e) => toggleInfoBlock(e, item)}>

        <span>{ item.title }</span>

        { item === activeItem &&
            <div className={ options?.mode === 'left' ? styles.lineLeft : styles.lineRight } />
        }
    </div>
);

export default InfoMenuItem