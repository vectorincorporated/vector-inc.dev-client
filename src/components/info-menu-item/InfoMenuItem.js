import React from "react";

const InfoMenuItem = ({ toggleInfoBlock, styles, text }) => (
    <div className={styles.infoItem} onMouseOver={() => toggleInfoBlock(true)} onMouseLeave={() => toggleInfoBlock(false)}>
        <span>{ text }</span>
        <div className={styles.line}>
        </div>
    </div>
)

export default InfoMenuItem