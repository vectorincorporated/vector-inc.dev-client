import React from "react";
import classNames from 'classnames';

import styles from './MemberTeam.module.css';

const MemberTeam = ({ member }) => {
    return (
        <div className={styles.member}>

            <div className={styles?.memberPhoto}>
                <img src={member.photo.url} alt="" className='js-vhs-filter'/>
            </div>

            <span className={classNames('accent-text', styles.name)}>{ member?.name }</span>
            <span className={classNames('accent-text', styles.position)}>{ member?.teamMemberRole?.title }</span>

        </div>
    )
};

export default MemberTeam;
