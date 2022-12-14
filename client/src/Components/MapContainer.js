import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import '../Styles/mapcontainer.min.css'

const containerStyle = {
    display: 'flex',
    width: "100%" ,
    height: '500px'
};

const center = {
    lat: 41.88183,
    lng: -87.646177
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
            <div className="map_div">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={options}
            >
            </GoogleMap>
            </div>
        </LoadScript>
    )
}

export default MapContainer