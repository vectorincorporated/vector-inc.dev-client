import React, {useState} from "react";

import styles from "./ExpertiseBlock.module.css";
import BlockHeader from "../block-header/BlockHeader";
import classNames from "classnames";
import InfoMenuItem from "../info-menu-item/InfoMenuItem";
import CircleAnimation from "../circle-animation/CircleAnimation";
import ExpertiseItem from "./expertise-item/ExpertiseItem";

const items = [
    {
        id: 1,
        title: 'Enterprise solutions',
        items: [
            'XML, XHTML, HTML5, CSS2/3',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Liferay;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    },
    {
        id: 2,
        title: 'Full Stack Web Apps',
        items: [
            'XML, XHTML, HTML5, CSS2/3',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Liferay;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    },
    {
        id: 3,
        title: 'Cloud Storage',
        items: [
            'XML, XHTML, HTML5, CSS2/3',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Liferay;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    },
    {
        id: 4,
        title: 'DevOps',
        items: [
            'XML, XHTML, HTML5, CSS2/3',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Liferay;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    },
    {
        id: 5,
        title: 'UI/UX Design',
        items: [
            'XML, XHTML, HTML5, CSS2/3',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Liferay;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    }
];

const header = {
    title: 'Expertise',
    description: 'Technologies We Use'
};

const ExpertiseBlock = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={ styles.expertise }>
            <div className={ styles.header }>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.info }>
                <div className={classNames( 'accent-text', styles.infoMenu )}>
                    {
                        items.map((item) => {
                            return <InfoMenuItem key={item.id}
                                                 toggleInfoBlock={toggleInfoBlock}
                                                 activeItem={activeItem}
                                                 item={item}/>
                        })
                    }

                </div>

                { activeItem &&
                    <ExpertiseItem activeItem={ activeItem }/>
                }

                <div className={styles.circleWrapper}>
                    <CircleAnimation />
                </div>
            </div>
        </div>
    )
};

export default ExpertiseBlock;