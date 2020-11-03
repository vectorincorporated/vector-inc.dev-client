import React from "react";

import styles from "./From.module.css";
import FormBtn from "./form-btn/FormBtn";

const Form = ({ options }) => {
    return (
        <div className={styles.form}>
            <input className={styles.formField}
                   type='text'
                   placeholder='YOUR NAME *' />

            {
                options?.isPhone && <input className={styles.formField}
                                  type='text'
                                  placeholder='YOUR PHONE (Optional) *' />
            }

            <input className={styles.formField}
                   type='text'
                   placeholder='YOUR E-MAIL *' />

            <textarea className={styles.formField}
                      placeholder='LEAVE YOUR MESSAGE HERE... (optional)'/>

            <FormBtn options={options} />
        </div>
    )
}

export default Form;