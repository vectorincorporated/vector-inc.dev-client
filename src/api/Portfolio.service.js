import gql from "graphql-tag";

const FETCH_PORTFOLIO_PAGE = gql`
    query PortfolioPage {
        portfolioPage {
            title
            projects {
                id
                title
                specialTitle
                generalDescription
                problemDescription
                solutionDescription
                problemDescription
                projectUrl
                screenshots {
                    id
                    url
                }
                technologyAreas {
                    id
                    title
                    technologyItems {
                        id
                        title
                    }
                }
                keyFeatures {
                    id
                    title
                }
                ChallengesAndProblems {
                    id
                    title
                    description
                }
            }
        }
    }
`;

export default FETCH_PORTFOLIO_PAGE;