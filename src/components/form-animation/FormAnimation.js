import React from "react";
import classNames from 'classnames';

import styles from './FormAnimation.module.css';

const FormAnimation = () => {
    return (
        <div>
            <div>
                <div className={styles.triangle}>
                    <div className={classNames(styles.triangle_outer, styles.clip)} />
                    <div className={classNames(styles.triangle_inner, styles.clip)} />
                </div>
            </div>
        </div>
    )
};

export default FormAnimation;