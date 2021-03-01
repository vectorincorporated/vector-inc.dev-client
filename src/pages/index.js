import React from "react"
import Particles from "react-tsparticles";

import {options} from '../utils/particles/particles-options';
import SEO from "../components/seo";
import Layout from "../components/layout"
import HomeBlock from "../components/home-block/HomeBlock";

const IndexPage = () =>
    (
        // TODO: clear and make redirect to Home component
        <Layout>
            <SEO title="Home"/>

            <div className="particles-container">
                <Particles id="tsparticles" options={options}/>
            </div>

            <div className='full-height-view container'>
                <HomeBlock/>
            </div>
        </Layout>
    );

export default IndexPage
