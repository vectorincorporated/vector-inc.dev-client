import React from "react"

import styles from "./AboutUsBlock.module.css"
import BlockHeader from "../block-header/BlockHeader"
import OurTeamBlock from "../our-team/OurTeamBlock";
import ContactsBlock from "../contacts/ContactsBlock";
import OurAddressBlock from "../our-address/OurAddress";
import QuestionsFormBlock from "../question-form-block/QuestionsFormBlock";
import Helmet from "react-helmet";
import {useQuery} from "@apollo/client";
import FETCH_ABOUT_US_PAGE from "../../api/AboutUs.service";
import AboutUsContent from "./about-us-content/AboutUsContent";

const header = {
    title: "About Us",
};

const AboutUsBlock = () => {
    const {loading, error, data} = useQuery(FETCH_ABOUT_US_PAGE);
    const aboutUsPage = data?.aboutUsPage || null;


    return (
        <div className={styles.aboutUs}>
            <div className={styles.header}>
                <BlockHeader header={header}/>
            </div>
            <div className={styles.content}>
                <AboutUsContent aboutUsPage={aboutUsPage}/>
            </div>
            <div>
                <OurTeamBlock data={aboutUsPage?.ourTeamBlock}/>
            </div>
            <div>
                <div>
                    <ContactsBlock data={aboutUsPage}/>
                </div>
            </div>
            <div>
                <OurAddressBlock address={aboutUsPage?.ourAddressBlock}/>
            </div>
            <div>
                <QuestionsFormBlock/>
            </div>

            <div className='vhr-filter-helpers'>
                <svg>
                    <filter id="r">
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 "/>
                    </filter>
                    <filter id="g">
                        <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 "/>
                    </filter>
                    <filter id="b">
                        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 "/>
                    </filter>
                </svg>

                <Helmet>
                    <script src={'./vhs-script.js'} type="text/javascript"/>
                </Helmet>
            </div>


        </div>
    )
};

export default AboutUsBlock
