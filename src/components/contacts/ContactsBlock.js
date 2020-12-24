import React, {} from "react";

import styles from './ContactsBlock.module.css';
import Socials from "../socials/Socials";
import Contacts from "./contacts/Contacts";


const ContactsBlock = ({data}) => {
    return (
        <div className={ styles.contacts }>
            <div>
                <Contacts contacts={data?.ourContactsBlock}/>
            </div>

            <div>
                <Socials socials={data?.weInSocialBlock} />
            </div>
        </div>
    )
};

export default ContactsBlock;