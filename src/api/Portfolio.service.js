import environment from '../environments/environment';

const PortfolioService = {
    getPortfolios: () => {
        return fetch(environment.apiUrl + '/portfolio-page')
            .then(res => res.json());
    }
};

export default PortfolioService;
