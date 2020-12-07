import React, {useState} from "react";

import styles from "./ExpertiseBlock.module.css";
import BlockHeader from "../block-header/BlockHeader";
import classNames from "classnames";
import InfoMenuItem from "../info-menu-item/InfoMenuItem";
import DottedItemList from "../dotted-item-list/DottedItemList";
import SphereAnimation from "../sphere-animation/SphereAnimation";

const items = [
    {
        id: 1,
        title: 'Enterprise solutions',
        items: [
            'XML1, XHTML, CSS2/3',
            'Bootstrap2, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'AngularJS2, React JS, Backbone JS, Vue Js.'
        ]
    },
    {
        id: 2,
        title: 'Full Stack Web Apps',
        items: [
            'XML3, XHTML, HTML5, CSS2/3',
            'Bootstrap3, HTML5 Boilerplate, Uikit;',
            'JavaScript, NodeJs;',
            'AJAX, REST3, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js. '
        ]
    },
    {
        id: 3,
        title: 'Cloud Storage',
        items: [
            'ХML, XHTML, HTML5, CSS2/3',
            'Bootstrap, HTML5, Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs; ',
            'Lifeгаy;',
            'Velocty, Sass/Scss, Less;',
            'AJAX, REST0, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone- JS, Vue Js.'
        ]
    },
    {
        id: 4,
        title: 'DevOps',
        items: [
            'XML, XHTML, HTML5, CSS2/3',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    },
    {
        id: 5,
        title: 'UI/UX Design',
        items: [
            'XML, XHTML, HTML5, CSS2/1',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS , Vue Js.'
        ]
    }
];

const header = {
    title: 'Expertise',
    description: 'Technologies We Use'
};

const ExpertiseBlock = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemIndex, setActiveItemIndex] = useState(null);
    const [smallerSphere, setSmallerSphere] = useState(false);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
        setActiveItemIndex(items.indexOf(item));
        setSmallerSphere(true);
    };

    return (
        <div className={ styles.expertise }>
            <div className={ styles.header }>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.info }>
                <div className={classNames( 'accent-text', styles.infoMenu )}>
                    {
                        items.map((item, i) => {
                            return <InfoMenuItem key={i}
                                                 toggleInfoBlock={toggleInfoBlock}
                                                 activeItem={activeItem}
                                                 item={item}/>
                        })
                    }
                </div>

                { activeItem &&
                    <div className={styles.subItems}>
                        <DottedItemList dottedItems={ activeItem.items } activeItemIndex={activeItemIndex}/>
                    </div>
                }

                <div className={styles.animationWrapper}>
                    <SphereAnimation color='pink' smallerSphere={smallerSphere}/>
                </div>
            </div>
        </div>
    )
};

export default ExpertiseBlock;