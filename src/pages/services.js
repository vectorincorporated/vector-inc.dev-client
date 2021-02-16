import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServicesBlock from "../components/services-block/ServicesBlock";
import TagsService from "../api/Tags.service";

const ServicesPage = () => {
    const [tags, setTagsData] = useState(null);

    useEffect(() => {
        TagsService.getTags().then(result => {
            setTagsData(result);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Services Page" />

            <div className="container">
                <ServicesBlock tags={tags} />
            </div>
        </Layout>
    );
};
export default ServicesPage;
