import React from "react"

import styles from './HomeBlock.module.css';

const HomeBlock = () => {
    return (
        <div>
            <div className={ styles.title + ' wrap' }>
                <h1 className='glitch' data-text="WE USE THE BEST TECHNOLOGIES TO ENHANCE YOUR PRODUCT">
                    We use the best technologies <br/>to enhance your product
                </h1>
            </div>

            <button className={styles.btn}>
                Get free consultation
            </button>
        </div>
    )
};

export default HomeBlock
