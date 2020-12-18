import React from "react";
import 'reactjs-popup/dist/index.css';
import {useWindowWidth} from "@react-hook/window-size";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
    const windowWidth = useWindowWidth();
    console.log(windowWidth);
    return (
        <header>
                {
                    windowWidth <= 768 ?
                        <HeaderMobile />
                        :
                        <HeaderDesktop />
                }
        </header>
    );
};

export default Header;

