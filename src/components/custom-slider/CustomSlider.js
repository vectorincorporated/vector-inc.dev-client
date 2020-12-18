import React from "react";
import Slider from "react-slick";

import defaultSettings from './default-settings';
import styles from './CustomSlider.module.css';
import Popup from "reactjs-popup";
import ImagePopup from "../image-popup/ImagePopup";

const CustomSlider = ({ imgList, settings = defaultSettings }) => {
    return (
        <div className={styles.sliderWrapper}>
            <Slider { ...settings }>
                {
                    imgList?.map((img, i) => {
                        return <div key={i} className={styles.sliderItem}>
                            <Popup modal trigger={
                                <img src={img} alt=''/>
                            }>
                                { close => <ImagePopup close={close}
                                                       imageIndex={i}
                                                       imageList={imgList} /> }
                            </Popup>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
};

export default CustomSlider;
