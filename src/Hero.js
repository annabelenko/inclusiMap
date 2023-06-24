import React from 'react'
import { inclusiMapLogo } from './assets'
import {FaLocationDot} from "react-icons/fa6"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Navigate } from 'react-router-dom';


const options = [
    'New York City'
  ];
const defaultOption = options[0];

function redirect(props){
    
        <Navigate to="/map"/>

    
}

function Hero() {
  return (
    <div className='bg-backgroundC py-24'>
        <div className='text-oliveGreen text-center'>
            <FaLocationDot className='w-48 h-48 flex flex-wrap justify-center mx-auto mb-10' color='50605A'/>
            <h1 className='italic font-bold   text-6xl'>InclusiMap</h1>
            <h3 className='text-2xl'>Transforming Lives One Location At A Time</h3>
        </div>

        <div>
            <p className='w-6/12 flex justify-center mx-auto mt-12 text-lg text-oliveGreen font-bold'>Choose a Location</p>
            <Dropdown className='w-6/12 flex justify-center mx-auto mb-12 mt-2' options={options}  value="Select a Location" onChange={redirect} placeholder="Select an option" />
        </div>
       
    </div>
  )
}

export default Hero