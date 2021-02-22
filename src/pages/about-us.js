import React, {useEffect, useState} from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUsBlock from "../components/about-us/AboutUsBlock";
import OurTeamBlock from "../components/our-team/OurTeamBlock";
import QuestionsFormBlock from "../components/question-form-block/QuestionsFormBlock";
import ContactsBlock from "../components/contacts/ContactsBlock";
import OurAddressBlock from "../components/our-address/OurAddress";
import AboutUsService from "../api/AboutUs.service";

const AboutUsPage = () => {
    const [data, setData] = useState(null);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        AboutUsService.getAboutUs()
            .then((result) => {
                    setData(result);
                });
        AboutUsService.teamMemberRoles()
            .then((result)=> {
                setRoles(result);
            })
    }, []);

    const filterRolesById = (roleId) => {
        return roles.find(role => role.id === roleId);
    };

    return (
        <Layout>
            <SEO title="AboutUs Page" />
            <div className='container'>
                <AboutUsBlock data={data} />
            </div>
            <div className='container'>
                <OurTeamBlock data={ data?.ourTeamBlock } filterRolesById={filterRolesById} />
            </div>
            <div className='container'>
                <div>
                    <ContactsBlock data={ data } />
                </div>
            </div>
            <div className='container'>
                <OurAddressBlock address={data?.ourAddressBlock}/>
            </div>
            <div className='container'>
                <QuestionsFormBlock />
            </div>

            <div className='vhr-filter-helpers'>
                <svg>
                    <filter id="r">
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 "/>
                    </filter>
                    <filter id="g">
                        <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 "/>
                    </filter>
                    <filter id="b">
                        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 "/>
                    </filter>
                </svg>

                <Helmet>
                    <script src={'./vhs-script.js'} type="text/javascript" />
                </Helmet>
            </div>
        </Layout>
    );
};

export default AboutUsPage;
