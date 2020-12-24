import React, {} from "react";

import styles from './OurTeamBlock.module.css';
import img1 from '../../images/our-team/future.png';
import img2 from '../../images/our-team/kurt.png';
import img3 from '../../images/our-team/star-wars.png';
import img4 from '../../images/our-team/robocop.png';
import MemberTeam from "./member-team/MemberTeam";

const info = {
    title: 'Our Team'
};

const ourTeam = [
    {
        id: 10,
        name: 'OLEG OLEGOVICH',
        position: 'BACKEND DEVELOPER',
        photo: img1
    },
    {
        id: 11,
        name: 'OLEG OLEGOVICH',
        position: 'BACKEND DEVELOPER',
        photo: img2
    },
    {
        id: 12,
        name: 'OLEG OLEGOVICH',
        position: 'BACKEND DEVELOPER',
        photo: img3
    },
    {
        id: 13,
        name: 'OLEG OLEGOVICH',
        position: 'BACKEND DEVELOPER',
        photo: img4
    },
];

const OurTeamBlock = ({ data }) => {
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
                            return <MemberTeam member={member} key={member.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default OurTeamBlock;