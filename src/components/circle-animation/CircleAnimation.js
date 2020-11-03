import React from "react";

import styles from './CircleAnimation.module.css';

const CircleAnimation = () => {
    return (
        <svg
            className={styles.circle}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 1000 1000"
            version="1.1"
            viewBox="0 0 1000 1000"
            xmlSpace="preserve"
        >
            <circle cx="500" cy="500" r="302.8" className={styles.st0}>
                <animateTransform
                    attributeName="transform"
                    attributeType="xml"
                    dur="100s"
                    from="0 500 500"
                    repeatCount="indefinite"
                    to="360 500 500"
                    type="rotate"
                />
            </circle>
            <circle cx="500" cy="500" r="237.7" className={styles.st1}>
                <animateTransform
                    attributeName="transform"
                    attributeType="xml"
                    dur="40s"
                    from="0 500 500"
                    repeatCount="indefinite"
                    to="360 500 500"
                    type="rotate"
                />
            </circle>
            <circle cx="500" cy="500" r="366.8" className={styles.st2}>
                <animateTransform
                    attributeName="transform"
                    attributeType="xml"
                    dur="50s"
                    from="0 500 500"
                    repeatCount="indefinite"
                    to="-360 500 500"
                    type="rotate"
                />
            </circle>
            <circle cx="500" cy="500" r="385.1" className={styles.st3}/>
        </svg>
    )
};

export default CircleAnimation;