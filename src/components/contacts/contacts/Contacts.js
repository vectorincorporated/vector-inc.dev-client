import React, {} from "react";
import classNames from 'classnames';

import styles from './Contacts.module.css';
import Contact from "../contact/Contact";

const Contacts = ({contacts}) => {
    return (
        <div className={ styles.contacts }>
            <div className={classNames('accent-text', styles.title)}>
                OUR CONTACTS
            </div>

            <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>

            {
                contacts?.contacts?.map((contact) => {
                    return <div className={styles.contactItem} key={contact.id}>
                        <Contact contact={contact}/>
                    </div>
                })
            }
        </div>
    )
};

export default Contacts;