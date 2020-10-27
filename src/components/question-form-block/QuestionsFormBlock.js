import React, {} from "react";
import classNames from "classnames";

import styles from './QuestionsFormBlock.module.css';

const QuestionsFormBlock = () => {
    return (
        <div className={ styles.questions }>
            <div className={classNames( 'accent-text', styles.main )}>
                <div className={ styles.header }>
                    <h2 className={ styles.title }>
                        HAVE SOME QUESTIONS?
                    </h2>

                    <span className='accent-text'>
                        We’re ready to give you professional advice <br/> and a free cost estimate.
                    </span>
                </div>

                <div className={styles.form}>
                    <input className={styles.formField}
                           type='text'
                           placeholder='YOUR NAME *' />

                    <input className={styles.formField}
                           type='text'
                           placeholder='YOUR E-MAIL *' />

                    <textarea className={styles.formField}
                              placeholder='LEAVE YOUR MESSAGE HERE... (optional)'/>

                    <button className={styles.btn}>send</button>
                </div>

            </div>

            <div className={styles.animation}>

            </div>
        </div>
    )
};

export default QuestionsFormBlock;
