import React, { useState, useEffect, useRef } from 'react';
import loadScript from '../../utils/loadScript';


export default function AddressInput() {
  const [sessionToken, setSessionToken] = useState('');
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(['']);
  const [cursor, setCursor] = useState(0);
  const [active, setActive] = useState(false);
  let node = useRef(null);

  let loaded= {current: false};



    console.log(document.querySelector('head'))
  
  // Variables for Google Place API
  console.log(window)
  const google = window.google 
  // const location = new google.maps.LatLng(43.3148, -85.6024); // Latitude, longtitude of Michigan
  // Get session token on first render
  /* eslint-disable */
  useEffect(() => {
    document.querySelector('#google-maps')
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdHcaM2It2Dsier-OsqDwX1YF8ld4tOJQ&libraries=places`,
        document.querySelector('head'),
        'google-maps'
      );

  }, [document.querySelector('#google-maps')]);

  useEffect(() => {
 
      const googleScript = document.getElementById('google-maps')

      if (window.google) {
        // All is good! Carry on 
        setSessionToken(new google.maps.places.AutocompleteSessionToken());
      }
    
      googleScript.addEventListener('load', () => {
        // Patiently waiting to do the thing 
       
      })
    
   
  }, []);

  console.log(sessionToken)
  console.log(predictions)
  /* eslint-enable */
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  console.log(google)

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return null;
    } else {
      setPredictions([]);
    }
  };

  const displaySuggestions = (predictions, status) => {
    console.log(predictions, status)
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }
    
    setPredictions(predictions);
  };

  const handleInputChange = e => {
    const string = e.target.value;
    setAddress(string);
    var service = new google.maps.places.AutocompleteService();
    if ([2, 3, 4, 6].includes(string.length)) {
      service.getPlacePredictions(
        { input: string, componentRestrictions: { country: 'us' }, types: ['address'] },
        displaySuggestions
      ); 
    }
  };

  console.log(address)

  const handleKeyDown = e => {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
      setAddress(predictions[cursor - 1].description);
    } else if (e.keyCode === 40 && cursor < predictions.length - 1) {
      setCursor(cursor + 1);
      setAddress(predictions[cursor + 1].description);
    }
  };


  const fillAddress = (address, e) => {
    e.preventDefault();
    setAddress(address);
    setPredictions([]);
  };

  return (
  <div>
          <input  className="photo-upload-address-input" onKeyDown={handleKeyDown} onChange={handleInputChange} placeholder="Enter address..." value={address} name="address" autoComplete="off" />
        <div className="search_result_container" style={{position: "absolute", marginTop: "5px"}}>
          <div ref={node} className="search_result_dropdown">
            {predictions.length > 1 && address
              ? predictions.map((prediction, i) => (
                <>
                {cursor === i ? ()=>setActive(true) : ()=>setActive(false)}
                  <div key={prediction.id} className={cursor === i ? 'active search_result_dropdown_item' : "search_result_dropdown_item"} style={{width: "480px", fontSize: "1.8rem",fontWeight: "300", fontFamily: "sofia-pro", padding: "15px", background: "white"}} onClick={e => fillAddress(prediction.description, e)}>
                    {prediction.description}
                  </div>
                  {console.log(active)}
                  </>
                ))
              : null}
          </div>
      </div>
      </div>
  );
}