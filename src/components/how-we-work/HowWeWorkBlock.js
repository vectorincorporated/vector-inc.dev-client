import React, {} from "react";

import WorkStep from "../work-step/WorkStep";
import BlockHeader from "../block-header/BlockHeader";

import styles from './HowWeWorkBlock.module.css';

const header = {
    title: 'How we work',
    description: 'we use the best technologies to enhance your product'
};


const HowWeWorkBlock = ({workSteps}) => {

    const sortByOrder = (a, b) => {
        return a.order - b.order;
    };

    return (<>
        { workSteps?.length && <div className={styles.howWeWork} >
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            {
                [...workSteps]
                    .sort(sortByOrder)
                    .map(step => <WorkStep key={step.id} step={step}/>)
            }

        </div> }
    </>)
};

export default HowWeWorkBlock;
