import React from "react";

import styles from './ImagePopup.module.css';
import Slider from "react-slick/lib";

const ImagePopup = ({ close, imageList, imageIndex }) => {
    const settings = {
        infinite: true,
        speed: 500,
        swipe: false,
        slidesToShow: 1,
        initialSlide: imageIndex,
        slidesToScroll: 1
    };

    return (
        <div className={styles.wrapper}>
            {/*TODO: create separate component for close btn*/}
            <div className={styles.closeBtnWrapper}>
                <span className={styles.closeBtn} onClick={close}>X</span>
            </div>

            <div className={styles.sliderWrapper}>
                <div className={styles.sliderWrapperChild}>
                    <Slider {...settings}>
                        {
                            imageList?.map((img) => {
                                return <div key={imageIndex} className={styles.sliderItem}>
                                    <img src={img} alt=''/>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default ImagePopup;
