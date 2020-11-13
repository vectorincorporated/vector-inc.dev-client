import React from "react";

import styles from "./Tags.module.css";

const Tags = ({tags}) => {
    return (
        <div className={styles.wrapper}>
            <div>TAGS</div>
            <div className={styles.smallDivider}>....</div>
            {
                tags?.map(tag => <span className={styles.tag} key={tag}>{tag};</span>)
            }
        </div>
    )
};

export default Tags;
