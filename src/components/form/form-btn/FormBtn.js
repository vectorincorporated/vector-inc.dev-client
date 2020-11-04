import React from "react";

import styles from "./FormBtn.module.css";

const FormBtn = ({ options }) => {
    return (
        <button className={options?.isBtnPink ? styles.btnPink : styles.btn}>send</button>
    )
}

export default FormBtn;