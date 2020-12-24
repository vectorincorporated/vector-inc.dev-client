import React, {} from "react";

import styles from './Contact.module.css';

const Contact = ({ contact }) => {
    const type = contact?.type;
    let prefix = '';

    switch (type) {
        case 'phone':
            prefix = 'tel:';
            break;
        case 'mail':
            prefix = 'mailto:';
            break;
        case 'skype':
            prefix = 'skype:';
            break;
        default:
            break;
    }

    return (
        <div className={ styles.contact }>
            <img src={ contact?.icon?.url } className={ styles.icon } alt={ contact?.label }/>
            <div className={ styles.divider }> .... </div>
            <a href={ prefix + contact?.link } className={ styles.link }>{ contact?.value }</a>
        </div>
    )
};

export default Contact;