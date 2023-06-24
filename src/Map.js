import React from 'react'

function Map() {
  return (
    <div className='bg-backgroundC'>
        <h1 className='text-4xl p-24 text-center font-bold italic text-oliveGreen'>
            Accessibility Map for New York City, NY
        </h1>
        <iframe src="https://www.google.com/maps/d/embed?mid=1DZstpCpXbVqk9JYaeta0vYvyfgLEDBI&hl=en&ehbc=2E312F"  className='w-full h-screen' ></iframe>
    </div>
  )
}

export default Map