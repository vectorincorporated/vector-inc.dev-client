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
                    <a href={activeItem.link} className={styles.linkWrapper}>
                        <div className={classNames('accent-text', styles.webLink)}>WEB</div>
                        <div className={styles.webIcon}/>
                    </a>
                    <div className={styles.smallDivider}>....</div>
                    <a href='/project-details' className={classNames('accent-text', styles.detailsLink)}>
                        <div>Show more details</div>
                        <div className={styles.eyeIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default WorkInfo;
    