import React from 'react'
import { inclusiMapLogo } from './assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div>
        <nav className='bg-oliveGreen text-white items-center px-10'>
            <div className='flex flex-wrap items-center'>
                <img src={inclusiMapLogo} className='h-48 w-56 justify-start' />
                <p className='font-bold italic text-3xl tracking-wide justify-start mr-auto'>InclusiMap</p>

                <a href="/" className="text-white text-xl flex items-center transition duration-300 ease-in-out transform hover:scale-110">
                    <p className='justify-end mr-10'>Home</p>
                </a>
                
                <a href="/map" className="text-white text-xl flex items-center transition duration-300 ease-in-out transform hover:scale-110">
                    <p className='justify-end mr-10'>Accesiblity Map NYC</p>
                </a>

                <a href="/submit" className="text-white text-xl flex items-center transition duration-300 ease-in-out transform hover:scale-110">
                    <p className='justify-end mr-10'>Submit an Accessible Location</p>
                </a>

                <a href="/contact" className="text-white text-xl flex items-center transition duration-300 ease-in-out transform hover:scale-110">
                    <p className='justify-end mr-10'> Contact Us</p>
                </a>
            </div>
        </nav>

    </div>
  )
}

export default Navbar