import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link} from "gatsby";

import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg';
import headerStyles from './HeaderDesktop.module.css';
import MenuPopup from "../menu-popup/MenuPopup";
import ContactFormPopup from "../contact-form-popup/ContactFormPopup";

const headerOptions = {
    title: 'LEAVE YOUR CONTACTS',
    description: 'WE WILL CONTACT WITH YOU AS SOON AS POSSIBLE'
};


const HeaderDesktop = () => {
    return (
        <header>
            <div className={headerStyles.wrapper}>
                <div className={headerStyles.menu}>
                    <Popup trigger={ <img src={menu} alt="menu"/> } modal>
                        { close => <MenuPopup close={close}/> }
                    </Popup>
                </div>

                <Link to={'/'}>
                    <img src={logo} id='desktop-logo' className={headerStyles.logo} alt="Vector"/>
                </Link>

                <Popup trigger={ <button className={headerStyles.contactUsBtn}>contact us</button> } modal>
                    { close => <ContactFormPopup close={close} headerOptions={headerOptions} /> }
                </Popup>
            </div>
        </header>
    );
};

export default HeaderDesktop;
