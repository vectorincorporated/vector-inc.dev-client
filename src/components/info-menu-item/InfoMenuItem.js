import React from "react";

import styles from './InfoMenuItem.module.css';

const InfoMenuItem = ({ toggleInfoBlock, item }) => (
    <div className={ styles.infoItem }
         onMouseOver={(e) => toggleInfoBlock(e, item)}
         onMouseLeave={(e) => toggleInfoBlock(e, null)}>

        <span>{ item.title }</span>

        <div className={ styles.line } />
    </div>
);

export default InfoMenuItem