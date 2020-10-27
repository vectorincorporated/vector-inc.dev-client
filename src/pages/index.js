import React from "react"
import Particles from "react-tsparticles";

import { options } from '../utils/particles/particles-options';
import SEO from "../components/seo";
import Layout from "../components/layout"
import HomeBlock from "../components/home-block/HomeBlock";
import ForWhatBlock from "../components/for-what-block/ForWhatBlock";
import HowWeWorkBlock from "../components/how-we-work/HowWeWorkBlock";
import ServicesBlock from "../components/services-block/ServicesBlock";
import OurClientsBlock from "../components/our-clients-block/OurClientsBlock";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <div className="particles-container">
            <Particles id="tsparticles" options={options} />
        </div>

        <HomeBlock />
        <ForWhatBlock />
        <ServicesBlock />
        <HowWeWorkBlock />
        <OurClientsBlock />
    </Layout>
);

export default IndexPage
