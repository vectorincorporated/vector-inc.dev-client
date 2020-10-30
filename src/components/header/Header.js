import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg';
import headerStyles from './Header.module.css';
import MenuPopup from "../menu-popup/MenuPopup";

const Header = () => (
    <header>
        <div className={headerStyles.wrapper}>
            <Popup trigger={ <img src={menu} alt="menu"/> } modal>
                { close => <MenuPopup close={close}/> }
            </Popup>

            <img src={logo} className={headerStyles.logo} alt="Vector"/>
            <div>
                <button className={headerStyles.contactUsBtn}>contact us</button>
            </div>
        </div>
    </header>
);

export default Header
