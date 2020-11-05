import React, {} from "react";
import classNames from "classnames";

import styles from './ProjectDetailsBlock.module.css';
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";

const header = {
    title: 'Project name'
};

const ProjectDetailsBlock = ({ project }) => {
    return (
        <div className={ styles.project }>
            <div className={ styles.header }>
                <BlockHeader header={ header } />
            </div>

            <div className={styles.generalInfo}>
                <InfoBlock activeItem={project.general} options={{ isDivider: true }}/>

                <div className={styles.imageInfo}>
                    <img src={project.image} alt=""/>
                    <a href={project.link}>WEB</a>
                </div>
            </div>

            <div className={styles.secondaryInfo}>
                <InfoBlock activeItem={project.problems} options={{ isDivider: true }}/>
                <InfoBlock activeItem={project.solutions} options={{ isDivider: true }}/>
            </div>

            <div className={styles.screens}>
                {
                    project?.screenshots.map((img, i) => {
                        return <div key={i + 'img'}>
                            <img src={img} alt=""/>
                        </div>
                    })
                }
            </div>

            <div className={styles.listInfo}>
                <InfoBlock activeItem={project.features} options={{ isDivider: true }}/>
                <InfoBlock activeItem={project.technologies} options={{ isDivider: true }}/>
            </div>
        </div>
    )
};

export default ProjectDetailsBlock;