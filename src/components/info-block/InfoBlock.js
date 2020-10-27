
import React from "react";

import styles from "./InfoBlock.module.css";

const InfoBlock = ({ activeItem }) => {
    return (
        <div className={ activeItem ? styles.infoBlock : styles.infoBlockHidden }>
            <span className='accent-text'>
                {activeItem?.title}
            </span>

            <span className={ styles.divider }>
                ••••••••••••••••••••••••••••••••••••••
            </span>
            <span className='regular-text'>
                {activeItem?.text}
            </span>
        </div>
    )
};

export default InfoBlock