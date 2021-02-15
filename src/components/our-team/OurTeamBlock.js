import React, {} from "react";

import styles from './OurTeamBlock.module.css';
import MemberTeam from "./member-team/MemberTeam";

const info = {
    title: 'Our Team'
};


const OurTeamBlock = ({ data, filterRolesById }) => {
    return (
        <div className={ styles.ourTeam }>
            <div className={ styles.info }>
                <div className={styles.infoTitle}>{ info.title }</div>
                <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>
                <div className={styles.members}>
                    <div className={styles.line} />
                    <div className={styles.dots}>
                        {
                            data?.team_members?.map((member) => {
                                return <div className={styles.dot} key={member.id} />
                            })
                        }
                    </div>

                    {
                        data?.team_members?.map((member) => {
                            return <MemberTeam filterRolesById={filterRolesById} member={member} key={member.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default OurTeamBlock;