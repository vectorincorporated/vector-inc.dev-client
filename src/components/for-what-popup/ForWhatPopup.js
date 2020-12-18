import React from "react";
import classNames from "classnames";

import styles from './ForWhatPopup.module.css';
import CircleAnimation from "../circle-animation/CircleAnimation";
import InfoBlock from "../info-block/InfoBlock";
import HeaderMobile from "../header/HeaderMobile";

const ForWhatPopup = ({ close, activeItem }) => {
    return (
        <div className={classNames(styles.wrapper, 'falling-lines')}>
            <div>
                <HeaderMobile />
            </div>

            <div className={styles.popupContent}>
                <div className={styles.infoBlockWrapper}>
                    <InfoBlock activeItem={ activeItem }
                               options={{ isDivider: true, isTitle: true }}/>
                </div>

                <div className={classNames(styles.circleWrapper)}>
                    <CircleAnimation />
                </div>

                <div className={styles.closeBtnWrapper}>
                    <span className={styles.closeBtn} onClick={close}>{'<<<BACK'}</span>
                </div>
            </div>
        </div>
    )
};

export default ForWhatPopup;
