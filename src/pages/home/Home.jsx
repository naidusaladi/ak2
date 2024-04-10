import React from 'react'
import './Home.css'
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
        <div className='home-container'>
            <h2 className='home-text-1'>It's Time <span>for</span> </h2>
            <h3 className='home-text-2'>Smart Living</h3>
            <h4 className='home-text-3'>A system designed for your ease</h4>
            <button className='home-btn'>Get Started <FaAngleRight /></button>
        </div>
      
    </>
  )
}

export default Home
