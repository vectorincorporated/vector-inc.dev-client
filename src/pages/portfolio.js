import React, {useEffect, useState} from "react"

import PortfolioService from '../api/Portfolio.service';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioBlock from "../components/portfolio/PortfolioBlock";

const PortfolioPage = () => {
    const [portfolioData, setPortfolioData] = useState();

    useEffect(() => {
        PortfolioService.getPortfolios()
            .then((result) => {
                setPortfolioData(result);
            })
    }, []);

    return (<Layout>
        <SEO title="Portfolio Page" />
        <div className='container'>
            <PortfolioBlock portfolioData={portfolioData}/>
        </div>
    </Layout>)
};

export default PortfolioPage;
