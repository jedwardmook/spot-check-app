import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Spot() {
    const [displaySpot, setDisplaySpot] = useState()

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

    console.log(displaySpot)

  return (
    <div>Spot</div>
  )
}

export default Spot