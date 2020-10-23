import React from "react"
import Particles from "react-tsparticles";

import Layout from "../components/layout"
import HomeBlock from "../components/home-block/home-block";
import { options } from '../components/particles/particles-options';
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <div className="particles-container">
            <Particles id="tsparticles" options={options} />
        </div>

        <HomeBlock />
    </Layout>
);

export default IndexPage
