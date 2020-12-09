import React from "react";

import styles from './ImagePopup.module.css';

const ImagePopup = ({ close, image }) => (
    <div className={styles.wrapper} onClick={close}>
        <div className={styles.image}>
            { image }
        </div>
    </div>
);

export default ImagePopup;
