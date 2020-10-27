import React, {} from "react";
import styles from './HowWeWorkBlock.module.css';

import requirements from '../../images/icons/how-we-work/requirements.svg'
import design from '../../images/icons/how-we-work/design.svg'
import development from '../../images/icons/how-we-work/development.svg'
import testing from '../../images/icons/how-we-work/testing.svg'
import launch from '../../images/icons/how-we-work/launch.svg'
import WorkStep from "../work-step/WorkStep";

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

const HowWeWorkBlock = () => {
    return (
        <div className={ styles.howWeWork }>
            <div className={styles.header}>
                <h2 className={ styles.title }>
                    How we work
                </h2>
                <span className='accent-text'>
                    we use the best technologies to enhance your product
                </span>
            </div>

            {
                stepList.map(step => <WorkStep key={step.order} step={step}/>)
            }

        </div>
    )
};

export default HowWeWorkBlock;
