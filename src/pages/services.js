import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesBlock from "../components/services-block/ServicesBlock";

const ServicesPage = () => (
    <Layout>
        <SEO title="Services Page" />

        <div className='container'>
            <ServicesBlock />
        </div>
    </Layout>
);

export default ServicesPage;
