import React from 'react'
import { ReactDOM } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Footer';
import Map from './Map';
import Submit from './Submit';
import Contact from './Contact';



function App() {
  return (
    <div>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero/>} exact/>
            <Route path="/map" element={<Map/>} exact/>
            <Route path="/submit" element={<Submit/>} exact/>
            <Route path="/contact" element={<Contact/>} exact/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
