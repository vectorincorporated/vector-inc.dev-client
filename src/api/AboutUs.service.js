import environment from "../environments/environment";

const AboutUsService = {
    getAboutUs: () => {
        return fetch(environment.apiUrl + "/about-us-page").then(res => res.json());
    },
};

export default AboutUsService;
