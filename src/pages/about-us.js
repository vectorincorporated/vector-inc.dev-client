import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUsBlock from "../components/about-us/AboutUsBlock";

const AboutUsPage = () => (
    <Layout>
        <SEO title="AboutUs Page" />
        <div>
            <AboutUsBlock />
        </div>
    </Layout>
);

export default AboutUsPage;
