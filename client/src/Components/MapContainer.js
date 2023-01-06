import React, { useEffect, useState } from "react"
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api"
import { useNavigate } from "react-router-dom";
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

const Libraries = ['places']


function MapContainer({setAddSpot, addSpot, setSpotLat, setSpotLng}) {
    const [map, setMap] = useState(null)
    const [whereabouts, setWhereabouts] = useState(null)
    const [spots, setSpots] = useState([])
    const [selectedSpot, setSelectedSpot] = useState(null)

    let navigate = useNavigate()

    const handleClick = (e) => {
        setSpotLat(e.latLng.lat());
        setSpotLng(e.latLng.lng());
        setAddSpot(!addSpot)
        setSelectedSpot(null)
    }

    useEffect(() => {
        fetch('/spots')
            .then((response) => {
                if (response.ok) {
                response.json().then((spots) => {
                    setSpots(spots)
                    });
                } else {

            }
            })
    }, [])

    const allSpots = spots.map((spot, index) => {
        return <Marker key={index} position={spot.lat_lng} clickable={true} onClick={() => setSelectedSpot(spot)}/>
    })


    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={Libraries}
            >
            <div className="map_div">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                    options={options}
                    onLoad={map => setMap(map)}
                    onClick={handleClick}
                >
                    {allSpots}
                    {whereabouts && <Marker position={whereabouts}/>}
                </GoogleMap>
                {selectedSpot && (
                    <div className="selected_spot_div">
                        <div className="selected_spot_image_div">
                            <img className="selected_spot_image" src={selectedSpot.photo ? selectedSpot.photo : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} />
                        </div>
                        <div className="selected_spot_info_div">
                            <h4 className="selected_spot_info_header">{selectedSpot.name}</h4>
                            <h4 className="selected_spot_info_header">Rating:</h4>
                            <p className="<selected_spot_info_about"><strong>About: </strong>{selectedSpot.about.substring(0,50)}...</p>
                        </div>
                    </div>
                )}
                <Places
                    map={map}
                    setWhereabouts={setWhereabouts}/>
                
            </div>
        </LoadScript>
    )
}

export default MapContainer