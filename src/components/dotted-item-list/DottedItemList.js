import React, {} from "react";

import styles from "./DottedItemList.module.css";
import DottedItem from "../dotted-item/DottedItem";
import calculateShift from "../../utils/expertise-dotted-items/calculate-items-shift.helper";

const DottedItemList = ({ dottedItems, title, isPink, activeItemIndex }) => {
    const shift = activeItemIndex !== null && activeItemIndex !== undefined ?
        {
            position: 'absolute',
            top: calculateShift(dottedItems, activeItemIndex) + 'px'
        }
        : null;

    return (
        <div className={styles.itemListWrapper} style={shift}>
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
                        return <DottedItem item={item}
                                           key={i}
                                           isPink={isPink}/>
                    })
                }
            </div>
        </div>
    )
};

export default DottedItemList;
