import React from "react";
import classNames from 'classnames';

import styles from './WorkInfo.module.css';

const WorkInfo = ({ activeItem }) => {
    return (
        <div className={styles.workWrapper}>
            <div className={styles.work}>
                <div className={styles.workInfo}>
                    <div className={classNames(styles.workTitle, 'accent-text')}>
                        { activeItem.title }
                    </div>
                    <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>
                    <div className={classNames(styles.text, 'regular-text')}>
                        { activeItem.text }
                    </div>
                </div>

            </div>

            <div className={styles.footer}>
                <div className='accent-text'>{ activeItem.title }</div>
                <div className={styles.footerItems}>
                    <a href="#" className='accent-text'>WEB</a>
                    <div className={styles.webIcon}/>
                    <div className={styles.divider}>....</div>
                    <a href='/project-details' className='accent-text'>Show more details</a>
                    <div className={styles.eyeIcon}/>
                </div>
            </div>
        </div>
    )
};

export default WorkInfo;
    