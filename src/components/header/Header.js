import React from "react";
import 'reactjs-popup/dist/index.css';
import {useWindowWidth} from "@react-hook/window-size";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
    const windowWidth = useWindowWidth();
    return (
        <div>
                {
                    windowWidth > 768 ?
                        <HeaderDesktop />
                        :
                        <HeaderMobile />
                }
        </div>
    );
};

export default Header;

