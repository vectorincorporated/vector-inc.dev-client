import React, {} from "react";
import classNames from "classnames";

import styles from './QuestionsFormBlock.module.css';
import BlockHeader from "../block-header/BlockHeader";
import FormAnimation from "../form-animation/FormAnimation";
import Form from "../form/Form";

const header = {
    title: 'HAVE SOME QUESTIONS?',
    description: 'We’re ready to give you professional advice and a free cost estimate.'
};

const QuestionsFormBlock = () => {
    return (
        <div className={ styles.questionsWrapper }>
            <div className={styles.questions}>
                <div className={ styles.header }>
                    <BlockHeader header={ header } />
                </div>

                <div className={classNames( 'accent-text', styles.main )}>
                    <div className={styles.form}>
                        <Form />
                    </div>

                    <div className={styles.animation}>
                        <FormAnimation />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default QuestionsFormBlock;
