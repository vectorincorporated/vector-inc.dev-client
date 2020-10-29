import React from "react";
import classNames from 'classnames';

import styles from './SphereAnimation.module.css';

const circles = [1, 2, 3, 4, 5, 6];

const SphereAnimation = () => {
    return (
        <div className={styles.view}>
            <div className={classNames(styles.plane, styles.main)}>
                {
                    circles.map(() => {
                        return <div className={styles.circle} />
                    })
                }
            </div>
        </div>
    )
};

export default SphereAnimation;
