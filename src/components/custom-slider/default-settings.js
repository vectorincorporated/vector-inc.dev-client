const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                swipe: false,
                variableWidth: true,
                infinite: true
            }
        },
        {
            breakpoint: 720,
            settings: {
                swipe: false,
                variableWidth: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                variableWidth: true,
                swipe: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default defaultSettings;
