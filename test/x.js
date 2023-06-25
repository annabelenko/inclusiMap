import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class MyComponents extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
Geocode.setApiKey("AIzaSyAkfU18mlMtMx2Tvb6egPt8L9vkcWxOGuY");
Geocode.setLocationType("ROOFTOP");   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   const [email, setEmail] = useState("");
            id = "email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}   

            const [locationname, setLocationname] = useState("");
            const [contact, setContact] = useState("");
            const [wheelchair, setWheelchair] = useState("");
            const [wheelchair, setWheelchair] = useState("");

            id = "locationname"
            value={locationname}
            onChange={(e) => setLocationname(e.target.value)}   


            
            id = "contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}       
            
            
            const [name, setName] = useState("");
            id = "name"
            value={name}
            onChange={(e) => setName(e.target.value)}   

    name : name,
    locationaddress : locationaddress,
    locationname : locationname,
    contact : contact,
    wheelchair : wheelchair,
    parking : parking,