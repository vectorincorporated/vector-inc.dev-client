import React from "react";
import { Link } from "gatsby";

import styles from './MenuPopup.module.css';

const links = [
    {
        url: '/home',
        title: 'home'
    },
    {
        url: '/services',
        title: 'services'
    },
    {
        url: '/expertise',
        title: 'expertise'
    },
    {
        url: '/portfolio',
        title: 'portfolio'
    },
    {
        url: '/about-us',
        title: 'about us'
    },
    {
        url: '/blog',
        title: 'blog'
    }
];

const MenuPopup = ({ close }) => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <span className={styles.closeBtn} onClick={close}>X</span>
        </div>

        <div className={styles.links}>
            {
                links.map((link) => {
                    return <Link to={link.url}
                                 key={link.url}
                                 className={styles.link}
                                 activeStyle={{ color: '#d3708e' }}
                                 onClick={close}>
                        { link.title }
                    </Link>
                })
            }
        </div>

    </div>
);

export default MenuPopup;
