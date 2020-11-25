import React from "react";

import styles from './ContactFormPopup.module.css';
import Form from "../form/Form";
import BlockHeader from "../block-header/BlockHeader";

const header = {
    title: 'LEAVE YOUR CONTACTS',
    description: 'WE WILL CONTACT WITH YOU AS SOON AS POSIBLE'
};

const formOptions = {
    isBtnPink: true,
    isPhone: true
};

const ContactFormPopup = ({ close }) => (
    <div className={styles.wrapper}>
        <div className={styles.closeBtnWrapper}>
            <span className={styles.closeBtn} onClick={close}>X</span>
        </div>

        <div className={styles.content}>
            <div className={ styles.header }>
                <BlockHeader header={ header } />
            </div>

            <div className={styles.form}>
                <Form options={formOptions} />
            </div>
        </div>
    </div>
);

export default ContactFormPopup;
