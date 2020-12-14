import React, {} from "react";
import classNames from 'classnames';

import styles from './ContactsBlock.module.css';
import facebook from '../../images/icons/contacts/facebook.svg';
import instagram from '../../images/icons/contacts/instagram.svg';
import linkedin from '../../images/icons/contacts/linkedin.svg';
import mail from '../../images/icons/contacts/mail.svg';
import phone from '../../images/icons/contacts/phone.svg';
import skype from '../../images/icons/contacts/skype.svg';
import Contact from "./contact/Contact";
import Social from "./social/Social";

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
        title: 'WE IN SOCIAL',
        items: [
            {
                id: 14,
                icon: facebook,
                label: 'Facebook',
                link: 'google.com'
            },
            {
                id: 15,
                icon: instagram,
                label: 'Instagram',
                link: 'google.com'
            },
            {
                id: 16,
                icon: linkedin,
                label: 'Linked-in',
                link: 'google.com'
            }
        ]
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
                    {
                        contacts?.socials?.items?.map((social) => {
                            return <div className={styles.social} key={social.id}>
                                <Social social={social}/>
                            </div>
                        })
                    }
                </div>

            </div>

        </div>
    )
};

export default ContactsBlock;