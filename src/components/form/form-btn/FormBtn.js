import React from "react";

import styles from "./FormBtn.module.css";
import ThanksPopup from "../../thanks-popup/ThanksPopup";
import Popup from "reactjs-popup";

const FormBtn = ({ options }) => {
    return (
        <Popup trigger={
            <button className={options?.isBtnPink ? styles.btnPink : styles.btn}>send</button>
        } modal>
            { close => <ThanksPopup close={close}/> }
        </Popup>
    )
}

export default FormBtn;