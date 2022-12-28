import React, { useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import '../Styles/mapcontainer.min.css'
import Places from "./Places";


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
    disableDefaultUI: false,
    clickableIcons: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
}

const libraries = ['places']


function MapContainer({setAddSpot, addSpot, setSpotLat, setSpotLng}) {
    const [whereabouts, setWhereabouts] = useState(null)

    const handleClick = (e) => {
        console.log(e)
        setSpotLat(e.latLng.lat());
        setSpotLng(e.latLng.lng());
        setAddSpot(!addSpot)
    }


    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
            >
            <div className="map_div">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                    options={options}
                    onClick={handleClick}
                >
                    {whereabouts && <Marker position={whereabouts}/>}
                </GoogleMap>
                <Places 
                    setWhereabouts={setWhereabouts}/>
            </div>
        </LoadScript>
    )
}

export default MapContainer