import React from "react";

import styles from "./Tags.module.css";

const Tags = ({ tags, selectedTagsIds }) => {
    let selectedTagsNames = tags?.reduce((accumulator, currentValue) => {
        if (selectedTagsIds.find(item => item === currentValue.id)) {
            accumulator.push(currentValue.title);
        }
        return accumulator;
    }, []);

    return (
        <div className={styles.wrapper}>
            <div>TAGS</div>
            <div className={styles.smallDivider}>....</div>
            {selectedTagsNames?.map(tag => (
                <span className={styles.tag} key={tag}>
                    {tag};
                </span>
            ))}
        </div>
    );
};

export default Tags;
