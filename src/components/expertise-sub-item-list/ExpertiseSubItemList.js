import React from "react";

import styles from "./ExpertiseSubItemList.module.css";
import ExpertiseSubItem from "../expertise-sub-item/ExpertiseSubItem";

const ExpertiseSubItemList = ({ activeItem }) => {
    return (
        <div className={ styles.expertiseItem }>
            {
                activeItem.items.map((item, i) => {
                    // TODO: use id for key instead index
                    return <ExpertiseSubItem item={item} key={i}/>
                })
            }
        </div>
    )
};

export default ExpertiseSubItemList;
