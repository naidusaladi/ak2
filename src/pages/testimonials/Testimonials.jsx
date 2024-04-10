import React from 'react'
import { IoLayersOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
        <div className='testimoninal-container'>
            <div className='testimonial-left'>
                <p className='testimonial-subhedding'>TESTIMONINALS</p>
                <h2 className='testimonial-hedding'>What They Say</h2>
                <p className='testimonial-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex et deleniti fugit laborum necessitatibus tempora recusandae, nemo eum nobis!</p>
                <div className='testimonial-left-card-container'>
                    <div className='testimonial-left-card'>
                        <div className='testimonial-icon'><IoLayersOutline className='testimonial-icon'/></div>
                        <h4 className='testiomonial-counter'>13,846+</h4>
                        <p className='testiomonial-undertext'>Projects Completed</p>
                    </div>

                    <div className='testimonial-left-card'>
                        <div className='testimonial-icon'><BsPeople className='testimonial-icon'/></div>
                        <h4 className="testiomonial-counter">100%</h4>
                        <p className='testiomonial-undertext'>Customer Satisfied</p>
                    </div>
                </div>


            </div>
            <div className='testimonial-right'>
                <img src='src/assets/images/testimonial.png' className='testimonial-img'/>
            </div>
        </div>
      
    </>
  )
}

export default Testimonials
