import environment from "../environments/environment";

const HomeService = {
    getHome: () => {
        return fetch(environment.apiUrl + "/home-page").then(res => res.json());
    },
};

export default HomeService;
