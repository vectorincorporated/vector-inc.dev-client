import React from "react";

import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ msg }) => {
    return (
        <span className={ styles.msg } >
            { msg }
        </span>
    )
};

export default ErrorMsg;
