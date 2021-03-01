import gql from "graphql-tag";

const FETCH_HOME_PAGE = gql`
    query HomePage {
        homePage {
            title
            forWhatBlock {
                id
                reasons {
                    title
                    description
                    id
                }
            }
            servicesBlock {
                id
                services {
                    id
                    title
                    description
                    technologyAreas {
                        id
                        title
                        technologyItems {
                            id
                            title
                        }
                    }
                    tags {
                        id
                        title
                    }
                }
            }
            ourClientsBlock {
                id
                clients {
                    id
                    image {
                        url
                    }
                }
            }
            howWeWorkBlock {
                id
                work_steps {
                    id
                    title
                    order
                    image {
                        url
                    }
                }
            }
            haveSomeQuestionBlock {
                title
                description
            }
        }
    }
`;

export default FETCH_HOME_PAGE;