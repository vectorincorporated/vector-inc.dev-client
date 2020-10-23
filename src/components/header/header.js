import React from "react"

import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg';
import headerStyles from './header.module.css';

const Header = () => (
    <header>
        <div className={headerStyles.wrapper}>
            <div className={headerStyles.menu}>
                <img src={menu} alt="menu"/>
            </div>
            <img src={logo} className={headerStyles.logo} alt="Vector"/>
            <div>
                <button className={headerStyles.contactUsBtn}>contact us</button>
            </div>
        </div>
    </header>
);

export default Header
