import React, {useState} from "react";
import classNames from "classnames";

import styles from './ForWhatBlock.module.css';
import InfoMenuItem from "../info-menu-item/InfoMenuItem";
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import CircleAnimation from "../circle-animation/CircleAnimation";
import InfoMenuItemMobile from "../info-menu-item/InfoMenuItemMobile";
import ThanksPopup from "../thanks-popup/ThanksPopup";
import Popup from "reactjs-popup";
import ForWhatPopup from "../for-what-popup/ForWhatPopup";

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

const header = {
    title: 'For what',
    description: 'we use the best technologies to enhance your product'
};

const ForWhatBlock = ({ windowWidth }) => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
        if (windowWidth <= 992) setOpenPopup(true);
    };

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className={
            classNames(
                styles.forWhat,
                windowWidth <= 992 ? styles.forWhatMobile : ''
            )
        }>
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.content }>
                <div className={ styles.info }>
                    <div className={classNames( 'accent-text', styles.infoMenu )}>
                        {
                            items.map((item) => {
                                return windowWidth > 992 ?
                                    <InfoMenuItem key={item.id}
                                                  toggleInfoBlock={toggleInfoBlock}
                                                  activeItem={activeItem}
                                                  item={item} />
                                                  :
                                    <InfoMenuItemMobile key={item.id}
                                                        toggleInfoBlock={toggleInfoBlock}
                                                        activeItem={activeItem}
                                                        item={item} />
                            })
                        }

                    </div>

                    { activeItem &&
                        <div className={styles.infoBlockWrapper}>
                            <InfoBlock activeItem={ activeItem }
                                       options={{ isDivider: true, isTitle: true }}/>
                        </div>
                    }
                </div>

                <div className={classNames(styles.circleWrapper, activeItem ? styles.circleWrapperShifted : '')}>
                    <CircleAnimation />
                </div>
            </div>

            <Popup open={openPopup} onClose={() => setOpenPopup(false)} modal>
                { close => <ForWhatPopup close={close} activeItem={activeItem} /> }
            </Popup>
        </div>
    )
};

export default ForWhatBlock;
