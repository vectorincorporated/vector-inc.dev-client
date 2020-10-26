import React, {useState} from "react"

import styles from './ForWhatBlock.module.css';

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
                    <div className={styles.infoItem} onMouseOver={() => toggleInfoBlock(true)} onMouseLeave={() => toggleInfoBlock(false)}>
                        <span>Enhance your internal communication</span>
                        <div className={styles.line}>
                        </div>
                    </div>

                    <div className={styles.infoItem} onMouseOver={() => toggleInfoBlock(true)} onMouseLeave={() => toggleInfoBlock(false)}>
                        <span>Boost your marketing effort</span>
                        <div className={styles.line}>
                        </div>
                    </div>

                    <div className={styles.infoItem} onMouseOver={() => toggleInfoBlock(true)} onMouseLeave={() => toggleInfoBlock(false)}>
                        <span>Automate your Business processes</span>
                        <div className={styles.line}>
                        </div>
                    </div>

                    <div className={styles.infoItem} onMouseOver={() => toggleInfoBlock(true)} onMouseLeave={() => toggleInfoBlock(false)}>
                        <span>Increase your productivity</span>
                        <div className={styles.line}>
                        </div>
                    </div>

                    <div className={styles.infoItem} onMouseOver={() => toggleInfoBlock(true)} onMouseLeave={() => toggleInfoBlock(false)}>
                        <span>Set up work remotely</span>
                        <div className={styles.line}>
                        </div>
                    </div>
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
