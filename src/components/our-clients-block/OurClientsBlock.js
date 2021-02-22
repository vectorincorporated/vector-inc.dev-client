import React, {} from "react";

import ClientCard from "../client-card/ClientCard";
import BlockHeader from "../block-header/BlockHeader";

import styles from './OurClientsBlock.module.css';

const OurClientsBlock = ({clients}) => {

    const header = {
        title: 'Our Clients'
    };

    return (<>
        { clients?.length && <div className={ styles.ourClients }>
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.clientList }>
                {
                    clients.map(client => {
                        return <ClientCard key={client.id} client={client}/>
                    })
                }
            </div>
        </div> }
    </>)
};

export default OurClientsBlock;
