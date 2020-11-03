import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUsBlock from "../components/about-us/AboutUsBlock";
import OurTeamBlock from "../components/our-team/OurTeamBlock";

const AboutUsPage = () => (
    <Layout>
        <SEO title="AboutUs Page" />
        <div>
            <AboutUsBlock />
            <OurTeamBlock />
        </div>
    </Layout>
);

export default AboutUsPage;
