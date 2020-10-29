import React, {useState} from "react";
import classNames from "classnames";

import styles from './PortfolioBlock.module.css';
import BlockHeader from "../block-header/BlockHeader";
import WorkList from "./work-list/WorkList";
import WorkInfo from "./work-info/WorkInfo";
import SphereAnimation from "../sphere-animation/SphereAnimation";

const works = [
    {
        id: 1,
        title: 'Enterprise solutions'
    },
    {
        id: 2,
        title: 'Full Stack Web Apps'
    },
    {
        id: 3,
        title: 'Cloud Storage'
    }
];

const header = {
    title: 'Portfolio'
};

const PortfolioBlock = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={styles.portfolio}>
            <div className={ styles.header }>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.works }>
                <div className={ styles.worksWrapper }>
                    <div className={styles.newWorks}>
                        <WorkList works={works}/>
                    </div>

                    <div className={styles.oldWorks}>
                        <WorkList works={works}/>
                    </div>
                </div>

                { activeItem &&
                {/*<ExpertiseItem activeItem={ activeItem }/>*/}
                }
                <div className={styles.workInfoWrapper}>
                    <WorkInfo activeItem={activeItem}/>
                </div>

                <div className={styles.animationWrapper}>
                    <SphereAnimation />
                </div>
            </div>

        </div>
    )
};

export default PortfolioBlock;