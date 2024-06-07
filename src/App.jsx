import { useState } from 'react'

import Navbar from './Component/Navbar'
import Herosection from './Component/Herosection'
import Card from './Component/Card'
import Service from './Component/Service'
import './assets/style/style.css'
import './assets/style/mediaquery.css'
import Footer from './Component/Footer'


function App() {


  return (
    <>
    <Navbar/>
    <Herosection/>
    <Card/>
    <Service/>
    <Footer/>
    </>
  )
}

export default App
