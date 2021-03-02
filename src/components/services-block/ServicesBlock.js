import React, {useEffect, useState} from "react";
import classNames from "classnames";

import styles from "./ServicesBlock.module.css";
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import ServiceItem from "../service-item/ServiceItem";
import DottedItemList from "../dotted-item-list/DottedItemList";
import Tags from "../tags/Tags";
import ServicesService from "../../api/Services.service";
import {useQuery} from "@apollo/client";

const header = {
    title: "Services",
    description: "Here are the details of our services",
};

const ServicesBlock = () => {
    const {loading, error, data} = useQuery(ServicesService);
    const servicesData = data?.servicesPage || null;
    const services = servicesData?.services[0].services || [];
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        !activeItem && services.length && setActiveItem(services[0]);
    }, [services]);


    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };
    return (
        <div className={styles.services}>
            <div className={styles.info}>
                <div className={styles.header}>
                    <BlockHeader header={header}/>
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
                                options={{isDivider: true, isTitle: true}}
                            />
                        </div>

                        <div className={styles.dottedList}>
                            <DottedItemList
                                selectedTechnologies={
                                    activeItem.technologyAreas
                                }
                            />
                        </div>

                        <div className={styles.tags}>
                            <Tags
                                selectedTags={activeItem.tags}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesBlock;
