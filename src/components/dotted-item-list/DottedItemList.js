import React from "react";

import styles from "./DottedItemList.module.css";
import DottedItem from "../dotted-item/DottedItem";

const DottedItemList = ({ items, title, isPink }) => {
    return (
        <div className={ styles.expertiseItem }>
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
                items?.map((item, i) => {
                    return <DottedItem item={item}
                                       key={'expertiseItem' + i}
                                       isPink={isPink}/>
                })
            }
        </div>
    )
};

export default DottedItemList;
