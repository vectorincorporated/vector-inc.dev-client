import React from "react";

import styles from './ProjectDetailsBlock.module.css';
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import DottedItemList from "../dotted-item-list/DottedItemList";

const header = {
    title: 'Project name'
};

const ProjectDetailsBlock = ({ project }) => {
    return (
        <div className={ styles.project }>
            <div className={styles.generalInfo}>
                <div className={styles.infoText}>
                    <div className={ styles.header }>
                        <BlockHeader header={ header } />
                    </div>

                    <InfoBlock activeItem={project.general} options={{ isDivider: true }}/>
                </div>

                <div className={styles.imageInfo}>
                    <img src={project.image} alt=""/>
                    <div className={styles.webLink}>
                        <a href={project.link} className='accent-text'>WEB</a>
                        <div className={styles.webIcon}/>
                    </div>
                </div>
            </div>

            <div className={styles.secondaryInfo}>
                <div className={styles.infoText}>
                    <InfoBlock activeItem={project.problems} options={{ isDivider: true }}/>
                </div>
                <div className={styles.infoText}>
                    <InfoBlock activeItem={project.solutions} options={{ isDivider: true }}/>
                </div>
            </div>

            <div className={styles.screens}>
                {
                    project?.screenshots.map((img, i) => {
                        return <div key={i + 'img'} className={styles.screen}>
                            <img src={img} alt=""/>
                        </div>
                    })
                }
            </div>

            <div className={styles.dottedListInfo}>
                <div className={styles.features}>
                    <DottedItemList items={project.features.items}
                                    title={project.features.title}
                                    isPink={false}/>
                </div>

                <div className={styles.technologies}>
                    <DottedItemList items={project.technologies.items}
                                    title={project.technologies.title}
                                    isPink={true}/>
                </div>

            </div>
        </div>
    )
};

export default ProjectDetailsBlock;