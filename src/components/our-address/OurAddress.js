import React, {} from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import styles from './OurAddress.module.css';
import { compose, withProps } from "recompose";
import settings from "./map-settings";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 49.988358, lng: 36.232845 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 49.988358, lng: 36.232845 }} />}
    </GoogleMap>
);


const info = {
    title: 'Our Address',
    address: 'UKRAINE, Kharkiv, Centre stree 1\\11, office 533'
};

const OurAddressBlock = () => {
    return (
        <div className={ styles.ourAddress }>
            <div className={ styles.info }>
                <div className='accent-text'>{ info.title }</div>
                <div className={styles.divider}>••••••••••••••••••••••••••••••••••••••</div>

                <div className={styles.map}>
                    <MyMapComponent isMarkerShown />
                    {/*<GoogleMap />*/}
                </div>
            </div>
        </div>
    )
};

export default OurAddressBlock;