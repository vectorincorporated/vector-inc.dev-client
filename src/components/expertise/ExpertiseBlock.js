import React, {useState} from "react"

import styles from "./ExpertiseBlock.module.css"
import BlockHeader from "../block-header/BlockHeader"
import classNames from "classnames"
import InfoMenuItem from "../info-menu-item/InfoMenuItem"
import SphereAnimation from "../sphere-animation/SphereAnimation"
import AnimatedLine from "../animated-line/AnimatedLine"
import {useQuery} from "@apollo/client";
import FETCH_EXPERTISE_PAGE from "../../api/ExpertisePage.servise";
import DottedItemListExpertise from "../dotted-item-list-expertise/dotted-item-list-expertise";

const header = {
    title: "Expertise",
    description: "Technologies We Use",
};

const ExpertiseBlock = () => {
    const {loading, error, data} = useQuery(FETCH_EXPERTISE_PAGE);
    const items = data?.expertisePage?.expertise_types || [];

    const [activeItem, setActiveItem] = useState(null);
    const [activeItemIndex, setActiveItemIndex] = useState(null);
    const [smallerSphere, setSmallerSphere] = useState(false);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        if (!!item.technologyAreas.length) {
            setActiveItem(item);
            setActiveItemIndex(items.indexOf(item));
            setSmallerSphere(true)
        }
    };

    return (
        <div className={styles.expertise}>
            <div className={styles.header}>
                <BlockHeader header={header}/>
            </div>
            <div className={styles.info}>
                <div className={classNames("accent-text", styles.infoMenu)}>
                    {items.map(item => {
                        return (
                            <InfoMenuItem
                                key={item.id}
                                toggleInfoBlock={toggleInfoBlock}
                                activeItem={activeItem}
                                item={item}
                            />
                        )
                    })}
                </div>

                <div className={styles.animatedLine}>
                    {items.map(item => {
                        return (
                            <AnimatedLine
                                key={item.id}
                                toggleInfoBlock={toggleInfoBlock}
                                activeItem={activeItem}
                                mode={"right"}
                                item={item}
                            />
                        )
                    })}
                </div>

                {activeItem && (
                    <div className={styles.subItems}>
                        {activeItem.technologyAreas.length ? (
                            <DottedItemListExpertise
                                dottedItems={activeItem.technologyAreas}
                                activeItemIndex={activeItemIndex}
                            />
                        ) : null}
                    </div>
                )}

                <div className={styles.animationWrapper}>
                    <SphereAnimation color="pink" smallerSphere={smallerSphere}/>
                </div>
            </div>
        </div>
    )
};

export default ExpertiseBlock
