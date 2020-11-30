import React from "react";
import classNames from 'classnames';

import styles from './HomeBlock.module.css';
import ContactFormPopup from "../contact-form-popup/ContactFormPopup";
import Popup from "reactjs-popup";

const HomeBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.title, 'wrap')}>
                <h1 className='glitch no-select' data-text="WE USE THE BEST TECHNOLOGIES TO ENHANCE YOUR PRODUCT">
                    We use the best technologies <br/>to enhance your product
                </h1>
            </div>

            <Popup trigger={ <button className={classNames(styles.btn, 'no-select')}>Get free consultation</button> } modal>
                { close => <ContactFormPopup close={close}/> }
            </Popup>
        </div>
    )
};

export default HomeBlock
