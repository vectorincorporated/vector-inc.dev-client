import React from "react"

import Layout from "../components/layout"
import ParticlesCustom from "../components/particles/particles";
import HomeBlock from "../components/home-block/home-block";

const IndexPage = () => (
    <Layout>
        <div className="particles-container">
            <ParticlesCustom />
        </div>

        <HomeBlock />
    </Layout>
);

export default IndexPage
