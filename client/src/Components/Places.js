import '../Styles/places.min.css';
import React, { useContext } from 'react';
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import { SwitchesContext } from '../context/switches';

function Places({setWhereabouts}){
    const {
        ready, 
        value, 
        setValue, 
        suggestions: {status, data}, 
        clearSuggestions
    } = usePlacesAutocomplete();

    const {placesDiv} = useContext(SwitchesContext)

    const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect =
        ({ description }) =>
        () => {
          setValue(description, false);
          clearSuggestions();
          getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            setWhereabouts({lat, lng})
          });
        };
    
      const renderSuggestions = () =>
        data.map((suggestion) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
          return (
            <li className='suggestion' key={place_id} onClick={handleSelect(suggestion)}>
              <small>{main_text} | {secondary_text}</small>
            </li>
          );
        });

    return (
        placesDiv?
        <div className='places_div'>
            <input
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Where are you trying to skate?"
            className='places_input'
            />
            {status === "OK" && <div className='suggestions_div'>{renderSuggestions()}</div>}
        </div> : 
        <div className='places_div'>
            <h2 className='add_spot_header'>CLICK MAP TO ADD SPOT</h2>
        </div>
        )
}

export default Places;
