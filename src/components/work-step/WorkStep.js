import React from "react";
import classNames from "classnames";

import styles from './WorkStep.module.css';

const WorkStep = ({ step }) => {
    return (
        <div data-sal="fade"
             data-sal-delay="300"
             data-sal-easing="ease-in">
            {
                step.order %2 === 0 ?

                    <div className={ styles.step }>
                        <img src={ step.img } alt=""/>
                        <div className={ styles.item }>
                            <div className={ styles.circleLeft } />
                            <div className={ classNames(styles.line, styles.leftWithCircle) } />
                            <span className='accent-text'>{ step?.title }</span>
                            <div className={ classNames(styles.line, styles.rightSimple) } />
                        </div>
                    </div>

                    :

                    <div className={ styles.step }>
                        <div className={ styles.item }>
                            <div className={ classNames(styles.line, styles.leftSimple) } />
                            <span className='accent-text'>{ step?.title }</span>
                            <div className={ classNames(styles.line, styles.rightWithCircle) } />
                            <div className={ styles.circleRight } />
                        </div>
                        <img src={ step.img } alt=""/>
                    </div>
            }
        </div>
    )
};

export default WorkStep;
