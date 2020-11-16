import React from "react"
import Particles from "react-tsparticles";

import { options } from '../utils/particles/particles-options';
import SEO from "../components/seo";
import Layout from "../components/layout"
import HomeBlock from "../components/home-block/HomeBlock";
import ForWhatBlock from "../components/for-what-block/ForWhatBlock";
import HowWeWorkBlock from "../components/how-we-work/HowWeWorkBlock";
import ServicesHomeBlock from "../components/services-home-block/ServicesHomeBlock";
import QuestionsFormBlock from "../components/question-form-block/QuestionsFormBlock";
import OurClientsBlock from "../components/our-clients-block/OurClientsBlock";

const HomePage = () => (
    <Layout>
        <SEO title="Home" />

        <div className="particles-container">
            <Particles id="tsparticles" options={options} />
        </div>

        <HomeBlock />
        <ForWhatBlock />
        <ServicesHomeBlock />
        <HowWeWorkBlock />
        <OurClientsBlock />
        <QuestionsFormBlock />
    </Layout>
);

export default HomePage;
