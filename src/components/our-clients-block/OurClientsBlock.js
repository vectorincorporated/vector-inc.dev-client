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
import ClientCard from "../client-card/ClientCard";
import BlockHeader from "../block-header/BlockHeader";

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

    const header = {
        title: 'Our Clients'
    };

    return (
        <div className={ styles.ourClients }>
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.clientList }>
                {
                    clientList.map(client => {
                        return <ClientCard key={client.id} client={client}/>
                    })
                }
            </div>
        </div>
    )
};

export default OurClientsBlock;
