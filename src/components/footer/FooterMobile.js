import React from "react";
import classNames from 'classnames';

import mail from '../../images/icons/contacts/mail.svg';
import phone from '../../images/icons/contacts/phone.svg';
import skype from '../../images/icons/contacts/skype.svg';
import styles from './FooterMobile.module.css';

const FooterMobile = () => (
    <footer>
        <div className={styles.wrapper}>
            <div className={styles.contacts}>
                <div className={styles.contactWrapper}>
                    <img src={mail} alt="mail" />
                    <a className='link' href='mailto:info@vector-inc.dev'>info@vector-inc.dev</a>
                </div>
                <div className={styles.contactWrapper}>
                    <img src={phone} alt="phone"/>
                    <a href={'tel:+123456789101112'} className={ styles.link }>+123456789101112</a>
                </div>
                <div className={styles.contactWrapper}>
                    <img src={skype} alt="skype"/>
                    <a href={ 'skype:live:vector_skype' } className={ styles.link }>live:vector_skype</a>
                </div>
            </div>

            <span className={styles.divider}>........................</span>

            <div className={styles.socialsWrapper}>
                <span>follow us</span>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/company/llc-vector-incorporated"
                       className={classNames(styles.linkedin, styles.icon)} />
                    <a href="https://www.facebook.com/VectorIncorporated"
                       className={classNames(styles.facebook, styles.icon)} />
                </div>
            </div>
        </div>
    </footer>
);

export default FooterMobile
