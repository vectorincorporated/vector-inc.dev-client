import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import React from "react";

const mapStyles = require("./map-settings.json");

const Map = compose(
    withProps({
        // TODO: Create company account and get google maps APIKEY
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
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
        defaultOptions={{ styles: mapStyles }}
    >
        {
            props.isMarkerShown &&
            <Marker position={{ lat: 49.988358, lng: 36.232845 }} />
        }
    </GoogleMap>
);

export default Map;