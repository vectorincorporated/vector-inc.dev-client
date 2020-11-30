import React, {} from "react";

import styles from './OurClientsBlock.module.css';
import dropbox from '../../images/our-clients/dropbox.png';
import ibm from '../../images/our-clients/IBM.png';
import google from '../../images/our-clients/google.png';
import ClientCard from "../client-card/ClientCard";
import BlockHeader from "../block-header/BlockHeader";
import classNames from "classnames";

const OurClientsBlock = () => {
    const clientList = [
        {
            id: 0,
            img: ibm
        }, {
            id: 1,
            img: google
        }, {
            id: 2,
            img: dropbox
        }, {
            id: 3,
            img: dropbox
        }, {
            id: 4,
            img: ibm
        }, {
            id: 5,
            img: google
        }, {
            id: 6,
            img: ibm
        }, {
            id: 7,
            img: google
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
