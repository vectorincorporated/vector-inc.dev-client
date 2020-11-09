import React, {useState} from "react";
import classNames from 'classnames';

import stylePinks from './SphereAnimationPink.module.css';
import styleWhite from './SphereAnimationWhite.module.css';
import "./SphereSizeAnimation.css";

const circles = [1, 2, 3, 4, 5, 6];

const SphereAnimation = ({ color, smallerSphere }) => {
    const styles = color === 'pink' ? stylePinks : styleWhite;

    return (
        <div className={styles.view}>

            <div className={classNames(styles.plane, styles.main, {
                'change-plane-size': smallerSphere
            })}>
                {
                    circles.map((i) => {
                        return <div key={i} className={classNames(styles.circle, {
                            'change-circle-size': smallerSphere
                        })} />
                    })
                }
            </div>
        </div>
    )
};

export default SphereAnimation;
