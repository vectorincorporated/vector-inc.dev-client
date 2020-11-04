import React from "react";
import classNames from 'classnames';

import stylePinks from './SphereAnimationPink.module.css';
import styleWhite from './SphereAnimationWhite.module.css';

const circles = [1, 2, 3, 4, 5, 6];

const SphereAnimation = ({ color }) => {
    const styles = color === 'pink' ? stylePinks : styleWhite;
    console.log(color);

    return (
        <div className={styles.view}>
            <div className={classNames(styles.plane, styles.main)}>
                {
                    circles.map((i) => {
                        return <div key={i} className={styles.circle} />
                    })
                }
            </div>
        </div>
    )
};

export default SphereAnimation;
