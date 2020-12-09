import React from "react";
import Slider from "react-slick";

import defaultSettings from './default-settings';
import styles from './CustomSlider.module.css';

const CustomSlider = ({ imgList, settings = defaultSettings }) => {
    return (
        <Slider { ...settings }>
            {
                imgList?.map((img, i) => {
                    return <div key={i} className={styles.sliderItem}>
                        <img src={img} alt='' />
                    </div>
                })
            }
        </Slider>
    );
};

export default CustomSlider;
