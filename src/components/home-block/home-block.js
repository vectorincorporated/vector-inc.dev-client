import React from "react"

import SEO from "../seo";
import styles from './home-block.module.css';

const HomeBlock = () => {
    return (
        <>
            <SEO title="Home" />

            <div className={styles.title + ' wrap'}>
                <h1 className={styles.glitch} data-text="WE USE THE BEST TECHNOLOGIES TO ENHANCE YOUR PRODUCT">
                    We use the best technologies <br/>to enhance your product
                </h1>
            </div>

            <button
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: `0 auto`,
                    width: '608px',
                    padding: `0 112px`,
                    marginTop: '100px'
                }}>
                Get free consultation
            </button>
        </>
    )
};

export default HomeBlock
