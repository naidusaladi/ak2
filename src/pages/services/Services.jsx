import React from 'react'
import './Services.css'
import { FiDatabase } from "react-icons/fi";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { FiBatteryCharging } from "react-icons/fi";
import { TbAccessPoint } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className='services-container'>
            <h1 className='services-title'>Making Lives easier than before</h1>
            <div className='services-cards-container'>
                <div className='services-card'>
                    <div className='card-icon'><FiDatabase className='icon'/></div>
                    <div className='card-data'>
                        <h3>Data Safety</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><IoDownloadOutline className='icon'/></div>
                    <div className='card-data'>
                        <h3>Data Safety</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><IoMicOutline className='icon'/></div>
                    <div className='card-data'>
                        <h3>Data Safety</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><FiBatteryCharging className='icon'/></div>
                    <div className='card-data'>
                        <h3>Data Safety</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!</p>
                    </div>
                </div>


                <div className='services-card'>
                    <div className='card-icon'><TbAccessPoint className='icon'/></div>
                    <div className='card-data'>
                        <h3>Data Safety</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><MdSecurity className='icon'/></div>
                    <div className='card-data'>
                        <h3>Data Safety</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!</p>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Services
