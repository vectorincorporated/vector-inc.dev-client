import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link} from "gatsby";

import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon-mobile.svg';
import styles from './HeaderMobile.module.css';
import MenuPopup from "../menu-popup/MenuPopup";

const HeaderMobile = () => {
    return (
        <header>
            <div className={styles.wrapper}>
                <Link to={'/'}>
                    <img src={logo} className={styles.logo} alt="Vector"/>
                </Link>

                <Popup trigger={ <img src={menu} alt="menu"/> } modal>
                    { close => <MenuPopup close={close}/> }
                </Popup>
            </div>
        </header>
    );
};

export default HeaderMobile;
