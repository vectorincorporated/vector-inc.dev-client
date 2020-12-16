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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200865.1011896626!2d36.10996751608121!3d50.01068035587639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0d951941c2b%3A0x55c4af3fbdd4d5b8!2z0YPQuy4g0JzQuNGA0L7QvdC-0YHQuNGG0LrQsNGPLCA2NCwg0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1sru!2sua!4v1607964293386!5m2!1sru!2sua"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        aria-hidden="false" />
            </div>
        </div>
    )
};

export default OurAddressBlock;
