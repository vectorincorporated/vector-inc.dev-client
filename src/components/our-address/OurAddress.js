import React, {} from "react";
import { GoogleMap, Marker } from "react-google-maps"

import styles from './OurAddress.module.css';

const info = {
    title: 'Our Address',
    address: 'UKRAINE, Kharkiv, Centre stree 1\\11, office 533'
};

const OurAddressBlock = () => {
    return (
        <div className={ styles.ourAddress }>
            <div className={ styles.info }>
                <div className={styles.infoTitle}>{ info.title }</div>
                <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>

                <div className={styles.map}>
                    <GoogleMap />
                </div>
            </div>
        </div>
    )
};

export default OurAddressBlock;