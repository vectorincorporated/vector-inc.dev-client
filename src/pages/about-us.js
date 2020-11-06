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
        <div>
            <AboutUsBlock />
        </div>
        <div>
            <OurTeamBlock />
        </div>
        <div>
            <ContactsBlock />
        </div>
        <div>
            <OurAddressBlock />
        </div>
        <div>
            <QuestionsFormBlock />
        </div>
    </Layout>
);

export default AboutUsPage;
