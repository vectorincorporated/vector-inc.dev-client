import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpertiseBlock from "../components/expertise/ExpertiseBlock";

const ExpertisePage = () => (
    <Layout>
        <SEO title="Expertise Page" />
        <ExpertiseBlock />
    </Layout>
);

export default ExpertisePage;
