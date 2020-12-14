import React from "react";

import styles from './VhsImage.module.css';

const VhsImage = ({ image }) => {
    return (
        <div className={styles.imageWrapper}>
            <img src={image} alt="" className='js-vhs-filter'/>
        </div>
    )
};

export default VhsImage;
