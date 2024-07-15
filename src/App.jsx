import React, { useEffect } from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import BrandShoes from './components/BrandShoes'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <BrandShoes />
    </>
  )
}

export default App
