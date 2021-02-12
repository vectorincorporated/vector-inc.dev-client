import React, {useState} from "react";
import classNames from "classnames";

import styles from './PortfolioBlock.module.css';
import BlockHeader from "../block-header/BlockHeader";
import WorkList from "./work-list/WorkList";
import WorkInfo from "./work-info/WorkInfo";
import SphereAnimation from "../sphere-animation/SphereAnimation";

const header = {
    title: 'Portfolio'
};

const PortfolioBlock = ({portfolioData}) => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={styles.portfolio}>
            <div className={styles.worksWrapper}>
                <div className={ styles.header }>
                    <BlockHeader header={ header } />
                </div>

                <WorkList works={portfolioData?.projects}
                          toggleInfoBlock={toggleInfoBlock}
                          activeItem={activeItem}/>
            </div>

            { activeItem ?
                <div className={classNames(styles.workInfoWrapper, 'right-directed-border-appearance')} >
                    <div className={classNames(styles.workInfoContent,'content-appearance')}>
                        <WorkInfo activeItem={activeItem}/>
                    </div>
                </div>
                :
                <div className={styles.animationWrapper}>
                    <SphereAnimation color='white'/>
                </div>
            }
        </div>
    )
};

export default PortfolioBlock;
