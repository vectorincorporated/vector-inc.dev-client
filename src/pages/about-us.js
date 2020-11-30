import React from "react"

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
    </Layout>
);

export default AboutUsPage;
