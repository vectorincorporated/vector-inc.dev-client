import React from "react";
import classNames from 'classnames';

import styles from './BlockHeader.module.css';

const BlockHeader = ({ header, centralized }) => {
    return (
        <div className={classNames(styles.wrapper, centralized ? styles.centralized : '')}>
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