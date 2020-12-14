import React from "react";
import classNames from 'classnames';

import styles from './MemberTeam.module.css';
import VhsImage from "../../../ui/vhs-image/VhsImage";

const MemberTeam = ({ member }) => {
    return (
        <div className={styles.member}>

            <div className={styles.memberPhoto}>
                <VhsImage image={member.photo}/>
            </div>

            <span className={classNames('accent-text', styles.name)}>{ member.name }</span>
            <span className={classNames('accent-text', styles.position)}>{ member.position }</span>

        </div>
    )
};

export default MemberTeam;