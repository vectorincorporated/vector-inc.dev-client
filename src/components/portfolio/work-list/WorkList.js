import React from "react";

import styles from './WorkList.module.css';
import PortfolioWorkItem from "../portfolio-work-item/PortfolioWorkItem";

const WorkList = ({ works = [], toggleInfoBlock, activeItem }) => {
    return (
        <div className={styles.worksWrapper}>
            <div className={styles.header}>
                <div className={styles.divider}>
                    •••••••••••••••••••••••••••••••••••••••••••••
                </div>
            </div>

            <div className={styles.works}>
                {
                    works.map((work) => {
                        return <div key={work.id}>
                            <PortfolioWorkItem work={work}
                                               toggleInfoBlock={toggleInfoBlock}
                                               activeItem={activeItem}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default WorkList;
