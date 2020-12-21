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
        title: 'Project_1',
        text: 'Lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron',
        link: '#'
    },
    {
        id: 2,
        title: 'Project_2',
        text: 'Lorem 2 oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron',
        link: '#'
    },
    {
        id: 3,
        title: 'Project_3',
        text: 'Lorem (3) oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron',
        link: '#'
    },
    {
        id: 4,
        title: 'Project_4',
        text: 'Lorem no oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron',
        link: '#'
    },
    {
        id: 5,
        title: 'Project_5',
        text: 'Lorem tye oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron',
        link: '#'
    },
    {
        id: 6,
        title: 'Project_6',
        text: 'Lorem sasha gray oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron lorem oxxxymiron',
        link: '#'
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
            <div className={styles.worksWrapper}>
                <div className={ styles.header }>
                    <BlockHeader header={ header } />
                </div>

                <WorkList works={works}
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
