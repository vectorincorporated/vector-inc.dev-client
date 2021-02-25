import gql from "graphql-tag";

const FETCH_EXPERTISE_PAGE = gql`
          query ExpertisePage {
            expertisePage {
              id
              title
              expertise_types {
                id
                title
                technologyAreas {
                  id
                  title
                  technologyItems {
                    id
                    title
                  }
                }
              }
            }
          }
`;

export default FETCH_EXPERTISE_PAGE;