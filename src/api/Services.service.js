import environment from "../environments/environment";

const ServicesService = {
    getServices: () => {
        return fetch(environment.apiUrl + "/services-page").then(res => res.json());
    },
};
export default ServicesService;
