import calculateShift from "../../utils/expertise-dotted-items/calculate-items-shift.helper";
import styles from "../dotted-item-list/DottedItemList.module.css";
import DottedItem from "../dotted-item/DottedItem";
import React from "react";

const DottedItemListExpertise = ({ dottedItems, title, isPink, activeItemIndex }) => {
    const shift = activeItemIndex || activeItemIndex === 0 ?
        {
            position: 'absolute',
            top: calculateShift(dottedItems, activeItemIndex) + 'px'
        }
        : null;

    return (
        <div style={shift}>
            <div className={ styles.itemList }>
                {
                    title &&
                    <div className={styles.header}>
                        <span  className={ styles.title }>
                            { title }
                        </span>
                        <span className={ styles.divider }>
                            ••••••••••••••••••••••••••••••••••••••
                        </span>
                    </div>
                }

                {
                    dottedItems?.map((item, i) => {
                        return <DottedItem item={item.technologyItems.map(item => item.title).join(", ")}
                                           key={i}
                                           isPink={isPink}/>
                    })
                }
            </div>
        </div>
    )
};

export default DottedItemListExpertise;