import React from "react";
import classNames from 'classnames';

import styles from './MemberTeam.module.css';

const MemberTeam = ({ member }) => {
    return (
        <div className={styles.member}>
            <img src={member.photo} className={styles.memberPhoto} alt=""/>
            <span className={classNames('accent-text', styles.name)}>{ member.name }</span>
            <span className={classNames('accent-text', styles.position)}>{ member.position }</span>
        </div>
    )
};

export default MemberTeam;