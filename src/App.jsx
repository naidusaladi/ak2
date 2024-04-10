import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Second from './pages/second/Second'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Partnership from './pages/partnership/Partnership'
import Offers from './pages/offers/Offers'
import Testimonials from './pages/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Products from './pages/products/Products'
import Carousel from './components/carousel/Carousel'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Second/>
      <About/>
      <Services/>
      <Partnership/>
      <Carousel/>
      <Offers/>
      <Testimonials/>
      
      <Footer/>
    </div>
  )
}

export default App
