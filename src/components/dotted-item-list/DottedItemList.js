import React from "react";

import styles from "./DottedItemList.module.css";
import DottedItem from "../dotted-item/DottedItem";

const DottedItemList = ({ items, title }) => {
    return (
        <div className={ styles.expertiseItem }>
            {
                title &&
                <div className={styles.header}>
                    <span className='accent-text'>
                        { title }
                    </span>
                    <span className={ styles.divider }>
                        ••••••••••••••••••••••••••••••••••••••
                    </span>
                </div>
            }

            {
                items?.map((item, i) => {
                    return <DottedItem item={item} key={'expertiseItem' + i}/>
                })
            }
        </div>
    )
};

export default DottedItemList;
