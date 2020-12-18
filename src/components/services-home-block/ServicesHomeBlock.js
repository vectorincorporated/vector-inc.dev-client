import React, {useState} from "react";
import classNames from "classnames";

import styles from './ServicesHomeBlock.module.css';
import InfoMenuItem from "../info-menu-item/InfoMenuItem";
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import CircleAnimation from "../circle-animation/CircleAnimation";
import AnimatedLine from "../animated-line/AnimatedLine";

const defaultText = `
        You want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? 
        Turn to Vector UI/UX services. Our design team will transform your idea from Concept to Final Product.
        Vector design key concepts are flexibility and customer corporate focusing. Here are our design phases...
    `;

const items = [
    {
        id: 1,
        title: 'Design',
        text: defaultText
    },
    {
        id: 2,
        title: 'Development',
        text: defaultText
    },
    {
        id: 3,
        title: 'DevOps',
        text: defaultText
    },
    {
        id: 4,
        title: 'Automatization',
        text: defaultText
    },
    {
        id: 5,
        title: 'Integration',
        text: defaultText
    },
    {
        id: 6,
        title: 'Consultation',
        text: defaultText
    },
    {
        id: 7,
        title: 'Support (Maintain)',
        text: defaultText
    },
    {
        id: 8,
        title: 'Mobile applications',
        text: defaultText
    }
];

const header = {
    title: 'Services',
    description: 'Here are the details of our services'
};


const ServicesHomeBlock = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={styles.services}>
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            <div className={styles.content}>

                <div className={ styles.info }>
                    <div className={classNames( 'accent-text', styles.infoMenu )}>
                        {
                            items.map((item) => {
                                return <InfoMenuItem key={item.id}
                                                     toggleInfoBlock={toggleInfoBlock}
                                                     item={item}
                                                     activeItem={activeItem}
                                                     options={{ mode: 'left' }}
                                />
                            })
                        }
                    </div>

                    <div className={styles.animatedLine}>
                        {
                            items.map((item) => {
                                return <AnimatedLine key={item.id}
                                                     toggleInfoBlock={toggleInfoBlock}
                                                     activeItem={activeItem}
                                                     mode={'left'}
                                                     item={item} />
                            })
                        }
                    </div>

                    { activeItem &&
                        <div className={styles.infoBlockWrapper}>
                            <InfoBlock activeItem={ activeItem }
                                       options={{ readMore: true }} />
                        </div>
                    }

                </div>
                <div className={classNames(styles.circleWrapper, activeItem ? styles.circleWrapperShifted : '')}>
                    <CircleAnimation />
                </div>
            </div>
        </div>
    )
};

export default ServicesHomeBlock;
