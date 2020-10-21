import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
            <h1 style={{ marginTop: '150px' }}>
                We use the best technologies <br/>to enhance your product
            </h1>
        <button
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: `0 auto`,
                width: '608px',
                padding: `0 112px`,
                marginTop: '100px'
            }}
        >Get free consultation</button>
    </Layout>
);

export default IndexPage
