import React from "react";
import classNames from 'classnames';

import styles from './SphereAnimation.module.css';

const SphereAnimation = () => {
    return (
        <div className={styles.view}>
            <div className={classNames(styles.plane, styles.main)}>
                <div className={styles.circle} />
                <div className={styles.circle} />
                <div className={styles.circle} />
                <div className={styles.circle} />
                <div className={styles.circle} />
                <div className={styles.circle} />
            </div>
        </div>
    )
};

export default SphereAnimation;
