import React, {} from "react";
import classNames from 'classnames';

import styles from './Socials.module.css';

const title = 'WE ARE IN SOCIALS';

const Socials = ({socials}) => {
    return (
        <div className={ styles.contacts }>
            <div>
                <div className={classNames('accent-text', styles.title)}>{
                    title
                }</div>

                <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>

                <div className={styles.socialItems}>
                    {
                        socials?.socials?.map((item) => {
                            return <a href={item?.link}
                                      key={item?.id}
                                      className={classNames(styles[item?.type] || styles.linkedin, styles.icon)} />
                        })
                    }
                </div>

            </div>

        </div>
    )
};

export default Socials;