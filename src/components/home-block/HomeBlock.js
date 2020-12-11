import React from "react";
import classNames from 'classnames';

import styles from './HomeBlock.module.css';
import ContactFormPopup from "../../ui/contact-form-popup/ContactFormPopup";
import Popup from "reactjs-popup";

const formOptions = {
    isBtnPink: true,
    isPhone: true,
    placeholders: {
        message: 'One place to get all your questions answered *'
    }
};

const popupHeaderOptions = {
    title: 'Get Your Free Consultation Now',
    description: 'WE WILL CONTACT WITH YOU AS SOON AS POSIBLE'
};

const HomeBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.title, 'wrap')}>
                <h1 className='glitch no-select' data-text="WE USE THE BEST TECHNOLOGIES TO ENHANCE YOUR PRODUCT">
                    We use the best technologies <br/>to enhance your product
                </h1>
            </div>

            <Popup trigger={ <button className={classNames(styles.btn, 'no-select')}>Get free consultation</button> } modal>
                { close => <ContactFormPopup close={close} formOptions={formOptions} headerOptions={popupHeaderOptions} /> }
            </Popup>
        </div>
    )
};

export default HomeBlock
