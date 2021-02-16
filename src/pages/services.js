import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServicesBlock from "../components/services-block/ServicesBlock";
import TagsService from "../api/Tags.service";
import TechnologyAreasService from "../api/TechnologyAreas.service";

const ServicesPage = () => {
    const [tags, setTagsData] = useState(null);
    const [technologyAreas, setTechnologyAreasData] = useState(null);

    useEffect(() => {
        TagsService.getTags().then(result => {
            setTagsData(result);
        });
    }, []);

    useEffect(() => {
        TechnologyAreasService.getTechnologyAreas().then(result => {
            setTechnologyAreasData(result);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Services Page" />

            <div className="container">
                <ServicesBlock tags={tags} technologyAreas={technologyAreas} />
            </div>
        </Layout>
    );
};
export default ServicesPage;
