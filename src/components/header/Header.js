import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg';
import headerStyles from './Header.module.css';
import MenuPopup from "../menu-popup/MenuPopup";
import ContactFormPopup from "../contact-form-popup/ContactFormPopup";

const Header = () => (
    <header>
        <div className={headerStyles.wrapper}>
            <div className={headerStyles.menu}>
                <Popup trigger={ <img src={menu} alt="menu"/> } modal>
                    { close => <MenuPopup close={close}/> }
                </Popup>
            </div>

            <img src={logo} className={headerStyles.logo} alt="Vector"/>

            <Popup trigger={ <button className={headerStyles.contactUsBtn}>contact us</button> } modal>
                { close => <ContactFormPopup close={close}/> }
            </Popup>

        </div>
    </header>
);

export default Header
