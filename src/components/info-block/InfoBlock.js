import React from "react";
import { Link } from "gatsby";
import classNames from 'classnames';

import styles from "./InfoBlock.module.css";

const InfoBlock = ({ activeItem, options }) => {
    return (
        <div className={ styles.infoBlock }>
            { activeItem?.title &&
                <span className={classNames('accent-text', styles.title)}>
                    {activeItem?.title}
                </span>
            }

            { options?.isDivider &&
                <span className={ styles.divider }>
                    •••••••••••••••••••••••••••••••
                </span>
            }

            <span className='regular-text'>
                {activeItem?.text}
            </span>

            { options?.readMore &&
                <Link to='../services'
                      className={classNames('link', 'accent-text', styles.readMore)}
                      state={{ activeItem: activeItem }}>
                        read more>
                </Link>

            }
        </div>
    )
};

export default InfoBlock