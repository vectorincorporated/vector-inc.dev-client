import React from "react";
import classNames from "classnames";

import styles from "./ServiceItem.module.css";

const ServiceItem = ({ toggleInfoBlock, item, activeItem }) => (
    <div
        className={classNames(
            styles.infoItem,
            activeItem === item ? styles.active : ""
        )}
        role="button"
        onClick={e => toggleInfoBlock(e, item)}
    >
        <span>{item.title}</span>
    </div>
);

export default ServiceItem;
