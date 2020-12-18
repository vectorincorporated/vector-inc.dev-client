import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link} from "gatsby";
import {useWindowWidth} from "@react-hook/window-size";

import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg';
import headerStyles from './Header.module.css';
import MenuPopup from "../menu-popup/MenuPopup";
import ContactFormPopup from "../contact-form-popup/ContactFormPopup";
import HeaderMobile from "./HeaderMobile";

const headerOptions = {
    title: 'LEAVE YOUR CONTACTS',
    description: 'WE WILL CONTACT WITH YOU AS SOON AS POSSIBLE'
};


const Header = () => {
    const windowWidth = useWindowWidth();
    return (
        <>
            { windowWidth > 768 ?
                <header>
                    <div className={headerStyles.wrapper}>
                        <div className={headerStyles.menu}>
                            <Popup trigger={ <img src={menu} alt="menu"/> } modal>
                                { close => <MenuPopup close={close}/> }
                            </Popup>
                        </div>

                        <Link to={'/'}>
                            <img src={logo} className={headerStyles.logo} alt="Vector"/>
                        </Link>

                        <Popup trigger={ <button className={headerStyles.contactUsBtn}>contact us</button> } modal>
                            { close => <ContactFormPopup close={close} headerOptions={headerOptions} /> }
                        </Popup>
                    </div>
                </header>
                :
                <HeaderMobile />
            }
        </>
    );
};

export default Header
