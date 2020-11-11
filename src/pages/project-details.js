import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import img from '../images/project-details/project-details.png';
import QuestionsFormBlock from "../components/question-form-block/QuestionsFormBlock";
import ProjectDetailsBlock from "../components/project-details/ProjectDetailsBlock";

const project = {
    general: {
        title: 'General description',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae convallis nisl enim. 
        Fermentum orci libero tellus, massa odio at ut sodales in. Quisque auctor amet, erat enim malesuada id eu, volutpat. 
        Adipiscing nulla egestas egestas massa. Eu nisl tellus nam eget tempor ultricies malesuada id nunc. Quis massa nam tortor sodales purus. 
        Convallis magna tellus mi aliquam pellentesque vel adipiscing fames. Quisque nunc condimentum sem amet aliquam vitae. 
        Maecenas aliquam sit erat ipsum sed mi. Vitae magnis massa id tincidunt. Nunc, purus maecenas enim eget nec faucibus. 
        Justo scelerisque sed eu amet elit mi, consequat. Tellus tortor fermentum massa mollis eget viverra aliquam eu. 
        Risus egestas posuere varius urna, quis. Scelerisque id eleifend rhoncus urna, pharetra fermentum vulputate. 
        Egestas eleifend et eget euismod quis tortor, metus. Scelerisque mauris, vitae lacinia vestibulum sed dui aenean. 
        Lectus amet sed pellentesque ut volutpat nunc. Praesent fermentum aliquam massa egestas in dignissim purus. 
        Eleifend mi ante quis mauris faucibus. Orci augue tincidunt gravida tristique placerat sit nisi. 
        Pellentesque id ante aliquet dolor dui scelerisque. Ipsum pellentesque in a, feugiat. 
        Ultrices dui, ornare rhoncus pulvinar sed diam vel risus. Volutpat nullam tellus ligula aliquam volutpat. 
        Ullamcorper est, mauris, tincidunt enim venenatis volutpat. Ullamcorper vitae orci etiam vehicula porta. 
        Dui pharetra convallis tellus blandit. Tincidunt quam nulla mattis leo imperdiet nisl vulputate ultricies.`,
    },
    image: img,
    link: 'https://gooooooogle.com',
    problems: {
        title: 'Project challenges and problems',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare ut nunc, dolor augue nisi mattis at tincidunt. 
        Nibh interdum justo, enim, maecenas molestie praesent elit. Augue platea porttitor varius est pharetra, vehicula enim. 
        Vulputate sit sit sit enim tincidunt quam metus. Pellentesque orci vitae auctor nec phasellus netus accumsan dolor. 
        Ligula tempor felis mauris lorem vitae sem donec ac. Facilisis volutpat neque aenean mattis nec. 
        Risus sed quam tortor consequat posuere at vehicula hac. Sagittis commodo fringilla diam ipsum elit laoreet sed sollicitudin eu. 
        Volutpat in consectetur fermentum molestie. Cursus mi aliquam ut risus porttitor id arcu, etiam. 
        A vel facilisi pharetra bibendum eu. A viverra tellus lacus pharetra, volutpat blandit nisl tincidunt lorem. 
        Morbi adipiscing nunc, nulla ultrices pellentesque est.`
    },
    solutions: {
        title: 'Our solutions',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, urna vel ut morbi at. 
        Dis orci, maecenas purus ultricies massa, aliquet quam. Porta feugiat hendrerit nunc risus augue mauris. 
        Egestas justo libero nullam mi non, elit massa. Et senectus mauris in pharetra. 
        Rhoncus diam platea vitae, condimentum pharetra. Fermentum ipsum felis volutpat nulla ullamcorper arcu in ullamcorper facilisis. 
        Laoreet pellentesque varius cras amet. Felis, massa felis nunc, ac urna pellentesque diam. 
        Vulputate euismod urna, mi scelerisque egestas tincidunt. Mauris aliquet neque, risus consequat bibendum amet posuere. 
        Porta orci odio nisl ullamcorper porttitor. Commodo maecenas nisl, urna, sed turpis ac diam a eget. Sit metus sit enim enim. 
        Sed massa volutpat ipsum volutpat odio aliquet. Ornare feugiat ut pellentesque sit dui donec. 
        Phasellus diam ipsum facilisi mauris sed orci amet, morbi. Ultrices aliquet sed sem sed lobortis libero. Mauris sit mi et arcu amet.`
    },
    screenshots: [img, img, img, img],
    features: {
        title: 'Key Features',
        items: [
            'Possibility to create a new user;',
            'Possibility to edit a user’s profile;',
            'Possibility to create and delete Kafka clusters in a cloud;',
            'Possibility to maintain Kafka clusters in a cloud;',
            'Possibility to configure the cluster’s version, cloud configuration;',
            'Possibility to access brokers using Kafka PLAIN endpoints;',
            'Possibility to maintain Kafka topics.',
        ]
    },
    technologies: {
        title: 'Used technologies',
        items: [
            'XML, XHTML, HTML5, CSS2/3;',
            'Bootstrap, HTML5 Boilerplate, Uikit;',
            'JavaScript, Alfresco, NodeJs;',
            'Liferay;',
            'Velocity, Sass/Scss, Less;',
            'AJAX, REST, OAuth, SAML, SSO;',
            'AngularJS, React JS, Backbone JS, Vue Js.'
        ]
    }
};

const ProjectDetails = () => (
    <Layout>
        <SEO title="Project Details Page" />

        <div>
            <ProjectDetailsBlock project={project} />
        </div>
        <div>
            <QuestionsFormBlock />
        </div>
    </Layout>
);

export default ProjectDetails;
