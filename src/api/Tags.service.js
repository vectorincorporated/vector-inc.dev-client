import environment from "../environments/environment";

const TagsService = {
    getTags: () => {
        return fetch(environment.apiUrl + "/tags").then(res => res.json());
    },
};
export default TagsService;
