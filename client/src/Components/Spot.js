import '../Styles/spot.min.css';
import React, { useEffect, useState } from 'react'
import Geocode from 'react-geocode'
import { useParams, Link } from 'react-router-dom'

function Spot() {
    const [displaySpot, setDisplaySpot] = useState()
    const [address, setAddress] = useState()

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    Geocode.setLocationType("ROOFTOP");
    displaySpot && Geocode.fromLatLng(displaySpot.lat, displaySpot.lng).then((response) => {
        const number = response.results[0].address_components[1].long_name;
        const street = response.results[0].address_components[2].long_name;
        const city = response.results[0].address_components[4].long_name;
        const state = response.results[0].address_components[6].long_name;
        const zipcode = response.results[0].address_components[8].long_name;
        setAddress(`${number} ${street}. ${city}, ${state} ${zipcode}`)
    })

    let params = useParams()
    let displayId = params.spotId

    useEffect( () => {
        fetch(`/spots/${displayId}`)
        .then((response) => {
            if (response.ok) {
            response.json().then((spot) => setDisplaySpot(spot));
            } else {
            }
        })
        }, [])


  return (
    displaySpot ? 
        <div className="display_spot_div">
            <div className="display_spot_links">
                <Link to="/spots/add_review"><h5 className="header_link">Add Review</h5></Link>
                <h5 className="header_link">Edit Spot</h5>
            </div>
            <div className="display_spot_photos_div">
            </div>
            <div className="display_spot_info_div">
                <p className="display_spot_name">{displaySpot.name}</p>
                <p className="display_spot_address">{address}</p>
                <p className="display_spot_about">{displaySpot.about}</p>
            </div>
        </div> : <div>Spot Loading</div>
  )
}

export default Spot