import React, {} from "react";

import styles from './Social.module.css';

const Social = ({ social }) => {
    return (
        <div className={ styles.social } key={ social.id }>
            <a href={ social.link }>
                <img src={ social.icon } className={ styles.icon } alt={ social.label }/>
            </a>
        </div>
    )
};

export default Social;