
import React from 'react'
import Home from './home'
import Footer from '@/components/layouts/footer.layout'
import Header from '@/components/layouts/header.layout'
import HotelDetails from './hotel-details'

const App = () => {
  return (
    <div>
        <Header/>
        <HotelDetails/>
        <Footer/>
    </div>
  )
}

export default App