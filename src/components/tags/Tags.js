import React from "react";

import styles from "./Tags.module.css";

const Tags = ({ selectedTags }) => {

    return (
        <div className={styles.wrapper}>
            <div>TAGS</div>
            <div className={styles.smallDivider}>....</div>
            {selectedTags?.map(tag => (
                <span className={styles.tag} key={tag.id}>
                    {tag.title};
                </span>
            ))}
        </div>
    );
};

export default Tags;
