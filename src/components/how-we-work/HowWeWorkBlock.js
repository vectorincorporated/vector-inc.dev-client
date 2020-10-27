import React, {} from "react";
import styles from './HowWeWorkBlock.module.css';
import classNames from 'classnames';

import requirements from '../../images/icons/how-we-work/requirements.svg'
import design from '../../images/icons/how-we-work/design.svg'
import development from '../../images/icons/how-we-work/development.svg'
import testing from '../../images/icons/how-we-work/testing.svg'
import launch from '../../images/icons/how-we-work/launch.svg'

const HowWeWorkBlock = () => {
    return (
        <div className={ styles.howWeWork }>
            <div className={styles.header}>
                <h2 className={ styles.title }>
                    How we work
                </h2>
                <span className='accent-text'>
                    we use the best technologies to enhance your product
                </span>
            </div>

            <div className={styles.step}>
                <div className={styles.item}>
                    <div className={ classNames(styles.line, styles.leftSimple) } />
                    <span className='accent-text'>Requirements</span>
                    <div className={ classNames(styles.line, styles.rightWithCircle) } />
                    <div className={ styles.circleRight } />
                </div>
                <img src={requirements} alt=""/>
            </div>

            <div className={styles.step}>
                <img src={design} alt=""/>
                <div className={styles.item}>
                    <div className={ styles.circleLeft } />
                    <div className={ classNames(styles.line, styles.leftWithCircle) } />
                    <span className='accent-text'>design</span>
                    <div className={ classNames(styles.line, styles.rightSimple) } />
                </div>
            </div>

            <div className={styles.step}>
                <div className={styles.item}>
                    <div className={ classNames(styles.line, styles.leftSimple) } />
                    <span className='accent-text'>development</span>
                    <div className={ classNames(styles.line, styles.rightWithCircle) } />
                    <div className={ styles.circleRight } />
                </div>
                <img src={development} alt=""/>
            </div>

            <div className={styles.step}>
                <img src={testing} alt=""/>
                <div className={styles.item}>
                    <div className={ styles.circleLeft } />
                    <div className={ classNames(styles.line, styles.leftWithCircle) } />
                    <span className='accent-text'>testing</span>
                    <div className={ classNames(styles.line, styles.rightSimple) } />
                </div>
            </div>

            <div className={styles.step}>
                <div className={styles.item}>
                    <div className={ classNames(styles.line, styles.leftSimple) } />
                    <span className='accent-text'>launch</span>
                    <div className={ classNames(styles.line, styles.rightWithCircle) } />
                    <div className={ styles.circleRight } />
                </div>
                <img src={launch} alt=""/>
            </div>

        </div>
    )
};

export default HowWeWorkBlock;
