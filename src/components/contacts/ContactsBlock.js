import React, {} from "react";
import classNames from 'classnames';

import styles from './ContactsBlock.module.css';
import mail from '../../images/icons/contacts/mail.svg';
import phone from '../../images/icons/contacts/phone.svg';
import skype from '../../images/icons/contacts/skype.svg';
import Contact from "./contact/Contact";

const contacts = {
    main: {
        title: 'Our Contacts',
        items: [
            {
                id: 11,
                icon: mail,
                label: 'VECTOR@GMAIL.com',
                link: 'VECTOR@GMAIL.com',
                type: 'mail'
            },
            {
                id: 12,
                icon: phone,
                label: '+123456789101112',
                link: '+123456789101112',
                type: 'phone'
            },
            {
                id: 13,
                icon: skype,
                label: 'live:vector_skype',
                link: 'live:vector_skype',
                type: 'skype'
            }]
    },
    socials: {
        title: 'WE IN SOCIAL'
    }
};

const ContactsBlock = () => {
    return (
        <div className={ styles.contacts }>

            <div>
                <div className={classNames('accent-text', styles.title)}>{ contacts?.main?.title }</div>
                <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>

                    {
                        contacts?.main?.items?.map((contact) => {
                            return <div className={styles.contactItem} key={contact.id}>
                                <Contact contact={contact}/>
                            </div>
                        })
                    }

            </div>

            <div>
                <div className={classNames('accent-text', styles.title)}>{ contacts?.socials?.title }</div>
                <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>

                <div className={styles.socialItems}>
                    <a href="https://www.linkedin.com/company/llc-vector-incorporated"
                       className={classNames(styles.linkedin, styles.icon)} />
                    <a href="https://www.facebook.com/VectorIncorporated"
                       className={classNames(styles.facebook, styles.icon)} />
                </div>

            </div>

        </div>
    )
};

export default ContactsBlock;