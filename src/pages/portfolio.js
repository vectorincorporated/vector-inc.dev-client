import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioBlock from "../components/portfolio/PortfolioBlock";

const PortfolioPage = () => (
    <Layout>
        <SEO title="Portfolio Page" />
        <div className='container'>
            <PortfolioBlock />
        </div>
    </Layout>
);

export default PortfolioPage;
