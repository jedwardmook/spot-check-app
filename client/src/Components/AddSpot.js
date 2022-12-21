import React,{} from "react";

function AddSpot({spotLat, spotLng}){

    return (
        <div>
            <p>{spotLat}</p>
            <p>{spotLng}</p>
        </div>
    )
}

export default AddSpot;