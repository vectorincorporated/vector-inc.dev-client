import environment from "../environments/environment";

const TechnologyAreasService = {
    getTechnologyAreas: () => {
        return fetch(environment.apiUrl + "/technology-areas").then(res => res.json());
    },
};
export default TechnologyAreasService;
