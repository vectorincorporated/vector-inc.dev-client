import React from "react";

import styles from './ContactFormPopup.module.css';
import Form from "../../components/form/Form";
import BlockHeader from "../../components/block-header/BlockHeader";

const ContactFormPopup = ({ close, headerOptions, formOptions }) => {
    const formProps = formOptions || {
        isBtnPink: true,
        isPhone: true,
        placeholders: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    };

    const header = headerOptions || {
        title: 'LEAVE YOUR CONTACTS',
        description: 'WE WILL CONTACT WITH YOU AS SOON AS POSIBLE'
    };

    return <div className={styles.wrapper}>
        <div className={styles.closeBtnWrapper}>
            <span className={styles.closeBtn} onClick={close}>X</span>
        </div>

        <div className={styles.content}>
            <div className={styles.header}>
                <BlockHeader header={header} centralized={true} />
            </div>

            <div className={styles.form}>
                <Form options={formProps} close={close}/>
            </div>
        </div>
    </div>
};

export default ContactFormPopup;
