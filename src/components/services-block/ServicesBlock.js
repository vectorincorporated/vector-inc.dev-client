import React, { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./ServicesBlock.module.css";
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import DottedItemList from "../dotted-item-list/DottedItemList";
import ServiceItem from "../service-item/ServiceItem";
import ServicesService from "../../api/Services.service";
import Tags from "../tags/Tags";
import TagsService from "../../api/Tags.service";
import TechnologyAreasService from "../../api/TechnologyAreas.service";

const header = {
    title: "Services",
    description: "Here are the details of our services",
};

const ServicesBlock = () => {
    // TODO set default value for activeItem
    let [activeItem, setActiveItem] = useState(null);
    let [servicesData, setServicesData] = useState(null);
    const [tags, setTagsData] = useState(null);
    const [technologyAreas, setTechnologyAreasData] = useState(null);

    useEffect(() => {
        ServicesService.getServices().then(result => {
            setServicesData(result);
            if (!activeItem) {
                setActiveItem(result?.services[0].services[0]);
            }
        });
        TechnologyAreasService.getTechnologyAreas().then(result => {
            setTechnologyAreasData(result);
        });
        TagsService.getTags().then(result => {
            setTagsData(result);
        });
    }, []);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    const services = servicesData?.services[0].services;
    return (
        <div className={styles.services}>
            <div className={styles.info}>
                <div className={styles.header}>
                    <BlockHeader header={header} />
                </div>

                <div className={classNames("accent-text", styles.infoMenu)}>
                    {services?.map(item => {
                        return (
                            <ServiceItem
                                key={item.id}
                                toggleInfoBlock={toggleInfoBlock}
                                item={item}
                                activeItem={activeItem}
                            />
                        );
                    })}
                </div>
            </div>

            {activeItem && (
                <div
                    className={classNames(
                        styles.infoBlockWrapper,
                        "right-directed-border-appearance"
                    )}
                >
                    <div
                        className={classNames(
                            styles.infoBlockContent,
                            "content-appearance"
                        )}
                    >
                        <div>
                            <InfoBlock
                                activeItem={activeItem}
                                options={{ isDivider: true, isTitle: true }}
                            />
                        </div>

                        <div className={styles.dottedList}>
                            <DottedItemList
                                technologies={technologyAreas}
                                selectedTechnologiesIds={activeItem.technologyAreas}
                            />
                        </div>

                        <div className={styles.tags}>
                            <Tags tags={tags} selectedTagsIds={activeItem.tags} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesBlock;
