import React from "react";
import classNames from 'classnames';

import styles from './AnimatedLine.module.css';

const AnimatedLine = ({ item, activeItem, mode }) => (
    <div className={styles.wrapper}>
        { item === activeItem &&
            <div className={
                classNames(
                    styles.horizontalLine,
                    mode === 'left' ? styles.horizontalLineLeft : styles.horizontalLineRight
                )
            } />
        }
    </div>

);

export default AnimatedLine;
