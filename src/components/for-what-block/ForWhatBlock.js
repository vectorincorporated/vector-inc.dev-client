import React, {useState} from "react"

import styles from './ForWhatBlock.module.css';
import InfoMenuItem from "../info-menu-item/InfoMenuItem";

const classNames = require('classnames');


const ForWhatBlock = () => {
    const [isInfoBlock, setIsInfoBlock] = useState(false);

    const toggleInfoBlock = (isInfoBlock) => {
        setIsInfoBlock(isInfoBlock);
    };

    return (
        <div className={ styles.forWhat }>
            <div className={styles.header}>
                <h2 className={ styles.title }>
                    For what
                </h2>
                <span className='accent-text'>
                    we use the best technologiies to enhance your product
                </span>
            </div>

            <div className={ styles.info }>
                <div className={classNames( 'accent-text', styles.infoMenu )}>
                    <InfoMenuItem toggleInfoBlock={toggleInfoBlock}
                                  text='Enhance your internal communication'
                                  styles={styles} />

                    <InfoMenuItem toggleInfoBlock={toggleInfoBlock}
                                  text='Boost your marketing effort'
                                  styles={styles} />

                    <InfoMenuItem toggleInfoBlock={toggleInfoBlock}
                                  text='Automate your Business processes'
                                  styles={styles} />

                    <InfoMenuItem toggleInfoBlock={toggleInfoBlock}
                                  text='Increase your productivity'
                                  styles={styles} />

                    <InfoMenuItem toggleInfoBlock={toggleInfoBlock}
                                  text='Set up work remotely'
                                  styles={styles} />
                </div>

                <div className={ isInfoBlock ? styles.infoBlock : styles.infoBlockHidden }>
                    <span className='accent-text'>
                        Enhance your internal communication
                    </span>
                    <span className={styles.divider}>
                        ••••••••••••••••••••••••••••••••••••••
                    </span>
                    <span className='regular-text'>
                        Take the time to explain the company values and mission,
                        whether as part of corporate training or as a regular reminder to employees.
                        When employees are unified in their understanding of the company goals,
                        they will be able to communicate with one another more effectively in order to reach them.
                    </span>
                </div>

            </div>
        </div>
    )
};

export default ForWhatBlock;
