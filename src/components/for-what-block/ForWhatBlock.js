import React, {useState} from "react"

import styles from './ForWhatBlock.module.css';
import InfoMenuItem from "../info-menu-item/InfoMenuItem";

const classNames = require('classnames');

const items = [
    {
        id: 1,
        title: 'Enhance your internal communication',
        text: '\n' +
            'Take the time to explain the company values and mission,\n' +
            'whether as part of corporate training or as a regular reminder to employees.\n' +
            'When employees are unified in their understanding of the company goals,\n' +
            'they will be able to communicate with one another more effectively in order to reach them.'
    },
    {
        id: 2,
        title: 'Boost your marketing effort',
        text: '\n' +
            'Take the time to explain the company values and mission,\n' +
            'whether as part of corporate training or as a regular reminder to employees.\n' +
            'When employees are unified in their understanding of the company goals,\n' +
            'they will be able to communicate with one another more effectively in order to reach them.'
    },
    {
        id: 3,
        title: 'Automate your Business processes',
        text: '\n' +
            'Take the time to explain the company values and mission,\n' +
            'whether as part of corporate training or as a regular reminder to employees.\n' +
            'When employees are unified in their understanding of the company goals,\n' +
            'they will be able to communicate with one another more effectively in order to reach them.'
    },
    {
        id: 4,
        title: 'Increase your productivity',
        text: '\n' +
            'Take the time to explain the company values and mission,\n' +
            'whether as part of corporate training or as a regular reminder to employees.\n' +
            'When employees are unified in their understanding of the company goals,\n' +
            'they will be able to communicate with one another more effectively in order to reach them.'
    },
    {
        id: 5,
        title: 'Set up work remotely',
        text: '\n' +
            'Take the time to explain the company values and mission,\n' +
            'whether as part of corporate training or as a regular reminder to employees.\n' +
            'When employees are unified in their understanding of the company goals,\n' +
            'they will be able to communicate with one another more effectively in order to reach them.'
    }
];


const ForWhatBlock = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={ styles.forWhat }>
            <div className={styles.header}>
                <h2 className={ styles.title }>
                    For what
                </h2>
                <span className='accent-text'>
                    we use the best technologies to enhance your product
                </span>
            </div>

            <div className={ styles.info }>
                <div className={classNames( 'accent-text', styles.infoMenu )}>
                    {
                        items.map((item) => {
                            return <InfoMenuItem key={item.id}
                                                 toggleInfoBlock={toggleInfoBlock}
                                                 item={item} />
                        })
                    }

                </div>

                <div className={ activeItem ? styles.infoBlock : styles.infoBlockHidden }>
                    <span className='accent-text'>
                        { activeItem?.title }
                    </span>
                    <span className={ styles.divider }>
                        ••••••••••••••••••••••••••••••••••••••
                    </span>
                    <span className='regular-text'>
                        { activeItem?.text }
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ForWhatBlock;
