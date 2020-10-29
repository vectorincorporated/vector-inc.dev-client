import React from "react";
import classNames from 'classnames';

import styles from './WorkList.module.css';

const WorkList = ({ works, latest }) => {
    return (
        <div className={styles.worksWrapper}>
            <div>
                <div className={styles.header}>
                    { latest ? 'Last month' : 'Long time ago'}
                </div>
                <div className={styles.divider}>
                    •••••••••••••••••••••••••••••••••••••••••••••
                </div>
            </div>

            <div className={styles.works}>
                {
                    works.map((work) => {
                        return <div className={styles.work } key={work.id}>
                            <div>Work!</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default WorkList;
    