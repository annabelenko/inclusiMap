import React, { useState, useEffect } from "react";
import { auth, db, storage } from "./firebase";
import { query, collection, where, getDocs, addDoc  } from "firebase/firestore";
import { async } from "@firebase/util";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";


function Map() {


  const [locations, setLocations] = useState([]);
  const [onlywheel, setOnlywheel] = useState([]);
  const [onlypark, setOnlypark] = useState([]);


  const fetchPost = async () => {
      const ref = collection(db, "locations")
      await getDocs(ref)
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setLocations(newData);                
      })

      const wheel_q = query(ref, where("wheelchair", "==", "This Location has Wheelchair Accesiblity"));
      const park_q = query(ref, where("parking", "==", "This Location has Disability Parking"));

      await getDocs(wheel_q)
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
        setOnlywheel(newData);  
      })
      
      await getDocs(park_q)
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
        setOnlypark(newData);  
      })

  };
  
  
  
  useEffect(()=>{
    fetchPost();  
  }, []);



  return (
    <div className='bg-backgroundC'>
        <h1 className='text-4xl p-24 text-center font-bold italic text-oliveGreen'>
            Accessibility Map for New York City, NY
        </h1>
        
        
        <iframe src="https://www.google.com/maps/embed/v1/view?zoom=10&center=40.7128,-74.0060&key=AIzaSyAkfU18mlMtMx2Tvb6egPt8L9vkcWxOGuY"  className='w-full h-screen' ></iframe>
        



        {locations.map((location) => (
          <div className="location">
              <h2>{location.locationname}</h2>
              <p>{location.locationaddress}</p>
              <p>{location.wheelchair}</p>              
              <p>{location.parking}</p>
              <p>{location.contact}</p>

          </div>
        ))}

        <h1>></h1>
        {onlywheel.map((location) => (
          <div className="location">
              <h2>{location.locationname}</h2>
              <p>{location.locationaddress}</p>
              <p>{location.wheelchair}</p>              
              <p>{location.parking}</p>
              <p>{location.contact}</p>

          </div>
        ))}

        <h1>Only parking Accessibility</h1>
        {onlypark.map((location) => (
          <div className="location">
              <h2>{location.locationname}</h2>
              <p>{location.locationaddress}</p>
              <p>{location.wheelchair}</p>              
              <p>{location.parking}</p>
              <p>{location.contact}</p>

          </div>
        ))}

    </div>
  )
}

// https://www.google.com/maps/d/embed?mid=1DZstpCpXbVqk9JYaeta0vYvyfgLEDBI&hl=en&ehbc=2E312F

export default Map