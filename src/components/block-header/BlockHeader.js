import React from "react";

import styles from './BlockHeader.module.css';

const BlockHeader = ({ header }) => {
    return (
        <div className={ styles.wrapper }>
            <h2 className={ styles.title }>
                { header.title }
            </h2>

            { header.description &&
                <span className='accent-text'>
                    { header.description }
                </span>
            }
        </div>
    )
};

export default BlockHeader;