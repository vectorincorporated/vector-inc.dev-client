import React from "react";
import classNames from 'classnames';

import styles from './HomeBlock.module.css';
import ContactFormPopup from "../contact-form-popup/ContactFormPopup";
import Popup from "reactjs-popup";
import ForWhatBlock from "../for-what-block/ForWhatBlock";
import ServicesHomeBlock from "../services-home-block/ServicesHomeBlock";
import HowWeWorkBlock from "../how-we-work/HowWeWorkBlock";
import OurClientsBlock from "../our-clients-block/OurClientsBlock";
import QuestionsFormBlock from "../question-form-block/QuestionsFormBlock";
import Helmet from "react-helmet";
import {useQuery} from "@apollo/client";
import FETCH_HOME_PAGE from "../../api/Home.service";

const formOptions = {
    isBtnPink: true,
    isPhone: true,
    placeholders: {
        message: 'One place to get all your questions answered *'
    }
};

const popupHeaderOptions = {
    title: 'Get Your Free Consultation Now',
    description: 'WE WILL CONTACT WITH YOU AS SOON AS POSIBLE'
};

const HomeBlock = () => {
    const {loading, error, data} = useQuery(FETCH_HOME_PAGE);
    const homeData = data?.homePage || null;

    console.log(homeData)


    return (
        <>
            <div className={styles.wrapper}>
                <div className={classNames(styles.title, 'wrap')}>
                    <h1 className='glitch no-select' data-text="WE USE THE BEST TECHNOLOGIES TO ENHANCE YOUR PRODUCT">
                        We use the best technologies <br/>to enhance your product
                    </h1>
                </div>

                <Popup trigger={<button className={classNames(styles.btn, 'no-select')}>Get free consultation</button>}
                       modal>
                    {close => <ContactFormPopup close={close} formOptions={formOptions}
                                                headerOptions={popupHeaderOptions}/>}
                </Popup>
            </div>
            <div className='full-height-view container'>
                <ForWhatBlock forWhat={homeData?.forWhatBlock}/>
            </div>

            <div className='full-height-view container'>
                <ServicesHomeBlock services={homeData?.servicesBlock}/>
            </div>

            <div className='container'>
                <HowWeWorkBlock workSteps={homeData?.howWeWorkBlock.work_steps}/>
            </div>

            <div className='container'>
                <OurClientsBlock clients={homeData?.ourClientsBlock.clients}/>
            </div>

            <div className='container'>
                <QuestionsFormBlock/>
            </div>

            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
            </Helmet>
        </>
    )
};

export default HomeBlock
