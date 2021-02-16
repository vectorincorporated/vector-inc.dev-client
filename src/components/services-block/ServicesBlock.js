import React, { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./ServicesBlock.module.css";
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import ServiceItem from "../service-item/ServiceItem";
import DottedItemList from "../dotted-item-list/DottedItemList";
import Tags from "../tags/Tags";
import ServicesService from "../../api/Services.service";

const header = {
    title: "Services",
    description: "Here are the details of our services",
};

const ServicesBlock = ({ tags }) => {
    // TODO set default value for activeItem
    let [activeItem, setActiveItem] = useState(null);
    let [servicesData, setServicesData] = useState(null);
    console.log(tags);

    useEffect(() => {
        ServicesService.getServices().then(result => {
            setServicesData(result);
            if (!activeItem) {
                setActiveItem(result?.services[0].services[0]);
            }
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

                        {/* TODO add query for technologies
                        <div className={styles.dottedList}>
                            <DottedItemList
                                dottedItems={activeItem.technologies.items}
                                title={activeItem.technologies.title}
                            />
                        </div> */}

                        <div className={styles.tags}>
                            <Tags
                                tags={tags}
                                selectedTagsIds={activeItem.tags}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesBlock;
