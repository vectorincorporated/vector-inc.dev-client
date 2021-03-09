import React from "react";

import styles from "./DottedItemList.module.css";
import DottedItem from "../dotted-item/DottedItem";
import calculateShift from "../../utils/expertise-dotted-items/calculate-items-shift.helper";

const DottedItemList = ({
    selectedTechnologies,
    isPink,
    activeItemIndex,
}) => {

    const shift =
        activeItemIndex || activeItemIndex === 0
            ? {
                  position: "absolute",
                  top: calculateShift(selectedTechnologies, activeItemIndex) + "px",
              }
            : null;

    return (
        <div style={shift}>
            <div className={styles.itemList}>
                {/* TODO: Remove? Block is not used for a current type of data
                 {title && (
                    <div className={styles.header}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.divider}>
                            ••••••••••••••••••••••••••••••••••••••
                        </span>
                    </div>
                )} */}

                {selectedTechnologies?.map((item, i) => {
                    return <DottedItem item={item} key={item.id} isPink={isPink} />;
                })}
            </div>
        </div>
    );
};

export default DottedItemList;
