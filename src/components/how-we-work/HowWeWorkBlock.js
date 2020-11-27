import React, {} from "react";
import styles from './HowWeWorkBlock.module.css';

import requirements from '../../images/icons/how-we-work/requirements.svg'
import design from '../../images/icons/how-we-work/design.svg'
import development from '../../images/icons/how-we-work/development.svg'
import testing from '../../images/icons/how-we-work/testing.svg'
import launch from '../../images/icons/how-we-work/launch.svg'
import WorkStep from "../work-step/WorkStep";
import BlockHeader from "../block-header/BlockHeader";
import classNames from "classnames";

const stepList = [
    {
        order: 1,
        title: 'requirements',
        img: requirements
    },
    {
        order: 2,
        title: 'design',
        img: design
    },
    {
        order: 3,
        title: 'development',
        img: development
    },
    {
        order: 4,
        title: 'testing',
        img: testing
    },
    {
        order: 5,
        title: 'launch',
        img: launch
    }
];

const header = {
    title: 'How we work',
    description: 'we use the best technologies to enhance your product'
};


const HowWeWorkBlock = () => {
    return (
        <div className={classNames(styles.howWeWork, 'container')} >
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            {
                stepList.map(step => <WorkStep key={step.order} step={step}/>)
            }

        </div>
    )
};

export default HowWeWorkBlock;
