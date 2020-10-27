import React, {} from "react";

import styles from './OurClientsBlock.module.css';
import amd from '../../images/our-clients/amd.svg';
import aset from '../../images/our-clients/aset.svg';
import acer from '../../images/our-clients/acer.svg';
import hulu from '../../images/our-clients/hulu.svg';
import cbs from '../../images/our-clients/cbs.svg';
import ps from '../../images/our-clients/ps.svg';
import ea from '../../images/our-clients/ea.svg';
import dropbox from '../../images/our-clients/Dropbox_logo.svg';
import billboard from '../../images/our-clients/billboard.svg';

const OurClientsBlock = () => {
    const clientList = [
        {
            id: 0,
            img: amd
        }, {
            id: 1,
            img: ea
        }, {
            id: 2,
            img: ps
        }, {
            id: 3,
            img: billboard
        }, {
            id: 4,
            img: aset
        }, {
            id: 5,
            img: cbs
        }, {
            id: 6,
            img: hulu
        }, {
            id: 7,
            img: acer
        }, {
            id: 8,
            img: dropbox
        }
    ];

    return (
        <div className={ styles.ourClients }>
            <div className={styles.header}>
                <h2 className={ styles.title }>
                    Our Clients
                </h2>
            </div>

            <div className={ styles.clientList }>
                {
                    clientList.map(client => {
                        return <div className={ styles.client } key={ client.id }>
                            <img src={ client.img } alt=''/>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default OurClientsBlock;
