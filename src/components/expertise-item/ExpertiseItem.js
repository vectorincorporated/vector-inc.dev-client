import React from "react";
import classNames from 'classnames';

import styles from "./ExpertiseItem.module.css";

const ExpertiseItem = ({ activeItem }) => {
    return (
        <div className={ styles.expertiseItem }>
            {
                activeItem.items.map((item, i) => {
                    // TODO: use id for key instead index
                    return <div key={i} className={ styles.item }>
                                <div className={ styles.circleLeft } />
                                <span className={classNames(styles.itemText, 'regular-text')}>
                                    { item }
                                </span>
                            </div>
                })
            }
        </div>
    )
};

export default ExpertiseItem;
