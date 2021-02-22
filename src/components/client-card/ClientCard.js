import React from "react";

import styles from "./ClientCard.module.css";

const ClientCard = ({ client }) => {
    return (
        <div className={ styles.client }>
            <img src={ client.image.url } alt=''/>
        </div>
    )
};

export default ClientCard;
