import gql from "graphql-tag";

const FETCH_SERVICE_PAGE = gql`
    query ServicePage {
        servicesPage {
            title
            description
            technology_items{
                id
                title
            }
            services{
                id
                services{
                    id
                    title
                    description
                    technologyAreas{
                        id
                        title
                        technologyItems{
                            id
                            title
                        }
                    }
                    tags{
                        id
                        title
                    }
                }
            }
        }
    }   
`;

export default FETCH_SERVICE_PAGE;