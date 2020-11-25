import React from "react";

import styles from "./FormBtn.module.css";

const FormBtn = React.forwardRef(({ ...props }, ref ) => {
    return (
        <button className={ props?.options?.isBtnPink ? styles.btnPink : styles.btn }
                ref={ref}>
            send
        </button>
    )
});

export default FormBtn;
