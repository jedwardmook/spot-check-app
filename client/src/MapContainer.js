import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
    display: 'flex',
    width: "100%" ,
    height: '500px'
};

const center = {
    lat: 41.881832,
    lng: -87.623177
};

const options = {
    disableDefaultUI: true,
    clickableIcons: false,
}


function MapContainer() {
  
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
            >
        </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer