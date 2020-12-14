import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUsBlock from "../components/about-us/AboutUsBlock";
import OurTeamBlock from "../components/our-team/OurTeamBlock";
import QuestionsFormBlock from "../components/question-form-block/QuestionsFormBlock";
import ContactsBlock from "../components/contacts/ContactsBlock";
import OurAddressBlock from "../components/our-address/OurAddress";

const AboutUsPage = () => (
    <Layout>
        <SEO title="AboutUs Page" />
        <div className='container'>
            <AboutUsBlock />
        </div>
        <div className='container'>
            <OurTeamBlock />
        </div>
        <div className='container'>
            <ContactsBlock />
        </div>
        <div className='container'>
            <OurAddressBlock />
        </div>
        <div className='container'>
            <QuestionsFormBlock />
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
                <script src={'./vhs-script.js'} type="text/javascript" />
            </Helmet>
        </div>
    </Layout>
);

export default AboutUsPage;
