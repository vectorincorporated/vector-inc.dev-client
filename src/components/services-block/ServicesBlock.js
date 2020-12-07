import React, {useState} from "react";
import classNames from "classnames";

import styles from './ServicesBlock.module.css';
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import ServiceItem from "../service-item/ServiceItem";
import DottedItemList from "../dotted-item-list/DottedItemList";
import Tags from "../tags/Tags";

const defaultText = `
        You want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? 
        Turn to Vector UI/UX services. Our design team will transform your idea from Concept to Final Product.
        Vector design key concepts are flexibility and customer corporate focusing. Here are our design phases...
    `;

const technologies = {
    title: 'Used technologies',
    items: [
        'Possibility to create a new user;',
        'Possibility to edit a user’s profile;',
        'Possibility to create and delete Kafka clusters in a cloud;',
        'Possibility to maintain Kafka clusters in a cloud;',
        'Possibility to configure the cluster’s version, cloud configuration;',
        'Possibility to access brokers using Kafka PLAIN endpoints;',
        'Possibility to maintain Kafka topics.',
    ]
};

const tags = ['ux', 'design', 'web', 'codding'];

const items = [
    {
        id: 1,
        title: 'Design',
        text: defaultText,
        technologies: technologies,
        tags: tags,
    },
    {
        id: 2,
        title: 'Development',
        text: defaultText,
        technologies: technologies,
        tags: tags
    },
    {
        id: 3,
        title: 'DevOps',
        text: defaultText,
        technologies: technologies,
        tags: tags
    },
    {
        id: 4,
        title: 'Automatization',
        text: defaultText,
        technologies: technologies,
        tags: tags
    },
    {
        id: 5,
        title: 'Integration',
        text: defaultText,
        technologies: technologies,
        tags: tags
    },
    {
        id: 6,
        title: 'Consultation',
        text: defaultText,
        technologies: technologies,
        tags: tags
    },
    {
        id: 7,
        title: 'Support (Maintain)',
        text: defaultText,
        technologies: technologies,
        tags: tags
    },
    {
        id: 8,
        title: 'Mobile applications',
        text: defaultText,
        technologies: technologies,
        tags: tags
    }
];

const header = {
    title: 'Services',
    description: 'Here are the details of our services'
};


const ServicesBlock = ({ location }) => {
    const [activeItem, setActiveItem] = useState(
        location?.state?.activeItem ? location?.state?.activeItem : items[0]
    );

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={ styles.services }>
            <div className={ styles.info }>
                <div className={styles.header}>
                    <BlockHeader header={ header } />
                </div>

                <div className={classNames( 'accent-text', styles.infoMenu )}>
                    {
                        items.map((item) => {
                            return <ServiceItem key={item.id}
                                                toggleInfoBlock={toggleInfoBlock}
                                                item={item}
                                                activeItem={activeItem} />
                        })
                    }

                </div>
            </div>

            { activeItem &&
                <div className={styles.infoBlockWrapper}>
                    <div>
                        <InfoBlock activeItem={ activeItem }
                                   options={{ isDivider: true, isTitle: true }} />
                    </div>

                    <div className={styles.dottedList}>
                        <DottedItemList dottedItems={ activeItem.technologies.items }
                                        title={ activeItem.technologies.title }/>
                    </div>

                    <div className={styles.tags}>
                        <Tags tags={activeItem.tags}/>
                    </div>
                </div>
            }
        </div>
    )
};

export default ServicesBlock;
