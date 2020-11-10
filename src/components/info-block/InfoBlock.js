import React from "react";
import classNames from 'classnames';

import styles from "./InfoBlock.module.css";

const InfoBlock = ({ activeItem, options }) => {
    return (
        <div className={ styles.infoBlock }>
            { activeItem?.title &&
                <span className='accent-text'>
                    {activeItem?.title}
                </span>
            }

            { options?.isDivider &&
                <span className={ styles.divider }>
                    ••••••••••••••••••••••••••••••••••••••
                </span>
            }

            <span className='regular-text'>
                {activeItem?.text}
            </span>

            { options?.readMore &&
                <a href="#" className={classNames('link', 'accent-text', styles.readMore)}>
                    read more>
                </a>
            }
        </div>
    )
};

export default InfoBlock