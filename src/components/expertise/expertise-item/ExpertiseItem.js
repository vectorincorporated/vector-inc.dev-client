import React from "react";

import styles from "./ExpertiseItem.module.css";

const ExpertiseItem = ({ activeItem }) => {
    return (
        <div className={ styles.expertiseItem }>
            {
                activeItem.items.map((item, i) => {
                    // TODO: use id instead index for key
                    return <div key={i} className={ styles.item }>
                                <div className={ styles.circleLeft } />
                                <span className='regular-text'>
                                    { item }
                                </span>
                            </div>
                })
            }
        </div>
    )
};

export default ExpertiseItem;
