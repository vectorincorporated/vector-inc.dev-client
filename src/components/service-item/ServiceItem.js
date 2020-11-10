import React from "react";

import styles from './ServiceItem.module.css';

const ServiceItem = ({ toggleInfoBlock, item, activeItem }) => (
    <div className={ styles.infoItem }
         role = "button"
         onClick={(e) => toggleInfoBlock(e, item)}>

        <span>{ item.title }</span>
    </div>
);

export default ServiceItem;
