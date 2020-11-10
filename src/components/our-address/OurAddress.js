import React, {} from "react";
import classNames from 'classnames';

import styles from './OurAddress.module.css';

const info = {
    title: 'Our Address',
    address: 'UKRAINE, Kharkiv, Centre stree 1\\11, office 533'
};

const OurAddressBlock = () => {
    return (
        <div>
            <div className={classNames('accent-text', styles.infoTitle)}>{ info.title }</div>
            <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>
            <div className='regular-text'>{ info.address }</div>

            <div className={styles.mapWrapper}>
                {/* TODO: Replace with custom component <Map/> */}
                <iframe className={styles.map}
                        title="myFrame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199061.3263316799!2d36.12019276463144!3d49.9930992051981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1604932839884!5m2!1suk!2sua"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        aria-hidden="false" />
            </div>
        </div>
    )
};

export default OurAddressBlock;