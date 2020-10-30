import React, {useState} from "react";

import styles from './PortfolioBlock.module.css';
import BlockHeader from "../block-header/BlockHeader";
import WorkList from "./work-list/WorkList";
import WorkInfo from "./work-info/WorkInfo";
import SphereAnimation from "../sphere-animation/SphereAnimation";

const works = [
    {
        id: 1,
        title: 'Project_1',
        text: 'Lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron'
    },
    {
        id: 2,
        title: 'Project_2',
        text: 'Lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron'
    },
    {
        id: 3,
        title: 'Project_3',
        text: 'Lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron'
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

            <div className={ styles.works }>
                <div className={ styles.worksWrapper }>
                    <div className={ styles.header }>
                        <BlockHeader header={ header } />
                    </div>

                    <div>
                        <WorkList works={works}
                                  toggleInfoBlock={toggleInfoBlock}
                                  activeItem={activeItem}
                                  latest={true}/>
                    </div>

                    <div>
                        <WorkList works={works}
                                  toggleInfoBlock={toggleInfoBlock}
                                  activeItem={activeItem}/>
                    </div>
                </div>

                { !activeItem &&
                    <div className={styles.animationWrapper}>
                        <SphereAnimation/>
                    </div>
                }
            </div>

            { activeItem &&
                <div className={styles.workInfoWrapper}>
                    <WorkInfo activeItem={activeItem}/>
                </div>
            }
        </div>
    )
};

export default PortfolioBlock;