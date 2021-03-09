import gql from "graphql-tag";

const FETCH_ABOUT_US_PAGE = gql`
    query AboutUsPage {
        aboutUsPage {
            title
            description
            author
            ourTeamBlock{
                id
                team_members{
                    id
                    name
                    photo{
                        id
                        url
                    }
                    teamMemberRole{
                        id
                        title
                    }
                }
            }
            ourAddressBlock{
                id
                address
            }
            weInSocialBlock{
                id
                socials{
                    id
                    link
                    icon{
                        id
                        url
                    }
                }
            }
            ourContactsBlock{
                id
                contacts{
                    id
                    value
                    icon{
                        id
                        url
                    }
                }
            }
            motivation
            motivationAutor
        }
    }
`;

export default FETCH_ABOUT_US_PAGE;
